import ButtonsControlView from './model/ButtonsControlView';
import ButtonsControlViewModel from './model/ButtonsControlViewModel';

const SecondButtonsControl = () => {
  const vm = new ButtonsControlViewModel();

  return (
    <ButtonsControlView
      vm={vm}
      buttons={[
        { align: 'left', callback: () => alert(vm.value) },
        {
          align: 'right',
          callback: () => {
            if (vm.value.length > 0 && !isNaN(+vm.value)) alert(vm.value);
          },
        },
      ]}
    />
  );
};

export default SecondButtonsControl;
