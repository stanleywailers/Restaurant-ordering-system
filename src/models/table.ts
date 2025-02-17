import { DataTypes } from "sequelize";
import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({ tableName: "tables", timestamps: false })
export default class TableModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.INTEGER)
  id?: number;

  @Column(DataTypes.STRING)
  name!: string;

  @Column({type:DataTypes.BOOLEAN,field: "isAvailable"} )
  isAvailable!: boolean;
}