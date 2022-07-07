import { IsString } from 'class-validator';

export class CommentDto {
	// @prop({ ref: () => UserModel })
	// user: Ref<UserModel>;

	// @prop({ ref: () => VideoModel })
	// video: Ref<VideoModel>;

	@IsString()
	message: string;
}
