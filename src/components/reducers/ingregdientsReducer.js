import { createId } from "../../helpers/tools" 

export const ingregdientsReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case '[INGR] ADD':
            return [...state, { _id: createId(), name: payload }]
        case '[INGR] DELETE':
            return state.filter( st => st._id !== payload)
        case '[INGR] ALLINGR':
            return state.concat(payload)
        default:
            return state
    }
}