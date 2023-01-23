import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  oneToOneId?: SortOrder;
  oneToOne_2Id?: SortOrder;
};
