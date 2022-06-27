import { IsValidClient } from "./custom.validator";

export class ClientDTO {

  @IsValidClient({ message: 'Text must be longer than the title' })
  client: string;

}
