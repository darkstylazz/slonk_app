import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo-menu" />
        <div>
          <span className="chat-name">Andres</span>
          <div className="svg-name" />
          <div className="svg-name" />
        </div>
        <div className="options-block">
          <div className="svg-menu" />
          <div className="svg-menu" />
          <div className="svg-menu" />
        </div>
      </nav>

      <section className="chatbox">
        <div className="message">
          <div className="avatar" />
          <div className="sms-content">
            <span className="nametag">Andrew</span>
            <span className="timetag">7:04 PM</span>
            <p>
              An Abyssinian fly playing a Celtic violin was annoyed by trashy
              flags on which were the Hebrew letter qoph.
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet nisl sed lectus fermentum blandit ac sed lorem. Maecenas ullamcorper dui eu vehicula fringilla. Praesent rutrum neque vel nibh pharetra, quis ullamcorper lacus lobortis. Aenean rhoncus et magna efficitur facilisis. Nam quis mi pulvinar, interdum nibh quis, sollicitudin mi. Etiam congue venenatis magna vitae vulputate. Aliquam rhoncus, leo nec malesuada rhoncus, enim tortor sodales sem, sit amet posuere mi mauris at eros. Cras ultrices magna non metus porta varius. Pellentesque in consequat eros. Aliquam non augue vitae massa aliquet bibendum. Integer consectetur turpis ac vestibulum faucibus. Ut viverra pulvinar pulvinar. Sed pulvinar magna vitae hendrerit accumsan. */}
            </p>
          </div>
        </div>
      </section>

      <footer>
        <input className="chat-input" placeholder="Message Andres" />
        <button>Send</button>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
