const app = require('./api/app');

const porta = 3000;

app.listen(porta, () => console.log(`Servidor rodando ok na porta: ${porta}`));