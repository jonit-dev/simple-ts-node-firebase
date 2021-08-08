import { BadRequestError } from "../../providers/errors/BadRequestError";
import { readAllResources } from "../../providers/helpers/FirebaseCRUDHelper";

class ViewCafeUseCase {
  public async readAll() {
    try {
      const cafes = await readAllResources("cafes");

      return cafes;
    } catch (error) {
      console.error(error);

      throw new BadRequestError(error.message);
    }
  }
}

const viewCafeUseCase = new ViewCafeUseCase();

export { viewCafeUseCase };
