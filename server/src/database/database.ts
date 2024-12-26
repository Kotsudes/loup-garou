import Database from 'better-sqlite3';

const db = new Database('src/database/user.db', { verbose: console.log });

// Activer le mode WAL
db.pragma('journal_mode = WAL');

const initializeDatabase = () => {
    // Création des tables
    const userTable = db.prepare("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, access_token TEXT NOT NULL)");
    userTable.run();

};

export { db, initializeDatabase };

