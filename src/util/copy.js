export default class Copier {
    constructor(item) {
        this.item = item;
    }
    get() {
        console.log('Will return the original item after 1 second as a Promise');
    }
    delete() {
        console.log('Will throw an Error object after 2 seconds with the message "Cannot Delete!" as a Promise');
    }
    copy() {
        console.log('Will return a deep copy of the provided item');
    }
}