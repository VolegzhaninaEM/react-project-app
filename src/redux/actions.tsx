import {CHANGE_THEME, DECREMENT, INCREMENT, RESET} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function reset() {
    return {
        type: RESET
    }
}

export function asyncIncrement(newTheme: string) {
    return function (dispatch: any) {
        setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 1500)
    }
}

export function changeTheme(newTheme: string) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}