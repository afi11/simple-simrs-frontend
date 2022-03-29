import axios from "axios";
import { Dispatch } from "redux";
import { getTokenUserId } from "../../config";
import { DepartmentAction, DepartmentType } from "../actionTypes/department";

export const fetchAPIPoli = () => {
    return async (dispatch: Dispatch<DepartmentAction>) => {
        try{
            const {data} = await axios.get(`http://localhost:8888/api/fetch-poli`, {
                headers: { Authorization: getTokenUserId().token + "" },
            });
            dispatch({type: DepartmentType.FETCH_POLI, payload: data.data});
            console.log(data);
        }catch(err) {}
    }
}