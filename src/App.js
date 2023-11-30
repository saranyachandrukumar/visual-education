import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Video from "./components/video";  // Corrected import with uppercase letter

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path='/' exact component={Video} />  Corrected component name */}
      </Switch>
    </Router>
  );
}

