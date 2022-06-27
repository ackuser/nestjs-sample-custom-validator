import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: false })
@Injectable()
export class IsValidClientConstraint implements ValidatorConstraintInterface {
  validate(client: any, args: ValidationArguments) {
    console.log(client)
    return client.includes('ZZZ');
  }
}

export function IsValidClient(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidClientConstraint,
    });
  };
}
