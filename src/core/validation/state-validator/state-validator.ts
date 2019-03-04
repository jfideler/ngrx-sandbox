import { AbstractControl, ValidatorFn } from '@angular/forms';


import { IIsApprovedStateResult } from './is-approved-state-result.interface';
import { StateEligibility, IStateItem } from '../../state-eligibility';


export class StateValidator {

  meetsStateCriteria(states: Array<IStateItem>): ValidatorFn {
    return (control: AbstractControl): IIsApprovedStateResult => {
      // nothing to validate
      if (control.value === '') {
        return null;
      }

      const stateEligibility = new StateEligibility();
      const isEligible = stateEligibility.isEligible(states, control.value);

      if (isEligible) {
        return null;
      }

      return {
        meetsStateCriteria: {
          invalidState: control.value
        }
      };
    };
  }

}
