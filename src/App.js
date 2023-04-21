import "./App.css";
import BottomRow from "./components/BottomRow/BottomRow";
import Sidebar from "./components/Sidebar/Sidebar";
import TopRow from "./components/TopRow/TopRow";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <div className="highlights">
          <div className="text">Highlights</div>
          <TopRow />
          <BottomRow />
        </div>
      </div>
    </div>
  );
}

export default App;
