import axios from "axios";

const client = axios.create({baseURL: " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1"});

export default class ApiServices {

    static fetchUserData() {
        return client.get("/users").then((response) => {
            return response;
        });
    }

    static fetchUserProfile() {
        return client.get("users/:id ").then((response) => {
            return response;
        });
    }
}
