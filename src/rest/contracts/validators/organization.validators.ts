import { IsString } from "class-validator";

export class OrganizationCreateValidator {
    @IsString()
    public name: string;
}
