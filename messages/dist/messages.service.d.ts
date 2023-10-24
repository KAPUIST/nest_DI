import { MessagesRepository } from "./messages.respository";
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor(messagesRepo: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
