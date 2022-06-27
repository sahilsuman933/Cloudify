import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TorrentList from "./components/torrent/TorrentList";
function App() {
  return (
    <div className="max-w-[756px] mx-auto bg-gray-100 ">
      <Navbar />
      <Header />
      <TorrentList />
      <Footer />
    </div>
  );
}

export default App;
