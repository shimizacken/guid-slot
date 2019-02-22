import { logMiddleware } from "./logMiddleware";
import { filterMiddleware } from "./filterMiddleware";
import { copyGuidMiddleware } from "./copyGuidMiddleware";

export default [logMiddleware, filterMiddleware, copyGuidMiddleware];
