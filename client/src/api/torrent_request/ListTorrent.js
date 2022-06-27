import axios from "axios";

const ListTorrent = (setData) => {
  axios
    .post("http://localhost:5000/", { request_type: "list_torrent" })
    .then((response) => {
      setData(response.data.folders);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default ListTorrent;
