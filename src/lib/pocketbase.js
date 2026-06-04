import PocketBase from 'pocketbase';

const url = import.meta.env.PUBLIC_POCKETBASE_URL;

if (!url) {
  throw new Error(
    '[pocketbase] PUBLIC_POCKETBASE_URL est undefined.\n' +
    'Crée un fichier .env à la racine du projet avec :\n' +
    'PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090'
  );
}

const pb = new PocketBase(url);

export default pb;
