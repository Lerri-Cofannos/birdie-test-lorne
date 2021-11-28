export interface IEvent {
  caregiverId: string;
  visit: string;
  timestamp: string;
  eventName: string;
  observations?: IObservation[];
}

export interface IObservation {
  title: string;
  description: string;
}

export interface IPatient {
  index: number; // linear index in the list of patients
  id: string; // id of the patient as specified in the database
  name: string; // random name given to the patient
}
