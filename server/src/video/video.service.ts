import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { VideoModel } from './video.model';

@Injectable()
export class VideoService {
	constructor(
		@InjectModel(VideoModel) private readonly videoModel: ModelType<VideoModel>,
	) {}

	async findOneById(_id: Types.ObjectId) {
		const video = await this.videoModel.findById(_id, '-password');
		// if (!user) throw new UnauthorizedException('User not found');
		// return user;
	}

	async getMostPopular() {
		return await this.userModel
			.find({ subscribersCount: { $gt: 0 } }, '-password -__v')
			.sort({ subscribersCount: -1 })
			.exec();
	}
}
