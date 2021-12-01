import React from 'react';
import { IObservation } from 'helpers/types';
import { dispDate, dispTime } from 'helpers/displayer';
import usePatient from 'hooks/patientContext';

import './Observation.css';

export default function Observation({ obs }: { obs: IObservation }) {
  const { patient } = usePatient();
  function formatDescription(text: string): string {
    if (!text) return 'None';
    if (text[text.length - 1] === 'Z') {
      const timestamp = text;
      return `${dispTime(timestamp)} - ${dispDate(timestamp)}`;
    }
    if (text === '[object Object]') return '[Confidential Data]';
    const resu = text.replace(/\[redacted\]/g, patient.name);
    return resu.split(';').join('\n');
  }

  return (
    <div className='observation'>
      <p className='observation-title'>{obs.title} :</p>
      <p className='observation-description'>
        {formatDescription(obs.description)}
      </p>
    </div>
  );
}
