import store from "./store"
export const install = <T>(Vue: any, _options: T) => {
	Vue.prototype.$vuect = (e: string, ...args: any[]) => {
		if (args.length = 0) {
			if (e === "store/new") {
				return
			}
		}
	} 
};