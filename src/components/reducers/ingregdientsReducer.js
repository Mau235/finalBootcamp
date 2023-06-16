import { createId } from "../../helpers/tools"

export const ingregdientsReducer = (state = [], action) => {
    switch (action.type) {
        case '[INGR] ADD':
            return [...state, { _id: createId(), name: action.payload }]
        case '[INGR] DELETE':
            return state.filter( st => st._id !== action.payload)
        case '[INGR] GETALL':
            return state.concat(action.payload)
        default:
            return state
    }
}