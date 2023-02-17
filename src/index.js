require("dotenv").config();
const connectToDatabase = require("./config/database");
const { playSong } = require("./spotify");

(async function main() {
  const db = await connectToDatabase();

  const accounts = await db.collection("accounts").find().toArray();

  for (const account of accounts) {
    await playSong(account, db);
  }

  process.exit();
})();
