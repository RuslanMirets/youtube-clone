import { IUser } from './user.interface';

export interface IVideo {
	_id: string;
	name: string;
	description: string;
	thumbnailPath: string;
	videoPath: string;
	views: number;
	like: number;
	user?: IUser;
	isPublic?: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface IVideoDto
	extends Pick<
		IVideo,
		'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
