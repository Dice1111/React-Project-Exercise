import axios from "axios";
export class UserService{
    static serverUrl = `https://jsonplaceholder.typicode.com/users`;

    static getallUsers(){
        return axios.get(this.serverUrl);
    }
}