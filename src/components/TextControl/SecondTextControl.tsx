import TextControlView from './model/TextControlView';
import TextControlViewModel from './model/TextControlViewModel';

const SecondTextControl = () => {
  const vm = new TextControlViewModel();
  return <TextControlView vm={vm} limit={3} />;
};

export default SecondTextControl;
