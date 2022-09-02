import styled from 'styled-components';
import Camera from '../../../assets/images/Camera.svg';
import UserProfileIcon from '../../../assets/images/UserProfileLogo.png';

type ProfilePhotoType = {
  profilePhoto: string;
};

export const ProfileImg = styled.div<ProfilePhotoType>`
  background-image: ${(p) => (p.profilePhoto ? `url(${p.profilePhoto})` : `url(${UserProfileIcon}`)};
  background-size: cover;
  background-repeat: no-repeat;
  width: 305px;
  height: 305px;
  margin: 0px 128px 0px 0px;
`;
export const PhotoInput = styled.input`
  display: none;
`;
export const InputButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 0px;
  position: absolute;
  margin: 237px 0px 0px 237px;
  background-color: ${(props) => props.theme.palette.darkBlue};
  border-radius: 50%;
  background-image: url(${Camera});
  background-repeat: no-repeat;
  background-size: 26px 26px;
  background-position: center;
`;

export const ErrorLabel = styled.label`
  position: absolute;
  padding: 30px 0px 0px 0px;
  color: ${(props) => props.theme.palette.error};
`;

export const ButtonContainer = styled.div`
  margin-bottom: 30px;
`;
