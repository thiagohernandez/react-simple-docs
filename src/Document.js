import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
            <div className="pageDocumentNav">
                <Link className="btn btn-link" to='/'>Previous Document</Link>
                <Link className="btn btn-link" to='/'>Next Document</Link>
            </div>
            <div className="pageHeader">
              <div className="pageTitle">
                <h1>{dataDocument.title}</h1>
                <div className="badge">{dataDocument.type}</div>
              </div>
            </div>
            <div className="pageBody">
              
                {
                  dataDocument.type != 'Simple' &&
                  <div className="pageBodyContent" dangerouslySetInnerHTML={{ __html: dataDocument.text }} />
                }
                {
                  dataDocument.type == 'Advanced' &&
                  <div className="pageBodyImage">
                      <img src={dataDocument.image ? dataDocument.image : 'img/thumbnail.jpg'} alt={dataDocument.title} loading="lazy" />    
                  </div>
                }
              
            </div>
            <div className="pageFooter">
              <div className="pageActions">
                <button className="btn btn-accent" onClick={deleteDocument}>Delete Document</button>
              </div>
            </div>

            
            
          </div>
        ))}
    </div>
    
  );
};

export default Document;
