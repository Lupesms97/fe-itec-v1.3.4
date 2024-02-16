export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: any[];
    offset: number;
    unpaged: boolean;
    paged: boolean;
}