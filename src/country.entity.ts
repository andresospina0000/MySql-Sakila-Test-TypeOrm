import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('country')
export class Country {

    @PrimaryColumn()
    country_id: number;

    @Column()
    country: string;

    @Column()
    last_update: Date;
}