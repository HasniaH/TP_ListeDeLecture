//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const RepertoireMusicien = [
    {
        categorie: {
            titre: {
                titre1: 'Accompagnement Formation auditive et solfège Piano',
                titre2: 'Saxophone Formation auditive et solfège Théor',
                titre3: 'Saxophone jazz Piano jazz Orgue',
                titre4: 'Clarinette basse'
            },
            artisite: {
                artisite1: 'Josiane Bissonette',
                artisite2: 'Alice Bradier',
                artisite3: 'Alexandre Flamand',
                artisite4: 'Louis-Charles Gagnon',
            }
        },
        categorie: {
            titre: {
                titre1: 'Violoncelle',
                titre2: 'Chant classique',
                titre3: 'Guitare jazz',
                titre4: 'Clarinette basse'
            },
            artisite: {
                artisite1: 'Marie-Pier Gagné',
                artisite2: 'Louis-Charles Gagnon',
                artisite3: 'Alain Filion',
                artisite4: 'Martin Desjardins',
            }
        }
    }]

function PageRepertoire() {
    return (
        <Container>
            <Row>
                <Col>
                    <Alert variant="success" className="mt-1">
                        <h3>Repertoire des musiciens </h3>
                    </Alert>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3 }}><h3>Catégories</h3> </Col>
                <Col md={{ span: 2 }}><h3>Titre</h3></Col>
                <Col md={{ span: 2 }}><h3>Artiste</h3></Col>
                <Col >
                    <input type="text" name="name" />
                    <input type="submit" value="Rechercher par catégorie" />
                </Col>
            </Row>
            <Row>
                <Col>
                    {RepertoireMusicien.map((categorie) => (
                        <tr>
                            <tr>{RepertoireMusicien.categorie}</tr>
                            {/* <tr>{RepertoireMusicien.categorie.titre}</tr>
                            <tr>{RepertoireMusicien.categorie.titre.titre1}</tr>
                            <tr>{RepertoireMusicien.categorie.titre.titre2}</tr>
                            <tr>{RepertoireMusicien.categorie.titre.titre3}</tr>
                            <tr>{RepertoireMusicien.categorie.titre.titre4}</tr> */}
                        </tr>
                    ))}

                </Col>
            </Row>
        </Container>
    );
}
export default PageRepertoire