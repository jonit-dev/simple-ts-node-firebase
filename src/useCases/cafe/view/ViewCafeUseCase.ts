import { BadRequestError } from "../../../providers/errors/BadRequestError";
import { readAllResources } from "../../../providers/helpers/crud.helper";
import { HttpStatus } from "../../../types/ServerTypes";

class ViewCafeUseCase {
  public readAll = async (req, res) => {
    try {
      const cafes = await readAllResources("cafes");

      return res.status(HttpStatus.OK).json(cafes);
    } catch (error) {
      console.error(error);

      throw new BadRequestError(error.message);
    }
  };
}

const viewCafeUseCase = new ViewCafeUseCase();

export { viewCafeUseCase };
