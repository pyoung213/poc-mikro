import { OrganizationEntity } from "./organization.entity";
import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { BaseEntity } from "./base.entity";

@Entity()
export class UserEntity extends BaseEntity {
    @Property()
    name!: string;

    @ManyToOne()
    organization?: OrganizationEntity;
}
