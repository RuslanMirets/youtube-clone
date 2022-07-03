import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { IAuthData } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

interface IContext extends IAuthData {
	setData: null | Dispatch<SetStateAction<IAuthData>>;
}

export const defaultValueAuthState = {
	user: null,
	accessToken: '',
};

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [data, setData] = useState<IAuthData>(defaultValueAuthState);

	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '');
			setData({ user, accessToken });
		}
	}, []);

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (!accessToken && !data.user) {
			AuthService.logout();
			setData(defaultValueAuthState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
