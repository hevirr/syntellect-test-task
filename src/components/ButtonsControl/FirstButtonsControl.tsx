import ButtonsControlView from './model/ButtonsControlView';
import ButtonsControlViewModel from './model/ButtonsControlViewModel';

const FirstButtonsControl = () => {
  const vm = new ButtonsControlViewModel();
  return (
    <ButtonsControlView
      vm={vm}
      buttons={[
        { align: 'right', callback: () => vm.setInputValue('') },
        { align: 'right', callback: () => vm.setInputValue('HelloWorld') },
      ]}
    />
  );
};

export default FirstButtonsControl;
