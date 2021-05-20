import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useState from 'react'
export default function Ajouter() {
    const [titre, setTitre] = useState('');
    const [artiste, setArtiste] = useState('');
    const [categories, setCategories] = useState('');
    const AjouterPiece = async () => { 
            await fetch(`/api/pieces/ajouter`, {
                method: 'post',
                body: JSON.stringify({ titre: titre, artiste: artiste, categories: categories }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    };
    
    return (
        <>
        <Form>
            <Form.Group controlId="formBasicText">
                <Form.Label>Titre</Form.Label>
                <Form.Control  onChange={(event) => setTitre(event.target.value)}  id="titre"  value={titre} type="text" placeholder="titre piece" />
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label>Artiste</Form.Label>
                <Form.Control onChange={(event) => setArtiste(event.target.value)}  id="artiste" value={artiste} type="text" placeholder="nom de l'artiste" />
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label>categories</Form.Label>
                <Form.Control onChange={(event) => setCategories(event.target.value)}  id="categories" value={categories} type="text" placeholder="categorie" />
            </Form.Group>
            <Button  className='mt-3' variant="primary" type="submit">
                Annuler
            </Button>
            </Form>
        </>
    )
}
