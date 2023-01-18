import { observer } from 'mobx-react-lite';
import ButtonsControlViewModel from './ButtonsControlViewModel';
import { buttonsControlButton } from './types';
import { renderButtons } from './helpers';

interface ButtonsControlViewProps {
  vm: ButtonsControlViewModel;
  buttons: buttonsControlButton[];
}

const ButtonsControlView = ({ vm, buttons }: ButtonsControlViewProps) => (
  <div className="buttons-control">
    {renderButtons(buttons, 'left')}

    <input type="text" value={vm.value} onChange={(e) => vm.setInputValue(e.target.value)} />

    {renderButtons(buttons, 'right')}
  </div>
);
export default observer(ButtonsControlView);
