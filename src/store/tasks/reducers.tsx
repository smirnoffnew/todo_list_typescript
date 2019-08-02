import {
    TaskState,
    ADD_TASK,
    DELETE_TASK,
    TaskActionTypes,
    
} from "./types";

const initialState: TaskState = {
    tasks: []
};

export function taskReducer(
    state = initialState,
    action: TaskActionTypes
): TaskState {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            };
        case DELETE_TASK:
            return {
                tasks: state.tasks.filter(
                    task => task.name !== action.payload.name)
            };
        default:
            return state;
    }
}
