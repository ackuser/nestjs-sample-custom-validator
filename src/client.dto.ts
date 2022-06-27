import { Validate } from "class-validator";
import { IsValidClient, IsValidClient1, IsValidClient3 } from "./custom.validator";
export class ClientDTO {
  @IsValidClient3({ message: 'Text must be longer than the title' })
  // @Validate(CustomTextLength, {
  //   message: 'Title is too short or long!',
  // })
  client: string;

  // constructor(client: string){
  //     this.client= client;
  // }
}
