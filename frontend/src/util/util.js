export const getAPI = () => {
    if (window.location.hostname === 'localhost') {
        return "http://localhost:3100"
    } else {
        return "https://movie-night-jf.herokuapp.com"
    }

}