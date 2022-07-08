import { ActionTypes } from "../action-types";
import { Action } from "../actions"

interface RepositoryState {
    loading : boolean;
    data : string[];
    error : null | string
}

const intialState = {
    loading: false,
    error : null,
    data : []
}


const RepositoryReducer = (state: RepositoryState = intialState, action:Action) : RepositoryState => {
    switch (action.type){
        case ActionTypes.SEARCH_REPOSITORIES : {
            return {
                ...state,
                loading : true,
                error : null,
                data : []
            }
        }
        case ActionTypes.SEARCH_REPOSITORIES_ERROR : {
            return {
                ...state,
                loading : false,
                error : action.error,
                data : []
            }
        }
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS : {
            return {
                ...state,
                data : action.payload,
                error : null,
                loading: false
            }
        }
        default : {
            return state
        }
    }
}

export default RepositoryReducer