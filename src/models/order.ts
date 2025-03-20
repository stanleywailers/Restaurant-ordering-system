import { DataTypes } from "sequelize";
import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import OrderItem from "./orderItem";
import TableModel from "./table";
import User from "./user";

@Table(
    { tableName: "orders",
        timestamps: true
})
export default class Order extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataTypes.INTEGER)
    id?: number;

    @ForeignKey(() => User)
    @Column(DataTypes.INTEGER)
    user_id?: number;

    @ForeignKey(() => TableModel)
    @Column(DataTypes.INTEGER)
    table_id?: number;

    @Column(DataTypes.FLOAT)
    total_amount?: number;

    @Column(DataTypes.FLOAT)
    subtotal?: number;

    @Column(DataTypes.FLOAT)
    tip?: number;

    @Column(DataTypes.STRING)
    status?: string;

    @Column(DataTypes.STRING)
    customer_name?: string;

    @Column(DataTypes.TEXT)
    notes?: string;

    @BelongsTo(() => User)
    user?: User;

    @BelongsTo(() => TableModel)
    table?: TableModel;

    @HasMany(() => OrderItem)
    order_items?: OrderItem[];
}
