import { Sequelize } from 'sequelize';

// Connect to SQLite database
export const db_sqlite = new Sequelize({
  dialect: 'sqlite',
  logging: false,
  define: {
    timestamps: false,
  },
  storage: 'db.sqlite',
});

export const dbName: string = 'termProj';