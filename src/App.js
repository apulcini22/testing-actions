import React from "react";
import "./App.css";

function App() {
  return (
    <div className="">
      <header className="">
        <br />
        <br />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p data-testid="sayhi">This should say hi</p>
        <br />
        <br />
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <br />
        <br />
        <button
          data-testid="button"
          type="button"
          onClick={() => console.log("Clicked mEEEEEE")}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
