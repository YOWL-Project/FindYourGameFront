import axios from "axios";

export default axios.create({
    baseURL: "https://findyourgame.herokuapp.com/api",
});