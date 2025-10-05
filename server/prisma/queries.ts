import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
   //create user
    const user=await prisma.user.create({
        data:{
            name: 'John Doe',
            email: 'j@gmail.com',
        },
    });
console.log(user);
}
main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//get user
const users=await prisma.user.findMany();

//create an order associate  it with user
const order = await prisma.order.create({
    data: { user_id: {connect :{
        id: 1,
    }}
            shipping_address: '123 Main St',
            order_date: new Date(),
            order_status: 'Processing',
            total_amount: 100.0,
    }
})