import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } 
from 'react-router-dom'
import Login from '../src/Components/Login/Login'

import Header from '../src/Containers/Header/Header'
import SelectGrade from '../src/Components/SelectGrade/SelectGrade'
import SelectSubject from '../src/Components/SelectSubject/SelectSubject'
import SubjectHome from '../src/Components/SubjectHome/SubjectHome'
import LessonHome from '../src/Components/LessonHome/LessonHome'
import React,{ Component } from 'react';
import LoadingPage from '../src/Containers/LoadingScreen/LoadingScreen'
import Aux from '../src/hoc/Aux'
import Blocked from '../src/Containers/Blocked/Blocked'
import Home from '../src/Components/Home/Home'

import {auth} from '../src/Utils/firebase'
import {provider} from '../src/Utils/firebase'
import PastPapers from '../src/Components/PastPapers/PastPapers'
import GradePastPapers from './Components/PastPapers/GradePastPapers/GradePastPapers';
import PastPaperFolder from '../src/Components/PastPapers/PastPaperFolder/PastPaperFolder'

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
    loading: true,
    blocked: false,
    selectedYear: '',
    selectedMonth: ''
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => { 
      this.setState({
        user: user,
        loading: false,
        showDrawer: false
      })
      const useremail = user.email;
      const splitEmail = useremail.split("@");
      const domain = splitEmail[1]
      if(domain === 'wbhs.co.za') {
        this.setState({
          blocked: false
        })
      } else {
        this.setState({
          blocked: true
        })
      }
      
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
      const useremail = result.user.email;
      const splitEmail = useremail.split("@");
      const domain = splitEmail[1]
      if(domain === 'wbhs.co.za') {
        this.setState({
          blocked: false
        })
      } else {
        this.setState({
          blocked: true
        })
      }
    })
  }

  selectedYear = (selectedYear, selectedMonth) => {
    this.setState({
        selectedYear: selectedYear,
        selectedMonth: selectedMonth
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
                  {this.state.blocked ?
                    <Blocked 
                      Logout={this.Logout}
                    /> :
                      <Aux>
                        <Redirect to='/'/>
                        <Header 
                          selectedGrade={this.state.selectedGrade}
                          setDrawer={this.setDrawer}
                          Logout={this.Logout}
                          showDrawer={this.state.showDrawer}
                        />
                          <Switch>

                            <Route exact path='/'> 
                              <Home 
                                  userName={this.state.user.displayName}
                              />
                            </Route>

                            <Route exact path='/past-papers'>
                                <PastPapers 
                                  userName={this.state.user.displayName}
                                  setGrade={this.setGradeHandler}
                                />
                            </Route>

                            <Route exact path='/past-papers/:grade'>
                                <GradePastPapers 
                                  selectedGrade={this.state.selectedGrade}
                                  setselectedYear={this.selectedYear}
                                  selectedYear={this.state.selectedYear}
                                />
                            </Route>

                            <Route exact path='/past-papers/:grade/:foldername'>
                              <PastPaperFolder 
                                  selectedYear={this.state.selectedYear}
                                  selectedMonth={this.state.selectedMonth}
                                  selectedGrade={this.state.selectedGrade}
                              />
                            </Route>

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
                      </Aux>
                  }
                </div> 
                :
                <Login signin={this.signInWithGoogle}/>
              }
          </Route>}
        </Switch>
      </Router>
      
    );
  }
  
}

export default App;
