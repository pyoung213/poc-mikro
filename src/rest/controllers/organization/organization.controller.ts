import { Get, Post } from "@tsed/schema";
import { Controller } from "@tsed/di";
import { BodyParams } from "@tsed/common";
import { OrganizationService } from "./organization.service";
import { OrganizationEntity } from "../../../database/entities/organization.entity";
import { OrganizationCreateValidator } from "../../contracts/validators/organization.validators";

@Controller("/organizations")
export class OrganizationController {
    constructor(private organizationService: OrganizationService) {}

    @Post()
    async create(@BodyParams() body: OrganizationCreateValidator): Promise<OrganizationEntity> {
        return this.organizationService.create(body);
    }

    @Get()
    findAll(): Promise<OrganizationEntity[]> {
        return this.organizationService.findAll();
    }
}
