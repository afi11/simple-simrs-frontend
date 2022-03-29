import { DepartmentAction, DepartmentType } from "../actionTypes/department";

export interface Department {
    value: number;
    label: string;
}

interface State {
    departments: Department[];
}

const initialState = {
    departments: []
}

const departmentReducer = (state: State = initialState, action: DepartmentAction): State => {
    switch(action.type){
        case DepartmentType.FETCH_POLI:
            return {
                departments: action.payload
            }
        default:
            return state;
    }
}

export default departmentReducer;