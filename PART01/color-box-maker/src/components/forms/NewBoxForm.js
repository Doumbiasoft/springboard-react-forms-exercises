import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
   id: uuid(),
    width:'',
    height:'',
    backgroundColor:''

  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <div className='NewBoxForm'>
    <form onSubmit={handleSubmit}>
          <p>
          <label>
            Width: 
            <input
              name="width"
              type="number"
              value={formData.width}
              onChange={handleChange}
            />
          </label>
        </p>
        <p> 
          <label>
            Height: 
            <input
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
          </p>
          <p> 
            <label>
            Background Color: 
            <input
            name="backgroundColor"
              type="text"
              value={formData.backgroundColor}
              onChange={handleChange}
            />
          </label>
          </p>
          <button>Add Box</button>
        </form>
    </div>
   
  );
};

export default NewBoxForm;
