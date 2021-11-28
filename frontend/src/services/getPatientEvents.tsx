/* eslint-disable no-console */
import axios from 'axios';

export default async function getPatientEvents(id: string, setData: Function) {
  const route: string =
    id !== '404'
      ? `https://birdie-test-lorne-back.herokuapp.com/data/${id}`
      : 'https://birdie-test-lorne-back.herokuapp.com/hello';

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
}
