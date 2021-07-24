import { setState } from 'react';
import { makeStyles } from '@material-ui/core'; 
import { useEffect, useState } from 'react';
import marked from 'marked';

const ShowMarkdown = ({file}) => {
	const [markdown,setMarkdown] = useState('');
	useEffect( () => {
		const readFile = async () => {
			if(file){ 
				let text = await file.file.text()
				setMarkdown(text)
			}
		};

		readFile();
	}
	,[file]);

	return (
		<div 
		dangerouslySetInnerHTML={{
            __html: marked(markdown),
        }}/ >
	)
};

export default ShowMarkdown