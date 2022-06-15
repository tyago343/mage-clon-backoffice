export interface UserAction {
  type: string;
  payload: {
    error?: string;
    user?: User;
  };
}
export interface UserState {
  pending: boolean;
  user: User | null;
  error: string | null;
}
export interface User {
  id: number | string;
  name: string;
  lastName: string;
  username: string;
  email: string;
}
