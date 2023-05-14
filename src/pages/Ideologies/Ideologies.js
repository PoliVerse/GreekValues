import './Ideologies.css';
import { Stack } from 'react-bootstrap';
import Ideology from './Ideology';

export default function Ideologies() {
    return (
        <div className="ideologies">
            <Stack className='text-center' gap={4}>
                <h1 className='ideologies-title'>Ιδεολογίες</h1>
                <p className='ideologies-p'>Εδώ θα βρείτε τις ιδεολογίες που είναι διαθέσιμες:</p>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='communism-id'>Κομμουνισμός</span>-<span className='socialism-id'>Σοσιαλισμός</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Κομμουνισμός' color='communism-id' description='O Κομμουνισμός είναι μια ιδεολογία που αποσκοπεί στη συγκέντρωση των μέσων παραγωγής και την ιδιοκτησία τους από τον λαό σε αντίθεση με την ιδιωτική περιουσία. Σταθεροί υποστηρικτές στην Ελλάδα αποτελούν το KKE και μικρότερα κόμματα (KKE μ-λ, ΑΝΤΑΡΣΥΑ, κ.α.).' />
                    <Ideology ideology='Μαοϊσμός' color='communism-id'description={`O Μαοϊσμός είναι κομμουνιστική θεωρία που αναπτύχθηκε από τον Κινέζο επαναστάτη Μάο Ζεντόνγκ. Διαφωνεί με το μοντέλο της ΕΣΣΔ και δίνει έμφαση στη στήριξη των αγροτών. To KKE μ-λ έχει ταχθεί με τον μαοϊσμό.`} />
                    <Ideology ideology='Σοσιαλισμός' color='socialism-id' description='O Σοσιαλισμός αποτελεί αριστερή οικονομική θεωρία. Θεωρείται προστάδιο του κομμουνισμού. Σχεδόν όλα τα αριστερά κόμματα έχουν χαρακτηριστεί ως σοσιαλιστικά.' />
                    <Ideology ideology='Αριστερός Εθνικισμός' color='socialism-id' description='O Αριστερός Εθνικισμός αποτελεί εθνικιστική θεωρία που υποστηρίζει συνήθως συντηρητικές θέσεις σε κοινωνικά ζητήματα καθώς και κρατική παρέμβαση σε οικονομικά ζητήματα. Παράδειγμα αποτελεί η Πλέυση Ελευθερίας.' />
                </Stack>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='social-democracy-id'>Σοσιαλδημοκρατία</span>-<span className='green-id'>Πράσινοι</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Δημοκρατικός Σοσιαλισμός' color='social-democracy-id' description='O Δημοκρατικός Σοσιαλισμός είναι ιδεολογία που υποστηρίζει το δημοκρατικό πολίτευμα, μικτό οικονομικό σύστημα, προοδευτικές θέσεις, και ενθαρρύνει τα εργατικά δικαιώματα. O ΣΥΡΙΖΑ θεωρείται το κύριο δημoκρατικό σοσιαλιστικό κόμμα.' />
                    <Ideology ideology='Σοσιαλδημοκρατία' color='social-democracy-id' description='H Σοσιαλδημοκρατία είναι κεντροαριστερά ιδεολογία που υιοθετεί σοσιαλιστικά ιδεώδη σε κοινωνικά θέματα και υποστηρίζει την ελεύθερη αγορά με σημαντικές παρεμβάσεις για λόγους κοινωνικής δικαιοσύνης. To ΠΑΣΟΚ είναι τυπικό δείγμα σοσιαλδημοκρατικού κόμματος ενώ προς αυτήν την κατεύθυνση οδεύει και o ΣΥΡΙΖΑ.' />
                    <Ideology ideology='Προοδευτισμός' color='green-id' description='O Προοδευτισμός θεωρεί την πολιτιστική κληρονομιά του παρελθόντος ως ήσσονος σημασίας και αντί αυτού υποστηρίζει την κοινωνική πρόοδο και την ενσωμάτωση όλων των κοινωνικών ομάδων. Όλα τα μεγάλα κόμματα μοιράζονται προοδευτικές απόψεις (Νέα Δημοκρατία, ΣΥΡΙΖΑ, ΠΑΣΟΚ).' />
                    <Ideology ideology='Πράσινες Πολιτικές' color='green-id' description='Oι Πράσινες Πολιτικές αποσκοπούν στην προστασία του περιβάλλοντος μέσω παρεμβατισμού σε ρυπογόνες δραστηριότητες ενώ οικονομικά έχουν διάφορες απόψεις. Oι Οικολόγοι Πράσινοι που συμμετέχουν στο Πράσινο και Μωβ αποτελούν το πιο γνωστό ελληνικό πράσινο κόμμα.' />
                </Stack>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='anarchism-id'>Αναρχία</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Αναρχισμός' color='anarchism-id' description='O Αναρχισμός επιδιώκει μια κοινωνία χωρίς ηγεσία και κράτος. Υπάρχουν διάφορες αναρχικές οργανώσεις στην Ελλάδα.' />
                </Stack>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='centre-id'>Κέντρο</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Φιλελευθερισμός' color='centre-id' description='O Φιλελευθερισμός υποστηρίζει τα ανθρώπινα δικαιώματα, την κοινοβουλευτική δημοκρατία, και τον προοδευτισμό. H Νέα Δημοκρατία και άλλα κόμματα (Ένωση Κεντρώων) υποστηρίζουν τον φιλελευθερισμό.' />
                    <Ideology ideology='Βενιζελισμός' color='centre-id' description='O Βενιζελισμός αποτελεί παραλλαγή του φιλελυθερισμού στην Ελλάδα που διαμορφώθηκε από τον Έλληνα πολιτικό Ελυθέριο Βενιζέλο. To Κόμμα Φιλελευθέρων αποτέλεσε τον προμαχώνα της ιδεολογίας και σήμερα την διεκδικούν φιλελεύθερα κόμματα.' />
                </Stack>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='centre-right-id'>Κεντροδεξιά</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Φιλελεύθερος Συντηρητισμός' color='centre-right-id' description='O Φιλελεύθερος Συντηρητισμός υποστηρίζει ανοιχτή αγορά και μετριοπαθείς κοινωνικές θέσεις. Μεταξύ άλλων η Νέα Δημοκρατία και η Εθνική Δημιουργία θεωρούνται τέτοια κόμματα.' />
                    <Ideology ideology='Συντηρητικός Φιλελευθερισμός' color='centre-right-id' description='O Συντηρητικός Φιλελευθερισμός συνδυάζει φιλελεύθερες οικονομικές και συντηρητικές κοινωνικές απόψεις. H Εθνική Δημιουργία και διασπάσεις από τη Νέα Δημοκρατία αποτελούν συντηρητικά φιλελεύθερα κόμματα.' />
                    <Ideology ideology='Χριστιανοδημοκρατία' color='centre-right-id' description='H Χριστιανοδημοκρατία υποστηρίζει τη διατήρηση των χριστιανικών αξιών και οικονομικά ένα σύστημα πρόνοιας. H Νέα Δημοκρατία είχε χαρακτηριστεί στο παρελθόν χριστιανοδημοκρατική.' />
                </Stack>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='conservatism-id'>Συντηρητισμός</span>-<span className='nationalism-id'>Εθνικισμός</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Συντηρητισμός' color='conservatism-id' description={`O ${<span className='conservatism-id'>Συντηρητισμός</span>} υποστηρίζει την διατήρηση παραδοσιακών αξιών ενώ στην Ελλάδα τείνει προς τον οικονομικό παρεμβατισμό αντί της αγοράς. Όλα τα κόμματα από τη Νέα Δημοκρατία και μετά έχουν συντηρητικές θέσεις.`} />
                    <Ideology ideology='Εθνικισμός' color='nationalism-id' description='O Εθνικισμός σκοπεύει στην διατήρηση των χαρακτηριστικών που διέπουν το έθνος και τον οικονομικό προστατευτισμό. Γνωστά εθνικιστικά κόμματα στην Ελλάδα είναι η Ελληνική Λύση, oι Έλληνες και η Χρυσή Αυγή.' />
                    <Ideology ideology='Μοναρχισμός' color='nationalism-id' description='O Μοναρχισμός υποστηρίζει την καθιέρωση του βασιλιά ως αρχηγού κράτους, συνήθως σε ένα κοινοβουλευτικό πολίτευμα. H τάση αυτή έχει υποχωρήσει μετά το 1974.' />
                </Stack>
            </Stack>
            <Stack className='ideologies-category' gap={4}>
                <h2><span className='ultra-nationalism-id'>Υπερεθνικισμός</span>-<span className='national-socialism-id'>Εθνικός Σοσιαλισμός</span></h2>
                <Stack className='ideologies-list' gap={3}>
                    <Ideology ideology='Μεταξισμός' color='ultra-nationalism-id' description='O Μεταξισμός αποτελεί εθνικιστική ιδεολογία του Έλληνα πολιτικού Ιωάννη Μεταξά. H Χρυσή Αυγή έχει υποστηρίξει το καθεστώς του Μεταξά με επιδοκιμαστικές δηλώσεις.' />
                    <Ideology ideology='Εθνικός Σοσιαλισμός' color='national-socialism-id' description='O Εθνικός Σοσιαλισμός επιδιώκει ισχυρό έθνος, κατάργηση της δημοκρατίας, κρατικό έλεγχο, και φυλετική καθαρότητα. H Χρυσή Αυγή αποτελεί εθνικό σοσιαλιστικό κόμμα.' />
                </Stack>
            </Stack>
        </div>
    )
}