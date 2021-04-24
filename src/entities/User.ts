import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"; 

import {v4 as uuid} from "uuid"; 

@Entity("users")
class User {
    @PrimaryColumn()
    id: string; 

    @Column()
    email: string; 

    @Column()
    chat: boolean; 

    @UpdateDateColumn()
    update_at: Date; 

    @CreateDateColumn()
    created_at: Date; 

    constructor(){
        if(!this.id){
            this.id = uuid(); 
        }
    }
}
export { User }