import React, { Component } from 'react'
import Checkbox from './Checkbox';
import EventItem from './EventItem';

class EventList extends Component {
    state =  {filterLowFuel: false};

    toggleFilter = () => {
        const newValue = !this.state.filterLowFuel
        this.setState({filterLowFuel: newValue});
        this.props.emitter.filterLowFuelEvents(newValue);
    }
    render() {
        return (
            <div>
                <Checkbox checked={this.state.filterLowFuel} onChange={this.toggleFilter}>Filter events where fule level is under 15%</Checkbox>
                {this.props.vins.filter(v => v.isChecked).map(({vin}) => <EventItem key={vin} vin={vin} emitter={this.props.emitter} />)}
            </div>
        )
    }
}

export default EventList;