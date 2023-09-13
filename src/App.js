
import React, { useEffect, useState } from 'react';
import Routing from './Routing';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import poster from './Poster.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Icon from './assets/Icon.png'
import Rating from './assets/Rating.png'



const API_URL='https://api.themoviedb.org/3/movie/popular?api_key=1e8f8beb706aa47d066328f608f704c8'
function App() {
  const[movies,setMovies]=useState([]);
useEffect(()=>{
  fetch(API_URL)
  .then((res)=>res.json())
  .then(data=>{
    console.log(data);
    setMovies(data.results);
  })
},[]
)

  return (
   <>
   <div id='bodyy' className='body_img'>
    <Navbar/>
  <Container>
  <Row>
    <Col lg={4} className='wrap_text'>
    <h3 className='text-light img_text'>John Wick 3 :<br/> Parabellum</h3>
    <img src={Rating} className="icon px-2 py-1" alt="Rating" />
  <p className='text-light text_two pt-1'>John Wick is on the run after killing a member of the international assassins' guild, 
    and with a $14 million price tag on his head,
     he is the target of hit men and women everywhere.</p>
     <Button id='watch'><img src={Icon} className="icon px-2 py-1" alt="Logo" />WATCH TRAILER</Button>
    </Col>
  </Row>
  </Container>
 
   </div>
    <div className='container mt-3 py-5' >
    <h3 className='feature_text'>Featured Movie</h3>
      <div className='grid mt-5'>
      {movies.map((movieReq)=><MovieBox key={movieReq.id}{...movieReq}/>)}
      
      </div>
  
    </div>
    </>
  );
}

export default App;
