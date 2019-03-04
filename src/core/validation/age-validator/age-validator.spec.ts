import { AbstractControl } from '@angular/forms';

import { IAgeRange } from './age-range.interface';
import { AgeValidator } from './age-validator';
import { IMeetsAgeCriteriaResult } from './meets-age-criteria-result.interface';

describe('AgeValidator', () => {

  let validator: AgeValidator;

  beforeEach(() => {
    validator = new AgeValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('meetsAgeCriteria', () => {

    const currentDate = new Date('3/8/2018 12:01');

    const ageRange: IAgeRange = {
      minAge: 18,
      maxAge: 99
    };

    it('should return null if the control is not dirty/touched', () => {
      // Arrange
      const expected = null;

      const control = {
        dirty: false,
        touched: false
      };

      const meetsAgeCriteriaValidator = validator.meetsAgeCriteria(currentDate, ageRange);

      // Act
      const actual = meetsAgeCriteriaValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return null if the control value is not a date', () => {
      // Arrange
      const expected = null;

      const control = {
        dirty: false,
        touched: false,
        value: 'clearly not a valid date'
      };

      const meetsAgeCriteriaValidator = validator.meetsAgeCriteria(currentDate, ageRange);

      // Act
      const actual = meetsAgeCriteriaValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return null if the age is between the minimum and the maximum allowable ages', () => {
      // Arrange
      const expected = null;

      const control = {
        dirty: true,
        touched: true,
        value: currentDate
      };

      const someValidAges = [ageRange.minAge, 20, 40, 60, ageRange.maxAge];

      someValidAges.forEach((age) => {
        validator = new AgeValidator(); // doing this to reset the spy as there is not a good reset function available :-/

        const calculateAgeSpy = spyOn(validator, 'calculateAge').and.returnValue(age);

        const meetsAgeCriteriaValidator = validator.meetsAgeCriteria(currentDate, ageRange);

        // Act
        const actual = meetsAgeCriteriaValidator(control as AbstractControl);

        // Assert
        expect(calculateAgeSpy).toHaveBeenCalledTimes(1);
        expect(calculateAgeSpy).toHaveBeenCalledWith(currentDate, control.value);
        expect(actual).toEqual(expected, age);
      });
    });

    it('should return meetsAgeCriteria error if the age outside the minimum and the maximum allowable ages', () => {
      // Arrange
      const control = {
        dirty: true,
        touched: true,
        value: currentDate
      };

      const someInvalidAges = [ageRange.minAge - 1, ageRange.maxAge + 1];

      someInvalidAges.forEach((age) => {
        validator = new AgeValidator(); // doing this to reset the spy as there is not a good reset function available :-/

        const expected: IMeetsAgeCriteriaResult = {
          meetsAgeCriteria: {
            minAge: ageRange.minAge,
            maxAge: ageRange.maxAge,
            age: age
          }
        };

        const calculateAgeSpy = spyOn(validator, 'calculateAge').and.returnValue(age);

        const meetsAgeCriteriaValidator = validator.meetsAgeCriteria(currentDate, ageRange);

        // Act
        const actual = meetsAgeCriteriaValidator(control as AbstractControl);

        // Assert
        expect(calculateAgeSpy).toHaveBeenCalledTimes(1);
        expect(calculateAgeSpy).toHaveBeenCalledWith(currentDate, control.value);
        expect(actual).toEqual(expected, age);
      });

    });

  });

  describe('calculateAge', () => {

    const currentDate = new Date('3/8/2018 12:01');

    it('should return the age', () => {
      // Arrange
      const expected = 18;

      const birthday = '1/1/2000';

      // Act
      const actual = validator.calculateAge(currentDate, birthday);

      // Assert
      expect(actual).toEqual(expected);
    });

  });

});
