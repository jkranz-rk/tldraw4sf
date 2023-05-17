import React, { Component } from 'react';
import './App.css';
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/editor.css'
import '@tldraw/tldraw/ui.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tldraw__editor">
			<Tldraw autoFocus />
		</div>
      </div>
    );
  }
}

export default App;