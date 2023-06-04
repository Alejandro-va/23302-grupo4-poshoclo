import axios from "axios";

export default axios.create({ baseURL: "https://api.themoviedb.org/", params:{api_key:'191528030c357419329af1198edbcb24'} });

