import axios from "axios";

const downloadTorrent = (id, setDownloadLink) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/",
    headers: { "Content-Type": "application/json" },
    data: { request_type: "download_torrent", id: id },
  };

  axios
    .request(options)
    .then(function (response) {
      setDownloadLink(response.data.url);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default downloadTorrent;
