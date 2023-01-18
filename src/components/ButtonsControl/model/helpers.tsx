import { buttonAlign, buttonsControlButton } from './types';

export const renderButtons = (buttons: buttonsControlButton[], side: buttonAlign) =>
  buttons
    .filter((button) => button.align === side)
    .map((button, i) => (
      <button
        key={`${button.text}_${button.align}_${i}`}
        className="buttons-control__button"
        onClick={button.callback}>
        {button.text}
      </button>
    ));
