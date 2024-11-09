import React from 'react';


export interface taskState {
    tasks: interfaceTasks[];
    categories: interfaceCategories[];
}

export enum Status {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Finished = 'Finished',
}

export const listStatus = Object.entries(Status);

export interface interfaceTasks {
    taskID?:number; 
    categoryID?:number;
    taskName?:string; 
    taskDesc?:string; 
    startDateTime?:string;
    endDateTime?:string;
    status?:Status;
}

export interface interfaceCategories {
    categoryID?:number; 
    categoryName?:string; 
    categoryDesc?:string;
}

export let intialTaskState:taskState = {
    tasks:[],
    categories:[]
}

export enum ActionType {
    AddTask,
    //UpdateTask,
    AddCategories,
    //UpdateCategories,
    //ListTask,
    //ListCategories
}

export interface AddTask {
    type: ActionType.AddTask;
    payload: interfaceTasks;
}

export interface AddCategories {
    type: ActionType.AddCategories;
    payload: interfaceCategories;
}

export type taskActions = AddTask | AddCategories;

export function taskReducer(state: taskState, action: taskActions):taskState {
    switch (action.type) {
        case ActionType.AddTask: 
        return { ...state, tasks: [action.payload, ...state.tasks] };
        case ActionType.AddCategories: 
        return { ...state, categories: [action.payload, ...state.categories] }
        default:
            return state;
    }
}

// helper functions to simplify the caller
export const addTask = (task: interfaceTasks): AddTask => ({
    type: ActionType.AddTask,
    payload: task,
});

// helper functions to simplify the caller
export const addCategories = (categories: interfaceCategories): AddCategories => ({
    type: ActionType.AddCategories,
    payload: categories,
});

export const taskContext = React.createContext<{
    state: taskState;
    dispatch: React.Dispatch<taskActions>;
    }>({
      state: intialTaskState,
      dispatch: () => undefined,
  });







