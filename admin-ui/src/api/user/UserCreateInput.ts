import { InputJsonValue } from "../../types";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  tests?: TestWhereUniqueInput | null;
};
