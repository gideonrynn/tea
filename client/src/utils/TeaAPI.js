/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    getTeas: () => {
        return axios.get("/api/tea");
    },

    addTea: (newTea) => {
        console.log(newTea)
        return axios.post("/api/tea/new", newTea)
    }
}