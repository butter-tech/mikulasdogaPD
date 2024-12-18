import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Injectable()
export class ChildrenService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChildDto) {
    return this.prisma.child.create({ data });
  }

  async findAll() {
    return this.prisma.child.findMany();
  }

  async findOne(id: number) {
    return this.prisma.child.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateChildDto) {
    const updatedChild = await this.prisma.child.update({ where: { id }, data });
    if (!data.isGood) {
      await this.prisma.toy.updateMany({
        where: { childId: id },
        data: { childId: null },
      });
    }
    return updatedChild;
  }

  async remove(id: number) {
    return this.prisma.child.delete({ where: { id } });
  }

  async assignToyToChild(childId: number, toyId: number) {
    const child = await this.prisma.child.findUnique({ where: { id: childId } });

    if (!child.isGood) {
      throw new ConflictException('The child is not able to receive any toys.');
    }

    return this.prisma.toy.update({
      where: { id: toyId },
      data: { childId },
    });
  }
}