import axios from 'axios'

async function getData(number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
    return response.data;
}

export default getData