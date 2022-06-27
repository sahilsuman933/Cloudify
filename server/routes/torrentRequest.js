import express from "express";
import {
  listTorrent,
  deleteTorrent,
  addTorrent,
  downloadTorrent,
} from "../controller";

const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.request_type === "list_torrent") listTorrent(req, res);
  else if (req.body.request_type === "delete_torrent") deleteTorrent(req, res);
  else if (req.body.request_type === "add_torrent") addTorrent(req, res);
  else if (req.body.request_type === "download_torrent")
    downloadTorrent(req, res);
  else res.status(400).send("Invalid request type");
});

export default router;
