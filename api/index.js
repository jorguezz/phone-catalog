'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
    config: {
      cors: {
        origin: ["*"],
        headers: ["Access-Control-Allow-Origin","Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type", "CORELATION_ID"],
        credentials: true
      }
    },
    method: 'GET',
    path: '/phones',
    handler: function (request, reply) {
    	// Mock response with delay
        setTimeout(()=> {
            reply([{
                id: 1,
                name: 'Iphone 7',
                description: '',
                image: 'http://www.smartprostore.com/media/catalog/product/cache/1/small_image/600x800/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s7_principal.png',
                color: 'black',
                price: 699.99
            },
            {
                id: 2,
                name: 'Samsung Galaxy 7',
                description: '',
                image: 'https://www.poorvikamobile.com/image/cache/data/Mobiles/Apple/Iphone%207%20Plus/iPhone-7-Plus-Black-Front-600x800.jpg',
                color: 'black',
                price: 599.99
            },
            {
                id: 3,
                name: 'Xiaomi Redmi Note 3 Pro',
                description: '',
                image: 'http://www.smartprostore.com/media/catalog/product/cache/1/small_image/600x800/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi_redmi_note_3_pro_principal.png',
                color: 'black',
                price: 499.99
            }]);
        },3000); 
        
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});