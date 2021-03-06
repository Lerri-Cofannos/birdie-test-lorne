import React, { Dispatch, useContext, useState } from 'react';

import { IPatient } from 'helpers/types';

interface DefaultType {
  patient: IPatient;
  setPatient: Dispatch<IPatient>;
}

const PatientContext = React.createContext<DefaultType | undefined>(undefined);

export function PatientProvider({ children }: { children: React.ReactNode }) {
  const defaultPatient: IPatient = {
    index: -1,
    id: '404',
    name: 'waiting for patient',
  };
  const [patient, setPatient] = useState<IPatient>(defaultPatient);

  return (
    <PatientContext.Provider
      value={{
        patient,
        setPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export default function usePatient() {
  const context = useContext(PatientContext);
  if (context) {
    return context;
  }
  throw new Error('data is undefined yet');
}
