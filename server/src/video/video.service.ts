import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { VideoModel } from './video.model';

@Injectable()
export class VideoService {
	constructor(
		@InjectModel(VideoModel) private readonly videoModel: ModelType<VideoModel>,
	) {}

	async findOneById(_id: Types.ObjectId) {
		const video = await this.videoModel.findOne(
			{ _id, isPublic: true },
			'-__v',
		);
		if (!video) throw new UnauthorizedException('Video not found');
		return video;
	}

	async getMostPopularByView() {
		return await this.videoModel
			.find({ views: { $gt: 0 } }, '-__v')
			.sort({ views: -1 })
			.exec();
	}

	async findAll(searchTerm?: string) {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [{ name: new RegExp(searchTerm, 'i') }],
			};
		}

		return await this.videoModel
			.find(options)
			.find({ isPublic: true }, '-__v')
			.sort({ createdAt: 'desc' })
			.exec();
	}
}
