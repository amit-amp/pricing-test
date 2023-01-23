import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  tests?: TestWhereUniqueInput | null;
};
