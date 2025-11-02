// server.js
// === DÉMARRAGE DU SERVEUR ===
// Ce script crée le serveur de ton site, gère les pages et applique les sécurités RGPD.

import express from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware de sécurité
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Fichiers publics (HTML, CSS, images…)
app.use(express.static(path.join(__dirname, "public")));

// Route d’accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
