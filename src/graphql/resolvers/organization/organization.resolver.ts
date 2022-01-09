import { OrganizationFindOneValidator } from "./../../contracts/validators/organization.validators";
import { OrganizationCreateValidator } from "../../contracts/validators/organization.validators";
import { Args, Arg, Info, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { GraphQLResolveInfo } from "graphql";
import fieldsToRelations from "graphql-fields-to-relations";
import { OrganizationSchema } from "../../contracts/schema/organization.schema";
import { OrganizationService } from "./organization.service";

@Service()
@Resolver()
export class OrganizationResolver {
    constructor(private organizationService: OrganizationService) {}

    @Query(() => [OrganizationSchema])
    async organizationsFindAll(@Info() info: GraphQLResolveInfo): Promise<OrganizationSchema[]> {
        const relationPaths = fieldsToRelations(info);

        return this.organizationService.findAll(relationPaths);
    }

    @Query(() => OrganizationSchema, { nullable: true })
    async organizationsFindOne(
        @Args() input: OrganizationFindOneValidator,
        @Info() info: GraphQLResolveInfo
    ): Promise<OrganizationSchema | null> {
        const relationPaths = fieldsToRelations(info);

        return this.organizationService.findOne(input.id, relationPaths);
    }

    @Mutation(() => OrganizationSchema)
    async organizationsCreate(@Arg("input") input: OrganizationCreateValidator): Promise<OrganizationSchema> {
        return this.organizationService.create(input);
    }
}
