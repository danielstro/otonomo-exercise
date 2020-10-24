import React, { Component } from 'react';
import './VinView.scss';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

class VinView extends Component {
    state = { inputValue: '' }

    onInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <Input value={this.state.inputValue} onChange={this.onInputChange} />
                    <Button onClick={this.onSubmit}>+ Add</Button>
                </div>
                <div className="vin-list">
                    {this.props.vins.map(({vin, isChecked}) => {
                        const onChange = () => {
                            this.props.toggleFilter(vin);
                        }
                        return (
                            <Checkbox key={vin} checked={isChecked} onChange={onChange}>{vin}</Checkbox>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default VinView;