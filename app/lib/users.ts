import bcrypt from "bcryptjs";

export interface User {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}

// Demo users - in production, this would be a database query
// Password for demo: "password"
const DEMO_PASSWORD_HASH = bcrypt.hashSync("password", 10);

const users: User[] = [
  {
    id: "1",
    email: "client@example.com",
    name: "Demo Client",
    passwordHash: DEMO_PASSWORD_HASH
  }
];

export const findUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
