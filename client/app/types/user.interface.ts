export interface IUser {
	_id: string;
	name: string;
	email: string;
	avatarPath: string;
	description: string;
	location: string;
	subscribersCount: number;
	videosCount?: number;
	isVerified?: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface IUserDto
	extends Pick<
		IUser,
		'name' | 'email' | 'description' | 'location' | 'avatarPath'
	> {}
