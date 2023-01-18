import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { getCountryByName, CountryInfo } from '../../../api/apiService';

class ButtonsControlViewModel {
  value = '';
  autocompleteHints: CountryInfo[] = [];

  // pending = false;
  // По-хорошему здесь бы воспользоваться AbortController, чтобы не обновлять стейт каждый раз и
  // не вызывать не совсем корректного поведения у интерфейса,
  // но т.к. апи самодельное, то решил не заморачиваться
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.value,
      (value) => {
        getCountryByName(value).then((res) => {
          runInAction(() => {
            this.autocompleteHints = res;
          });
        });
      },
    );
  }

  setInputValue(value: string) {
    this.value = value;
  }
}

export default ButtonsControlViewModel;
