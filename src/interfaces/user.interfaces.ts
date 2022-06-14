export interface UserAction {
  type: string;
  payload: {
    error?: string;
    user?: {
      [index: string]: string;
    };
  };
}
export interface UserState {
  pending: boolean;
  user: {
    [index: string]: string;
  } | null;
  error: string | null;
}
