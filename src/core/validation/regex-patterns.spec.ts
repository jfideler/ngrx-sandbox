import * as regexPattern from './regex-patterns';

describe('regex-patterns', () => {

  describe('ACCOUNT_NUMBER_PATTERN', () => {

    it('should export the ACCOUNT_NUMBER_PATTERN', () => {
      // Arrange
      const expected = /^[0-9]{1,17}$/;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid account number', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('123456789');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid short account number', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('9');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid long account number', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('12345678987654321');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an account number over seventeen digits in length', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('123456789876543219');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an account number under 1 digit in length', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an account number with alpha characters', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('123abc');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an account number with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ACCOUNT_NUMBER_PATTERN.test('123.456');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('ALPHANUMERIC_PATTERN', () => {

    it('should export the ALPHANUMERIC_PATTERN', () => {
      // Arrange
      const expected = /^[A-Za-z0-9]*$/;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a numeric string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('8675309');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match an alpha string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('qwerty');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match an alpha string with caps and lowercase', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('qwertyASDF');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a string with alpha and numeric characters', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('QWERTY123asdf');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a long string with alpha and numeric characters', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('QWERTYUIOPasdfghjklzxcvbnm1234567890poiuytrewqlkjhgfdsamnbvcxz');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('Now is the time for all good men to come to the aid of their country');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ALPHANUMERIC_PATTERN.test('http://www.google.com');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('CHARACTERS_ONLY_PATTERN', () => {

    it('should export the CHARACTERS_ONLY_PATTERN', () => {
      // Arrange
      const expected = /^[a-zA-Z]*$/;

      // Act
      const actual = regexPattern.CHARACTERS_ONLY_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match an alpha string with capitals and lowercase', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CHARACTERS_ONLY_PATTERN.test('QWERTYasdf');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a long string with alpha characters', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CHARACTERS_ONLY_PATTERN.test('QWERTYUIOPasdfghjklzxcvbnmpoiuytrewqlkjhgfdsamnbvcxzasdfASDF');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with numbers', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CHARACTERS_ONLY_PATTERN.test('asdf1234');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CHARACTERS_ONLY_PATTERN.test('Now is the time for all good men to come to the aid of their country');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CHARACTERS_ONLY_PATTERN.test('http://www.google.com');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('DATE_PATTERN', () => {

    it('should export the DATE_PATTERN', () => {
      // Arrange
      const expected = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;

      // Act
      const actual = regexPattern.DATE_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid date string with leading zeros', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('01/01/2019');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid date string with two digit month and day', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('12/31/2019');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid leap year date', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('02/29/2020');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a properly formatted invalid date', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('02/31/2020');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a date string without leading zeros', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('1/1/2019');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a date string with two digit year', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('1/1/19');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid date format', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.DATE_PATTERN.test('January 1, 2019');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('DRIVERS_LICENSE_PATTERN', () => {

    it('should export the DRIVERS_LICENSE_PATTERN', () => {
      // Arrange
      const expected = /^[A-Za-z0-9-]*$/;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a numeric string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('8675309');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match an alpha string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('qwerty');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match an alpha string with caps and lowercase', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('qwertyASDF');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a string with alpha and numeric characters', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('QWERTY123asdf');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a long string with alpha and numeric characters', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('QWERTYUIOPasdfghjklzxcvbnm1234567890poiuytrewqlkjhgfdsamnbvcxz');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match with hyphens', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('1234-abcd-9876-qwerty');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('Now is the time for all good men to come to the aid of their country');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.DRIVERS_LICENSE_PATTERN.test('http://www.google.com');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('MONTH_YEAR_PATTERN', () => {

    it('should export the MONTH_YEAR_PATTERN', () => {
      // Arrange
      const expected = /^(0[1-9]|1[0-2])\/\d{4}$/;

      // Act
      const actual = regexPattern.MONTH_YEAR_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid month/year string with leading zeros', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.MONTH_YEAR_PATTERN.test('01/2019');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid month/year string with two digit month', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.MONTH_YEAR_PATTERN.test('12/2019');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a month/year string without leading zeros', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.MONTH_YEAR_PATTERN.test('1/2019');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a month/year string with two digit year', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.MONTH_YEAR_PATTERN.test('1/19');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid month/year format', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.MONTH_YEAR_PATTERN.test('January 2019');

      // Assert
      expect(actual).toEqual(expected);
    });

  });


  describe('NUMERIC_PATTERN', () => {

    it('should export the ALPHANUMERIC_PATTERN', () => {
      // Arrange
      const expected = /^[0-9]*$/;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid numeric string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('123987456');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid short numeric string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('1');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid long numeric string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('1234567890987654321234567890987654321');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid numeric string', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('123987456');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with alpha characters', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('abc123');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('123.456');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.NUMERIC_PATTERN.test('123 456');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('PHONE_NUMBER_PATTERN', () => {

    it('should export the PHONE_NUMBER_PATTERN', () => {
      // Arrange
      const expected = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid phone number with area code and no parentheses', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('612-455-9876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid phone number with area code including parentheses', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('(612)-455-9876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid phone number with area code including parentheses and no hyphens', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('(612)4559876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid phone number with area code, no parentheses and no hyphens', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('6124559876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a valid phone number without area code', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('455-9876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid phone number', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('12345');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match phone number with country code', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('+1 455-9876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a phone number in UK format', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('02023456789');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a phone number with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('612 455 9876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a phone number with periods', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('612.455.9876');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a phone number with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.PHONE_NUMBER_PATTERN.test('612-455-9876#1234');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('POSTAL_CODE_PATTERN', () => {

    it('should export the POSTAL_CODE_PATTERN', () => {
      // Arrange
      const expected = /^[0-9]{5}$/;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid postal code', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('55123');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a valid nine digit postal code', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('551234567');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a valid nine digit postal code with hyphen', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('55123-4567');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid postal code', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('55');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with letters', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('55asd');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('55 12');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.POSTAL_CODE_PATTERN.test('55-12');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('ROUTING_NUMBER_PATTERN', () => {

    it('should export the ROUTING_NUMBER_PATTERN', () => {
      // Arrange
      const expected = /^[0-9]{9}$/;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid routing number', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN.test('091000022');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string under nine digits', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN.test('123');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string over nine digits', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN.test('1234567890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with letters', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN.test('55asdf123');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with spaces', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN.test('55 123456');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a string with symbols', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.ROUTING_NUMBER_PATTERN.test('55-123456');

      // Assert
      expect(actual).toEqual(expected);
    });

  });


  describe('SIMPLE_EMAIL_PATTERN', () => {

    it('should export the SIMPLE_EMAIL_PATTERN', () => {
      // Arrange
      const expected = /^.+@.+\..+$/;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid simple email', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('me@mail.com');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid complex email', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('me.and.you@mail.com');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid email with alias', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('me.and.you+spam@mail.com');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid email with symbols', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('me~and~you@mail.com');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid email with non ASCII characters', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('la-niña@mail.com');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid email with no domain', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('email@mail');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid email with no at symbol', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SIMPLE_EMAIL_PATTERN.test('emailatmail.com');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('SSN_PATTERN', () => {

    it('should export the SSN_PATTERN', () => {
      // Arrange
      const expected = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;

      // Act
      const actual = regexPattern.SSN_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid SSN with hyphens', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-45-6789');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid SSN without hyphens', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123456789');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too many digits and no hyphens', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('1234567890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too few digits and no hyphens', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('12345678');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too few digits in first group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('12-34-5678');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too few digits in second group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-4-5678');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too few digits in third group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-45-678');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too many digits in first group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('1234-56-7890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too many digits in second group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-456-7890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with too many digits in third group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-45-67890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with alpha in first group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('12x-56-7890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with alpha in second group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-4x-7890');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match an invalid SSN with alpha in third group', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.SSN_PATTERN.test('123-45-678x');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('CURRENCY_PATTERN', () => {

    it('should export the CURRENCY_PATTERN', () => {
      // Arrange
      const expected = /^[0-9]*\.?[0-9]{0,2}$/;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid currency with no decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('100');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid currency with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('123.45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid currency beginning with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('.45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid currency beginning with a zero', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('0.99');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency with a single decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('99.');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency ending with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('99.');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when there are too many decimal points', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('123.456');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value includes a letter allowed by number data type', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('456e4');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value includes a letter', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('456.b');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative and has no decimal', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-100');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative and has single decimal', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-100.5');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative and has decimal', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-100.54');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative and ends with decimal', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-100.54');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative and begins with a decimal', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-.99');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match when the value is negative and begins with a zero', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_PATTERN.test('-0.99');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('CURRENCY_ALLOW_NEGATIVE_PATTERN', () => {

    it('should export the CURRENCY_ALLOW_NEGATIVE_PATTERN', () => {
      // Arrange
      const expected = /^\-?[0-9]*\.?[0-9]{0,2}$/;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN;

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency with no decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('100');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency with no decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('100');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('123.45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency beginning with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('.45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency beginning with a zero', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('0.99');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency with a single decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('100.5');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid positive currency ending with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('99.');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid negative value with no decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid negative currency with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-123.45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid negative currency beginning with a decimal', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-.45');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should match a valid negative currency beginning with a zero', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-0.99');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a negative value when there are too many decimal points', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-123.456');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a negative value when the value includes a letter allowed by number data type', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-456e4');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should not match a negative value when the value includes a letter', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = regexPattern.CURRENCY_ALLOW_NEGATIVE_PATTERN.test('-456.b');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

});
