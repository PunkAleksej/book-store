import React, { useEffect, useState } from 'react';
import Range from 'rc-slider';
import toastsWriter from '../../utils/Toasts';
import { SlyderContainer } from './PriceSlyder.styles';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFilteredBooks } from '../../../api/catalog';
import 'rc-slider/assets/index.css';
import useDebounce from '../../utils/useDebounce';

type DropMenuPropsType = {
  arrowDirection: boolean;
};

const PriceSlider:React.FC<DropMenuPropsType> = (props) => {
  const filterState = useAppSelector((store) => store.bookState.filter);
  const sliderValues = [filterState.priceFrom, filterState.priceTo];
  const dispatch = useAppDispatch();
  const [priceChoice, setPriceChoice] = useState(sliderValues);
  const debouncedSearchTerm = useDebounce(priceChoice, 500);

  dispatch(booksActions.changeFilter({
    priceFrom: priceChoice[0],
    priceTo: priceChoice[1],
  }));

  useEffect(() => {
    if (debouncedSearchTerm) {
      (async () => {
        try {
          const response = await getFilteredBooks(filterState);
          dispatch(booksActions.loadBooks(response.data));
        } catch (err) {
          toastsWriter({ text: 'Something went wrong!', style: 'error' });
        }
      })();
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [debouncedSearchTerm]);

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
      <p>$ {priceChoice[0] / 100}</p>
      <p>$ {priceChoice[1] / 100}</p>
    </div>
    </SlyderContainer>
  );
};

export default PriceSlider;
