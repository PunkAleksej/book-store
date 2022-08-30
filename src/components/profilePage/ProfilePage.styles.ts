import styled from 'styled-components';
import profilePhoto from '../../assets/images/profilePhoto.png';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0px 80px 80px 80px;
  display: flex;
  margin: 0px auto;
  justify-content: start;
  .profile_info {
    display:  flex;
    justify-content:  space-between;
  }
  .profile_info_title {
    margin: 0px 0px 30px 0px;
  }
  .profile_info_text {
    color: #8D9F4F;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    font-size: 14px;
    line-height: 21px;
    margin: 5px 0px;
    user-select: none;
  }
`;

export const AuthMenuTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${(props) => props.theme.palette.darkBlack};
`;
export const AuthMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  justify-content: center;
  justify-content: start;
  align-items: flex-start;
`;
export const AuthMenuText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.palette.darkBlue};
  padding: 9px 0px 30px 0px;
`;

export const ProfileMenuInput = styled.input`
  background: ${(props) => props.theme.palette.lightGreen};
  border-radius: 16px;
  border: 0px;
  width: 413px;
  padding: 18px 0px;
  display: block;
`;

export const AuthMenuButton = styled.div`
  background: ${(props) => props.theme.palette.darkBlue};
  border-radius: 16px;
  color: ${(props) => props.theme.palette.lightGreen};
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  padding: 10px 50px;
  max-height: 44px;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
`;

export const ProfileImg = styled.div`
  background-image: url(${profilePhoto});
  background-size: cover;
  background-repeat: no-repeat;
  width: 305px;
  height: 305px;
  margin: 0px 128px 0px 0px;
`;
