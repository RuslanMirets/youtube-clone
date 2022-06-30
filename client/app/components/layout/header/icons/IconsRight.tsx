import { FC } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useAuth } from '@/hooks/useAuth';
import AuthForm from '../auth-form/AuthForm';
import styles from './IconsRight.module.scss';

const IconsRight: FC = () => {
	const { user } = useAuth();

	return (
		<div className={styles.icons}>
			{!!user && (
				<button className={styles.button}>
					<BsPlusCircleFill fill='#cd3a42' />
				</button>
			)}
			{!user && <AuthForm />}
		</div>
	);
};

export default IconsRight;
