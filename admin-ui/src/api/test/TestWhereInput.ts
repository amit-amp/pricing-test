import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TestWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  oneToOne?: OrderWhereUniqueInput;
  oneToOne_2?: CustomerWhereUniqueInput;
};
