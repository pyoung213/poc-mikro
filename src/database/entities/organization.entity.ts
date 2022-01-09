import { Entity, OneToMany, Property, Unique } from "@mikro-orm/core";
import { BaseEntity } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity()
export class OrganizationEntity extends BaseEntity {
    @Unique()
    @Property()
    name!: string;

    @OneToMany(() => UserEntity, (user) => user.organization)
    users?: UserEntity[];
}
