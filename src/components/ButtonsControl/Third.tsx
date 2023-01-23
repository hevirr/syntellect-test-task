import ButtonsControlView from './model/ButtonsControlView';
import ButtonsControlViewModel from './model/ButtonsControlViewModel';

const Third = () => {
  const vm = new ButtonsControlViewModel();

  return (
    <ButtonsControlView
      vm={vm}
      buttons={[
        { align: 'left', callback: () => alert(vm.value) },
        {
          align: 'right',
          callback: () => {
            if (vm.value.length > 0 && !isNaN(+vm.value)) console.log(vm.value);
          },
        },
        { align: 'left', callback: () => alert(vm.value) },
        {
          align: 'right',
          callback: () => {
            if (vm.value.length > 0 && !isNaN(+vm.value)) alert(vm.value);
          },
        },
        { align: 'left', callback: () => vm.setInputValue('') },
        { align: 'right', callback: () => vm.setInputValue('HelloWorld') },
      ]}
    />
  );
};

export default Third;
