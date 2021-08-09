import countries from "../../providers/data/countries.json";
import { ICountry } from "./types/FormTypes";

class ViewFormUseCase {
  public readCountries(): ICountry[] {
    return countries;
  }
}

const viewFormUseCase = new ViewFormUseCase();

export { viewFormUseCase };
