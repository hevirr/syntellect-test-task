import TextControlView from './model/TextControlView';
import TextControlViewModel from './model/TextControlViewModel';

const FirstTextControl = () => {
  const vm = new TextControlViewModel();
  return <TextControlView vm={vm} limit={10} />;
};

export default FirstTextControl;
