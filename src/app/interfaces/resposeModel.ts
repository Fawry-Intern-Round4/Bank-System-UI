export interface ResponseModel<T> {
  success: boolean;
  payload: T;
  error: Object;
}
