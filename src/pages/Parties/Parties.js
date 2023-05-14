import './Parties.css';
import { Stack } from 'react-bootstrap';
import Party from './Party';
import ND from '../../assets/img/parties/ND.png';
import SYRIZA from '../../assets/img/parties/SYRIZA.png';
import PASOK from '../../assets/img/parties/PASOK.png';
import KKE from '../../assets/img/parties/KKE.png';
import EL from '../../assets/img/parties/EL.png';
import MeRA25 from '../../assets/img/parties/MeRA25.png';
import XA from '../../assets/img/parties/XA.png';
import PE from '../../assets/img/parties/PE.png';
import EK from '../../assets/img/parties/EK.png';
import ED from '../../assets/img/parties/ED.png';
import EPAM from '../../assets/img/parties/EPAM.png';
import ANTARSYA from '../../assets/img/parties/ANTARSYA.png';
import KKEML from '../../assets/img/parties/KKE M-L.png';
import Ellines from '../../assets/img/parties/Ellines.png';
import PM from '../../assets/img/parties/PM.png';

export default function Parties() {
    return (
        <div className='parties'>
            <h1 className='parties-title'>Κόμματα</h1>
            <p className='parties-p'></p>
            <Stack className='parties-category' gap={4}>
                <Party party='Νέα Δημοκρατία' color='nd-id' description='Φιλελεύθερο συντηρητικό κόμμα που ιδρύθηκε το 1974. Με διάφορες κυβερνητικές θητείες αποτελεί ένα από τα μεγάλα κόμματα της Ελλάδας. Ανάλογα με την εκλογική βάση έχει αλλάξει συχνά στάσεις σε οικονομικά, εθνικά, και κοινωνικά θέματα.' logo={ND} percentage='39.85%' />
                <Party party='ΣΥΡΙΖΑ' color='syriza-id' description='Προοδευτικό κόμμα που ιδρύθηκε το 1991 και ανασυντάχθηκε το 2012. Κυβέρνησε κατά την τετραετία 2015-2019 όπου και άλλαξε τη στάση του στα μνημόνια και τις πολιτικές λιτότητας ενώ εφάρμοσε προοδευτικές κοινωνικές πολιτικές.' logo={SYRIZA} percentage='31.53%' />
                <Party party='ΠΑΣΟΚ' color='pasok-id' description='Κόμμα που ασπάζεται τη σοσιαλδημοκρατία, συστάθηκε το 1974 ως σοσιαλιστικό κίνημα. Είναι ιδιαίτερα γνωστό για τις πρώτες θητείες του Ανδρέα Παπανδρέου (1981-1989) όπου και ακολούθησε επεκτατική οικονομική πολιτική. Κατά τη δεκαετία 2010, η δημοτικότητα του κόμματος έπεσε, κάτι που αντιστρέφεται από το 2019 και μετά.' logo={PASOK} percentage='8.10%' />
                <Party party='ΚΚΕ' color='kke-id' description='Το κύριο ελληνικό κομμουνιστικό κόμμα και το παλιότερο που υπάρχει και σήμερα (ιδρύθηκε το 1918). Απαγορεύτηκε το 1936 και ξανά το 1949 μετά τη λήξη του εμφυλίου πολέμου και νομιμοποιήθηκε το 1974. Από το 1990 έχει στάσιμη εκλογική βάση.' logo={KKE} percentage='5.30%' />
                <Party party='Ελληνική Λύση' color='el-id' description='Κόμμα με εθνικές συντηρητικές απόψεις που ιδρύθηκε το 2016. Αναδύθηκε στην επιφάνεια το 2018 μετά την υπογραφή της συμφωνίας των Πρεσπών.' logo={EL} percentage='3.70%' />
                <Party party='ΜέΡΑ25' color='mera25-id' description='Δημοκρατικό σοσιαλιστικό κόμμα που συστάθηκε το 2018. Ανήκει στον ευρύτερο ευρωπαϊκό συνασπισμό DiEM25 και υποστηρίζει προοδευτικές κοινωνικές θέσεις και κράτος πρόνοιας.' logo={MeRA25} percentage='3.44%' />
                <Party party='Χρυσή Αυγή' color='xa-id' description='Εθνικιστικό κόμμα με εθνικές σοσιαλιστικές τάσεις. Ιδρύθηκε το 1984 και η δημοτικότητα του ανέβηκε τη δεκαετία 2010 λόγω της οικονομικής κρίσης, αγγίζοντας το 10%. Το 2020 καταδικάστηκε ως εγκληματική οργάνωση.' logo={XA} margin={{'margin-left': '4.5em'}} percentage='2.93%' />
                <Party party='Πλεύση Ελευθερίας' color='pe-id' description='Κόμμα με αριστερές εθνικιστικές και προοδευτικές θέσεις. Ιδρύθηκε το 2016 και συμμετείχε στις τελευταίες κοινοβουλευτικές εκλογές όπου και απέσπασε 1.6%.' logo={PE} percentage='1.47%' />
                <Party party='Ένωση Κεντρώων' color='ek-id' description='Κεντρώο κόμμα που συστάθηκε το 1992. Μπήκε στο κοινοβούλιο στις εκλογές Σεπτεμβρίου του 2015 για μια τεραετία.' logo={EK} percentage='1.24%' />
                <Party party='Εθνική Δημιουργία' color='ed-id' description='Συντηρητική φιλελεύθερη συμμαχία που δημιουργήθηκε το 2022. Οικονομικά φιλελεύθερη και κοινωνικά συντηρητική, έχει εξελέξει περιφερειακούς συμβούλους σε προηγούμενες εκλογές μέσω της Δημιουργίας Ξανά.' logo={ED} percentage='0.74% (Δημιουργία Ξανά)' />
                <Party party='ΕΠΑΜ' color='epam-id' description='Κόμμα χωρίς ιδιαίτερη ιδεολογία που ιδρύθηκε το 2011. Υποστηρίζει την εθνικοποίηση της οικονομίας και την επιστροφή σε εθνικό νόμισμα, ενώ δεν έχει θέσεις σε κοινωνικά θέματα.' logo={EPAM} percentage='0.50%' />
                <Party party='ΑΝΤΑΡΣΥΑ' color='antarsya-id' description='Κομμουνιστικός συνασπισμός που ιδρύθηκε το 2009. Δραστηριοποιείται κυρίως στο φοιτητικό κίνημα όπου έχει κατηγορηθεί για περιστατικά βίας.' logo={ANTARSYA} percentage='0.41%' />
                <Party party='ΚΚΕ Μ-Λ' color='kke-ml-id' description='Μαοϊκό κόμμα που συστάθηκε το 1976. Συμμετέχει σε όλες τις εκλογές καταγράφοντας ποσοστά κάτω του 1%.' logo={KKEML} percentage='0.14%' />
                <Party party='Εθνικό Κόμμα Έλληνες' color='ellines-id' description='Εθνικιστικό κόμμα που δημιουργήθηκε το 2020 μετά από διάσπαση στη Χρυσή Αυγή. Θα συμμετάσχει στις επόμενες εκλογές.' logo={Ellines} margin={{'margin-left': '5em'}} percentage='-' />
                <Party party='Πράσινο & Μωβ' color='pm-id' description='Προοδευτικός συνασπισμός μεταξύ πράσινων και φιλελεύθερων κομμάτων (συμπεριλαμβανομένων και των Οικολόγων Πράσινων) που συστάθηκε το 2022. Θα συμμετάσχει στις επόμενες εκλογές.' logo={PM} percentage='-' />
            </Stack>
        </div>
    )
}

// width='80' height='60'
// width='110' height='60'
// width='100' height='60'