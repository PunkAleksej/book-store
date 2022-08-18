import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/user/reduser';
import { useAppSelector } from '../../../store';
import UserProfileIcon from '../../../assets/images/UserProfileLogo.png';
import { ProfileImg, PhotoInput, InputButton, ErrorLabel } from './ProfilePhoto.styles';
import { updatePhoto } from '../../../api/authentication';
import Base64Converter from '../../utils/Base64Converter';
import toastsWriter from '../../utils/Toasts';

const ProfilePhoto:React.FC = () => {
  const dispatch = useDispatch();
  const [loadingError, setLoadingError] = useState('');
  const user = useAppSelector((store) => store.userState.user);
  const fileInput = useRef<HTMLInputElement>(null);
  const photo = user?.photo ? user.photo : UserProfileIcon;
  const handleClick = () => {
    fileInput.current?.click();
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const file = e.target.files[0];
        const base64 = await Base64Converter(file);
        const response = await updatePhoto({ photo: base64 });
        dispatch(userActions.updateUser(response.data.user));
        toastsWriter({ text: 'User photo is changed', style: 'success' });
      } catch (err) {
        toastsWriter({ text: 'Loading error, try again', style: 'error' });
        setLoadingError('Loading error, try again');
      }
    }
  };
  return (
    <div>
      <InputButton type="button" onClick={handleClick} />
      <PhotoInput
        ref={fileInput}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="uploadAvatar"
        onChange={handleChange}
       />
      <ProfileImg profilePhoto={photo} />
      {loadingError ? <ErrorLabel>{loadingError}</ErrorLabel> : null}
    </div>
  );
};

export default ProfilePhoto;
