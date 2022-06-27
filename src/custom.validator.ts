import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsValidClient' })
@Injectable() // this is needed in order to the class be injected into the module
export class IsValidClientConstraint implements ValidatorConstraintInterface {
    validate(client: any, args: ValidationArguments) {
        console.log("IsValidClientConstraint")
        console.log(client, args)
        return client.includes('YYY');
    }
}

export function IsValidClient(
    validationOptions?: ValidationOptions,
) {
    console.log("IsValidClient")
    return function (object: any, propertyName: string) {
        console.log(object, propertyName)
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [propertyName],
            validator: IsValidClientConstraint,
        });
    };
}

export function IsValidClient1(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isValidClient1',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(client: any, args: ValidationArguments) {
                    console.log(client, args)
                    const [relatedPropertyName] = args.constraints;
                    console.log("isValidClient1")
                    return client.includes('YYY');
                },
            },
        });
    };
}


@ValidatorConstraint({ async: false })
@Injectable()
export class IsValidClient2Constraint implements ValidatorConstraintInterface {
  validate(client: any, args: ValidationArguments) {
    return client.includes('YYY');
  }
}

export function IsValidClient3(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidClient2Constraint,
    });
  };
}

@ValidatorConstraint({ name: 'customValid', async: true })
@Injectable()
export class CustomValid implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return text.length > 10 && text.length < 20; // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Text ($value) is too short or too long!';
  }
}
