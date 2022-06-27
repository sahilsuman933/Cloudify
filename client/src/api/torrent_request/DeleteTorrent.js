import axios from "axios";

const DeleteTorrent = (id) => {
  console.log(id);
  axios
    .post("http://localhost:5000/", {
      request_type: "delete_torrent",
      id: id,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default DeleteTorrent;
