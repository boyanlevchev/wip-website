import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SidePanel from "./components/side_panel";
import Home from './pages/home'
import CV from './pages/cv'
import Bio from './pages/bio'
import Shows from './pages/shows'
import Contact from './pages/contact'
import SexualMatter from './pages/sexual_matter'

import InterviewTranscriptions from './pages/works/interview_transcriptions'
import ThePornProject from './pages/works/the_porn_project'


function App() {
  return (
    <div>
      <Router>
        <div className={"flex justify-start"}>
          <div>
          <SidePanel />
          </div>
          <div className={"page-size page-padding"}>
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/bio">
                <Bio />
              </Route>
              <Route path="/cv">
                <CV />
              </Route>
              <Route path="/sexual_matter">
                <SexualMatter />
              </Route>

              <Route path="/works/the-porn-project">
                <ThePornProject />
              </Route>
              <Route path="/works/interview-transcriptions">
                <InterviewTranscriptions />
              </Route>
              <Route path="/shows">
                <Shows />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
