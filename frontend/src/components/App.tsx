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
  const [patientDisp, setPatientDisp] = useState<Object[]>([]);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    getPatientList(setPatientList, setPatient);
  }, [setPatient]);

  useEffect(
    () =>
      patientList &&
      setPatientDisp(
        patientList.map(patient => {
          return {
            index: patient.index,
            id: patient.id,
            name: patient.name,
            selected: selected === patient.index,
          };
        })
      ),
    [patientList, selected]
  );

  function patientClick(e: any) {
    const patientFromId = JSON.parse(e.target.id);
    setPatient(patientFromId);
    setSelected(patientFromId.index);
  }
  return (
    <div className='App'>
      <Header />
      <div className='body-container border'>
        <div className='top-line' />
        <div className='btn-row'>
          {patientDisp &&
            patientDisp.map((pat: any) => {
              if (pat.selected) {
                return (
                  <div
                    className='tab selected'
                    id={JSON.stringify(pat)}
                    key={pat.name}
                  >
                    {pat.index + 1}. {pat.name}
                  </div>
                );
              }
              return (
                <button
                  className='tab'
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
