import { ModuleI } from "./ModulesI";

export interface CoursesI {
    id: string;
    tag: string;
    title: string;
    about: string;
    market: string;
    hours: string;
    avgSalary: number;
    modules: ModuleI[]
  }