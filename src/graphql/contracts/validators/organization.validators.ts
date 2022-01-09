import { IsMongoId, IsString } from "class-validator";
import { Field, InputType, ArgsType } from "type-graphql";

@InputType()
export class OrganizationCreateValidator {
    @Field()
    @IsString()
    public name: string;
}

@ArgsType()
export class OrganizationFindOneValidator {
    @Field()
    @IsMongoId()
    public id: string;
}
