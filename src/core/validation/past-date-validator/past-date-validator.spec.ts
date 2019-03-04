import { AbstractControl } from '@angular/forms';

import { PastDateValidator } from './past-date-validator';

describe('past-date-validator', () => {

  let validator: PastDateValidator;

  beforeEach(() => {
    validator = new PastDateValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('mustBePastDate', () => {

    const currentDate = new Date('3/2/2018 15:01');

    it('control should not have an errors property defined if the control is empty (nothing to validate)', () => {
      // Arrange
      const isAPastDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(true);

      const control = {
        value: ''
      };

      const mustBePastDateValidator = validator.mustBePastDate(currentDate);

      const expected = null;

      // Act
      const actual = mustBePastDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isAPastDateSpy).toHaveBeenCalledTimes(0);

    });

    it('control should not have an errors property defined if the control contains a past date (passes validation)', () => {
      // Arrange
      const isAPastDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(true);

      const control = {
        value: '3/1/2018'
      };

      const mustBePastDateValidator = validator.mustBePastDate(currentDate);

      const expected = null;

      // Act
      const actual = mustBePastDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isAPastDateSpy).toHaveBeenCalledTimes(1);
      expect(isAPastDateSpy).toHaveBeenCalledWith(currentDate, control.value);

    });

    it('control should have an errors property defined if the control does not contain a past date (fails validation)', () => {
      // Arrange
      const isAPastDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(false);

      const control = {
        value: '3/3/2018'
      };

      const mustBePastDateValidator = validator.mustBePastDate(currentDate);

      const expected = {
        mustBePastDate: {
          currentDate: currentDate,
          invalidDate : control.value
        }
      };

      // Act
      const actual = mustBePastDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isAPastDateSpy).toHaveBeenCalledTimes(1);
      expect(isAPastDateSpy).toHaveBeenCalledWith(currentDate, control.value);
    });

    it('control should not have an errors property defined if the control date and current are the same (passes validation)', () => {
      // Arrange
      const isFutureDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(true);

      const control = {
        value: '3/2/2018'
      };

      const mustBePastDateValidator = validator.mustBePastDate(currentDate);

      const expected = null;

      // Act
      const actual = mustBePastDateValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isFutureDateSpy).toHaveBeenCalledTimes(1);
      expect(isFutureDateSpy).toHaveBeenCalledWith(currentDate, control.value);
    });

  });

  describe('mustBePastMonthYear', () => {

    const currentDate = new Date('3/2/2018 15:01');
    let mustBePastMonthYearValidator;

    beforeEach(() => {
      mustBePastMonthYearValidator = validator.mustBePastMonthYear(currentDate);
    });

    it('control should not have an errors property defined if the control is empty (nothing to validate)', () => {
      // Arrange
      const isAPastDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(true);

      const control = {
        value: ''
      };

      const expected = null;

      // Act
      const actual = mustBePastMonthYearValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isAPastDateSpy).toHaveBeenCalledTimes(0);
    });

    it('control should not have an errors property defined if the control contains a past date (passes validation)', () => {
      // Arrange
      const isAPastDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(true);
      const expectedControlValue = '03/01/2018';

      const control = {
        value: '3/2018'
      };

      const expected = null;

      // Act
      const actual = mustBePastMonthYearValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isAPastDateSpy).toHaveBeenCalledTimes(1);
      expect(isAPastDateSpy).toHaveBeenCalledWith(currentDate, expectedControlValue);
    });

    it('control should have an errors property defined if the control does not contain a past date (fails validation)', () => {
      // Arrange
      const isAPastDateSpy = spyOn(validator, 'isAPastDate').and.returnValue(false);
      const expectedControlValue = '03/01/2018';

      const control = {
        value: '3/2018'
      };

      const expected = {
        mustBePastMonthYear: {
          currentDate: currentDate,
          invalidDate : control.value
        }
      };

      // Act
      const actual = mustBePastMonthYearValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
      expect(isAPastDateSpy).toHaveBeenCalledTimes(1);
      expect(isAPastDateSpy).toHaveBeenCalledWith(currentDate, expectedControlValue);
    });

  });

  describe('isAPastDate', () => {

    const currentDate = new Date('2018-03-02 14:21');

    it('should return true if the date is in the past', () => {
      // Arrange
      const expected = true;

      const testDate = '3/1/2018 11:52';

      // Act
      const actual = validator.isAPastDate(currentDate, testDate);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return true if the dates are equal; this validator counts today as the past', () => {
      // Arrange
      const expected = true;

      const testDate = '3/2/2018 11:52';

      // Act
      const actual = validator.isAPastDate(currentDate, testDate);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if the date is in the future', () => {
      // Arrange
      const expected = false;

      const testDate = '3/4/2018 11:52';

      // Act
      const actual = validator.isAPastDate(currentDate, testDate);

      // Assert
      expect(actual).toEqual(expected);
    });

  });

});
