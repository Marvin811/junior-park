import { PrismaClient, Product } from '@prisma/client'
import * as dotenv from 'dotenv'
import { faker } from '@faker-js/faker'

dotenv.config();
const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
    const products: Product[] = []


    for (let i = 0; i < quantity; i++) {
        const productName = faker.commerce.productName()
        const categoryName = faker.commerce.department()

        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: faker.helpers.slugify(productName).toLowerCase(),
                description: faker.commerce.productDescription(),
                price: +faker.commerce.price({min: 10, max: 999}),
                images: Array.from({
                    length: faker.number.int({ min: 2, max: 6 })
                }).map(() =>
                    `/uploads/${faker.number.int({min:1, max: 2})}.jpg`),
				category: {
					create: {
						name: categoryName,
						slug: faker.helpers.slugify(categoryName).toLowerCase()
					}
				},
                reviews: {
                    create: [
                        {
                            rating: faker.number.int({ min: 1, max: 5 }),
                            text: faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                        {
                            rating: faker.number.int({ min: 1, max: 5 }),
                            text: faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                    ]
                }
            }
        })
        products.push(product)
    }


    // eslint-disable-next-line no-console
    console.log(`Created ${products.length} products`)

}




async function main() {
    // eslint-disable-next-line no-console
    console.log('Start seeding...')

    await createProducts(25)
}

main()
    // eslint-disable-next-line no-console
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect
    })