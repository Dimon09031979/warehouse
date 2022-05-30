import {useState, useEffect} from 'react';

type Props = {
	name: string,
	changeValue: (value: string | number) => void,
	reset: boolean
}

const EnterValue: React.FunctionComponent<Props> = (props) => {
	const [value, setValue] = useState('');
	useEffect(() => {setValue('')}, [props.reset]);
	return <p>
		{props.name} <input
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
								props.changeValue(e.target.value);
							}}
 						/>
	</p>
}

export default EnterValue;