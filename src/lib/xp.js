import pb from './pocketbase.js';

/**
 * Ajoute de l'XP au joueur connecté et gère la montée de niveau.
 * Formule seuil : niveaux * 50 + 50
 * Retourne { xpGain, leveledUp, newLevel }
 */
export async function gainXP(xpGain = 20) {
  const userId = pb.authStore.model?.id;
  if (!userId) return { xpGain: 0, leveledUp: false, newLevel: 1 };

  const user = await pb.collection('Utilisateurs').getOne(userId, { requestKey: null });
  let newXp = (user.xp || 0) + xpGain;
  let newNiveau = user.niveaux || 1;
  const oldNiveau = newNiveau;

  let seuil = newNiveau * 50 + 50;
  while (newXp >= seuil) {
    newXp -= seuil;
    newNiveau++;
    seuil = newNiveau * 50 + 50;
  }

  await pb.collection('Utilisateurs').update(userId, { xp: newXp, niveaux: newNiveau });
  return { xpGain, leveledUp: newNiveau > oldNiveau, newLevel: newNiveau };
}
