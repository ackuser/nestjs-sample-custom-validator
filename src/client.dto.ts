import { Validate } from "class-validator";
import { IsValidClient, IsValidClientConstraint } from "./custom.validator";

export class ClientDTO {

  // @IsValidClient()
  @Validate(IsValidClientConstraint)
  client: string;

}
