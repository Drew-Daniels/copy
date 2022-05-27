import {
    MAX_ARGS_EXCEEDED_ERR_MSG, 
    INVALID_DATA_TYPE_ERR_MSG,
    DELETE_ERR_MSG
} from './constants';

export default class Copier {
    constructor(item) {
        if (arguments.length > 1) { throw new Error(MAX_ARGS_EXCEEDED_ERR_MSG)}
        if (typeof item === 'number') {
            if (!(Number.isInteger(item))) {
                throw new Error(INVALID_DATA_TYPE_ERR_MSG);
            }
        } else {
            if (typeof item === 'boolean') {
                throw new Error(INVALID_DATA_TYPE_ERR_MSG);
            }
        }
        this.item = item;
    }
    async get() {
        return this.item;
    }
    async delete() {
        setTimeout(() => {
            return new Error(DELETE_ERR_MSG);
        }, 2000);
    }
    copy() {
        return JSON.parse(JSON.stringify(this.item));
    }
}