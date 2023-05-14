import { Button, Stack } from "react-bootstrap";

export default function InstructionsBox() {
    return (
        <Stack className="instructions-box text-center flex-wrap" gap={3}>
            <h1 className='instructions-title'>Instructions</h1>
            <p>Μια σειρά δηλώσεων θα παρουσιαστούν σε εσάς.<br />
            Για κάθε μία, επιλέξτε το πλαίσιο με τη γνώμη σας.<br />
            Μπορείτε vα δοκιμάσετε το κουίζ σε άλλη γλώσσα εάν κάνετε κλικ στη μπάρα πάνω δεξιά.</p>
            <Stack className='d-flex justify-content-center align-items-center' direction="horizontal" gap={3}>
                <Button variant="success" size="lg" href="/quiz">To κατάλαβα!</Button>
                <Button variant="danger" size="lg" href="/quiz">To κατάλαβα αλλά σε κόκκινο!</Button>
            </Stack>
        </Stack>
    );
}