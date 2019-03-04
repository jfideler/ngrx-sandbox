import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { template } from 'lodash';

@Injectable()
export class ValidationUtil {

  constructor(
    private translate: TranslateService
  ) {
  }

  hasErrors(control: AbstractControl) {
    const hasErrors = control && control.errors;

    return hasErrors;
  }

  hasErrorsArray(errors: Array<string>) {
    if (Array.isArray(errors)) {
      return true;
    }

    throw new Error('The errors array is required');
  }

  checkRequiredValidation(control: AbstractControl, errors: Array<string>) {
    if (!this.hasErrors(control)) {
      return;
    }

    this.hasErrorsArray(errors);

    if (control.errors.required) {
      const error = this.getTranslationValue('VALIDATION.REQUIRED');
      errors.push(error);
    }
  }

  checkPatternValidation(control: AbstractControl, errors: Array<string>, key) {
    if (!this.hasErrors(control)) {
      return;
    }

    this.hasErrorsArray(errors);

    if (control.errors.pattern) {
      const error = this.getTranslationValue(key);

      errors.push(error);
    }
  }

  checkMaxLength(control: AbstractControl, errors: Array<string>) {
    if (!this.hasErrors(control)) {
      return;
    }

    this.hasErrorsArray(errors);

    if (control.errors.maxlength) {
      const key = 'VALIDATION.MAX_LENGTH.LESS_THAN_X_CHARACTERS';
      const translationText = this.getTranslationValue(key);

      const compiled = template(translationText);
      const error = compiled({
        maxLength: control.errors.maxlength.requiredLength
      });

      errors.push(error);
    }
  }

  checkRange(control: AbstractControl, errors: Array<string>) {
    if (!this.hasErrors(control)) {
      return;
    }

    this.hasErrorsArray(errors);

    if (control.errors.min) {
      const key = 'VALIDATION.RANGE.MIN';
      const translationText = this.getTranslationValue(key);

      const compiled = template(translationText);
      const error = compiled({
        min: control.errors.min.min
      });

      errors.push(error);
    }

    if (control.errors.max) {
      const key = 'VALIDATION.RANGE.MAX';
      const translationText = this.getTranslationValue(key);

      const compiled = template(translationText);
      const error = compiled({
        max: control.errors.max.max
      });

      errors.push(error);
    }
  }

  getTranslationValue(key: string): string {
    let value;

    this.translate.get(key).subscribe(
      message => value = message
    );

    return value;
  }

  /**
   * Validate an input control matches a singular, specific value.
   *
   * @template {any} T The type of the value to validate
   * @param {T} validValue The valid value to allow the validation to pass; everything else will cause validation to fail.
   *
   * @param {string} name The name of the property created on the returned error object.  This name should be present as a top level
   * property of the interface passed in the I template.  It allows us to distinguish different types of errors so we can
   * use this validator on multiple fields in a form.
   *
   * @template I The type of the error interface being returned
   *
   * @returns ValidatorFn
   */
  requiredValue<T, I>(validValue: T, name: string): ValidatorFn {
    return (control: AbstractControl): I => {
      const VALID = null;

      if (control.pristine && control.untouched) {
        return VALID;
      }

      if (control.value === validValue) {
        return VALID;
      }

      // dynamically create the property on the error object
      const validationError = {};
      validationError[name] = {
        value: control.value
      };

      return validationError as I;
    };
  }

}
