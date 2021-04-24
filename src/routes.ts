import {Router} from "express"; 
import {getCustomRepository} from "typeorm"; 
import { MessagesController } from "./controllers/MessagesController";
import {SettingsController} from "./controllers/SettingsController";
import { UsersController } from "./controllers/UserController";
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
const settingsController = new SettingsController(); 
const usersController = new UsersController(); 
const messagesController = new MessagesController(); 

// routes.post("/settings", async (request, response) => {
//     const {chat, username } = request.body; 
//     const settingRepository = getCustomRepository(SettingsRepository)
//     const settings = settingRepository.create({
//         chat, 
//         username
//     })
//     await settingRepository.save(settings); 
//     return response.json(settings); 
// })

routes.post("/settings", settingsController.create); 
routes.post("/users", usersController.create); 

routes.post("/messages", messagesController.create); 
routes.get("/messages/:id", messagesController.showByUser); 

export {routes}; 