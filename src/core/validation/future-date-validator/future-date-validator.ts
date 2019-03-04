import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as Moment from 'moment';

export class FutureDateValidator {

  mustBeFutureDate(currentDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      if (control.value === '') {
        // nothing to validate yet; let the required field validator handle it
        return null;
      }

      const isAFutureDate = this.isFutureDate(currentDate, control.value);

      if (isAFutureDate === true) {
        // passes validation
        return null;
      }

      // fails validation
      return {
        mustBeFutureDate: {
          currentDate: currentDate,
          invalidDate: control.value
        }
      };
    };
  }

  isFutureDate(currentDate: Date, controlValue: string): boolean {
    // using startOf('day') to just compare just the dates, ignoring time
    const controlDate = new Date(controlValue);

    const currentMoment = Moment(currentDate).startOf('day');
    const controlMoment = Moment(controlDate).startOf('day');

    return controlMoment > currentMoment;
  }

}
