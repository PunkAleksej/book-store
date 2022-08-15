import 'styled-components';

const theme = {
  palette: {
    ligthGrey: '#B9BAC4',
    darkBlue: '#344966',
    darkBlack: '#0D1821',
    green: '#BFCC94',
    darkGreen: '#8D9F4F',
    white: '#FFFFFF',
    lightGreen: '#F0F4EF',
    lightBlue: '#D6D8E7',
    error: '#C30052',
    success: '#00966D',
    successLight: '#F3FDFA',
    errorLight: '#FFF2F7',
  },
};

type ThemeType = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export interface DefaultTheme extends ThemeType {// eslint-disable-line @typescript-eslint/no-empty-interface, @typescript-eslint/naming-convention, max-len
    //
  }
}

export default theme;
