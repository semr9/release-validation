const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

// Iniciar variable que almacena el tiempo desde que el servidor comenzó
const serverStartTime = new Date();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Endpoint para la información del servicio
app.get('/', (req, res) => {
    res.json({
        nombre_servicio: 'demo',
        tecnologia: 'nodejs',
    });
});

// Endpoint para la fecha actual del servidor
app.get('/date', (req, res) => {
    res.json({ fecha_actual: new Date().toISOString() });
});

// Endpoint para el tiempo que lleva corriendo el servicio
app.get('/time', (req, res) => {
    const elapsedTime = new Date() - serverStartTime;
    res.json({ tiempo_corriendo: elapsedTime + "ms" });
});

app.listen(3000, () => console.log('Server started on port 3000'));
