import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { getCountryByName, CountryInfo } from '../../../api/apiService';
import debounce from 'lodash.debounce';
class ButtonsControlViewModel {
  value = '';
  autocompleteHints: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.value,
      debounce((value) => {
        getCountryByName(value).then((res) => {
          runInAction(() => {
            this.autocompleteHints = res;
          });
        });
      }, 350),
    );
  }

  setInputValue(value: string) {
    this.value = value;
  }
}

export default ButtonsControlViewModel;
