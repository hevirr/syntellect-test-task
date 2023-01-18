import { observer } from 'mobx-react-lite';
import TextControlViewModel from './TextControlViewModel';
import CountryItem from './UI/CountryItem';
import { limitCountryItems } from './helpers';

interface TextControlViewProps {
  vm: TextControlViewModel;
  limit: number;
}

const TextControlView = ({ vm, limit }: TextControlViewProps) => {
  return (
    <div className="text-control">
      <label>
        Выберите страну:
        <input value={vm.value} onChange={(e) => vm.setInputValue(e.target.value)} />
      </label>

      <div className="countries-dropdown">
        {limitCountryItems(vm.autocompleteHints, limit).map((country, i) => {
          return (
            <CountryItem
              onClick={() => vm.setInputValue(country.name)}
              key={`${country.fullName}_${i}`}
              country={country}
            />
          );
        })}
      </div>
    </div>
  );
};

export default observer(TextControlView);
