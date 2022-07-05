import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { VideoModel } from './video.model';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
	controllers: [VideoController],
	providers: [VideoService],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: VideoModel,
				schemaOptions: { collection: 'Video' },
			},
		]),
		ConfigModule,
	],
})
export class VideoModule {}
