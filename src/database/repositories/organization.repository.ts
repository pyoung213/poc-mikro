import { Repository } from "@mikro-orm/core";
import { EntityRepository, MongoEntityManager } from "@mikro-orm/mongodb";
import { OrganizationEntity } from "../entities/organization.entity";

@Repository(OrganizationEntity)
export class OrganizationRepository extends EntityRepository<OrganizationEntity> {
    constructor(em: MongoEntityManager) {
        super(em, OrganizationEntity);
    }
}
