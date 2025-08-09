const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
app.use(cors());
const PORT = 3000;


const users = [
  {
    id: 1,
    users: 7,
    role: "Superadmin",
    type: "DEFAULT",
    date: "2023-01-01",
    status: "Active",
  },
  {
    id: 2,
    users: 6,
    role: "Merchantadmin",
    type: "DEFAULT",
    date: "2023-02-01",
    status: "Active",
  },
  {
    id: 3,
    users: 5,
    role: "supportadmin",
    type: "DEFAULT",
    date: "2023-02-01",
    status: "Active",
  },
  {
    id: 4,
    users: 3,
    role: "sales personnel",
    type: "CUSTOM",
    date: "2023-03-01",
    status: "Active",
  },
  {
    id: 5,
    users: 4,
    role: "Deputy sales personnel",
    type: "CUSTOM",
    date: "2023-04-01",
    status: "Inactive",
  },
  {
    id: 6,
    users: 4,
    role: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    date: "2023-05-01",
    status: "Active",
  },
  {
    id: 7,
    users: 3,
    role: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    date: "2023-06-01",
    status: "Active",
  },
];

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("(.*)", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});


