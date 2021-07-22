import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import emojis from "./assets/emoji-list.json";

function App() {
  const [filterText, setFilterText] = useState("");

  // première en majuscule
  const capitalize = (a) => {
    return (a + "").charAt(0).toUpperCase() + a.substr(1);
  };

  // tableau à remplir
  const LINES = [];

  return (
    <div className="app">
      <Search filterText={filterText} setFilterText={setFilterText} />

      {emojis.forEach((item, index) => {
        if (
          item.keywords.toUpperCase().indexOf(filterText) === -1 &&
          item.keywords.toLowerCase().indexOf(filterText) === -1 &&
          item.title.toUpperCase().indexOf(filterText) === -1 &&
          item.title.toLowerCase().indexOf(filterText) === -1 &&
          capitalize(item.keywords).indexOf(filterText) === -1 &&
          capitalize(item.title).indexOf(filterText) === -1
        ) {
          return;
        } else {
          LINES.push(
            <Line key={index} emoji={item.symbol} title={item.title} />
          );
        }
      })}

      <div>{LINES.slice(0, 20)}</div>
      <Footer />
    </div>
  );
}

export default App;
