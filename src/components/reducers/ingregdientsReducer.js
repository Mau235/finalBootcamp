import { createId } from "../../helpers/tools"

export const ingregdientsReducer = (state = [], action) => {
    switch (action.type) {
        case '[INGR] ADD':
            return [...state, { id: createId(), name: action.payload }]
        case '[INGR] DELETE':
            return state.filter( st => st.id !== action.payload)
        default:
            return state
    }
}