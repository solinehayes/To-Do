import { getType } from 'typesafe-actions';
import { Actions } from '../../actions';
import { updateUserActionCreator } from '../actions/update';

export interface UserState {
    id: string;
}


export const initialUserState: UserState = {
  id: "",
};

export const userReducer = (state: UserState = initialUserState, action: Actions): UserState => {
  switch (action.type) {
    case getType(updateUserActionCreator):
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
