import React from 'react'
import NavLink from '../NavLink'

export default React.createClass({

  getInitialState: function(){
      return { searchString: '' };
  },

  handleChange: function(e){
      this.setState({searchString:e.target.value});
  },

  render() {

    const data = this.props.route.data;
    const  searchString = this.state.searchString.trim().toLowerCase();

    const  filterMovie = data.filter(function(l){
              return l.name.toLowerCase().match( searchString );
        });

    return (

            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                  <div>
                    {filterMovie.map(function(item){
                      return (
                        <div className="content">

                          <iframe width="100" height="60"  src={item.url}>
                          </iframe>
                          <NavLink className="link" to={"/movie/"+item.id} key={item.id}>{item.name}</NavLink>

                        </div>
                      )
                    })}
                  </div>

            </div>
    )
  }
})
