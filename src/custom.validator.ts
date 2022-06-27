import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsValidClient(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isValidClient',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return value.includes('asadsdsasad') === 'string'
                },
            },
        });
    };
}
