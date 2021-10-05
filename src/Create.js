import React from 'react';
//import { useParams, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Create = ({data, setData, dataSize, setDataSize}) => {
  //const params = useParams();
  
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    id : '',
    title : '',
    type : '',
    text: '',
    image : '',
    date: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }


  function createDocument(event) {    
    event.preventDefault();

    const setID = data.length+20;
    setDataSize(setID);
    console.log(dataSize);
    
    form.id = data.length+1;
    console.log(form.id);
    //const newData = data.push(form[0]);
    //setData(newData);
    console.log(form);

    setData([...data, form]);

    //console.log(form);
    navigate('/');
    
  }
  
  return (
    <div className="container animRight">
        <form onSubmit={createDocument}>
          <div className="fieldWrapper">
            <label htmlFor="title">title</label>
            <input type="text" id="title" value={form.title} onChange={handleChange} />
          </div>
          {
            form.title
          }
          <div className="fieldWrapper">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={form.date} onChange={handleChange} />
          </div>
          {
            form.date
          }
          
          <button className="btn btn-add">Add document</button>
        </form>
          
            
          
        
    </div>
    
  );
};

export default Create;
