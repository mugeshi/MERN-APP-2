import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

// Create MongoDB Memory Server instance
const mongodb = new MongoMemoryServer({
  instance: {
    dbName: 'your-database-name',
  },
});

// Increase the default max listeners globally
process.setMaxListeners(15);

async function connect() {
  mongoose.set('strict', true); // Use 'strict' instead of 'strictquery'
  try {
    // Start MongoDB Memory Server
    await mongodb.start();

    // Get the URI
    const getUri = await mongodb.getUri();

    // Connect to MongoDB using the obtained URI
    const db = await mongoose.connect(getUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected");
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

// Handle MongoDB Memory Server lifecycle
process.on('SIGINT', async () => {
  try {
    await mongodb.stop();
    console.log("MongoDB Memory Server stopped");
    process.exit();
  } catch (error) {
    console.error("Error stopping MongoDB Memory Server:", error);
    process.exit(1);
  }
});

export default connect;
