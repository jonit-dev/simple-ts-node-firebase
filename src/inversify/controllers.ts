import { CafeController } from "@useCases/cafe/CafeController";
import { FormController } from "@useCases/form/FormController";
import { AuthController } from "@useCases/users/AuthController";
import { interfaces } from "inversify";
import { ContainerModule } from "inversify/lib/container/container_module";

export const controllersContainer = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<CafeController>(CafeController).toSelf();
  bind<FormController>(FormController).toSelf();
  bind<AuthController>(AuthController).toSelf();
});
