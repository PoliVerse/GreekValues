import './Parties.css';
import { Stack } from 'react-bootstrap';
import Party from './Party';
import ND from '../../assets/img/parties/ND.png';
import SYRIZA from '../../assets/img/parties/SYRIZA.png';
import PASOK from '../../assets/img/parties/PASOK.png';
import KKE from '../../assets/img/parties/KKE.png';
import EL from '../../assets/img/parties/EL.png';
import SPARTIATES from '../../assets/img/parties/SPARTIATES.png';
import NIKI from '../../assets/img/parties/NIKI.png';
import PE from '../../assets/img/parties/PE.png';
import MeRA25 from '../../assets/img/parties/MeRA25.png';
import FL from '../../assets/img/parties/FL.png';
import NA from '../../assets/img/parties/NA.png';
import KD from '../../assets/img/parties/KD.png';
import ANTARSYA from '../../assets/img/parties/ANTARSYA.png';
import EK from '../../assets/img/parties/EK.png';
import KKEML from '../../assets/img/parties/KKE M-L.png';
import XA from '../../assets/img/parties/XA.png';

export default function Parties() {
    return (
        <div className='parties d-flex flex-column justify-content-center align-items-center gap-4'>
            <h1 className='parties-title'>Κόμματα</h1>
            <Stack className='parties-category' gap={5}>
                <Party party='Νέα Δημοκρατία' color='#1D6EC8' description='Φιλελεύθερο συντηρητικό κόμμα που ιδρύθηκε το 1974. Έχει μακρά κυβερνητική παρουσία και στηρίζεται κυρίως από μεσαία και ανώτερα κοινωνικά στρώματα, ιδιαίτερα μεγαλύτερων ηλικιών.' img='img-35' logo={ND} percentage23='40,56%' percentage24='28,31%' poll='27-31' />
                <Party party='ΣΥΡΙΖΑ' color='#CC1C24' description='Προοδευτικό κόμμα που εξελίχθηκε από συμμαχία της αριστεράς. Κυβέρνησε το διάστημα 2015–2019. Η βάση του περιλαμβάνει κυρίως νέους και αστικά στρώματα, αν και έχει συρρικνωθεί λόγω διασπάσεων τα τελευταία χρόνια.' img='img-3' logo={SYRIZA} percentage23='17,83%' percentage24='14,92%' poll='5-6' />
                <Party party='ΠΑΣΟΚ' color='#00793A' description='Σοσιαλδημοκρατικό κόμμα, ιδρυμένο το 1974 και γνωστό για την ισχυρή παρουσία του τη δεκαετία του 1980. Από το 2019 παρουσιάζει σταδιακή ανάκαμψη, αν και παραμένει δημοφιλές κυρίως σε μεγαλύτερες ηλικίες.' img='img-35' logo={PASOK} percentage23='11,84%' percentage24='12,79%' poll='12-15' />
                <Party party='ΚΚΕ' color='#DF251C' description='Κομμουνιστικό κόμμα, το αρχαιότερο εν ενεργεία στην Ελλάδα (από το 1918). Σταθερή εκλογική βάση με δράση σε εργατικά και φοιτητικά κινήματα. Απέχει από κυβερνητικούς συνασπισμούς με εξαίρεση το 1989.' img='img-35' logo={KKE} percentage23='7.69%' percentage24='9.25%' poll='7-10' />
                <Party party='Ελληνική Λύση' color='#8DBEE2' description='Κόμμα εθνικού συντηρητικού προσανατολισμού που ιδρύθηκε το 2016. Ενισχύθηκε ιδιαίτερα μετά τη συμφωνία των Πρεσπών και έχει στήριξη κυρίως σε περιοχές της Μακεδονίας.' img='img-25' logo={EL} percentage23='4,44%' percentage24='9,30%' poll='8-11' />
                <Party party='Σπαρτιάτες' color='#E4B56D' description='Εθνικιστικό κόμμα ιδρυμένο το 2017. Απέκτησε προσωρινή εκλογική δυναμική το 2023 λόγω στήριξης από πρώην κύκλους της Χρυσής Αυγής, την οποία απώλεσε λόγω εσωτερικών συγκρούσεων.' img='img-3' logo={SPARTIATES} percentage23='4,68%' percentage24='-%' poll='1-2' />
                <Party party='Νίκη' color='#BD552C' description='Χριστιανοδημοκρατικό κόμμα που ιδρύθηκε το 2019. Απευθύνεται σε παραδοσιακούς και θρησκευόμενους ψηφοφόρους.' img='img-35' logo={NIKI} percentage23='3,70%' percentage24='4,37%' poll='2-4' />
                <Party party='Πλεύση Ελευθερίας' color='#972490' description='Κόμμα αριστερής και αντιμνημονιακής κατεύθυνσης, ιδρυμένο το 2016. Ανέβηκε στη δημοσιότητα μετά την τραγωδία στα Τέμπη, με στήριξη από νεότερες ηλικίες.' img='img-35' logo={PE} percentage23='3,17%' percentage24='3,40%' poll='9-12' />
                <Party party='ΜέΡΑ25' color='#EB4326' description='Αριστερό, διεθνιστικό κόμμα που ιδρύθηκε το 2018. Υποστηρίζει προοδευτική κοινωνική πολιτική και ισχυρό κράτος πρόνοιας. Προσελκύει ψηφοφόρους παρόμοιους με αυτούς του ΣΥΡΙΖΑ.' img='img-3' logo={MeRA25} percentage23='2,50%' percentage24='2,54%' poll='2-3' />
                <Party party='Φωνή Λογικής' color='#2890de' description='Συντηρητικό κόμμα που προέκυψε το 2023 από διάσπαση της Νέας Δημοκρατίας. Προσεγγίζει πρώην συντηρητικούς ψηφοφόρους του κυβερνητικού κόμματος.' img='img-3' logo={FL} percentage23='0,43%' percentage24='3,04%' poll='2-4' />
                <Party party='Νέα Αριστερά' color='#C53638' description='Κόμμα του προοδευτικού χώρου που ιδρύθηκε το 2023 από αποχωρήσαντες του ΣΥΡΙΖΑ. Απευθύνεται σε ψηφοφόρους του κέντρου και της αριστεράς.' img='img-275' logo={NA} percentage23='-' percentage24='2,45%' poll='1-3' />
                <Party party='Κίνημα Δημοκρατίας' color='#522197' description='Νέο προοδευτικό κόμμα, αποτέλεσμα διάσπασης από τον ΣΥΡΙΖΑ το 2024. Σκοπεύει στην εκλογική βάση του ΣΥΡΙΖΑ και του ΠΑΣΟΚ.' img='img-3' logo={KD} percentage23='-' percentage24='-' poll='2-4' />
                <Party party='ΑΝΤΑΡΣΥΑ' color='#D82F33' description='Αντικαπιταλιστικός συνασπισμός της εξωκοινοβουλευτικής αριστεράς, ιδρυμένος το 2009. Δρα κυρίως σε φοιτητικούς και συνδικαλιστικούς χώρους. Κινείται σταθερά κάτω του 1%.' img='img-25' logo={ANTARSYA} percentage23='0,30%' percentage24='0,52%' poll='<1' />
                <Party party='Ένωση Κεντρώων' color='#F2D308' description='Κεντρώο κόμμα ιδρυμένο το 1992. Μπήκε στη Βουλή το 2015 αλλά αντιμετώπισε εσωτερικές συγκρούσεις και έχει πλέον περιορισμένη επιρροή. Υποστηρίζει φιλελεύθερες θέσεις σε οικονομικά και κοινωνικά ζητήματα.' logo={EK} percentage23='0,27%' percentage24='0,27%' poll='<1' />
                <Party party='ΚΚΕ Μ-Λ' color='#D7062C' description='Μαοϊκό κόμμα που ιδρύθηκε το 1976. Δραστηριοποιείται κυρίως στον συνδικαλισμό και το φοιτητικό κίνημα, ενώ καταγράφει σταθερά ποσοστά κάτω του 1%.' img='img-275' logo={KKEML} percentage23='0,18%' percentage24='-' poll='<1' />
                <Party party='Χρυσή Αυγή' color='#446499' description='Εθνικιστικό κόμμα με εθνικοσοσιαλιστικές θέσεις. Ιδρύθηκε το 1983 και κατέγραψε υψηλά ποσοστά την περίοδο της κρίσης. Το 2020 καταδικάστηκε ως εγκληματική οργάνωση αλλά διατηρεί εξωκοινοβουλευτική δράση.' img='img-35' logo={XA} percentage23='-' percentage24='-' poll='<1' />
            </Stack>
            <p>Για την εκδοχή της σελίδας πριν τις εκλογές του 2023 πατήστε <a href='/archive'>εδώ</a>.</p>
        </div>
    )
}