import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../../+state/reducers/auth.reducer';

// Auth selectors
export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getUserName = createSelector(selectAuthState, fromAuth.getUserName);
export const getFriendlyName = createSelector(selectAuthState, fromAuth.getFriendlyName);
export const getProjectId = createSelector(selectAuthState, fromAuth.getProjectId);
