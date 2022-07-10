import { mongoose, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// export interface IUserModel extends Base {}

export class UserModel extends TimeStamps {
	_id: mongoose.Types.ObjectId;

	@prop({ unique: true })
	email: string;

	@prop()
	password: string;

	@prop()
	name: string;

	@prop()
	isVerified: boolean;

	@prop({ default: 0 })
	subscribersCount?: number;

	@prop()
	description: string;

	@prop()
	location: string;

	@prop()
	avatarPath: string;
}
