import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CommentDto } from './comment.dto';
import { CommentModel } from './comment.model';

@Injectable()
export class CommentService {
	constructor(
		@InjectModel(CommentModel)
		private readonly commentModel: ModelType<CommentModel>,
	) {}

	async findAllByVideoId(videoId: Types.ObjectId) {
		return this.commentModel
			.find({ video: videoId }, '-__v')
			.sort({ createdAt: 'desc' })
			.exec();
	}

	async create(userId: Types.ObjectId, dto: CommentDto) {
		return this.commentModel.create({
			message: dto.message,
			video: dto.videoId,
			user: userId,
		});
	}
}
