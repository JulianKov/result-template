import axios from "axios";

axios.interceptors.request.use(
  (response) => {
    console.log(response)
    return response;
  },
  
);
