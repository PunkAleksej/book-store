import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/user/reduser';
import { useAppSelector } from '../../../store';
import UserProfileIcon from '../../../assets/images/UserProfileLogo.png'
import { ProfileImg, PhotoInput, InputButton } from './ProfilePhotoStyles';
import { updatePhoto } from '../../../api/authentication';
import Base64Converter from '../../utils/Base64Converter';

const ProfilePhoto:React.FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((store) => { 
    return store.userState.user
  })
  const fileInput = useRef<HTMLInputElement>(null);
  const photo = user?.photo? `${user.photo}` : `${UserProfileIcon}`;
  const handleClick = () => {
    fileInput.current?.click()
  }
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const file = e.target.files[0];
        const base64 = await Base64Converter(file);
        const response = await updatePhoto({photo: base64});
        dispatch(userActions.updateUser(response.data.user));
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div>
      <InputButton type="button" onClick={handleClick}></InputButton>
      <PhotoInput
        ref={fileInput}
        className="test"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="uploadAvatar"
        onChange={handleChange}
      ></PhotoInput>
      <ProfileImg profilePhoto={photo}>
      </ProfileImg>
    </div>
  );
};

export default ProfilePhoto;
