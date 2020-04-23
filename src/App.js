import React, { Component } from 'react';
import Description from './components/description/Description';
import Form from './components/form/Form';
import FormHead from './components/formhead/FormHead'
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div className='description_component'><Description /></div>
        <div className='spacer'></div>
        <div className='from_components'>
          <FormHead />
          <Form />
        </div>
      </main>
    )
  }
}

export default App

