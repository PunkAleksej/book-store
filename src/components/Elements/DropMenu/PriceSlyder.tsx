import React, { useEffect, useState } from 'react';
import Range from 'rc-slider';
import { SlyderContainer } from './PriceSlyder.styles';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFilteredBooks } from '../../../api/catalog';
import 'rc-slider/assets/index.css';

type DropMenuPropsType = {
  direction: number;
};

const PriceSlider:React.FC<DropMenuPropsType> = (props) => {
  const dispatch = useAppDispatch();
  const sliderValues = [0, 10000];
  const [priceChoice, setPriceChoice] = useState(sliderValues);
  const filterState = useAppSelector((store) => store.bookState.filter);
  const testAxios = async () => {
    try {
      const response = await getFilteredBooks(filterState);
      dispatch(booksActions.loadBooks(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  testAxios();
  useEffect(() => {
    dispatch(booksActions.changeFilter({ priceFrom: priceChoice[0].toString() }));
    dispatch(booksActions.changeFilter({ priceTo: priceChoice[1].toString() }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, priceChoice[0].toString(), priceChoice[1].toString()]);

  const handleChange = (sliderValues: any): void => {
    setPriceChoice(sliderValues);
  };

  return (
    <SlyderContainer isVisible={props.direction}>
      <div className="slider_range-width">
        <Range
          range
          onChange={handleChange}
          defaultValue={sliderValues}
          min={sliderValues[0]}
          max={sliderValues[1]}
        />
      </div>
    <div className="slider_range-text">
      <p>$ {priceChoice[0]}</p>
      <p>$ {priceChoice[1]}</p>
    </div>
    </SlyderContainer>
  );
};

export default PriceSlider;
