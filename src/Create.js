import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Create = ({data, setData}) => {
  const params = useParams();
  const navigate = useNavigate();

  function createDocument() {    
    const newData = data.filter((item) => item.id != params.id);
    setData(newData);
    navigate('/');
  }
  
  return (
    <div className="container animRight">
        
          
            <button onClick={createDocument} className="btn btn-add">Save</button>
          
        
    </div>
    
  );
};

export default Create;
