import axios from "axios";
import FormData from "form-data";

const downloadTorrent = async (req, res) => {
  const form = new FormData();
  form.append("archive_arr[0][type]", "folder");
  form.append("archive_arr[0][id]", req.body.id);

  const options = {
    method: "POST",
    url: "https://www.seedr.cc/download/archive",
    headers: {
      cookie:
        "RSESS_session=c41d15659f53feebb5e546280b453b7fcc2515a7; RSESS_remember=b67f38a39a49448e81b2417582a7a75cff07178c",
      "Content-Type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    data: form,
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default downloadTorrent;
