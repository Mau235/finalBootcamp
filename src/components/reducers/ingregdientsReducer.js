import { createId } from "../../helpers/tools"

export const ingregdientsReducer = (state = [], action) => {
    switch (action.type) {
        case '[INGR] Add':
            return [...state, { id: createId(), name: action.payload }]

        default:
            return state
    }
}