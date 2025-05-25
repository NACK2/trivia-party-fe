import axios from "axios";
import { SESSION_TOKEN_URL } from "./constants";

async function getSessionToken() {
  const sessionToken = await axios.get(SESSION_TOKEN_URL);
  return sessionToken;
}

export { getSessionToken };
