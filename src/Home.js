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
        {
          data.map((dataItem) => (
            <Card key={dataItem.id} data={dataItem} />
          ))
        }
      </div>
  );
};

export default Home;
