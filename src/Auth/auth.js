import { Account,Client } from "appwrite";
const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('6763dd91002728840223');
export const account = new Account(client);
export {ID} from 'appwrite'