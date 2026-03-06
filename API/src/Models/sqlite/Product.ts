import { Model, DataTypes } from 'sequelize';
import { db_sqlite } from '../../config/db';

class Product extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare stock: number;
  declare description: string | null;
}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: DataTypes.STRING,
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
    sequelize: db_sqlite
  }
);

export default Product;