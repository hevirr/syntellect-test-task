import { makeAutoObservable } from 'mobx';

class ButtonsControlViewModel {
  value = '';
  constructor() {
    makeAutoObservable(this);
  }

  setInputValue(value: string) {
    this.value = value;
  }
}

export default ButtonsControlViewModel;
