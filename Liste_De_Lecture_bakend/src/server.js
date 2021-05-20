import express, { request } from 'express';
const app = express();
app.use(express.json());

import { MongoClient } from 'mongodb';

const UtiliserDB = async (operations, reponse) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('Tp_ListeDeLecture');
        await operations(db);
        client.close();
    }
    catch (erreur) {
        reponse.status(500).send("Erreur de connection à la  bases de données  ", erreur);
    }
}

app.get('/api/pieces', (requete, reponse) => {
    UtiliserDB(async (db) => {
        const infoPieces = await db.collection('pieces').findOne({});
        reponse.status(200).json(infoPieces);
    }, reponse)
});

app.get('/api/pieces/:id', (requete, reponse) => {
    const idPiece = requete.params.id;
    console.log(idPiece);   
    UtiliserDB(async (db) => {
        var ObjectId = require('mongodb').ObjectID;
        const infoPiece = await db.collection('pieces').findOne({ _id: ObjectId(idPiece) });
        reponse.status(200).json(infoPiece);
    }, reponse)
});



app.get('/api/categories', (requete, reponse) => {
    const categorie = requete.params.categorie;
      
    UtiliserDB(async (db) => {
        const listeCategories = await db.collection('pieces').find();
        reponse.status(200).json(listeCategories);
    }, reponse)
});

app.post('/api/categories/ajouter', (requete, reponse) => {
    const categorie = requete.body;
    console.log(requete.body);
    if(categorie !== undefined) {
        UtiliserDB (async (db) => {    
          await db.collection('pieces').insertOne({           
            categorie: categorie
          });
          reponse.status(200).send('categorie ajouté');    
        } , reponse).catch(
           () =>reponse.status(500).send("Erreur : la categorie n'a pas été ajouté")
        );
    }
    else {
        reponse.status(500).send(`Le paramètre catégorie n'est pas défini:

        - categorie: ${categorie}`);
    }
});

app.post('/api/pieces/ajouter', (requete, reponse) => {
    const {titre, artiste, categories} = requete.body;
    console.log(requete.body);
    if(titre !== undefined && artiste !== undefined && categories !== undefined) {
        UtiliserDB (async (db) => {    
          await db.collection('pieces').insertOne({
            titre: titre,
            artiste: artiste,
            categories: categories
          });
          reponse.status(200).send('piece ajouté');    
        } , reponse).catch(
           () =>reponse.status(500).send("Erreur : la piece n'a pas été ajouté")
        );
    }
    else {
        reponse.status(500).send(`Certains paramètres ne sont pas définis:
        - titre: ${titre},
        - artiste: ${artiste},
        - categories: ${categories}`);
    }
});

app.post('/api/pieces/:id/modifier', (requete, reponse) => { //à completer
    const {ObjectId, titre, artiste, categories} = requete.body;
    console.log(requete.body);
    if(ObjectId !== undefined && titre !== undefined && artiste !== undefined && categories !== undefined) {
        UtiliserDB (async (db) => {    
          await db.collection('pieces').insertOne({
            titre: titre,
            artiste: artiste,
            categories: categories
          });
          reponse.status(200).send('piece ajouté');    
        } , reponse).catch(
           () =>reponse.status(500).send("Erreur : la piece n'a pas été ajouté")
        );
    }
    else {
        reponse.status(500).send(`Certains paramètres ne sont pas définis:
        - titre: ${titre},
        - artiste: ${artiste},
        - categories: ${categories}`);
    }
});

app.listen(8000, () => console.log('Ecoute le port 8000'));
