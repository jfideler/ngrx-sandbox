import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { ValidationUtil } from './validation-util';

describe('ValidationUtil', () => {

  let translateService: TranslateService = null;
  let validationUtil: ValidationUtil;

  beforeEach(() => {
    translateService = null; // TODO stub one out when we need this for other tests
    validationUtil = new ValidationUtil(translateService);
  });

  interface FoobarError {
    foobar: {
      value: any
    };
  }

  describe('requiredValue', () => {

    it('should return null if the control is pristine and untouched', () => {
      // Arrange
      const expected = null;

      const control = {
        pristine: true,
        untouched: true
      } as AbstractControl;

      const validator = validationUtil.requiredValue<number, FoobarError>(6, 'foobar');

      // Act
      const actual = validator(control);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return null if the control is a valid value', () => {
      const expected = null;
      const value = 42;

      const control = {
        pristine: false,
        value: value
      } as AbstractControl;

      const validator = validationUtil.requiredValue<number, FoobarError>(value, 'foobar');

      // Act
      const actual = validator(control);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return an error object shaped like FoobarError if the control is an invalid value', () => {
      // Arrange
      const invalidValue = 13;
      const validValue = 42;

      const expected: FoobarError = {
        foobar: {
          value: invalidValue
        }
      };

      const control = {
        pristine: false,
        value: invalidValue
      } as AbstractControl;

      const validator = validationUtil.requiredValue<number, FoobarError>(validValue, 'foobar');

      // Act
      const actual = validator(control);

      // Assert
      expect(actual).toEqual(expected);
    });

  });

});
