import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res
      .status(400)
      .json({ error: "Moedas de origem e destino são obrigatórias" });
  }

  // TODO

  try {
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar conversão" });
  }
});

export default router;
