import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import { useMutation } from 'react-query';
import Button from '@/components/ui/Button/Button';
import Field from '@/components/ui/Field/field';
import { AuthService } from '@/services/auth/auth.service';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import stylesIcons from '../icons/IconsRight.module.scss';
import styles from './AuthForm.module.scss';
import { IAuthFields } from './auth-form.interface';
import { validEmail } from './auth.constants';

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthFields>({
		mode: 'onChange',
	});

	const { setData } = useAuth();

	const { mutate: loginSync } = useMutation(
		'login',
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) setData(data);
			},
		},
	);
	const { mutate: registerSync } = useMutation(
		'register',
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) setData(data);
			},
		},
	);

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') loginSync(data);
		else if (type === 'register') registerSync(data);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcons.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#a4a4a4' />
			</button>
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address',
							},
						})}
						//@ts-ignore
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters',
							},
						})}
						//@ts-ignore
						type='password'
						placeholder='Password'
						error={errors.password}
					/>
					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.registerBtn}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
