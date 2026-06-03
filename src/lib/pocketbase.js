import PocketBase from 'pocketbase';

// TODO: remplacer l'URL par celle de ton serveur PocketBase en production
const pb = new PocketBase('http://127.0.0.1:8090');

export default pb;
