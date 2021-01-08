import { install } from "./install";
import store from "./store";
import { version } from "../package.json";
export default {
	__version__: version,
	install,
	store,
};

export { install, store };
