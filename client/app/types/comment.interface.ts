import { IUser } from './user.interface';

export interface IComment {
	_id: string;
	user: IUser;
	video: string;
	message: string;
	createdAt: string;
	updatedAt: string;
}

export interface ICommentDto extends Pick<IComment, 'message'> {
	videoId: string;
}
