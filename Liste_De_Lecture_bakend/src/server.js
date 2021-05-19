import express, { request } from 'express';

const app = express();
const pieces = {
    'Category1': {
    'piece1':'p1',
    'piece2':'p2',
    'piece3':'p3'
    }
      
}

app.get('/api/pieces', (requete, reponse) => {
    reponse.status(200).json(pieces);
});


app.listen(8000,()=>console.log('Ecoute le port 8000'));
