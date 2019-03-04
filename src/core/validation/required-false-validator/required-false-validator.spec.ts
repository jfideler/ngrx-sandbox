import { AbstractControl } from '@angular/forms';
import { RequiredFalseValidator } from '@products/core/validation/required-false-validator/required-false-validator';


describe('RequiredFalseValidator', () => {

  let validator: RequiredFalseValidator;

  beforeEach(() => {
    validator = new RequiredFalseValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('isFalse', () => {
    it('should return null when null is passed in', () => {
      // Arrange
      const control = {
        value: null
      };

      const requiredFalseValidator = validator.isFalse();

      const expected = null;

      // Act
      const actual = requiredFalseValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return null when false is passed in', () => {
      // Arrange
      const control = {
        value: false
      };

      const requiredFalseValidator = validator.isFalse();

      const expected = null;

      // Act
      const actual = requiredFalseValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return the control when true is passed in to validate', () => {
      // Arrange
      const control = {
        value: true
      };

      const requiredFalseValidator = validator.isFalse();

      const expected = {
        mustBeFalse: {
          result: control.value
        }
      };

      // Act
      const actual = requiredFalseValidator(control as AbstractControl);

      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
