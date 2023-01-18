import './App.css';
import { FirstButtonsControl, SecondButtonsControl } from './components/ButtonsControl';
import { FirstTextControl, SecondTextControl } from './components/TextControl';

function App() {
  if (
    !new (class {
      x: any;
    })().hasOwnProperty('x')
  )
    throw new Error('Transpiler is not configured correctly');

  return (
    <div className="app">
      <div className="buttons-controls">
        <FirstButtonsControl />
        <SecondButtonsControl />
      </div>

      <div className="text-controls">
        <FirstTextControl />
        <SecondTextControl />
      </div>
    </div>
  );
}

export default App;
