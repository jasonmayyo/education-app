import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../src/Components/Login/Login'

import Header from '../src/Containers/Header/Header'
import SelectGrade from '../src/Components/SelectGrade/SelectGrade'
import SelectSubject from '../src/Components/SelectSubject/SelectSubject'
import SubjectHome from '../src/Components/SubjectHome/SubjectHome'
import LessonHome from '../src/Components/LessonHome/LessonHome'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
            <Login />
        </Route>
        <Route path='/'>
        <div className='App'>
                <Header />
                  <Switch>
                    <Route exact path="/select-grade">
                        <SelectGrade Grade='11'/>
                    </Route>
                    <Route exact path='/:grade/select-subject'>
                        <SelectSubject Grade='11' Subject='physics'/>
                    </Route>
                    <Route exact path='/:grade/:subject/'>
                        <SubjectHome
                        Grade='11'
                        Subject='physics'
                        Lesson='circut-diagrams'
                        />
                    </Route>
                    <Route exact path='/:grade/:subject/:lesson/'>
                        <LessonHome />
                    </Route>
                  </Switch>
            </div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
