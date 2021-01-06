export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SAVE_USER= 'SAVE_USER'

let itemID = 0

//Action
export function additem(item){
    return{
        type:ADD_ITEM,
        payload:item
    }
}

export function deleteitem(item){
    return{
        type:DELETE_ITEM,
        payload:item
    }
}

export function saveUser(user){
    return{
        type:SAVE_USER,
        payload:user
    }
}

//Reducers
const initialState = {
    items:[]
}

function itemsReducer(state = initialState, action) {
console.log(action,'action ...')
    switch (action.type) {
        case ADD_ITEM:
            // console.log("added")
            state.items.push(action.payload)
            console.log("state is",state)
        return state;

        case DELETE_ITEM:
           const deleteNewArray =state.items.filter(i=>i.imdbID!=action.payload.imdbID)
        //    console.log("size",deleteNewArray.length)
            return {...state,items:deleteNewArray}
        default:
            return state;

            case SAVE_USER:
                console.log(" user added")
                state.users.push(action.payload)
          return state;
    }

}

export default itemsReducer