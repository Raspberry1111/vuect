const dev = process.env.NODE_ENV !== "production";

interface State {
	[key: string]: any;
}
type MutationFn = (state: State, ...args: any[]) => any;
type GetterFn = (state: State) => any;
type SetterFn = (state: State, val: any) => any;

class Store {
	private mutations: {
		[key: string]: MutationFn;
	} = {};
	private getters: { [key: string]: GetterFn } = {};
	private setters: { [key: string]: SetterFn } = {};
	public state: State = {};
	addMutation(k: string, fn: MutationFn): void {
		if (this.mutations[k]) {
			console.error("Attempting to overwrite mutation!");
			return;
		}
		this.mutations[k] = fn;
	}

	addGetter(k: string, fn: GetterFn): void {
		if (this.getters[k]) {
			console.error("Attempting to overwrite getter!");
			return;
		}
		this.getters[k] = fn;
	}

	addSetter(k: string, fn: SetterFn): void {
		if (this.setters[k]) {
			console.error("Attempting to overwrite getter!");
			return;
		}
		this.setters[k] = fn;
	}

	getKey(k: string): any {
		if (this.getters[k]) {
			return this.getters[k](this.state);
		}
		return this.state[k];
	}

	setKey(k: string, val: any): any {
		if (this.setters[k]) {
			return this.setters[k](this.state, val);
		}
		if (typeof this.state[k] !== typeof val) {
			throw new Error(
				"Cannot set key of type `" +
					typeof this.state[k] +
					"` to type of `" +
					typeof val +
					"`!"
			);
			return;
		}
		this.state[k] = val;
	}
}

export default Store;
