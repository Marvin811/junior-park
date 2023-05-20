import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
constructor(private prisma: PrismaService) {}

async byId(id: number) {
    const user = await this.prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            email: true,
            name: true,
            avatarPath: true,
            password: false,
            phone: true,
            favorites: {
                select: {
                    id: true,
                    name: true,
                    price: true,
                    images: true,
                    slug: true
                }
            }
        }
    })
}

}
