import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  discount?: FloatNullableFilter;
  totalPrice?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  tests?: TestWhereUniqueInput;
};
