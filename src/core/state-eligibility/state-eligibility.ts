import { Injectable } from '@angular/core';

export interface IStateItem {
  abbreviation: string;
  name: string;
  isEligible: boolean;
}

export interface IStateEligibility {
  isEligible(states: Array<IStateItem>, state: string): boolean;
}

@Injectable()
export class StateEligibility implements IStateEligibility {

  isEligible(states: Array<IStateItem>, stateAbbreviation: string): boolean {
    if (!states) {
      return false;
    }

    if (!stateAbbreviation) {
      return false;
    }

    const trimmedStateAbbreviation = stateAbbreviation.trim();
    if (trimmedStateAbbreviation === '') {
      return false;
    }

    const foundState = states.find(s => s.abbreviation === trimmedStateAbbreviation);

    if (!foundState) {
      return false;
    }

    if (foundState.isEligible === true) {
      return true;
    }

    return false;
  }

  getEligibleStates(states: Array<IStateItem>): Array<IStateItem> {
    if (!states) {
      return [];
    }

    return states.filter(x => x.isEligible === true);
  }

  getIneligibleStates(states: Array<IStateItem>): Array<IStateItem> {
    if (!states) {
      return [];
    }

    return states.filter(x => x.isEligible !== true);
  }

}
