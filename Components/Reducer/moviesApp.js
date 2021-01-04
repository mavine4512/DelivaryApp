export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

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
            return state
    }

}

export default itemsReducer