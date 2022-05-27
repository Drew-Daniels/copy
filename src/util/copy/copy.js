import {
    MAX_ARGS_EXCEEDED_ERR_MSG, 
    INVALID_DATA_TYPE_ERR_MSG
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
    get() {
        return new Promise(this.item);
    }
    delete() {
        console.log('Will throw an Error object after 2 seconds with the message "Cannot Delete!" as a Promise');
    }
    copy() {
        console.log('Will return a deep copy of the provided item');
    }
}