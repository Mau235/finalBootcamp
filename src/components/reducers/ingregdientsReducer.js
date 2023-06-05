

export const ingregdientsReducer = ( state = [] , action) => {
    switch (action.type) {
        case '[INGR] Add':
            return [...state, action.payload]        
    
        default: state
    }
}