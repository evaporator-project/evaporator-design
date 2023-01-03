// import { useEffect, useState } from 'react';

// import HighlightInput from '../packages/HighlightInput';
import {Button} from "../packages";

const HOPP_ENVIRONMENT_REGEX = /\{\{(.+?)\}\}/g;

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}
    >
        <Button>你好</Button>
    </div>
  );
}

export default App;
