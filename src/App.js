import React, { Component } from 'react';
import './App.css';
import HotelCard from './HotelCard';
class App extends Component {
  state = {
    hotels: [],
    searchedHotels: [],
  }
  componentDidMount(){
    fetch('https://api.myjson.com/bins/tl0bp')
    .then(response=>response.json())
    .then(json=>{
      this.setState({
        hotels:json.hotels,
        searchedHotels:json.hotels,
      })
    })
  }

  handleSortName = e =>{
   this.setState({
    searchedHotels:this.state.searchedHotels.sort((a,b)=> a.name.localeCompare(b.name))
   })
  }

  handleSortPrice = e =>{
    this.setState({
      searchedHotels:this.state.searchedHotels.sort((a,b) => a.price - b.price)
    })
  }
  handleSearch = e =>{
    this.setState({
      searchedHotels:this.state.hotels.filter(hotel =>
          hotel.name.toLowerCase().indexOf(e.target.value) > -1
      )
    })
  }

  render() {
    const {searchedHotels} = this.state;
    return (
      <div className="App container-fluid">
        <div className='container'>
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <input className='hotel-search-box' type="text" placeholder="search hotels..." label="Search Hotels" onChange={this.handleSearch}/>
            <div className='row options'>
              <div className='col-md-3 col-xs-12'>
                 <p className="total-hotels">total hotels: <span className='hoetls-number'>{searchedHotels.length}</span></p>
              </div>
              <div className='col-md-3 col-xs-12'></div>
              <div className="col-md-3 col-xs-12">
                  <button className="btn btn-primary" onClick={this.handleSortName}>sort by name</button>
              </div>
              <div className="col-md-3 col-xs-12">
                  <button className="btn btn-primary" onClick={this.handleSortPrice}>sort by price</button>
              </div>
            </div>
            {
              searchedHotels.length > 0 ? 
              <div className='row'> 
              {searchedHotels.map(hotel => {
                return(
                  <HotelCard name={hotel.name} city={hotel.city} price={hotel.price} key={hotel.name}/>
                )
              })}
            </div>
            :
            <div className='spinner'>
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            }
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
