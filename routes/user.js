import { Router } from "express";
import { userDelete, userPost, userPatch, userGet, userPut } from "../controllers/user.js";
const router = Router();

//PETICION GET: En POSTMAN si pongo la url 'http://localhost:8080/api' voy a recibir un objeto JSON;
//Dentro de POSTMAN al ver los HEADERS podemos ver el tipo de archivo que devuelve esta peticion (res.json)
router.get("/", userGet);

router.post("/", userPost);

router.put("/:id", userPut); //COLOCANDO EL :id PUEDO ACCEDER MEDIANTE LA PROPIEDAD id CONFIGURADA EN EL CONTROLADOR put

router.patch("/", userPatch);

router.delete("/", userDelete);

export { router };
