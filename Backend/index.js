const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// POST method route
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const user_id = "Abilash_R_20012004"; // Replace with dynamic values if needed
  const email = "abilash.r2021@vitstudent.ac.in";
  const roll_number = "21BCE3984";

  const numbers = [];
  const alphabets = [];
  let highest_lowercase_alphabet = [];

  if (data) {
    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (typeof item === "string") {
        alphabets.push(item);
        if (item >= "a" && item <= "z") {
          if (
            highest_lowercase_alphabet.length === 0 ||
            item > highest_lowercase_alphabet[0]
          ) {
            highest_lowercase_alphabet = [item];
          }
        }
      }
    });
  }

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet,
  });
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

module.exports = app;
