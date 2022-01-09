import { OrganizationCreateValidator } from "../../contracts/validators/organization.validators";
import { Service } from "typedi";
import { OrganizationRepository } from "../../../database/repositories/organization.repository";
import { OrganizationSchema } from "../../contracts/schema/organization.schema";
import { UserRepository } from "../../../database/repositories/user.repository";

@Service()
export class OrganizationService {
    constructor(private organizationRepository: OrganizationRepository, private userRepository: UserRepository) {}

    async findAll(relationPaths: string[]): Promise<OrganizationSchema[]> {
        return this.organizationRepository.findAll(relationPaths);
    }

    async findOne(id: string, relationPaths: string[]): Promise<OrganizationSchema | null> {
        return this.organizationRepository.findOne({ id }, relationPaths);
    }

    async create(input: OrganizationCreateValidator): Promise<OrganizationSchema> {
        const org = this.organizationRepository.create(input);
        const user = this.userRepository.create({
            name: "Lucky Dog",
            organization: org
        });

        await this.organizationRepository.persistAndFlush([org, user]);

        return org;
    }
}
