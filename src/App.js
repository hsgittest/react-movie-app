import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // alert("1" + process.env.PUBLIC_URL + "/movie/:id");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path={"/movie/:id"}
          // basename={process.env.PUBLIC_URL}
          //path="/movie/:id"
          element={<Detail />}
        ></Route>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
