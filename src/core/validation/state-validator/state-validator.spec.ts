
import { async, TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';


import { IIsApprovedStateResult, } from './is-approved-state-result.interface';
import { StateValidator } from './state-validator';
import { IStateItem } from '../../state-eligibility';

const statesTestData: Array<IStateItem> =
  [
    {
      'name': 'Alabama',
      'abbreviation': 'AL',
      'isEligible': true
    },
    {
      'name': 'Alaska',
      'abbreviation': 'AK',
      'isEligible': true
    },
    {
      'name': 'Arizona',
      'abbreviation': 'AZ',
      'isEligible': false
    },
    {
      'name': 'Arkansas',
      'abbreviation': 'AR',
      'isEligible': false
    },
    {
      'name': 'California',
      'abbreviation': 'CA',
      'isEligible': true
    }
  ];

describe('StateValidator', () => {

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({})
      .compileComponents();
  }));

  describe('mustBeApprovedState', () => {

    it('should return null if the state is eligible', () => {
      // Arrange
      const expected = null;

      const eligibleStates = getEligibleStates(statesTestData);

      eligibleStates.forEach((eligibleState) => {
        const validator = new StateValidator();

        const control = {
          value: eligibleState.abbreviation
        };

        const approvedValidator = validator.meetsStateCriteria(statesTestData);

        // Act
        const actual = approvedValidator(control as AbstractControl);

        // Assert
        expect(actual).toEqual(expected);
      });

    });

    it('should return invalidState if the state is ineligible', () => {
      // Arrange
      const ineligibleStates = getIneligibleStates(statesTestData);

      ineligibleStates.forEach((ineligibleState) => {
        const validator = new StateValidator();

        const control = {
          value: ineligibleState.abbreviation
        };

        const approvedValidator = validator.meetsStateCriteria(statesTestData);

        const expected: IIsApprovedStateResult = {
          meetsStateCriteria: {
            invalidState: ineligibleState.abbreviation
          }
        };

        // Act
        const actual = approvedValidator(control as AbstractControl);

        // Assert
        expect(actual).toEqual(expected);
      });

    });

  });

  function getEligibleStates(states: Array<IStateItem>): Array<IStateItem> {
    const eligibleStates = states.filter(state => state.isEligible === true);

    return eligibleStates;
  }

  function getIneligibleStates(states: Array<IStateItem>): Array<IStateItem> {
    const ineligibleStates = states.filter(state => state.isEligible === false);

    return ineligibleStates;
  }

});
