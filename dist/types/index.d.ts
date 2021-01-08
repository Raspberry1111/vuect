declare const install: <T>(Vue: any, _options: T) => void;

interface State {
    [key: string]: any;
}
declare type MutationFn = (state: State, ...args: any[]) => any;
declare type GetterFn = (state: State) => any;
declare type SetterFn = (state: State, val: any) => any;
declare class Store {
    private mutations;
    private getters;
    private setters;
    state: State;
    addMutation(k: string, fn: MutationFn): void;
    addGetter(k: string, fn: GetterFn): void;
    addSetter(k: string, fn: SetterFn): void;
    getKey(k: string): any;
    setKey(k: string, val: any): any;
}

declare const _default: {
    __version__: string;
    install: <T>(Vue: any, _options: T) => void;
    store: typeof Store;
};

export default _default;
export { install, Store as store };
