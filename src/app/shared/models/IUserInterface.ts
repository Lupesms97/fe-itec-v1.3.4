import { Role } from "./ERole";


export interface UserInterface {
    token: string;
    role:Role;
    userName:string;
}