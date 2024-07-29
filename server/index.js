const app = require('./src/app');
const { database } = require('./db')

database.sync({ force: true }).then(
    console.log('Database connected'),

    app.listen(process.env.PORT || 3001, () => {
        console.log('Server on port:' , 3001)
    })
);