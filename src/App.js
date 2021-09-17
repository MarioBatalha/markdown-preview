import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const App =  () => {
  const [text, setText] = useState('');

  return (
    <main>
    <section className="markdown">
      <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}>
      </textarea>
      <article className="result">
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
    </section>
    </main>
  );
}

export default App;
