import PocketBase from 'pocketbase';

const url = import.meta.env.PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

if (!import.meta.env.PUBLIC_POCKETBASE_URL) {
  console.warn('[pocketbase] PUBLIC_POCKETBASE_URL non définie — utilisation du fallback local.');
}

const pb = new PocketBase(url);

export default pb;
