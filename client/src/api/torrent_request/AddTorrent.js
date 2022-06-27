import axios from "axios";

const AddTorrent = (magnetLink) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/",
    params: { "": "" },
    headers: { "Content-Type": "application/json" },
    data: {
      request_type: "add_torrent",
      torrent_magnet: magnetLink,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default AddTorrent;
