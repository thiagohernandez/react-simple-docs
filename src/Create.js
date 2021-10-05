import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({data, setData, dataSize, setDataSize}) => {
  //const params = useParams();
  
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    id : '',
    title : '',
    type : 'Simple',
    text: '',
    image : '',
    date: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  /* 
  //Experimental
  */
  const [baseImage, setBaseImage] = React.useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  /* 
  // ./end Experimental
  */


  function createDocument(event) {    
    event.preventDefault();

    const setID = dataSize+1;
    setDataSize(setID);
    console.log(dataSize);
    
    form.id = dataSize;
    form.image = baseImage;
    
    //const newData = data.push(form[0]);
    //setData(newData);
    console.log(form);

    setData([...data, form]);

    //console.log(form);
    navigate('/');
    
  }
  
  return (
    <div className="container animRight">
        <h1>Create new document</h1>
        <form onSubmit={createDocument}>
            <div className="fieldWrapper">
                <label htmlFor="title">Title</label>
                <input className="formControl" type="text" id="title" value={form.title} onChange={handleChange} />
            </div>
            {
                form.title
            }
            <div className="fieldWrapper">
                <label htmlFor="date">Date</label>
                <input className="formControl" type="date" id="date" value={form.date} onChange={handleChange} />
            </div>
            {
                form.date
            }
            <div className="fieldWrapper">
                <label htmlFor="type">Type</label>
                <select className="formControl" value={form.type} id="type" onChange={handleChange}>
                    <option value="Simple">Simple</option>
                    <option value="Custom">Custom</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
            {
                form.type != 'Simple' && 
                <div className="fieldWrapper">
                    <label htmlFor="text">Text</label>
                    <input className="formControl" type="text" id="text" value={form.text} onChange={handleChange} />
                </div>
            }
            {
                form.type == 'Advanced' &&
                <div className="fieldWrapper">
                    <label htmlFor="image">Image</label>
                    <input className="formControl" type="file" onChange={(e) => { uploadImage(e); }} />
                </div>
            } 
            <div class="formActions">
                <button className="btn btn-accent">Save document</button>
            </div>
        </form>
          
            
          
        
    </div>
    
  );
};

export default Create;
