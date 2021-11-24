import React from 'react';
import './Event.css';
import { IObservation } from 'helpers/types';

export default function Event({
  timestamp,
  eventName,
  eventObservations,
}: {
  timestamp: Date;
  eventName: string;
  eventObservations?: Array<IObservation>;
}) {
  return (
    <div className='event-display'>
      <div className='event-circle' />
      <div className='event-container'>
        <p className='timestamp'>{timestamp.toLocaleDateString()}</p>
        <p className='event-name'>{eventName}</p>
        <p className='event-observations'>
          {eventObservations &&
            eventObservations.map(item => {
              return (
                <div className='observation-element' key={item.title}>
                  {item.title} : {item.description}
                </div>
              );
            })}
        </p>
      </div>
    </div>
  );
}

Event.defaultProps = {
  eventObservations: [
    {
      title: 'default title',
      description: 'no data',
    },
  ],
};
