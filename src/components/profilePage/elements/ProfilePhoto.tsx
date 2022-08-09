import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../store/user/reduser';
import { useAppSelector } from '../../../store';
import UserProfileIcon from '../../../assets/images/UserProfileLogo.png'
import { ProfileImg, PhotoInput, InputButton } from './ProfilePhotoStyles';
import { updatePhoto } from '../../../api/authentication';

const convertToBase64 = (file: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  })
};

const ProfilePhoto:React.FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((store) => { 
    return store.userState.user
  })
  const fileInput = useRef<HTMLInputElement>(null);
  const photo = user?.photo || UserProfileIcon;
  const handleClick = () => {
    fileInput.current?.click()
  }
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      try {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        const response = await updatePhoto({photo: base64});
        dispatch(userActions.updateUser(response.data.user));
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
        onChange={(e) => handleChange(e)}
      ></PhotoInput>
      <ProfileImg 
        profilePhoto={photo}
      />
    </div>
  );
};

export default ProfilePhoto;
