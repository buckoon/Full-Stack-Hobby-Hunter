import { db } from "../routes/connect.js";

export const getPosts = (req, res) => {
  const query = "SELECT * FROM posts";
  db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving posts");
    } else {
      res.status(200).json(results);
    }
  });
};
