// importa action types

let initialState = {
    languaje:"es"
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return{...state}
    }
}

export default reducer;