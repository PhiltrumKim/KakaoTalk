import axios from 'axios';
import { ApiResponse } from '~/types/base';
import { UserData } from '~/types/user';
import { ProfileChangeRequestDto } from '../types/profile';

const API_HOST = process.env.API_HOST || 'http://localhost:3001/api';

export const findUser = async(userId: string) => {
    const foundUser: ApiResponse<UserData> = await axios.post(`${API_HOST}/user/find`, {user_id: userId});
    return foundUser.data.data;
}

export const changeProfile = async(profileData: ProfileChangeRequestDto) => {
    await axios.post(`${API_HOST}/user/profile/change`, profileData);
    return profileData;
}

export const uploadImageFile = async(image: File) => {
    const formData = new FormData();
    formData.append('image', image);
    const imageUrl: ApiResponse<string> = await axios.post(`${API_HOST}/user/upload`, formData);
    return `http://localhost:3001/${imageUrl.data.data}`;
}