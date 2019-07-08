import React from 'react';
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>React Dexie</h1>
          <p>Powered by React Hooks and Dexiejs</p>
       </div>
      </header>
      <main>
        <Main/>
      </main>
    </div>
  );
}

export default App;
