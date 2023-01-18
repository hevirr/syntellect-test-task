export type buttonAlign = 'left' | 'right';

export type buttonsControlButton = {
  align: buttonAlign;
  text?: string;
  callback: () => void;
};
