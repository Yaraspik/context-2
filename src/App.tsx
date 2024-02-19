import "./styles.css";
import Fetch from "./components/Fetch";

export default function App() {
  const url = "https://g9q2tv-7070.csb.app/";

  return (
    <div className="App">
      <Fetch url={url} opts="data" />
      <Fetch url={url} opts="error" />
      <Fetch url={url} opts="loading" />
    </div>
  );
}
