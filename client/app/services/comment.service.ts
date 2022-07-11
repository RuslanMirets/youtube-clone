import { IComment, ICommentDto } from 'types/comment.interface';
import axios, { axiosClassic } from '../api/interceptors';

export const CommentService = {
	async create(dto: ICommentDto) {
		return axios.post<IComment>('/comment', dto);
	},

	async getAllByVideo(videoId: string) {
		return axiosClassic.get<IComment[]>(`/comment/by-video/${videoId}`);
	},
};
