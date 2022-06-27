import { ACCESS_TOKEN } from "../../config";

const requestType = (method, func, data, headers) => {
  const option = {
    method: method,
    url: "https://www.seedr.cc/oauth_test/resource.php",
    params: {
      access_token: ACCESS_TOKEN,
      func: func,
    },
    headers: headers,
    data: data,
  };

  return option;
};

export default requestType;
