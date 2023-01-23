import { User } from "../user/User";
import { Order } from "../order/Order";
import { Customer } from "../customer/Customer";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  oneToOne?: Order | null;
  oneToOne_2?: Customer | null;
};
