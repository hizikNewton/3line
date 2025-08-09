import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(cors());
const PORT = 3000;

interface User {
  id: number;
  users: number;
  role: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  date: string; // YYYY-MM-DD
  status: "Active" | "Inactive";
}

const users: User[] = [
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

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

// GET /users/:id/role
app.get("/users/:id/role", (req: Request, res: Response) => {
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
