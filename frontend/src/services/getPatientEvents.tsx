/* eslint-disable no-console */
import axios from 'axios';

export default async function getPatientEvents(id: string, setData: Function) {
  if (id !== '404') {
    const route: string = `http://localhost:8000/data/${id}`;
    await axios
      .get(route)
      .then(response => {
        if (response) {
          const resData = response.data;
          console.log(`Successful response from backend at ${route}`);
          if (response.status === 200 && typeof resData === 'object') {
            setData(resData);
            console.log(`patient changed to ${id} and useEffect called`);
          } else {
            console.log(`Error from ${route}: `, resData.err);
            setData(resData.err);
          }
        }
      })
      .catch(err => {
        console.log('Server error: ', err);
      });
  } else {
    const route: string = 'http://localhost:8000/hello';
    await axios
      .get(route)
      .then(response => {
        if (response) {
          console.log(`Successful response from backend at ${route}`);
          if (response.status === 200) {
            console.log(response.data);
          } else {
            console.log(`Error from ${route}: `, response.data.err);
          }
        }
      })
      .catch(err => {
        console.log('Server error: ', err);
      });
  }
}
