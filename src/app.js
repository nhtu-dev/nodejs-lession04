import express from "express";
import { create as createHandlebarsEngine } from "express-handlebars";

// Khoi tao app Express
const app = express();

// Tao Handlebars Engine
const handlebarsEngine = createHandlebarsEngine({
  defaultLayout: "main",
  layoutsDir: "views/layouts",
  partialsDir: "views/partials",
});
// Khai bao engine Handlebars
app.engine("handlebars", handlebarsEngine.engine);
// Su dung engine Handlebars
app.set("view engine", "handlebars");
// Cau hinh folder views
app.set("views", "views/pages");

// Cau hinh static files
app.use(express.static("public"));

// Tao cac Routes

// Trang chu
app.get("/", (req, res) => {
  res.render("homepage");
});

// Trang about
app.get("/about", (req, res) => {
  res.render("about", {
    name: "Nguyen",
    title: "Some text",
    user: {
      id: 1,
      name: "Nam Nguyen",
    },
    values: [
      {
        title: "CONSECTETUR",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.",
      },
      {
        title: "ADIPISICING",
        desc: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
      },
      {
        title: "Title 1",
        desc: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
      },
      {
        title: "Title 2",
        desc: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
      },
    ],
  });
});

// Trang blog
app.get("/blog", (req, res) => {
  res.render("blog");
});

// Chay app Express
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
