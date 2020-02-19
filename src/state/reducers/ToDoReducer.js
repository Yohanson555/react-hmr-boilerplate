import * as Types from '../actions/types';

const INITIAL_STATE = {
    tasks: {},
    counter: 0
};

export default (state = INITIAL_STATE, action) => {
    let id, tasks;

    switch (action.type) {
        case Types.ADD_TASK:
            id = state.counter + 1;
            tasks = { ...state.tasks };

            tasks[id] = {
                id,
                text: action.payload,
                active: true
            };

            return {
                ...state,
                tasks,
                counter: id
            };

        case Types.CHECK_TASK:
            id = action.payload;
            tasks = { ...state.tasks };

            if (tasks[id]) {
                tasks[id].active = false;

                return {
                    ...state,
                    tasks
                };
            }

            return state;

        case Types.UNCHECK_TASK:
            id = action.payload;
            tasks = { ...state.tasks };

            if (tasks[id]) {
                tasks[id].active = true;

                return {
                    ...state,
                    tasks
                };
            }

            return state;

        case Types.REMOVE_TASK:
            id = action.payload;
            tasks = { ...state.tasks };

            delete tasks[id];

            return {
                ...state,
                tasks
            };

        default:
            return state;
    }

};