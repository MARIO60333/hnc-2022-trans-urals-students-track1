const { MongoClient } = require("mongodb");

function getUserCodeId(username) {
  const client = new MongoClient(
    process.env.MONGO_URL || "mongodb://0.0.0.0:27017"
  );

  async function run(username) {
    try {
      const db = client.db("baseUser");
      const users = db.collection("users");

      const user = await users.findOne({
        username: username,
      });

      if (user != null) {
        
      }
    } catch {
    } finally {
    }
  }
}
