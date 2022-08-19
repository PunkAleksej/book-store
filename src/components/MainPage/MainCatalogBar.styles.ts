import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  margin: 0px auto;
  padding: 110px 80px 50px 80px;
  .catalog-bar_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: ${(props) => props.theme.palette.darkBlack};
    margin-block-start: 0em;
    margin-block-end: 0em;
  }


  .catalog-bar_selectors_button {
    background: ${(props) => props.theme.palette.lightGreen};
    width: 200px;
    border-radius: 16px;
    border: 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.75px;
    color: ${(props) => props.theme.palette.darkBlue};
  }

  .catalog-bar_selectors {
    display: flex;
    position: relative;
  }

  .book_container {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 80px;
    margin: 0px auto;
    justify-content: space-between;
    width: 1280px;
  }
`;
export const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 80px;
  margin: 0px auto;
  justify-content: space-between;
  width: 1280px;
`;