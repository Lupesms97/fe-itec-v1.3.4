import { ModuleI } from "./ModulesI";

export interface CoursesI {
    id: string;
    title: string;
    about: string;
    areaOfExpertise: string;
    content: ModuleI[]
    hours: number;
    duration:string
    avgSalary?: number;
    tag: string;

  }