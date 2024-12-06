import { useEffect } from 'react';

export default function Editor() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('monaco-editor').then((monaco) => {
        const container = document.getElementById('monaco-editor');
        if (container) {
          monaco.editor.create(container, {
            value: `console.log('Hello, Monaco Editor!');`,
            language: 'javascript',
            theme: 'vs-dark',
          });
        }
      });
    }
  }, []);

  return <div id="monaco-editor" style={{ height: '500px', width: '400px' }} />;
}
