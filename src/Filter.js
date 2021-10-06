import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Card from './Components/Card/Card';

const Filter = ({data}) => {
    const params = useParams();
    const [select, setSelect] = React.useState('');
    const navigate = useNavigate();

    function handleFilter(value) { 
        console.log(value);
        navigate(`/filter/${value}`);
    }

  return (
      <div className="container animRight">
        <div className="pageHeader">
          <div className="pageTitle">
            <h1><span>Documents by type:</span> {params.type}</h1>
          </div>
          <div className="pageActions">
              <select className="formControl" value={select} onChange={({ target }) => handleFilter(target.value)}>
                  <option value="" disabled>Filter by type</option>
                  <option value="Simple">Simple</option>
                  <option value="Custom">Custom</option>
                  <option value="Advanced">Advanced</option>
              </select>
            <Link to='/create' className="btn btn-accent">Add new</Link>
          </div>
        </div>
        
        {
            data.filter(dataItem => dataItem.type == params.type).map(dataFilteredList => (
            <Card key={dataFilteredList.id} data={dataFilteredList} />
        ))}
      </div>
  );
};

export default Filter;
