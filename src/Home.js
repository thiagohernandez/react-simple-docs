import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Components/Card/Card';

const Home = ({data}) => {
    console.log(data);
  return (
      <div className="container animRight">
        <h1>
            Home
        </h1>
        <Link to='/create' className="btn btn-add">Add new</Link>
        {
          data.map((dataItem) => (
            <Card key={dataItem.id} data={dataItem} />
          ))
        }
      </div>
  );
};

export default Home;
