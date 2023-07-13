import axios from "axios";

const BASE_URI = "https://api.tmgrup.com.tr/v1/link/352";
const BASE_URI_VIDEO = "https://api.tmgrup.com.tr/v1/link/424";

export async function Get() {
  return axios.get(BASE_URI);
}

export async function GetVideo() {
  return axios.get(BASE_URI_VIDEO);
}


