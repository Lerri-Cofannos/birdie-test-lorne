import React, { useEffect, useMemo, useState } from 'react';
import { Default } from 'react-awesome-spinners';
import { Checkbox } from 'semantic-ui-react';

import './DataDisplay.css';
import { dispDate } from 'helpers/displayer';

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
  const filter: Array<boolean> = useMemo(() => [true, false, false, false], []);
  const [dateFilter, setDateFilter] = useState<string>('2019-06-06');
  const [display, setDisplay] = useState<IEvent[][] | undefined>();
  const [render, setRender] = useState<boolean>(true);

  useEffect(() => {
    setData(undefined);
    getPatientEvents(patient.id, setData);
  }, [patient]);

  useEffect(() => {
    const displayVisitArray =
      data &&
      data.filter(item => {
        const event0 = item[0];
        const isDateValid =
          !filter[3] || dispDate(event0.timestamp) === dispDate(dateFilter);
        if (event0.visit === undefined) {
          if (event0.eventName === 'Alert raised') {
            return filter[1] && isDateValid;
          }
          return filter[2] && isDateValid;
        }
        return filter[0] && isDateValid;
      });
    setDisplay(displayVisitArray);
  }, [data, filter, render, dateFilter]);

  function click(i: number): void {
    filter.splice(i, 1, !filter[i]);
    setRender(!render);
  }

  function datePicked(e: any): void {
    setDateFilter(e.target.value);
  }

  return (
    <>
      <div className='data-header'>
        <div className='form-group'>
          <p className='form-text'>Choose which data to display:</p>
          <form className='form-container'>
            <Checkbox
              slider
              label=' Visits'
              defaultChecked
              onChange={() => click(0)}
            />
            <Checkbox toggle label=' Alert raised' onChange={() => click(1)} />
            <Checkbox
              toggle
              label=' No medication observation received'
              onChange={() => click(2)}
            />
            <div className='date-chooser'>
              <Checkbox
                toggle
                label=' From a specific date: '
                onChange={() => click(3)}
              />
              <input type='date' value={dateFilter} onChange={datePicked} />
            </div>
          </form>
        </div>
        <div className='patient-data'>
          Patient: {patient.name}
          <p className='id'>Patient Id: {patient.id}</p>
        </div>
      </div>
      <div className='scroll-container'>
        <div className='timeline' />
        <div className='scroll border'>
          {display ? (
            display.map(item => {
              const key = Math.random().toString();
              return <Visit visit={item} key={key} />;
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}
