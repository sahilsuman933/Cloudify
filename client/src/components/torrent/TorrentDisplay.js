import React, { useReducer } from "react";
import { remove, download } from "../../assets/icons/icons";
import { DeleteTorrent, downloadTorrent } from "../../api";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TorrentDisplay(props) {
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    downloadTorrent(props.id, setDownloadLink);
  }, []);

  return (
    <div className="flex flex-col gap-2 p-6 bg-slate-200 max-w-xl m-auto mt-12">
      <ToastContainer />
      <p>
        File Name:{" "}
        <span className="underline underline-offset-3 mb-1">{props.name}</span>
      </p>
      <p>Download Status : {props.status}</p>
      <p>Size : {props.size}</p>
      <div className="flex justify-between">
        <p>Added on: {props.date}</p>
        <div className="flex gap-12 mr-6">
          <a href={downloadLink} target="_blank">
            <img src={download} alt="download-icon" />
          </a>
          <img
            src={remove}
            alt="remove-icon"
            onClick={() => {
              toast("Torrent File Removed");
              DeleteTorrent(props.id);
            }}
            className="hover:cursor-pointer	"
          />
        </div>
      </div>
    </div>
  );
}

export default TorrentDisplay;
