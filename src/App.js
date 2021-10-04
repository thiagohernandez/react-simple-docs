import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/Normalize.css';
import './css/SimpleDocs.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Home';
import Document from './Document';
import Create from './Create';
import Page404 from './Page404';

function App() {
  const [data, setData] = React.useState([
    {
      id : 1,
      title : 'Simple budget',
      type : 'Advanced',
      image : '/public/img01.jpg',
      date: '02/10/2021'
    },
    {
      id : 2,
      title : 'My notes',
      type : 'Advanced',
      image : '/public/img02.jpg',
      date: '29/09/2021'
    },
    {
      id : 3,
      title : 'Roadmap',
      type : 'Simple',
      image : '/public/img02.jpg',
      date: '29/09/2021'
    },
    {
      id : 4,
      title : 'Send email to Colvin',
      type: 'Simple',
      text: null,
      image: null,
      date: '01/10/2020'
    }
  ]);
  const [dataSize, setDataSize] = React.useState(data.length);
  console.log(`data size: ${dataSize}`);
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData}/>} />
          <Route path="document/:id" element={<Document data={data} setData={setData}/>} />
          <Route path="/create" element={<Create data={data} setData={setData}/>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
