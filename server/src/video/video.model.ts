import { mongoose, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// export interface IVideoModel extends Base {}

export class VideoModel extends TimeStamps {
	_id: mongoose.Types.ObjectId;

	@prop()
	name: string;

	@prop()
	isPublic: string;

	@prop({ default: 0 })
	views?: number;

	@prop({ default: 0 })
	like?: number;

	@prop({ default: 0 })
	dislike?: number;

	@prop()
	description: string;

	@prop()
	videoPath: string;

	@prop()
	thumbnailPath: string;
}
