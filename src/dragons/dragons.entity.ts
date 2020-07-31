import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "dragons" })
export class Dragons {
    @PrimaryColumn()
    id: number;
    @Column()
    name: string;
}