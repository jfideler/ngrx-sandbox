import { AbstractControl, ValidatorFn } from '@angular/forms';

export class RequiredFalseValidator {

  isFalse(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value === null) {
        // nothing to validate
        return null;
      }

      if (control.value === false) {
        // passes
        return null;
      }

      return {
        // fails
        mustBeFalse: {
          result: control.value
        }
      };
    };
  }
}
