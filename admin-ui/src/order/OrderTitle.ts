import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "ooo";

export const OrderTitle = (record: TOrder): string => {
  return record.ooo || String(record.id);
};
