import { Field, ObjectType } from "type-graphql";
import { OrganizationSchema } from "./organization.schema";

@ObjectType()
export class UserSchema {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field(() => OrganizationSchema, { nullable: true })
    organization?: OrganizationSchema;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;
}
