import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (params) => {
    const options = {
        method: 'get',
        params,
    }
    const resp = await axios.get('', options);
    return resp.data.hits;
}
