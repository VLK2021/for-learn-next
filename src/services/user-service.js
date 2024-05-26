import {axiosService} from "./axios-service";
import {urls} from "../constants/urls";


const userService = {
    getAll: () => axiosService.get(urls.users.getAll),
    getSingleUser: (id) => axiosService.get(urls.users.getSingle(id)),
    getUserPosts: (id) => axiosService.get(urls.users.getUserPosts(id))
};

export {userService}