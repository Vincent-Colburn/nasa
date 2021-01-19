import axios from 'axios'

export const nasaApi = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=qDD0Xk1FcGo4N02TFavWCYc4l1PYVKJ6NL5NGnxf',
})