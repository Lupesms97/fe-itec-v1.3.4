import { TypeNews } from "./TypeNews";

export interface ContentI{
    id: string;
    tag: string;
    title: string;
    description: string;
    content:string;
    background?: string;
}