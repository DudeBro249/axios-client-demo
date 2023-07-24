import axios from "axios";

export const handleError = (err: unknown) => {
    if (axios.isAxiosError(err))  {
        console.log(`Caught Axios error: The status code of the response is ${err.response?.status}`);
  
    } else {
        console.log('Standard error');
    }
}
