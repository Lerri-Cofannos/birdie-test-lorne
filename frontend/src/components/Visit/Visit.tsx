import React from 'react';
import './Visit.css';
import { IEvent } from 'helpers/types';
import { dispDate, dispTime } from 'helpers/displayer';
import Observation from '../Observation';

export default function Visit({ visit }: { visit: IEvent[] }) {
  let id = 'no id for this event';
  let i = 0;
  while (id === 'no id for this event' && i < visit.length) {
    if (visit[i].visit) id = `id: ${visit[i].visit}`;
    i += 1;
  }
  return (
    <div className='visit-display'>
      <div className='circle border' />
      <div className='timeline' />
      <div className='visit-container'>
        <div className='visit-header'>
          <p className='visit-title'>
            Visit of the {dispDate(visit[0].timestamp)}
          </p>
          <p className='id'>{id}</p>
        </div>
        {visit.map(event => {
          const { caregiverId, timestamp, eventName, observations } = event;
          return (
            <div key={Math.random().toString()}>
              <div className='event-head'>
                {`${dispDate(timestamp)} at ${dispTime(timestamp)} - `}
                {eventName === 'Alert raised' && (
                  <img
                    src='/warning.jpeg'
                    alt='Warning'
                    height='20'
                    className='warning'
                  />
                )}
                {eventName}
              </div>
              <p className='id event'>
                {caregiverId ? `caregiver: ${caregiverId}` : ''}
              </p>
              <div className='circle event-position' />
              <div className='event-observations'>
                {observations &&
                  observations.map(obs => {
                    return <Observation obs={obs} />;
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
