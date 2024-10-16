import Header from "./Components/Common/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./Components/home/HomePages";
import Culture from "./Components/Culture/Culture";
import SinglePage from "./Components/SinglePages/SinglePage";
import Footer from "./Components/Common/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/SinglePage/:id" exact component={SinglePage} />
          <Route exact path="/culture" component={Culture} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
