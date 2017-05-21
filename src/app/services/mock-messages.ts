import { Message } from '../message';

export const MESSAGES: Message[] = [
    {id: Math.floor(Math.random()*100), user_name: 'John', message: 'Nice to see this!', time: new Date(Math.floor(Math.random()*100000)) },
    {id: Math.floor(Math.random()*100), user_name: 'Kimmel', message: 'Kool bro, Im glad you are happy!', time: new Date(Math.floor(Math.random()*100000)) },
    {id: Math.floor(Math.random()*100), user_name: 'Jis', message: 'Yeeeehaw', time: new Date(Math.floor(Math.random()*100000)) }
];