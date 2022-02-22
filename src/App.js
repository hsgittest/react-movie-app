import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  alert("1" + process.env.PUBLIC_URL);
  return (
    <Router>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route
          // path={process.env.PUBLIC_URL + "/movie/:id"}

          path="/movie/:id"
          element={<Detail />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
