import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Components/Card/Card';

const Home = ({data}) => {
  const [filter, setFilter] = React.useState('');
  function handleFilter(target) {
    console.log(target);
  }

    console.log(data);
  return (
      <div className="container animRight">
        <div className="pageHeader">
          <div className="pageTitle">
            <h1>All Docs</h1>
          </div>
          <div className="pageActions">
            <select className="formControl" value={filter} id="type" onChange={handleFilter(event.target.value)}>
                  <option value="Simple">Simple</option>
                  <option value="Custom">Custom</option>
                  <option value="Advanced">Advanced</option>
              </select>
            <Link to='/create' className="btn btn-accent">Add new</Link>
          </div>
        </div>
        
        {
          data.map((dataItem) => (
            <Card key={dataItem.id} data={dataItem} />
          ))
        }
      </div>
  );
};

export default Home;
