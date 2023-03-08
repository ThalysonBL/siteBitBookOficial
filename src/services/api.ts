import axios from "axios";

const api = axios.create({
  baseURL: "https://api.bitbook.app.br",
  headers: {
    
    client_id: "2",
    client_secret: "k0c4FSsWoY94NQNYqci8fd5mGrcaJgjH5KCXfevK",
  },
});

export { api };
