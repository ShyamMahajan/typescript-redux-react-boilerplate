import { ActionTypes } from "../action-types";

export type Action = (SearchRepositories | SearchRepositoriesSuccessAction | SearchRepositoriesError)

interface SearchRepositories {
    type : ActionTypes.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
    type : ActionTypes.SEARCH_REPOSITORIES_SUCCESS
    payload : string[];
}

interface SearchRepositoriesError {
    type : ActionTypes.SEARCH_REPOSITORIES_ERROR;
    error : string | null;
}