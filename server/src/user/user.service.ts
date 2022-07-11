import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { genSalt, hash } from 'bcryptjs';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { UserDto } from './user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
	) {}

	async getUser(_id: string) {
		return this.userModel
			.aggregate()
			.match({ _id })
			.lookup({
				from: 'Video',
				foreignField: 'user',
				localField: '_id',
				as: 'videos',
			})
			.addFields({
				videosCount: { $size: '$videos' },
			})
			.project({ __v: 0, password: 0, videos: 0 })
			.exec()
			.then((data) => data[0]);
	}

	async findOneById(_id: Types.ObjectId) {
		const user = await this.userModel.findById(_id, '-password -__v');
		if (!user) throw new UnauthorizedException('User not found');
		return user;
	}

	async updateProfile(_id: Types.ObjectId, dto: UserDto) {
		const user = await this.findOneById(_id);

		const isSameUser = await this.userModel.findOne({ email: dto.email });
		if (isSameUser && String(_id) !== String(isSameUser._id)) {
			throw new UnauthorizedException('Email already in use');
		}

		if (dto.password) {
			const salt = await genSalt(10);
			user.password = await hash(dto.password, salt);
		}

		user.email = dto.email;
		user.name = dto.name;
		user.description = dto.description;
		user.location = dto.location;
		user.avatarPath = dto.avatarPath;

		return await user.save();
	}

	async getMostPopular() {
		return await this.userModel
			.find({ subscribersCount: { $gt: 0 } }, '-password -__v')
			.sort({ subscribersCount: -1 })
			.exec();
	}
}
