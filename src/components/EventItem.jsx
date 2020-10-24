import React, { Component } from 'react';
import EventNotification from './EventNotification';

class EventItem extends Component {
    state = { carData: null }

    componentDidMount() {
        this.props.emitter.subscribe(this.props.vin, this.updateState);
    }

    componentWillUnmount() {
        this.props.emitter.unsubscribe(this.props.vin);
    }

    updateState = carData => {
        this.setState({ carData })
    }

    render() {
        // wasn't sure what to do before we get the data. I would probably show a sekelton or something but for this exercise I decide to not render
        return this.state.carData ? <EventNotification carEvent={this.state.carData} /> : null;
    }
}

export default EventItem;