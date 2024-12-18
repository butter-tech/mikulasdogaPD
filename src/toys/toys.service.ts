import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Injectable()
export class ToysService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateToyDto) {
    return this.prisma.toy.create({ data });
  }

  async findAll() {
    return this.prisma.toy.findMany();
  }

  async findOne(id: number) {
    return this.prisma.toy.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateToyDto) {
    return this.prisma.toy.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.toy.delete({ where: { id } });
  }
}
