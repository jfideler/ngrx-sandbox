import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as Moment from 'moment';

export class PastDateValidator {

  mustBePastDate(currentDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      if (control.value === '') {
        // nothing to validate yet; let the required field validator handle it
        return null;
      }

      const isAPastDate = this.isAPastDate(currentDate, control.value);

      if (isAPastDate === true) {
        return null; // passes validation
      }

      return { // fails validation
        mustBePastDate: {
          currentDate: currentDate,
          invalidDate: control.value
        }
      };
    };
  }

  mustBePastMonthYear(currentDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      if (control.value === '') {
        // nothing to validate yet; let the required field validator handle it
        return null;
      }

      const fixedDate = Moment(control.value, 'MM/YYYY');
      const isAPastDate = this.isAPastDate(currentDate, fixedDate.format('MM/DD/YYYY'));

      if (isAPastDate === true) {
        return null; // passes validation
      }

      return { // fails validation
        mustBePastMonthYear: {
          currentDate: currentDate,
          invalidDate: control.value
        }
      };
    };
  }

  isAPastDate(currentDate: Date, controlValue: string): boolean {
    // using startOf('day') to just compare just the dates, ignoring time
    const controlDate = new Date(controlValue);

    const currentMoment = Moment(currentDate).startOf('day');
    const controlMoment = Moment(controlDate).startOf('day');

    return controlMoment <= currentMoment;
  }

}
