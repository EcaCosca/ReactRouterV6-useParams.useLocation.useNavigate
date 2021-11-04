import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App App-header">
        <header></header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={
              {
                pathname: "/about",
                state: {from:'here'}
              }
            }>About</Link>
          </li>
          <li>
            <Link to="/user/john">User</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
