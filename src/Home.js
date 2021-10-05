import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Components/Card/Card';

const Home = ({data}) => {
    console.log(data);
  return (
      <div className="container animRight">
        <div className="pageHeader">
          <div className="pageTitle">
            <h1>All Docs</h1>
          </div>
          <div className="pageActions">
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
