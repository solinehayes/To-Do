import { RootState } from '../../reducer';
import { UserState } from '../reducer/reducer';

export const userSelector = (state: RootState): UserState => state.user;
export const userIdSelector = (state: RootState): string => userSelector(state).id;