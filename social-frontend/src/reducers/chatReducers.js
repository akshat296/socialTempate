export default function loginReducers(state ={}, action)
{
    switch(action.type)
    {
    case 'SUCCESS': 
        return {type:action.type,chat:action.payload,test:1};
    case 'ERROR':
        return {type:action.type,chat:action.payload};
    default :
        return state;
    }
} 