import {getCustomRepository, Repository} from "typeorm";
import {Message} from "../entities/Message";  
import {MessagesRepository} from "../repositories/MessagesRepository"

interface IMessageCreate{
    admin_id?: string; 
    text?: string; 
    user_id?: string; 
}

class MessageService { 

    private messagesRepository: Repository<Message>; 
    
    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository); 
    }
    async create( {admin_id, text, user_id} : IMessageCreate){
        const messagesRepository = getCustomRepository(MessagesRepository); 
        const message = messagesRepository.create({
            admin_id, 
            text, 
            user_id
        }); 

        await messagesRepository.save(message);
        return message; 
    }

    async listByUser(user_id: string){
        const messagesRepository = getCustomRepository(MessagesRepository); 

        const list = await messagesRepository.find({
           where: { user_id } , 
           relations: ["users"]
        })
        return list; 

    }
}
export { MessageService } 