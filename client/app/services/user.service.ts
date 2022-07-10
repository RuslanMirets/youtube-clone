import { IUser, IUserDto } from 'types/user.interface';
import axios, { axiosClassic } from '../api/interceptors';

export const UserService = {
	async getProfile() {
		return axios.get<IUser>('/user/profile');
	},

	async getMostPopular() {
		return axiosClassic.get<IUser[]>('/user/most-popular');
	},

	async updateProfile(body: IUserDto) {
		return axios.put<IUser>('/user/profile', body);
	},
};
