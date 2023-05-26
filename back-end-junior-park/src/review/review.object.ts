import { Prisma } from '@prisma/client'
import { userObject } from 'src/user/user.object'

export const reviewObject: Prisma.ReviewSelect = {
	user: {
		select: userObject
	}, 
	createdAt: true,
	text: true,
	rating: true,
	id: true
    
}
