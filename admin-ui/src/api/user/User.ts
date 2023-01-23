import { JsonValue } from "type-fest";
import { Test } from "../test/Test";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  tests?: Test | null;
};
