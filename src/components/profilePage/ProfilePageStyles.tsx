import styled from 'styled-components';
import profilePhoto from '../../assets/images/profilePhoto.png';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0px 80px 80px 80px;
  display: flex;
  margin: 0px auto;
  justify-content: start;
`

export const AuthMenuTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
`
export const AuthMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  justify-content: center;
  justify-content: start;
  align-items: flex-start;
`
export const AuthMenuText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #344966;
  padding: 9px 0px 30px 0px;
`

export const ProfileMenuInput = styled.input`
  background: #F0F4EF;
  border-radius: 16px;
  border: 0px;
  width: 413px;
  padding: 18px 0px;
`

export const AuthMenuButton = styled.div`
  background: #344966;
  border-radius: 16px;
  color: #F0F4EF;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  padding: 10px 50px;
  max-height: 44px;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
`

export const ProfileImg = styled.div`
  background-image: url(${profilePhoto});
  background-size: cover;
  background-repeat: no-repeat;
  width: 305px;
  height: 305px;
  margin: 0px 128px 0px 0px;
`