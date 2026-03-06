import { Model, DataTypes } from 'sequelize';
import { db_sqlite } from '../../config/db';

class User extends Model {
  declare id: number;
  declare name: string;
  declare preferredName: string | null;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['admin', 'user']
    }
  },
  {
    tableName: 'Users',
    timestamps: false,
    sequelize: db_sqlite, // passing the `sequelize` instance is required
  },
);

export default User;