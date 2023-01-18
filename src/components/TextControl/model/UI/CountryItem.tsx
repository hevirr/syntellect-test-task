import { CountryInfo } from '../../../../api/apiService';

const CountryItem = ({ country, onClick }: { country: CountryInfo; onClick: () => void }) => (
  <div onClick={onClick} className="country-item">
    <div className="country-item__name">{country.name}</div>
    <div className="country-item__fullName">{country.fullName}</div>
    <img className="country-item__flag" src={country.flag} alt="#" />
  </div>
);
export default CountryItem;
