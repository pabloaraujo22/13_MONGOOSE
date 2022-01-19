const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/dbmogoose')
    console.log('Conectado ao Mongoose!')
}

main().catch(e => console.log(`Erro> ${e.message}`))