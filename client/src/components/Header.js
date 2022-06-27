import React from "react";
// import categories from "../assets/categories";
import { AddTorrent } from "../api";
import { ToastContainer, toast } from "react-toastify";

function Header() {
  const [magnetLink, setMagnetLink] = React.useState("");
  return (
    <div className="flex max-w-xl bg-cyan-300 m-auto mt-3 h-10">
      {/* <select>
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select> */}
      <input
        type="text"
        placeholder="Enter Magnet Link"
        className="grow min-w-0 p-2"
        onChange={(e) => setMagnetLink(e.target.value)}
      />
      <button
        className="p-2 px-5"
        onClick={() => {
          toast("Torrent will be added in the list...When It Is Available");
          AddTorrent(magnetLink);
        }}
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
}

export default Header;
