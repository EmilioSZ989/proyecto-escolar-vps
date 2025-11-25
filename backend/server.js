const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type"
}));

app.use(express.json());

app.use("/estudiantes", require("./routes/estudiantesRoutes"));
app.use("/profesores", require("./routes/profesoresRoutes"));
app.use("/materias", require("./routes/materiasRoutes"));
app.use("/asignaciones", require("./routes/asignacionesRoutes"));

app.get("/", (req, res) => {
  res.send("API del Sistema Escolar funcionando");
});

app.listen(process.env.PORT, () => {
  console.log("Servidor backend funcionando en puerto", process.env.PORT);
});