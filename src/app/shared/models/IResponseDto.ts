export interface ResponseDto {
    token:string;
    acessInfo:{
        permission: string[];
        availiableCompanies: string[];
    }
}