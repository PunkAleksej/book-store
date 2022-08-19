import React from 'react';
import styled from 'styled-components';
import GenreCheker from './assets/images/GenreCheker.svg';

const Menu = styled.div`
  width: 305px;
  padding: 15px;
  border-radius: 16px;
  background-color: #F0F4EF;
`;
type GenrePropsType = {
  isCheked?: boolean;
};

const Genre = styled.div<GenrePropsType>`
  padding: 10px 0px 0px 0px;
  display: flex;
  .genre_marker {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #344966;
    background-image: url(${(props) => (props.isCheked ? GenreCheker : '')});
  }
  .genre_name {
    color: #344966;
    padding: 0px 0px 0px 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
  }
`;

const TestDropMenu:React.FC = () => {
  const genresList = ['Fiction', 'Politics', 'Travel books', 'History'];
  return (
    <Menu>
      <Genre isCheked={false}>
        <div className="genre_marker" />
        <p className="genre_name">Fiction</p>
      </Genre>
      <Genre isCheked>
        <div className="genre_marker" />
        <p className="genre_name">Fiction</p>
      </Genre>
      <Genre isCheked>
        <div className="genre_marker" />
        <p className="genre_name">Fiction</p>
      </Genre>
    </Menu>
  );
};

export default TestDropMenu;
