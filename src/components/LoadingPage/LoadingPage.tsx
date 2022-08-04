import React from 'react';
import styled from 'styled-components';

const Loading:React.FC = () => {
  const LoadingContainer = styled.div`
    width: 100%;
    margin: 0px auto;
    justify-content: center;
  `
  const LoadingText = styled.p`
    font-size: 64px;
    text-align: center;
    padding-top: 400px;
  `
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  )
};

export default Loading;