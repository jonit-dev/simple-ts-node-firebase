import { provide } from "inversify-binding-decorators";

import { BadRequestError } from "../../providers/errors/BadRequestError";
import { readAllResources } from "../../providers/helpers/FirebaseCRUDHelper";

@provide(ViewCafeUseCase)
export class ViewCafeUseCase {
  public async readAll(): Promise<any[]> {
    try {
      const cafes = await readAllResources("cafes");

      return cafes;
    } catch (error) {
      console.error(error);

      throw new BadRequestError(error.message);
    }
  }
}
