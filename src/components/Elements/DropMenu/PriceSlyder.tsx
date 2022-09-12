import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [ searchParams, setSerchParams ] = useSearchParams();
  const sliderValues = [filterState.priceFrom, filterState.priceTo];

  const dispatch = useAppDispatch();
  
  // const paramsPriceTo = Number(searchParams.get('priceTo')) || 10000;
  // const paramsPriceFrom = Number(searchParams.get('priceFrom')) || 0;
  // const paramsValues = [paramsPriceFrom, paramsPriceTo];
  const [priceChoice, setPriceChoice] = useState(sliderValues);
  const debouncedSearchTerm = useDebounce(priceChoice, 500);

  // dispatch(booksActions.changeFilter({
  //   priceFrom: priceChoice[0],
  //   priceTo: priceChoice[1],
  // }));

  useEffect(() => {
    // dispatch(booksActions.changeFilter({
    //   priceFrom: paramsPriceFrom,
    //   priceTo: paramsPriceTo}))
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
    searchParams.set('priceFrom', sliderValues[0].toString());
    setSerchParams(searchParams)
    searchParams.set('priceTo', sliderValues[1].toString());
    setSerchParams(searchParams)
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
    <div className="slider_info">
      <p className="slider_info_text">$ {priceChoice[0] / 100}</p>
      <p className="slider_info_text">$ {priceChoice[1] / 100}</p>
    </div>
    </SlyderContainer>
  );
};

export default PriceSlider;
