import React, { Component } from 'react';
import Range from 'rc-slider';
import { SlyderContainer } from './PriceSlyder.styles';
import 'rc-slider/assets/index.css';

class PriceSlider extends Component {
  state = { sliderValues: [100, 1000] };

  handleChange = (sliderValues: any) => {
    this.setState({ sliderValues });
  };

  render() {
    const { sliderValues } = this.state;

    return (
      <SlyderContainer>
        <div className="slider_range-width">
          <Range
            range
            onChange={this.handleChange}
            defaultValue={[100, 1000]}
            min={100}
            max={1000}
          />
        </div>
      <div className="slider_range-text">
        <p>$ {sliderValues[0]}</p>
        <p>$ {sliderValues[1]}</p>
      </div>
      </SlyderContainer>
    );
  }
}

export default PriceSlider;
