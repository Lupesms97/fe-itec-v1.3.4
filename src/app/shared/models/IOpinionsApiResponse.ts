import { IOpinionsResponse } from "./IOpinionsResponse";
import { Pageable } from "./Pageable";

export interface IOpinionsApiResponse{

        content: IOpinionsResponse[];
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