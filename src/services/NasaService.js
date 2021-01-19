import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class NasaService {
    async searchNasa(query) {
        try {
            const res = await nasaApi.get(query)
            console.log("This is the API working", res)
            AppState.pictures = res.data.results
        } catch (error) {
            console.error(error)
        }
    }
    selectNasa(picture) {
        AppState.activePicture = picture
    }
}


export const nasaService = new NasaService()