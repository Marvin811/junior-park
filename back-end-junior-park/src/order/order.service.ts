import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
constructor(private prisma: PrismaService) {}
    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
    }
    async getByUserId(userId: number) {
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }


}
