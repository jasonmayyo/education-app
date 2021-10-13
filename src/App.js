import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../src/Components/Login/Login'

import Header from '../src/Containers/Header/Header'
import SelectGrade from '../src/Components/SelectGrade/SelectGrade'
import SelectSubject from '../src/Components/SelectSubject/SelectSubject'
import SubjectHome from '../src/Components/SubjectHome/SubjectHome'
import LessonHome from '../src/Components/LessonHome/LessonHome'
import React,{ Component } from 'react';
import LoadingPage from '../src/Containers/LoadingScreen/LoadingScreen'

import {auth} from '../src/Utils/firebase'
import {provider} from '../src/Utils/firebase'

class App extends Component {
  state = {
    selectedGrade: '',
    selectedSubject: {
      Subject: 'State not updated',
      Teacher: '...',
      URL: ''
    },
    selectedLesson: '',
    user: null,
    showDrawer: false,
    loading: true
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => { 
      this.setState({
        user: user,
        loading: false
      })
    })
  }

  setGradeHandler = (selectedGrade) => {
    this.setState({
      selectedGrade: selectedGrade
    })
  }

  setSubjectHandler = (selectedSubject, Teacher, URL) => {
    const updatedselectedSubject = {...this.state.selectedSubject}
    updatedselectedSubject.Subject = selectedSubject
    updatedselectedSubject.Teacher = Teacher
    updatedselectedSubject.URL = URL
    this.setState({
       selectedSubject: updatedselectedSubject
    })
  }

  setSelectedLessonHandler = (Lesson) => {
    this.setState({
      selectedLesson: Lesson
    })
  }

  setDrawer = () => {
    this.setState({
      showDrawer: !this.state.showDrawer
    })
  }

  signInWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        console.log(result.credential)
      })
      .catch(e => {
        console.log(e)
      })
  }

  Logout = () => {
    auth.signOut()
  }
  
  render( ) {
    return (
      <Router>
        <Switch>
          {this.state.loading ? 
          <Route path='/'>
            <LoadingPage />
          </Route> :
          <Route path='/'>
            {this.state.user ?
            <div className='App'>
                <Redirect to='/select-grade'/>  
                  <Header 
                    selectedGrade={this.state.selectedGrade}
                    setDrawer={this.setDrawer}
                    Logout={this.Logout}
                    showDrawer={this.state.showDrawer}
                  />
                  {/* <BackDrop
                    showDrawer={this.state.showDrawer}
                    setDrawer={this.setDrawer} 
                  /> */}
                    <Switch>
                      <Route exact path="/select-grade">
                          <SelectGrade  
                            userName={this.state.user.displayName}
                            setGrade={this.setGradeHandler}
                          />
                      </Route>
                      <Route exact path='/:grade/select-subject' render={(props) => 
                          <SelectSubject 
                            {...props}
                            selectedGrade={this.state.selectedGrade}
                            setSelectedGrade={this.setGradeHandler}
                            setSubject={this.setSubjectHandler}
                          />}>
                          
                      </Route>
                      <Route exact path='/:grade/:subject/' render={(props) => 
                        <SubjectHome
                            {...props}
                            selectedGrade={this.state.selectedGrade}
                            selectedSubject={this.state.selectedSubject}
                            Lesson={this.state.selectedLesson}
                            selectedLesson={this.setSelectedLessonHandler}
                        />}>
                      </Route>
                      <Route exact path='/:grade/:subject/:lesson/'>
                          <LessonHome 
                            selectedLesson={this.state.selectedLesson}
                            selectedGrade={this.state.selectedGrade}
                            selectedSubject={this.state.selectedSubject}
                          />
                      </Route>
                    </Switch>
              </div> :
                <Login signin={this.signInWithGoogle}/>
            }
          </Route>}
        </Switch>
      </Router>
      
    );
  }
  
}

export default App;
