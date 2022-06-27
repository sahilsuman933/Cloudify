import requestType from "./option";
import axios from "axios";

const listTorrent = async (req, res) => {
  axios
    .request(requestType("GET", "list_contents", {}, {}))
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default listTorrent;
