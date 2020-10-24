import React, { Component } from 'react'
import './App.css'
import EventList from './components/EventList';
import VinView from './components/VinView';
import Emitter from './emitter';

class App extends Component {
  emitter = new Emitter();
  state = {cars: []}

  onSubmit = (value) => {
    const newCar = {vin: value, isChecked: true};
    this.setState({cars: [...this.state.cars, newCar]});
  }

  toggleFilter = (vin) => {
    const newCars = [...this.state.cars];
    const car = newCars.find((c => c.vin === vin));
    car.isChecked = !car.isChecked;
    this.setState({cars: newCars})
  }

  render() {
    return (
      <div className="App">
        <VinView onSubmit={this.onSubmit} vins={this.state.cars} toggleFilter={this.toggleFilter} />
        <div>
          <EventList vins={this.state.cars} emitter={this.emitter} />
        </div>
      </div>
    )
  }
}

export default App
