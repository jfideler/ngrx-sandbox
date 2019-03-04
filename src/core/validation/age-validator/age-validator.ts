import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as Moment from 'moment';

import { IMeetsAgeCriteriaResult } from './meets-age-criteria-result.interface';
import { IAgeRange } from './age-range.interface';

export class AgeValidator {

  meetsAgeCriteria(currentDate: Date, ageRange: IAgeRange): ValidatorFn {
    return (control: AbstractControl): IMeetsAgeCriteriaResult => {

      // control not dirty/touched; nothing to validate
      if (control.dirty === false && control.touched === false) {
        return null;
      }

      const d = Date.parse(control.value);
      if (isNaN(d)) {
        // this is not a valid date format; allow the patterm validator to handle this
        return null;
      }

      const age = this.calculateAge(currentDate, control.value);

      if (age >= ageRange.minAge && age <= ageRange.maxAge) {
        return null;
      }

      return {
        meetsAgeCriteria: {
          minAge: ageRange.minAge,
          maxAge: ageRange.maxAge,
          age: age
        }
      };
    };
  }

  calculateAge(currentDate: Date, birthday: string): number {
    const currentMoment = Moment(currentDate);

    const birthdayDate = new Date(birthday);
    const birthdayMoment = Moment(birthdayDate);

    const age = currentMoment.diff(birthdayMoment, 'years');

    return age;
  }

}
