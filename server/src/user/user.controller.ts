import {
	Body,
	Controller,
	Get,
	HttpCode,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from './decorators/user.decorator';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('_id') _id: Types.ObjectId) {
		return await this.userService.findOneById(_id);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('profile')
	@Auth()
	async updateProfile(
		@CurrentUser('_id') _id: Types.ObjectId,
		@Body() dto: UserDto,
	) {
		return this.userService.updateProfile(_id, dto);
	}

	@Get('most-popular')
	async getMostPopular() {
		return await this.userService.getMostPopular();
	}
}
