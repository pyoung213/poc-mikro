import { Service } from "typedi";
import { OrganizationEntity } from "../../../database/entities/organization.entity";
import { OrganizationRepository } from "../../../database/repositories/organization.repository";
import { UserRepository } from "../../../database/repositories/user.repository";
import { OrganizationCreateValidator } from "../../contracts/validators/organization.validators";

@Service()
export class OrganizationService {
    constructor(private organizationRepository: OrganizationRepository, private userRepository: UserRepository) {}

    async findAll(): Promise<OrganizationEntity[]> {
        return this.organizationRepository.findAll();
    }

    async create(input: OrganizationCreateValidator): Promise<OrganizationEntity> {
        const org = this.organizationRepository.create(input);
        const user = this.userRepository.create({
            name: "Lucky Dog",
            organization: org
        });

        await this.organizationRepository.persistAndFlush([org, user]);

        return org;
    }
}
