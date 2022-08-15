import React from 'react';
import { LoadingContainer, LoadingText } from './LoadingPage.Styles';

const Loading:React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
