import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataDisplay.css';
import { IEvent } from '../../helpers/types';

import Event from '../Event';

export default function DataDisplay() {
  const [data, setData] = useState<string>();
  const [reload, setReload] = useState<boolean>();
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/data/all').catch(err => {
        console.log(err);
      });
      console.log('This is the response from the back: ', response);
      if (response && response.status === 200) {
        const jsonData = response.data;
        setData(JSON.stringify(jsonData.data));
      } else if (response) {
        setData(response.data.err);
      } else {
        setData('Server error');
      }
    }
    getData();
  }, [reload]);

  function requestEvent(): IEvent {
    return {
      timestamp: new Date(Math.floor(Math.random() * 10000000000)),
      eventName: data || 'Loading...',
    };
  }
  const eventArray = [
    requestEvent(),
    requestEvent(),
    requestEvent(),
    requestEvent(),
    requestEvent(),
    requestEvent(),
  ].sort((a, b) => {
    return b.timestamp.getTime() - a.timestamp.getTime();
  });
  const htmlEventArray = eventArray.map(item => {
    return (
      <Event
        timestamp={item.timestamp}
        eventName={item.eventName}
        key={item.timestamp.toDateString()}
      />
    );
  });

  return (
    <>
      <div className='scroll'>{data ? htmlEventArray : 'Loading data...'} </div>
      <button
        className='primary-button'
        onClick={() => setReload(!reload)}
        type='button'
      >
        Reload
      </button>
    </>
  );
}
