import axios from "axios";
import requestType from "./option";
import FormData from "form-data";

const addTorrent = (req, res) => {
  const form = new FormData();
  form.append("torrent_magnet", `${req.body.torrent_magnet}`);
  axios
    .request(
      requestType("POST", "add_torrent", form, {
        "Content-Type": "application/x-www-form-urlencoded",
      })
    )
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default addTorrent;
