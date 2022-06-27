import axios from "axios";
import requestType from "./option";
import FormData from "form-data";

const deleteTorrent = (req, res) => {
  const form = new FormData();
  form.append(
    "delete_arr",
    JSON.stringify([
      {
        type: "folder",
        id: req.body.id,
      },
    ])
  );

  axios
    .request(
      requestType("POST", "delete", form, {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
      })
    )
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default deleteTorrent;
