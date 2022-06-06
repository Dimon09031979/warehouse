import {useState, useEffect, SyntheticEvent} from 'react';
import TextField from '@mui/material/TextField';

type Props = {
	name: string,
	uploadValue: (value: string | number) => void,
	reset: boolean
}

const EnterValue: React.FunctionComponent<Props> = (props) => {
	const [value, setValue] = useState<string>('');
	useEffect(() => {setValue('')}, [props.reset]);

	const handleChange = (event: {target: {value: string}}) => {
		setValue(event.target.value);
		props.uploadValue(event.target.value);
	}

	return <p>
		<TextField
			label={props.name}
			value={value}
			onChange={handleChange}
 		/>
	</p>
}

export default EnterValue;