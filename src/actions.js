import { USER_INPUT } from "./constants"

export const userAction = (inputString) => (dispatch) => {
    dispatch({
        type: USER_INPUT,
        payload:inputString
    })
}