import { StateEligibility } from './state-eligibility';

describe('StateEligibility', () => {

  let systemUnderTest;

  beforeEach(() => {
    systemUnderTest = new StateEligibility();
  });

  afterEach(() => {
    systemUnderTest = undefined;
  });

  const states = [
    {
      'name': 'Florida',
      'abbreviation': 'FL',
      'isEligible': true
    },
    {
      'name': 'Georgia',
      'abbreviation': 'GA',
      'isEligible': false
    },
    {
      'name': 'Hawaii',
      'abbreviation': 'HI',
      'isEligible': true
    },
    {
      'name': 'Bad State',
      'abbreviation': 'BS',
      'isEligible': ''
    },
    {
      'name': 'Nevada',
      'abbreviation': 'NV',
      'isEligible': false
    }
  ];

  describe('isEligible', () => {

    it('should return false if states is not specified', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = systemUnderTest.isEligible(null, 'foo');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if stateAbbreviation is not specified', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = systemUnderTest.isEligible(states, undefined);

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if stateAbbreviation is whitespace', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = systemUnderTest.isEligible(states, ' ');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if state can not be found in the states list', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = systemUnderTest.isEligible(states, 'STATE_ABBREVIATION_NOT_IN_LIST');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return true if state is eligible', () => {
      // Arrange
      const expected = true;

      // Act
      const actual = systemUnderTest.isEligible(states, 'HI');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if state is not eligible', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = systemUnderTest.isEligible(states, 'GA');

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return false if state eligibility is not set correctly', () => {
      // Arrange
      const expected = false;

      // Act
      const actual = systemUnderTest.isEligible(states, 'BS');

      // Assert
      expect(actual).toEqual(expected);
    });

  });

  describe('getEligibleStates', () => {

    it('should return the eligible states', () => {
      // Arrange
      const expected = 2;

      // Act
      const actual = systemUnderTest.getEligibleStates(states);

      // Assert
      expect(actual.length).toEqual(expected);
    });

    it('should return empty array if states is not specified', () => {
      // Arrange
      const expected = 0;

      // Act
      const actual = systemUnderTest.getEligibleStates(undefined);

      // Assert
      expect(actual.length).toEqual(expected);
    });

  });

  describe('getIneligibleStates', () => {

    it('should return the ineligible states', () => {
      // Arrange
      const expected = 3;

      // Act
      const actual = systemUnderTest.getIneligibleStates(states);

      // Assert
      expect(actual.length).toEqual(expected);
    });

    it('should return empty array if states is not specified', () => {
      // Arrange
      const expected = 0;

      // Act
      const actual = systemUnderTest.getIneligibleStates(undefined);

      // Assert
      expect(actual.length).toEqual(expected);
    });

  });

});
