'use strict'

export default class {
    userId: Number;
    id: Number;
    title: String;
    body: String;
    
    deserialize(o: any) {
        this.userId = o.userId;
        this.id = o.id;
        this.title = o.title;
        this.body = o.title;
    }
    
    serialize() : any {
        return JSON.stringify(this);
    }
}
