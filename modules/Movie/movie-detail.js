import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
  handleRedirect(){
      browserHistory.push('/movie');
  },

  render() {

    const Data = this.props.route.data;
    const id = this.props.params.id;
    const movie = Data.filter(function( item ){
                if( item.id == id ){
                  return item;
                }
    });
    return (
      <div>
          <button onClick={this.handleRedirect.bind(this)}>back</button>
          <iframe className="movie" width="600" height="400"  src={movie[0].url+"?autoplay=1"}>
          </iframe>
          <div className="movieName">{movie[0].name}</div>
      </div>
    )
  }
})
