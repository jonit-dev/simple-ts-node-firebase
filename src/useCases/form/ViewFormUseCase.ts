import countries from "../../providers/data/countries.json";
import industries from "../../providers/data/industries.json";
import languageArray from "../../providers/data/languages-array.json";
import { ICountry, ILanguage } from "./types/FormTypes";

class ViewFormUseCase {
  public readCountries(): ICountry[] {
    return countries;
  }

  public readLanguages(): ILanguage[] {
    return languageArray;
  }

  public readIndustries(): string[] {
    return industries;
  }
}

const viewFormUseCase = new ViewFormUseCase();

export { viewFormUseCase };
