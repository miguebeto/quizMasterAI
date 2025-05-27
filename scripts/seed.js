const { db } = require("@vercel/postgres");
const {
  categories,
  exam1,
  exam2,
  exam3,
  quizzes,
} = require("../lib/placeholder-data.js");

async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Crear tabla de categorías
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "categories" table`);

    // Insertar categorías
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (id, name, description, image)
        VALUES (${category.id}, ${category.name}, ${category.description}, ${category.image})
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          image = EXCLUDED.image
        RETURNING *;
      `
      )
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      categories: insertedCategories,
    };
  } catch (error) {
    console.error("Error seeding categories:", error);
    throw error;
  }
}

async function seedQuestions(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Crear tabla de preguntas
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS questions (
        id UUID PRIMARY KEY,
        text TEXT NOT NULL,
        options TEXT[] NOT NULL,
        correct_answers INTEGER[] NOT NULL,
        explanation TEXT NOT NULL
      );
    `;

    console.log(`Created "questions" table`);

    // Función para insertar preguntas
    const insertQuestions = async (questions) => {
      return Promise.all(
        questions.map(
          (question) => client.sql`
          INSERT INTO questions (id, text, options, correct_answers, explanation)
          VALUES (${question.id}, ${question.text}, ${question.options}, ${question.correctAnswers}, ${question.explanation})
          ON CONFLICT (id) DO UPDATE SET
            text = EXCLUDED.text,
            options = EXCLUDED.options,
            correct_answers = EXCLUDED.correct_answers,
            explanation = EXCLUDED.explanation
          RETURNING *;
        `
        )
      );
    };

    // Insertar preguntas de cada examen
    const insertedExam1 = await insertQuestions(exam1);
    const insertedExam2 = await insertQuestions(exam2);
    const insertedExam3 = await insertQuestions(exam3);

    console.log(
      `Seeded ${
        insertedExam1.length + insertedExam2.length + insertedExam3.length
      } questions`
    );

    return {
      createTable,
      questions: [...insertedExam1, ...insertedExam2, ...insertedExam3],
    };
  } catch (error) {
    console.error("Error seeding questions:", error);
    throw error;
  }
}

async function seedQuizzes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS quizzes (
        id UUID PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        subtitle VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category_id UUID NOT NULL,
        category VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "quizzes" table`);

    const insertedQuizzes = await Promise.all(
      quizzes.map(
        (quiz) => client.sql`
        INSERT INTO quizzes (id, title, slug, subtitle, description, category_id, category)
        VALUES (${quiz.id}, ${quiz.title}, ${quiz.slug}, ${quiz.subtitle}, ${quiz.description}, ${quiz.categoryId}, ${quiz.category})
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          subtitle = EXCLUDED.subtitle,
          description = EXCLUDED.description,
          category_id = EXCLUDED.category_id,
          category = EXCLUDED.category
        RETURNING *;
      `
      )
    );

    console.log(`Seeded ${insertedQuizzes.length} quizzes`);

    return {
      createTable,
      quizzes: insertedQuizzes,
    };
  } catch (error) {
    console.error("Error seeding quizzes:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await seedCategories(client);
    await seedQuestions(client);
    await seedQuizzes(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
