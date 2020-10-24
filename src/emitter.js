import createStreamerFrom from './api/streamer';
import generateCarData from './api/data-generator';

/**
 * this emitter handles the creation of new streamers as well as updating the relevant listeners
 */
class Emitter {
    streamMap = new Map();
    cbMap = new Map();
    filterLowFuel = false;

    subscribe = (vin, cb) => {
        const streamer = createStreamerFrom(() => generateCarData(vin))
        streamer.subscribe(this.emit);
        streamer.start();
        this.streamMap.set(vin, streamer);
        this.cbMap.set(vin, cb);
    }

    unsubscribe = (vin) => {
        // normally I would clean the streamer and keep it alive instead of deleting it but it seemed meaningless here
        const streamer = this.streamMap.get(vin);
        streamer.stop();
        this.streamMap.delete(vin);
        this.cbMap.delete(vin);
    }

    emit = (carData) => {
        const {vin} = carData;
        const cb = this.cbMap.get(vin);
        if (this.filterLowFuel && carData.fuel > 0.15) {
            cb(null);
        } else {
            cb(carData);
        }
    }

    filterLowFuelEvents = (shouldFilter) => {
        this.filterLowFuel = shouldFilter;
    }
}

export default Emitter;