export function CreateCounterStore(rootReducer: Function, initialState: string | number) {
    let state: object = rootReducer(initialState, {type: '__INIT__'});
    const subscribers: any[] = [];
    return {
        dispatch(action: object) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub())
        },
        subscribe(callback:any) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        }
    }
}