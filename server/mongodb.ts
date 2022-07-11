import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@drinkmenu.v5ol4.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

export const run = () => {
  client.connect(async (err) => {
    const collection = client.db('drink-page').collection('cocktail');
    const coctail = await collection.findOne({ name: 'Test' });
    console.log(coctail);
    client.close();
  });
};
