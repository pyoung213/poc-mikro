import { Field, ObjectType } from "type-graphql";
import { UserSchema } from "./user.schema";

@ObjectType()
export class OrganizationSchema {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field(() => [UserSchema], { nullable: true })
    users?: UserSchema[];

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;
}
