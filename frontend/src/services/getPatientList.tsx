/* eslint-disable no-console */
import axios from 'axios';

export default async function getPatientList(
  setPatientList: Function,
  setPatient: Function
) {
  const route: string =
    'https://birdie-test-lorne-back.herokuapp.com/data/patientList';

  const response = await axios.get(route).catch(err => {
    console.log('Server error: ', err);
  });

  if (response && response.status === 200) {
    const patientList = response.data;
    console.log(`successful response from ${route}: `, patientList);
    setPatientList(patientList);
    setPatient(patientList[0]);
  } else if (response) {
    console.log(response.data.err);
  } else {
    console.log('Server error');
  }
}
