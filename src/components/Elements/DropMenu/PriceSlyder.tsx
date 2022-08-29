import React, { useEffect, useState } from 'react';
import Range from 'rc-slider';
import { SlyderContainer } from './PriceSlyder.styles';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFilteredBooks } from '../../../api/catalog';
import 'rc-slider/assets/index.css';

type DropMenuPropsType = {
  arrowDirection: boolean;
};

const PriceSlider:React.FC<DropMenuPropsType> = (props) => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((store) => store.bookState.filter);
  const sliderValues = [0, 10000]; // [+filterState.priceFrom, +filterState.priceTo];
  const [priceChoice, setPriceChoice] = useState(sliderValues);

  useEffect(() => {
    dispatch(booksActions.changeFilter({ priceFrom: priceChoice[0].toString() }));
    dispatch(booksActions.changeFilter({ priceTo: priceChoice[1].toString() }));
    const filterResponse = async () => {
      try {
        const response = await getFilteredBooks(filterState);
        dispatch(booksActions.loadBooks(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    filterResponse();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, priceChoice]);

  const handleChange = (sliderValues: number | number[]): void => {
    if (!Array.isArray(sliderValues)) return;
    setPriceChoice(sliderValues);
  };

  return (
    <SlyderContainer isVisible={props.arrowDirection}>
      <div className="slider_range-width">
        <Range
          range
          onChange={handleChange}
          defaultValue={priceChoice}
          min={0}
          max={10000}
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
