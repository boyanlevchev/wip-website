import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home'
import InterviewTranscriptions from './pages/interview_transcriptions'
import ThePornProject from './pages/the_porn_project'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/the-porn-project">
          <ThePornProject />
        </Route>
        <Route path="/interview-transcriptions">
          <InterviewTranscriptions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
