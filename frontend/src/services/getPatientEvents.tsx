/* eslint-disable no-console */
import axios from 'axios';

export default async function getPatientEvents(id: string, setData: Function) {
  const route: string = id ? `/data/${id}` : '/data/all';

  const response = await axios.get(route).catch(err => {
    console.log('Server error: ', err);
  });
  if (response) {
    const resData = response.data;
    console.log(`Successful response from backend at ${route}`);
    if (response.status === 200) {
      setData(resData);
      console.log(`patient changed to ${id} and useEffect called`);
    } else {
      console.log(`Error from ${route}: `, resData.err);
      setData(resData.err);
    }
  } else {
    console.log('Server error');
  }
}
