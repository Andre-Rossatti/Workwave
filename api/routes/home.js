import express from "express";
import session from 'express-session';
import { getServicesHomeBackend, getServicesHomeFrontend, getServicesHomeDesigner  } from "../controllers/home.js";
import { getServiceDetailsById } from "../controllers/home.js";
import { login } from "../controllers/login.js";
import { register } from "../controllers/register.js";
import { Service } from "../controllers/services.js";


const app = express();

app.use(session({
  secret: 'seu_segredo_aqui',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' } // Ative cookies seguros em produção
}));


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

  router.post("/Service", Service);

export default router