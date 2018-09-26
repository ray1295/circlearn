// Reducer :Takes incoming action and decide what to do with it
// ...takes previous state and returns a new state based on given action

import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1 :Defining initial state. 
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2 :Actual reducer. Takes in action/state
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3 :
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        default:
            return state;
    }
}