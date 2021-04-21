import {Router} from "express"; 
import {getCustomRepository} from "typeorm"; 
import {SettingsController} from "./controllers/SettingsController";
import {SettingsRepository} from "./repositories/SettingsRepository"; 

const routes = Router(); 

/**
 * Tipos de parâmetros 
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1 
 * Query Paramns => Filtros e buscas 
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body params => {
 * 
 * }
 */
const settingsConstroller = new SettingsController(); 
routes.post("/settings", async (request, response) => {
    const {chat, username } = request.body; 
    const settingRepository = getCustomRepository(SettingsRepository)
    const settings = settingRepository.create({
        chat, 
        username
    })
    await settingRepository.save(settings); 
    return response.json(settings); 
})

export {routes}; 