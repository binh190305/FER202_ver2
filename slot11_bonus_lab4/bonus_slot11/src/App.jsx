import { useState } from 'react'

import './App.css'
import CounterComponent from './components/CounterComponent'
import FormComponent from './components/FormComponent'
import LightSwitch from './components/LightSwitch'
import RegisterForm from './components/RegisterForm'
import ProfileForm from './components/ProfileForm'
import LoginForm from './components/LoginForm'
import LoginForm2 from './components/LoginForm2'
import SearchItem from './components/SearchItem'
import AccountSearch from './components/AccountSearch'

function App() {
  

  return (
    <>
      <CounterComponent/>
      <FormComponent/>
      <LightSwitch/>
      <RegisterForm/>
      <ProfileForm/>
      <LoginForm/>
      <LoginForm2/>
      <SearchItem/>
      <AccountSearch/>
    </>
  )
}

export default App
