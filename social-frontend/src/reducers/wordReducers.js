
export default function wordReducers(state = [], action) {
    switch (action.type) {
    case 'WORD':
        return [...state, Object.assign({}, action.payload)];
    default:
        return state;
    }
} 