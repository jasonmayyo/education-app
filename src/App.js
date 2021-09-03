import './App.css';
import Header from '../src/Containers/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SelectGrade from '../src/Components/SelectGrade/SelectGrade'
import SelectSubject from '../src/Components/SelectSubject/SelectSubject'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/select-grade">
            <SelectGrade />
          </Route>
          <Route exact path='/select-subject'>
            <SelectSubject />
          </Route>
          {/* <Route exact path='/:subject'>
            <Subject />
          </Route>  */}
        </Switch> 
      </div>
    </Router>
    
  );
}

export default App;
