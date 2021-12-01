export interface IEvent {
  caregiverId: string;
  timestamp: string;
  eventName: string;
  visit: string;
  observation?: IObservation;
}

export interface IObservation {
  title: string;
  description: string;
}
