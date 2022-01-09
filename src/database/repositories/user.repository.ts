import { Repository } from "@mikro-orm/core";
import { EntityRepository, MongoEntityManager } from "@mikro-orm/mongodb";
import { UserEntity } from "../entities/user.entity";

@Repository(UserEntity)
export class UserRepository extends EntityRepository<UserEntity> {
    constructor(em: MongoEntityManager) {
        super(em, UserEntity);
    }
}
