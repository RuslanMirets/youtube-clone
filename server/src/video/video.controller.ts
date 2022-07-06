import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { VideoDto } from './video.dto';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
	constructor(private readonly videoService: VideoService) {}

	@Get(':id')
	async findOneById(@Param('id', IdValidationPipe) id: Types.ObjectId) {
		return this.videoService.findOneById(id);
	}

	@Get('by-user/:userId')
	async findAllByUserId(
		@Param('userId', IdValidationPipe) userId: Types.ObjectId,
	) {
		return this.videoService.findAllByUserId(userId);
	}

	@Get()
	async findAll(@Query('searchTerm') searchTerm?: string) {
		return this.videoService.findAll(searchTerm);
	}

	@Get('most-popular')
	async getMostPopularByViews() {
		return this.videoService.getMostPopularByViews();
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async create(@CurrentUser('_id') _id: Types.ObjectId) {
		return this.videoService.create(_id);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: VideoDto,
	) {
		return this.videoService.update(id, dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.videoService.delete(id);
	}

	@HttpCode(200)
	@Put('update-views/:videoId')
	async updateCountViews(@Param('videoId', IdValidationPipe) videoId: string) {
		return this.videoService.updateCountViews(videoId);
	}

	@HttpCode(200)
	@Put('update-likes/:videoId')
	@Auth()
	async updateLikes(
		@Param('videoId', IdValidationPipe) videoId: string,
		@Query('type') type: 'inc' | 'dec',
	) {
		return this.videoService.updateLikes(videoId, type);
	}
}
