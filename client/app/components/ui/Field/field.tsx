import { FC, forwardRef } from 'react';
import styles from './Field.module.scss';
import { IField } from './field.interface';

const Field: FC = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input ref={ref} type={type} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
