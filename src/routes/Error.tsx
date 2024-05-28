import { Container, Stack, Alert, Button } from 'react-bootstrap';

export default function Error() {
  return (
    <>
        <br/>
        <Container>
            <Alert variant="danger">
            <Alert.Heading>Error 404</Alert.Heading>
            <p className="alert-message">
                La URL proporcionada no es válida.
            </p>
            <hr />
            <p className="mb-0">
                Verifique la dirección e intente nuevamente.
            </p>
            </Alert>
            <br/>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Button href="/" target="_self" variant="primary">Ir a la página principal</Button>
            </Stack>
        </Container>
    </>    
  );
}