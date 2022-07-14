import { FC, useRef } from 'react';

const VideoDuration: FC<{ videoPath: string }> = ({ videoPath }) => {
	const ref = useRef<HTMLVideoElement>(null);
	const duration = ref.current?.duration || 0;

	return (
		<>
			<video className='hidden' ref={ref}>
				<source src={videoPath} type='video/mp4' />
			</video>
			<time>
				{Math.floor(duration / 60) +
					':' +
					('0' + Math.floor(duration % 60)).slice(-2)}
			</time>
		</>
	);
};

export default VideoDuration;
