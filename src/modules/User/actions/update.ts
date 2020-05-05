import { ActionType, createAction } from 'typesafe-actions';

export interface UserUpdateInput {
  id: string;
}

export const updateUserActionCreator = createAction(
  'UPDATE_USER',
  (payload: UserUpdateInput) => payload
)();

export type UpdateUserAction = ActionType<typeof updateUserActionCreator>;