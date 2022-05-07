import React from 'react';

import Portfolio from './Components/Portfolio';

const App = () => {

    return(
        <div className="ui container">
            <h1>Custom map plugin for Cognigy.AI</h1>
            <p>Since the code needed to be packaged to make it run nicely with the chat, below is a screenshot of the code used to produce the map.</p>
            <p>To see it in use, open the chat at the bottom right corner.</p>
            <Portfolio />
        </div>
    );
}

export default App;