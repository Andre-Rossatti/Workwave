import express from "express";
import { getServicesHomeBackend, getServicesHomeFrontend, getServicesHomeDesigner  } from "../controllers/home.js";
import { getServiceDetailsById } from "../controllers/home.js";
import { login } from "../controllers/login.js";
import { register } from "../controllers/register.js";


const router = express.Router()

router.get("/", (req, res, next) => {
    if (req.query.type === 'backend') {
      getServicesHomeBackend(req, res, next);

    } else if (req.query.type === 'frontend') {
      getServicesHomeFrontend(req, res, next);

    } else if (req.query.type === 'designer') {
      getServicesHomeDesigner(req, res, next);

    } else {
      res.status(400).send('Invalid type');
    }
  });

  router.get("/details/:id", getServiceDetailsById);

  router.post("/login", login); 

  router.post("/register", register);

export default router