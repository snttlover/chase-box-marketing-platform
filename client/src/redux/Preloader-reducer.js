const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState={
    isFetching: true
}

export const preloaderReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_IS_FETCHING:{
            state.isFetching = action.isFetching
        }break;
    }
    return state
};

export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})