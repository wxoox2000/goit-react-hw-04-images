import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (params, controller) => {
    const options = {
        method: 'get',
        params,
        signal: controller.signal,
    }
    const resp = await axios.get('', options);
    return resp.data.hits;
}
