import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { userObject } from './user.object'
import { Prisma } from '@prisma/client'
import { hash } from 'argon2'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number, selectObject: Prisma.UserSelect = {}) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			select: {
				...userObject,
				favorites: {
					select: {
						id: true,
						name: true,
						price: true,
						images: true,
						slug: true
					}
				},
				...selectObject
			}
		})
		if (!user) {
			throw new Error('User not found')
		}
		return user
	}

    async updateProfile(id: number, dto: UserDto) {
        const isSameUser = await this.prisma.user.findUnique({
            where: {email: dto.email}
        })

        if (isSameUser && id != isSameUser.id)
        throw new BadRequestException('Email already in use')
     
        const user = await this.byId(id)

        return this.prisma.user.update({where: {id},
            data: {
                email: dto.email,
                name: dto.name,
                avatarPath: dto.avatarPath,
                phone: dto.phone,
                password: dto.password ? await hash(dto.password) : user.password,
            }
        })  
    }

    async toggleFavorite(id: number, productId: number) {
        const user = await this.byId(id)

        if (!user) throw new NotFoundException('User not found!')

        const isExists = user.favorites.some(product => product.userId === productId)

        await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                favorites: {
                    [isExists ? 'disconnect' : 'connect'] : {
                        id: productId
                    }
                }
            }
        })

        return {message: 'Success'}
    }
}
