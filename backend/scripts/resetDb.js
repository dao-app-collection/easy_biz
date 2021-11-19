const db = require('../models');

const reset = async () => {
    await db.sequelize.sync({ force: true });

    db.Client.bulkCreate([
        {
            name: "Content Object",
            address: "Los Angeles",
            email: "test@email"
        },
        {
            name: "Other Client"
        }
    ]);

    for (const client of await db.Client.findAll()) {
        client.createProject({
            title: "First project for client" 
        });
    }

    console.log("\nreset\n");

}

reset();