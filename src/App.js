import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../src/Components/Login/Login'

import Header from '../src/Containers/Header/Header'
import SelectGrade from '../src/Components/SelectGrade/SelectGrade'
import SelectSubject from '../src/Components/SelectSubject/SelectSubject'
import SubjectHome from '../src/Components/SubjectHome/SubjectHome'
import LessonHome from '../src/Components/LessonHome/LessonHome'
import React,{ Component } from 'react';

class App extends Component {
  state = {
    selectedGrade: '',
    selectedSubject: {
      Subject: 'Physical Science',
      Teacher: 'Mr umm'
    },
    selectedLesson: '',
  }

  setGradeHandler = (selectedGrade) => {
    this.setState({
      selectedGrade: selectedGrade
    })
  }

  setSubjectHandler = (selectedSubject, Teacher) => {
    const updatedselectedSubject = {...this.state.selectedSubject}
    updatedselectedSubject.Subject = selectedSubject
    updatedselectedSubject.Teacher = Teacher
    this.setState({
       selectedSubject: updatedselectedSubject
    })
  }

  setSelectedLessonHandler = (Lesson) => {
    this.setState({
      selectedLesson: Lesson
    })
  }
  
  render( ) {
    const Lesson = 'electrostatics'

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
                          <SelectGrade  
                            setGrade={this.setGradeHandler}
                          />
                      </Route>
                      <Route exact path='/:grade/select-subject'>
                          <SelectSubject 
                            selectedGrade={this.state.selectedGrade}
                            setSubject={this.setSubjectHandler}
                          />
                      </Route>
                      <Route exact path='/:grade/:subject/'>
                          <SubjectHome
                            selectedGrade={this.state.selectedGrade}
                            selectedSubject={this.state.selectedSubject}
                            Lesson={Lesson}
                            selectedLesson={this.setSelectedLessonHandler}
                          />
                      </Route>
                      <Route exact path='/:grade/:subject/:lesson/'>
                          <LessonHome 
                            selectedLesson={this.state.selectedLesson}
                            selectedGrade={this.state.selectedGrade}
                            selectedSubject={this.state.selectedSubject}
                          />
                      </Route>
                    </Switch>
              </div>
          </Route>
        </Switch>
      </Router>
      
    );
  }
  
}

export default App;
