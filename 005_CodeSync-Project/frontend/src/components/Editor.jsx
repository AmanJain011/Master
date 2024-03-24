import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {dracula} from '@uiw/codemirror-theme-dracula'

import { useCallback, useState } from 'react';

const Editor = () => {
    const [code, setCode] = useState('')

    const onChange = useCallback((val, viewUpdate) => {
        setCode(val);
      }, []);
   
    return (
        <CodeMirror
         value={code}  
         minHeight='100vh'
         theme={dracula}
         extensions={[javascript({ jsx: true })]} 
         onChange={onChange} />
    )
}

export default Editor