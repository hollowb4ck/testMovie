import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import News from './modules/Movie/Movie'
import NewsDetail from './modules/Movie/movie-detail'

const dataMovie = [
  {
    id:1,
    name:"Adele - Hello",
    url:'https://www.youtube.com/embed/YQHsXMglC9A'
  },
  {
    id:2,
    name:"Dangerous Woman",
    url:'https://www.youtube.com/embed/9WbCfHutDSE'
  },
  {
    id:3,
    name:"Into You",
    url:'https://www.youtube.com/embed/1ekZEVeXwek'
  },
  {
    id:4,
    name:"Meghan Trainor - NO",
    url:'https://www.youtube.com/embed/cMTAUr3Nm6I'
  },
  {
    id:5,
    name:"Nick Jonas - Close ft. Tove Lo",
    url:'https://www.youtube.com/embed/XgJFqVvb2Ws'
  },
  {
    id:6,
    name:"Calvin Harris & Disciples - How Deep Is Your Love",
    url:'https://www.youtube.com/embed/EgqUJOudrcM'
  },
  {
    id:7,
    name:"Taylor Swift - You Belong With Me",
    url:'https://www.youtube.com/embed/VuNIsY6JdUw'
  },
  {
    id:8,
    name:"Charlie Puth - One Call Away [Official Video]",
    url:'https://www.youtube.com/embed/BxuY9FET9Y4'
  },
  {
    id:9,
    name:"Selena Gomez - Good For You",
    url:'https://www.youtube.com/embed/1TsVjvEkc4s'
  },
  {
    id:10,
    name:"ZAYN - PILLOWTALK",
    url:'https://www.youtube.com/embed/C_3d6GntKbk'
  }
]

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/movie" component={News} data={dataMovie} />

    </Route>
      <Route path="/movie/:id" component={NewsDetail} data={dataMovie}/>

  </Router>
), document.getElementById('app'))
