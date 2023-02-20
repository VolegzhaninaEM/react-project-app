import {DECREMENT, INCREMENT, RESET, CHANGE_THEME} from "./types";
import {combineReducers} from "redux";

interface IAction {
    type: string
    payload: string
}

export function CounterReducer(state: number = 0, action: IAction) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

const initialThemeState: object = {
    value: 'bg-white'
}

export function ThemeReducer(state: object = initialThemeState, action: IAction) {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, value: action.payload}
        default:
            return state;
    }
    return state;
}

export const RootReducer = combineReducers({
    counter: CounterReducer,
    theme: ThemeReducer
})