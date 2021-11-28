import { IEvent, IObservation } from './types'

const knex = require("knex")({
    client: 'mysql2',
    connection: {
        host     : 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
        port     : '3306',
        user     : 'test-read',
        password : 'xnxPp6QfZbCYkY8',
        database : 'birdietest'
    },
}
);

export function getListOfPatients(next: Function) {
    function reformating(patientList) {
      const list = ['Bob', 'Jack', 'Sam', 'John', 'Mary', 'Jane', 'Anna'];
      return patientList.map((patient, index) => {
        const randint = Math.floor(Math.random() * list.length);
        const name = list.splice(randint, 1)[0];
        return {
            index,
            id: patient.care_recipient_id,
            name: name,
          };
        }
      );
    }
  
    console.log('\nentered mysql connection to get the list of patients');
    
    knex.select('care_recipient_id').distinct('care_recipient_id').from('events')
        .then(response => {
            console.log('successful mysql query\n', response);
            next(false, reformating(response))
        })
        .catch(err => {
            console.log('Oups, mysql query crashed: ', err);
            next({err: 'An error occured while connecting to database'}, null)
        })
}


export function getEventsOfPatient(id: string, next: Function) {
    console.log('\nentered mysql connection to get the list of events of a patient');
    
    knex.select('*').from('events').where('care_recipient_id', id)
        .then(response => {
            const patientEvents = restructureData(eventFormating(response));
            console.log('successful mysql query\n');
            next(false, patientEvents)
        })
        .catch(err => {
            console.log('Oups, mysql query crashed: ', err);
            next({err: 'An error occured while connecting to database'}, null)
        })
}

/**
 * Transforms the list of events into a list of visits, each containing their
 * corresponding events
 */
function restructureData(backendData: IEvent[]): IEvent[][] {
    const sortedData =
      backendData &&
      backendData.sort((a, b) => {
        return (
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      });

    let heldEvent: IEvent = sortedData[0];
    let heldVisit: IEvent[] = [heldEvent];
    let res: IEvent[][] = [];
    for (let i = 1; i < sortedData.length; i += 1) {
      if (sortedData[i].visit === undefined) {
        res = res.concat([heldVisit.reverse()], [[sortedData[i]]]);
        i+=1;
        heldEvent = sortedData[i];
        heldVisit = [heldEvent];
      } else if (sortedData[i].visit === heldEvent.visit) {
        heldVisit = heldVisit.concat([sortedData[i]]);
      } else {
        res = res.concat([heldVisit.reverse()]);
        heldEvent = sortedData[i];
        heldVisit = [heldEvent];
      }
    }
    return res;
  }

/**
 * transforms the raw data into a proper IEvent Array
 */
function eventFormating(rawEventArray): IEvent[] {
    const payloadArray = rawEventArray.map(event => event.payload)
    const commonKeys: String[] = [
        'id',
        'visit_id',
        'timestamp',
        'event_type',
        'caregiver_id',
        'care_recipient_id',
    ]
    
    return payloadArray.map((payload: any) => {
        let observations: IObservation[] = [];
        for (const attribute in payload) {
            if (!(commonKeys.includes(attribute))) {
                const obs: IObservation = {
                    title: cleanSnakeCase(attribute),
                    description: String(payload[attribute])
                }
                const isNotAnId = obs.title.indexOf(' id') === -1;
                if (isNotAnId) observations = observations.concat(obs);
            }
        }
        return {
            visit: payload.visit_id,
            caregiverId: payload.caregiver_id,
            eventName: cleanSnakeCase(payload.event_type),
            timestamp: payload.timestamp,
            observations,
        };
        });
}

function cleanSnakeCase(str: string) : string {
    if (!str) return ''
    let resu = str.split('_').join(' ');
    resu = resu[0].toUpperCase() + resu.slice(1)
    return resu;
}