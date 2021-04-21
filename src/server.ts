import express from "express"; 

import "./database"; 
import {routes} from "./routes"; 

const app = express(); 

/**
 * 
 * GET -- Buscas 
 * POST -- Criação 
 * PUT -- Alteração 
 * DELETE -- Deletar 
 * PATCH - Alterar uma informação específica 
 * 
 */

app.use(express.json()); 

app.use(routes); 

app.listen(3333, () => console.log("Server is running on port 3333")); 

