import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
