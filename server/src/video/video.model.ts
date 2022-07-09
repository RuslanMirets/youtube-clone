import { mongoose, prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { UserModel } from 'src/user/user.model';

// export interface IVideoModel extends Base {}

export class VideoModel extends TimeStamps {
	_id: mongoose.Types.ObjectId;

	@prop()
	name: string;

	@prop({ default: false })
	isPublic: boolean;

	@prop({ default: 0 })
	views?: number;

	@prop({ default: 0 })
	likes?: number;

	@prop()
	description: string;

	@prop()
	videoPath: string;

	@prop()
	thumbnailPath: string;

	@prop({ ref: () => UserModel })
	user: Ref<UserModel>;
}
