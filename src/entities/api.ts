import { apiURL } from "@/core/env";
import Axios from "axios";

export const api = Axios.create({ baseURL: apiURL });
