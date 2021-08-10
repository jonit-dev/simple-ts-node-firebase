import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

import { controllersContainer } from "./controllers";

const container = new Container();

container.load(buildProviderModule(), controllersContainer);

export { container };
