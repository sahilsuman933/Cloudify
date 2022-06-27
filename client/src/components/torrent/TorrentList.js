import React from "react";
import prettyBytes from "pretty-bytes";
import { useState, useEffect } from "react";
import TorrentDisplay from "./TorrentDisplay";
import { ListTorrent, downloadTorrent } from "../../api";

function TorrentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ListTorrent(setData);
  }, []);

  const torrentList = data.map((torrent) => {
    let date = torrent.last_update.split(" ");
    return (
      <TorrentDisplay
        key={torrent.id}
        id={torrent.id}
        name={torrent.name}
        status={torrent.progress ? torrent.status : "Completed"}
        size={prettyBytes(torrent.size)}
        date={date[0]}
      />
    );
  });
  return <>{torrentList}</>;
}

export default TorrentList;
