import { Validate } from "class-validator";
import { IsValidClient } from "./custom.validator";
export class ClientDTO {
    @IsValidClient()
    client: string;
}
