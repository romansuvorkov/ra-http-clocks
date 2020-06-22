import React, { useState } from 'react';
import ClockModel from './ClockModel';

export default function InputForm (props) {

  const [form, setForm] = useState({
      name: '',
      timeZone: ''
  });

  const handleChange = event => {
    const {name, value} = event.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const {onAdd} = props;


  const handleSubmit = (event) => {
      event.preventDefault();
      onAdd(new ClockModel(form.name, form.timeZone));
  }
 
    
  return (
    <form className='input_interface' onSubmit={handleSubmit}>
      <div className="input_wrappers">
        <label htmlFor="name">Название</label>
        <input id="name" className="input" name="name" onChange={handleChange}/>
      </div>
      <div className="input_wrappers">
        <label htmlFor="timeZone">Временная зона</label>
        <input id="timeZone" className="input" name="timeZone" onChange={handleChange}/>
      </div>
      <button className="input_btn" type="submit">Добавить</button>
    </form>
  )
  

}