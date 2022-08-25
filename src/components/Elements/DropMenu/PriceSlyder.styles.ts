import styled from 'styled-components';

export const SlyderContainer = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: flex-start;
  float: left;
  background-color: #F0F4EF;
  padding: 15px;
  position: absolute;
  width: 380px;
  height: 151px;
  left: 0px;
  top: 74px;
  border-radius: 16px;
  .rc-slider {
    position: relative;
    height: 0px;
    padding: 0px 0;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: var(--color-red) !important;
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  .rc-slider-rail {
    position: absolute;
    width: 100%;
    height: 12px !important;
    background-color: #D6D8E7 !important;
  }

  .rc-slider-track {
    position: absolute;
    height: 12px !important;
    background-color: #BFCC94 !important;
  }

  .rc-slider-handle {
    opacity: 1 !important;
    position: absolute;
    width: 32px !important;
    height: 32px !important;
    cursor: pointer;
    cursor: -webkit-grab;
    cursor: grab;
    touch-action: pan-x;
    border: 2px solid #BFCC94 !important;
    border-radius: 40px;
  }

  .rc-slider-handle-1 {
    transform: translateX(0);
  }

  .rc-slider-handle-2 {
    transform: translateX(-100%);
  }

  .slider_range-width {
    width: 380px;
    height: 12px;
    border-radius: 40px;
    margin: 50px 0px 0px 0px;
  }

  .slider_range-alignment {
 
  }

  .slider_range-text {
    display: flex;
    padding: 15px 0px 0px 0px;
    justify-content: space-between;
    color: #344966 !important;
  }
`;
