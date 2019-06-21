import axios from 'axios';

export const getDataFromApi = (url) => {
    return axios.get(url)
    .then(data => {
        // console.log(data.data.results.length)
        return data.data;
    });
};