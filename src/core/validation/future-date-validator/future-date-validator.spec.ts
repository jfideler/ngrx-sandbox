import { AbstractControl } from '@angular/forms';

import { FutureDateValidator } from './future-date-validator';

describe('future-date-validator', () => {

  let validator: FutureDateValidator;

  beforeEach(() => {
    validator = new FutureDateValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('mustBeFutureDate', () => {

    const currentDate = new Date('3/2/2018 15:01');

    it('control should not have an errors property defined if the control is empty (nothing to validate)', () => {
      // Arrange
      const isFutureDateSpy = spyOn(validator, 'isFutureDate').and.returnValue(true);

      const control = {
        value: ''
      };

      const mustBeFutureDateValidator = validator.mustBeFutureDate(currentDate);

      const expected = null;

      // Act
      const actual = mustBeFutureDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isFutureDateSpy).toHaveBeenCalledTimes(0);

    });

    it('control should not have an errors property defined if the control contains a future date (passes validation)', () => {
      // Arrange
      const isFutureDateSpy = spyOn(validator, 'isFutureDate').and.returnValue(true);

      const control = {
        value: '3/3/2018'
      };

      const mustBeFutureDateValidator = validator.mustBeFutureDate(currentDate);

      const expected = null;

      // Act
      const actual = mustBeFutureDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isFutureDateSpy).toHaveBeenCalledTimes(1);
      expect(isFutureDateSpy).toHaveBeenCalledWith(currentDate, control.value);

    });

    it('control should have an errors property defined if the control does not contain a future date (fails validation)', () => {
      // Arrange
      const isFutureDateSpy = spyOn(validator, 'isFutureDate').and.returnValue(false);

      const control = {
        value: '3/1/2018'
      };

      const mustBeFutureDateValidator = validator.mustBeFutureDate(currentDate);

      const expected = {
        mustBeFutureDate: {
          currentDate: currentDate,
          invalidDate: control.value
        }
      };

      // Act
      const actual = mustBeFutureDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isFutureDateSpy).toHaveBeenCalledTimes(1);
      expect(isFutureDateSpy).toHaveBeenCalledWith(currentDate, control.value);
    });

    it('control should have an errors property defined if the control date and current are the same (fails validation)', () => {
      // Arrange
      const isFutureDateSpy = spyOn(validator, 'isFutureDate').and.returnValue(false);

      const control = {
        value: '3/2/2018'
      };

      const mustBeFutureDateValidator = validator.mustBeFutureDate(currentDate);

      const expected = {
        mustBeFutureDate: {
          currentDate: currentDate,
          invalidDate: control.value
        }
      };

      // Act
      const actual = mustBeFutureDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isFutureDateSpy).toHaveBeenCalledTimes(1);
      expect(isFutureDateSpy).toHaveBeenCalledWith(currentDate, control.value);
    });

  });

  describe('isFutureDate', () => {

    const currentDate = new Date('2018-03-02 14:21');

    it('should return false if the date is in the past', () => {
      // Arrange
      const expected = false;

      const testDate = '3/1/2018 11:52';

      // Act
      const actual = validator.isFutureDate(currentDate, testDate);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if the dates are equal', () => {
      // Arrange
      const expected = false;

      const testDate = '3/2/2018 11:52';

      // Act
      const actual = validator.isFutureDate(currentDate, testDate);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return true if the date is in the future', () => {
      // Arrange
      const expected = true;

      const testDate = '3/4/2018 11:52';

      // Act
      const actual = validator.isFutureDate(currentDate, testDate);

      // Assert
      expect(actual).toEqual(expected);
    });

  });

});
