import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { CommentDto } from './comment.dto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Get('by-video/:videoId')
	async findAllByVideoId(
		@Param('videoId', IdValidationPipe) videoId: Types.ObjectId,
	) {
		return this.commentService.findAllByVideoId(videoId);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post(':id')
	@Auth()
	async create(
		@CurrentUser('_id') _id: Types.ObjectId,
		@Body() dto: CommentDto,
	) {
		return this.commentService.create(_id, dto);
	}
}
