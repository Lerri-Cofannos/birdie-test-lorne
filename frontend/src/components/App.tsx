import React, { useState, useEffect } from 'react';
import './App.css';

import getPatientList from 'services/getPatientList';
import { IPatient } from 'helpers/types';
import usePatient from 'hooks/patientContext';

import Header from './Header';
import DataDisplay from './DataDisplay';
import Footer from './Footer';

function App() {
  const { setPatient } = usePatient();
  const [patientList, setPatientList] = useState<IPatient[]>();

  useEffect(() => {
    getPatientList(setPatientList, setPatient);
  }, [setPatient]);

  function patientClick(e: any) {
    const patient = JSON.parse(e.target.id);
    setPatient(patient);
  }
  return (
    <div className='App'>
      <Header />
      <div className='body-container border'>
        <div className='btn-row'>
          {patientList &&
            patientList.map((pat: IPatient) => {
              return (
                <button
                  type='button'
                  id={JSON.stringify(pat)}
                  onClick={patientClick}
                  key={pat.name}
                >
                  {pat.index + 1}. {pat.name}
                </button>
              );
            })}
        </div>
        <DataDisplay />
      </div>
      <Footer />
    </div>
  );
}

export default App;
