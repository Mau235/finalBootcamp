import { createId } from "../../helpers/tools" 

export const ingregdientsReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case '[INGR] ADD':
            return [...state, { name: payload }]
        case '[INGR] DELETE':
            return state.filter( st => st.msg !== payload)
        case '[INGR] ALLINGR':
            return state.concat(payload)
        default:
            return state
    }
}