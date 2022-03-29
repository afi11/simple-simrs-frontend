import { Department } from "../reducers/departmentReducer";

export enum DepartmentType {
    FETCH_POLI = "FETCH_POLI",
    FETCH_RANAP = "FETCH_RANAP",

}

interface actionGetPoliSuccess {
    type: DepartmentType.FETCH_POLI;
    payload: Department[];
}

interface actionGetRanapSuccess {
    type: DepartmentType.FETCH_RANAP;
    payload: Department[];
}

export type DepartmentAction = actionGetPoliSuccess | actionGetRanapSuccess;