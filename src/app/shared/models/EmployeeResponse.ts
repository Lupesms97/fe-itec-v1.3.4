import { IEmployee } from "./IEmployee.model";
import { Pageable } from "./Pageable";

export interface EmployeeResponse {
    content: IEmployee[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: any[];
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}