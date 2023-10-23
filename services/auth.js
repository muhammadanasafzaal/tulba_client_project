import axios from "axios";


export const createUser =async (values) =>{
    return await axios.post("https://tulba.cyclic.cloud/api/v2/users",{
        values
    });
  }