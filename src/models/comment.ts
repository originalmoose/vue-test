'use strict'

export default class {
    postId: Number;
    id: Number;
    name: String;
    email: String;
    body: String;
    
    deserialize(o: any) {
        this.postId = o.postId;
        this.id = o.id;
        this.name = o.name;
        this.email = o.email;
        this.body = o.body;
    }
    
    serialize() : any {
        return JSON.stringify(this);
    }
}
