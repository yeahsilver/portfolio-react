import axios from 'axios';

axios.default.baseURL = "https://yesilver.kr";

const fetcher = async(method, url, ...rest) => {
    const res = await axios[method](url, ...rest);

    return res.data;
}

export default fetcher;