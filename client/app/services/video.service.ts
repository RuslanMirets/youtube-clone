import { IVideo, IVideoDto } from 'types/video.interface';
import axios, { axiosClassic } from '../api/interceptors';

export const VideoService = {
	async getAllByUser(userId: string) {
		return axiosClassic.get<IVideo[]>(`/video/by-user/${userId}`);
	},

	async getAllByCurrentUser() {
		return axios.get<IVideo[]>('/video/by-user-private');
	},

	async getOneById(id: string) {
		return axiosClassic.get<IVideo>(`/video/${id}`);
	},

	async getAll() {
		return axiosClassic.get<IVideo[]>('/video');
	},

	async getMostPopular() {
		return axiosClassic.get<IVideo[]>('/video/most-popular');
	},

	async getOnePrivateById(id: string) {
		return axiosClassic.get<IVideo>(`/video/get-private/${id}`);
	},

	async create() {
		return axios.post<string>('/video');
	},

	async update(id: string, dto: IVideoDto) {
		return axios.put<string>(`/video/${id}`, dto);
	},

	async updateViews(id: string) {
		return axios.put<string>(`/video/update-views/${id}`);
	},

	async updateLikes(id: string) {
		return axios.put<string>(`/video/update-likes/${id}`);
	},

	async delete(id: string) {
		return axios.delete(`/video/${id}`);
	},
};
