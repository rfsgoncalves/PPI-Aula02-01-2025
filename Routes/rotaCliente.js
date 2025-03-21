import { Router } from "express";
import ClienteCtrl from "../Controller/clienteCtrl.js";

const rotaCliente = Router(); //mini aplicação http
const cliCtrl = new ClienteCtrl();

rotaCliente.get("/", cliCtrl.consultar);
rotaCliente.post("/", cliCtrl.gravar);
rotaCliente.put("/", cliCtrl.alterar);
rotaCliente.patch("/", cliCtrl.alterar);
rotaCliente.delete("/", cliCtrl.excluir);

export default rotaCliente;