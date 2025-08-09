const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
app.use(cors());
const PORT = 3000;

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === 'production'
    ? 'https://3line-c5pp.vercel.app'
    : '*';

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

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

app.get("(.*)", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("/users", (_, res) => {
  res.json(users,{headers: { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN },});
});

// GET /users/:id/role
app.get("/users/:id/role", (req , res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ id: user.id, role: user.role });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
