import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TestCreateInput = {
  user?: UserWhereUniqueInput | null;
  oneToOne?: OrderWhereUniqueInput | null;
  oneToOne_2?: CustomerWhereUniqueInput | null;
};
