import { db } from "../db.js";

export const getServicesHomeBackend = (req, res) => {
  const q = "SELECT T1.*, T2.* FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id WHERE tipo = 'Backend' limit 6";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const getServicesHomeDesigner = (req, res) => {
  const q = "SELECT T1.*, T2.* FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id WHERE tipo = 'Designer' limit 6";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const getServicesHomeFrontend = (req, res) => {
  const q = "SELECT T1.*, T2.* FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id WHERE tipo = 'Frontend' limit 6";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

