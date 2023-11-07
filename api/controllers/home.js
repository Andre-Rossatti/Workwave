import { db } from "../db.js";

export const getServicesHomeBackend = (req, res) => {
  const q = "SELECT T1.*,  T2.service_id, T2.nome_arquivo FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id WHERE tipo = 'Backend' GROUP BY T1.service_id, T1.user_id, T1.titulo, T1.tipo, T1.descricao, T2.service_id, T2.nome_arquivo LIMIT 6";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const getServicesHomeDesigner = (req, res) => {
  const q = "SELECT T1.*,  T2.service_id, T2.nome_arquivo FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id WHERE tipo = 'Designer' GROUP BY T1.service_id, T1.user_id, T1.titulo, T1.tipo, T1.descricao, T2.service_id, T2.nome_arquivo LIMIT 6";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


export const getServicesHomeFrontend = (req, res) => {
  const q = "SELECT T1.*,  T2.service_id, T2.nome_arquivo FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id WHERE tipo = 'Frontend' GROUP BY T1.service_id, T1.user_id, T1.titulo, T1.tipo, T1.descricao, T2.service_id, T2.nome_arquivo LIMIT 6";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getServiceDetailsById = (req, res) => {
  const { id } = req.params;
  const q = `SELECT T1.*, T2.*, T3.* FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id LEFT JOIN users T3 ON T1.user_id = T3.user_id WHERE T1.service_id =  ${id}`;
  
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};


export const setServiceDetails = (req, res) => {
  const { id } = req.params;
  const q = `SELECT T1.*, T2.*, T3.* FROM services T1 LEFT JOIN imagens T2 ON T1.service_id = T2.service_id LEFT JOIN users T3 ON T1.user_id = T3.user_id WHERE T1.service_id = ${id}`;
  
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(`Dados retornados: ${JSON.stringify(data)}`); // Log para depuração
    return res.status(200).json(data);
  });
};



