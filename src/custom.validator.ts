import {ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {Injectable} from '@nestjs/common';

@ValidatorConstraint({ name: 'isValidClient' })
@Injectable() // this is needed in order to the class be injected into the module
export class IsValidClient implements ValidatorConstraintInterface {
    validate(client: string) {
        return client.includes('YYY');
    }
}
