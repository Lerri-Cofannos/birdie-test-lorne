import React, { useEffect, useState } from 'react';
import { Default } from 'react-awesome-spinners';

import './DataDisplay.css';

import getPatientEvents from 'services/getPatientEvents';
import { IEvent } from 'helpers/types';
import usePatient from 'hooks/patientContext';

import Visit from '../Visit';

function Loader() {
  return (
    <div className='load-container'>
      Fetching data
      <Default />
    </div>
  );
}

export default function DataDisplay() {
  const [data, setData] = useState<IEvent[][]>();
  const { patient } = usePatient();

  useEffect(() => {
    setData(undefined);
    getPatientEvents(patient.id, setData);
  }, [patient]);

  const htmlVisitArray =
    data &&
    data.map(item => {
      const key = Math.random().toString();
      return <Visit visit={item} key={key} />;
    });

  return (
    <>
      Patient Id: {patient.id}
      <div className='scroll border'>{htmlVisitArray || <Loader />}</div>
    </>
  );
}
