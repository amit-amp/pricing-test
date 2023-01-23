/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Test, User, Order, Customer } from "@prisma/client";

export class TestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestFindManyArgs>
  ): Promise<number> {
    return this.prisma.test.count(args);
  }

  async findMany<T extends Prisma.TestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestFindManyArgs>
  ): Promise<Test[]> {
    return this.prisma.test.findMany(args);
  }
  async findOne<T extends Prisma.TestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestFindUniqueArgs>
  ): Promise<Test | null> {
    return this.prisma.test.findUnique(args);
  }
  async create<T extends Prisma.TestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestCreateArgs>
  ): Promise<Test> {
    return this.prisma.test.create<T>(args);
  }
  async update<T extends Prisma.TestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestUpdateArgs>
  ): Promise<Test> {
    return this.prisma.test.update<T>(args);
  }
  async delete<T extends Prisma.TestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDeleteArgs>
  ): Promise<Test> {
    return this.prisma.test.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.test
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getOneToOne(parentId: string): Promise<Order | null> {
    return this.prisma.test
      .findUnique({
        where: { id: parentId },
      })
      .oneToOne();
  }

  async getOneToOne_2(parentId: string): Promise<Customer | null> {
    return this.prisma.test
      .findUnique({
        where: { id: parentId },
      })
      .oneToOne_2();
  }
}
