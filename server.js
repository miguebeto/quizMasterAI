const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
// const cors = require("cors");

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
// app.use(cors());

//rutas para las categorías
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las categorías" });
  }
});

app.get("/api/categories/:id", async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
});

app.post("/api/categories", async (req, res) => {
  try {
    const category = await prisma.category.create({
      data: req.body,
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoría" });
  }
});

app.put("/api/categories/:id", async (req, res) => {
  try {
    const category = await prisma.category.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
});

app.delete("/api/categories/:id", async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la categoría" });
  }
});

// Rutas para obtener los quizzes
app.get("/api/quizzes", async (req, res) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: { exam: true },
    });
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los quizzes" });
  }
});

app.get("/api/quizzes/:id", async (req, res) => {
  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { exam: true },
    });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el quiz" });
  }
});

app.post("/api/quizzes", async (req, res) => {
  try {
    const quiz = await prisma.quiz.create({
      data: req.body,
    });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el quiz" });
  }
});

app.put("/api/quizzes/:id", async (req, res) => {
  try {
    const quiz = await prisma.quiz.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el quiz" });
  }
});

//rutas para las preguntas
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las preguntas" });
  }
});

app.post("/api/questions", async (req, res) => {
  try {
    const question = await prisma.question.create({
      data: req.body,
    });
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la pregunta" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
