import { IUser } from 'types/user.interface';
import { IVideo } from 'types/video.interface';

export interface IHome {
	newVideos: IVideo[];
	weeklyVideos: IVideo[];
	randomVideo: IVideo;
	topVideo: IVideo;
	topChannels: IUser[];
}
