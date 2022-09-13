export interface RejectMessage {
  [k: string]: string
}
export interface RejectValue {
  rejectValue: RejectMessage
}

export interface IAction {
  type: string
  payload: any
}