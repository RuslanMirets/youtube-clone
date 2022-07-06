import { IsString } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class VideoDto {
	@IsString()
	name: string;

	isPublic?: boolean;

	@IsString()
	description: string;

	@IsString()
	videoPath: string;

	@IsString()
	thumbnailPath: string;

	@IsObjectId()
	userId: string;
}
