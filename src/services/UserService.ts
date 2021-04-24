import {getCustomRepository, Repository} from "typeorm"; 
import { UsersRepository } from "../repositories/UsersReposiry";
import {User} from "../entities/User"; 

class UserService{

    private usersRepository: Repository<User> 
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async create(email:string){
        
       // const usersRepository = getCustomRepository(UsersRepository); 
        const userExists = await this.usersRepository.findOne({
            email
        })
        if(userExists){
            return userExists; 
        }

        const user = this.usersRepository.create({
            email
        }); 
        await this.usersRepository.save(user); 

        return user; 
    }
}
export{UserService}