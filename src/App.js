import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          // path={process.env.PUBLIC_URL + "/movie/:id"}
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        ></Route>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/"
          element={<Home />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
