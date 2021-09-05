import './App.css';
import Header from '../src/Containers/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SelectGrade from '../src/Components/SelectGrade/SelectGrade'
import SelectSubject from '../src/Components/SelectSubject/SelectSubject'
import Subject from '../src/Components/Subject/Subject'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/select-grade">
            <SelectGrade />
          </Route>
          <Route path='/select-subject'>
            <SelectSubject Name='Physics'/>
          </Route>
          <Route path='/:subject/'>
            <Subject />
          </Route>
        </Switch> 
      </div>
    </Router>
    
  );
}

export default App;
