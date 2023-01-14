import React,
{
    createElement as el,
    useState
}
from 'react';

function App() {
    const [count, setCount] = useState(0)
  return (
      el('div', {className: 'antialiased font-sans bg-gray-200 overflow-hidden bg-gray-100' +
              'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'}, [
          el('h1', {className: 'text-4xl font-extrabold tracking-tight text-slate-900', key: 1},
              `Hello TSX ${count}`),
          el('button', {
              className: 'bg-red-200 pointer-events-auto rounded-md py-2 px-4 ' +
                  'text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50' +
                  'relative flex h-8 items-center justify-between',
              key: 2,
              onClick: () => {
                  setCount(count +1)
              }}, 'Click me!!')
      ])
  );
}

export default App;
