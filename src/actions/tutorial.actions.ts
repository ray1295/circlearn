// Section 1 - Importing Tutorial model and Action from ngrx/store
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

// Section 2 - Defining the type of actions - form of string const 
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3 - Creating class for each action with constructor that
// allows us to pass in the payload
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

// Section 4 - Exporting action classes for use 
export type Actions = AddTutorial | RemoveTutorial