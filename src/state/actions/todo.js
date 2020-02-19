import {
    ADD_TASK,
    CHECK_TASK,
    UNCHECK_TASK,
    REMOVE_TASK
} from './types';

/*
    Concrete actions for a specific module
*/

export const addTask = (values) => {
    const { task } = values;

    console.log(values);

    return {
        type: ADD_TASK,
        payload: task
    };
};

export const checkTask = (id) => {
    return {
        type: CHECK_TASK,
        payload: id
    };
};

export const uncheckTask = (id) => {
    return {
        type: UNCHECK_TASK,
        payload: id
    };
};

export const removeTask  = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    };
};