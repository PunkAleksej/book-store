import React, { useState } from 'react';
import { MainPageContainer } from './MainCatalogBar.styles';
import DropMenuButton from '../Elements/DropMenu/Elements/DropButton';

const CatalogBar:React.FC = () => {
  const [isActiveSlider, setIsActiveSlider] = useState(false);
  const [isActiveSortPriority, setIsActiveSortPriority] = useState(false);
  const [isActiveGenres, setIsActiveGenres] = useState(false);
  const changeSliderState = () => {
    setIsActiveSlider(!isActiveSlider);
    setIsActiveSortPriority(false);
    setIsActiveGenres(false);
  };
  const changeSortPriorityState = () => {
    setIsActiveSortPriority(!isActiveSortPriority);
    setIsActiveGenres(false);
    setIsActiveSlider(false);
  };
  const changeGenresState = () => {
    setIsActiveGenres(!isActiveGenres);
    setIsActiveSlider(false);
    setIsActiveSortPriority(false);
  };

  return (
    <MainPageContainer>
        <h1 className="catalog-bar_title">
          Catalog
        </h1>

        <div className="catalog-bar_selectors">
          <DropMenuButton
          buttonText="Genres"
          direction={isActiveGenres ? 1 : 0}
          onClick={changeGenresState}
          dropMenuType="genresMenu"
          />
          <DropMenuButton
          buttonText="Price"
          direction={isActiveSlider ? 1 : 0}
          onClick={changeSliderState}
          dropMenuType="priceSlider"
          />
          <DropMenuButton
          buttonText="Sort by price"
          direction={isActiveSortPriority ? 1 : 0}
          onClick={changeSortPriorityState}
          dropMenuType="sortPriority"
          />

        </div>
    </MainPageContainer>
  );
};

export default CatalogBar;

// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import { MainPageContainer } from './MainCatalogBar.styles';
// import toastsWriter from '../utils/Toasts';
// import PriceSlider from '../Elements/DropMenu/PriceSlyder';
// import FilterByGenre from '../Elements/DropMenu/DropMenu';
// import DropMenuButton from '../Elements/DropMenu/Elements/DropButton';
// import SortPriorityMenu from '../Elements/DropMenu/SortPriorityMenu';

// const CatalogBar:React.FC = () => {
//   const [isActiveSlider, setIsActiveSlider] = useState(false);
//   const [isActiveSortPriority, setIsActiveSortPriority] = useState(false);
//   const changeSliderState = () => {
//     setIsActiveSlider(!isActiveSlider);
//   };
//   const changeSortPriorityState = () => {
//     setIsActiveSortPriority(!isActiveSortPriority)
//   };
//   const formik = useFormik({
//     initialValues: {
//       genre: '',
//       price: '',
//       sortBy: '',
//     },
//     onSubmit: async (values) => {
//       try {
//         const response = '';
//       } catch (error: any) {
//         const errorText = error.response.data
//           ? error.response.data.payload[0].message
//           : error.message;
//         toastsWriter({ text: errorText, style: 'error' });
//       }
//     },
//   });
//   return (
//     <MainPageContainer>
//         <h1 className="catalog-bar_title">
//           Catalog
//         </h1>

//         <div className="catalog-bar_selectors">
//           <FilterByGenre />
//           <button className="catalog-bar_selectors_button" onClick={changeSliderState}>
//             Price
//             {isActiveSlider ? <PriceSlider /> : null}
//           </button>
//           {/* <DropMenuButton
//           buttonText="12234"
//           direction={isActiveSortPriority ? 1 : 0}
//           onClick={changeSortPriorityState}
//           dropMenuType="sortPriority"
//           /> */}
//           {/* {isActiveSortPriority ? <SortPriorityMenu /> : null} */}
//           <button className="catalog-bar_selectors_button" onClick={changeSortPriorityState}>
//             Sort by price
//             {isActiveSortPriority ? <SortPriorityMenu /> : null}
//           </button>

//         </div>
//     </MainPageContainer>
//   );
// };

// export default CatalogBar;
