const MongoClient = require('mongodb').MongoClient;

class ClientSingleton {
    constructor(connectionString) {
        if(ClientSingleton.instance) {
            return ClientSingleton.instance;
        }
        ClientSingleton.instance = this;
        this.client = new MongoClient(connectionString);
    }
}

export default ClientSingleton;