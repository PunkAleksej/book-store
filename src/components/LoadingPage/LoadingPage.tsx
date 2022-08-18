import React from 'react';
import { LoadingContainer, LoadingText } from './LoadingPage.styles';

const Loading:React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
