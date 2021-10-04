import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Document = ({data, setData}) => {
  const params = useParams();
  const navigate = useNavigate();

  function deleteDocument() {    
    const newData = data.filter((item) => item.id != params.id);
    setData(newData);
    navigate('/');
  }
  
  return (
    <div className="container animRight">
        {data.filter(dataItem => dataItem.id == params.id).map(dataDocument => (
          <div className="pageDocument" key={dataDocument.id}>
            <h1>{dataDocument.title}</h1>
            <h2>{dataDocument.type}</h2>
            <button onClick={deleteDocument}>Delete</button>
          </div>
        ))}
      <h3>
        id: {params.id}
      </h3>
    </div>
    
  );
};

export default Document;
