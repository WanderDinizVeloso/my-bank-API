const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DB_SERVER = new MongoMemoryServer();

const URL = await DB_SERVER.getUri()

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  if (!connection) {
    connection = (await MongoClient.connect(
      URL,
      OPTIONS,
    ))
  }

  return connection;
};
