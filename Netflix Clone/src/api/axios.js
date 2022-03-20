import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "70d1acc4fd0cd077d49e33e3cd80f35e",
        language: "ko-KR",
    },
});

export default instance;