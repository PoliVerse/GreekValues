import "./Values.css";
import { Container, Stack } from "react-bootstrap";
import DoubleArrow from "../../../assets/img/icons/double-arrow.png";

export default function Values() {
    return (
        <>
            <Container className="values">
                <Stack className='d-flex justify-content-center align-items-center' id="values" gap={5}>
                    <h1 className="gv-values-title">Ποιες είναι oι αξίες;</h1>
                    <h3>Υπάρχουν εφτά άξονες, ο καθένας από τους οποίους έχει δύο αντίθετες αξίες. Αυτές είναι:</h3>
                    <div className='values-pair'>
                        <Stack className='value' gap={2}>
                            <h2 className="value-title conservatism-desc">ΣΥΝΤΗΡΗΤΙΣΜΟΣ</h2>
                            <p>Υψηλότερα αποτελέσματα στον <span className="conservatism-desc">Συντηρητισμό</span> σημαίνουν μεγαλύτερη πίστη στις παραδοσιακές αξίες του ελληνικού έθνους. </p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className="value-title progressivism-desc">ΠΡΟΟΔΕΥΤΙΣΜΟΣ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στον <span className="progressivism-desc">Προοδευτισμό</span> υποστηρίζουν την αποδοχή αιτημάτων και την κοινωνική ενσωμάτωση μειονοτήτων διαφόρων ειδών.</p>
                        </Stack>
                    </div>
                    <div className='values-pair' gap={3}>
                        <Stack className='value' gap={2}>
                            <h2 className="value-title capitalism-desc">ΚΑΠΙΤΑΛΙΣΜΟΣ</h2>
                            <p>Μεγαλύτερα αποτελέσματα στον <span className="capitalism-desc">Καπιταλισμό</span> εμφανίζουν υποστήριξη για την ελεύθερη αγορά με ελάχιστους ή καθόλου περιορισμούς από τη κυβέρνηση.</p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className="value-title socialism-desc">ΣΟΣΙΑΛΙΣΜΟΣ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στον <span className="socialism-desc">Σοσιαλισμό</span> υποστηρίζουν την εκτεταμένη παρέμβαση της κυβέρνησης στην οικονομία ή και την κρατικοποίηση πολλών τομέων.</p>
                        </Stack>
                    </div>
                    <div className='values-pair' gap={3}>
                        <Stack className='value' gap={2}>
                            <h2 className="value-title authority-desc">ΕΞΟΥΣΙΑ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στην <span className="authority-desc">Εξουσία</span> ταυτίζονται με την υποστήριξη πιο αυταρχικών συστημάτων όπως τη μοναρχία ή τη δικτατορία.</p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className="value-title anarchy-desc">ΑΝΑΡΧΙΑ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στην <span className="anarchy-desc">Αναρχία</span> είναι πιο ανοιχτά σε αποκεντρωμένες μορφές διοίκησης όπως την άμεση δημοκρατία ή την απουσία κυβερνητικών θεσμών.</p>
                        </Stack>
                    </div>
                    <div className='values-pair' gap={5}>
                        <Stack className='value' gap={2}>
                            <h2 className="value-title religion-desc">ΘΡΗΣΚΕΙΑ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στην <span className="religion-desc">Θρησκεία</span> ταυτίζονται με την υποστήριξη της θρησκείας στην κοινωνία και σε κάποιες περιπτώσεις την επιρροή της στην πολιτική.</p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className="value-title secularism-desc">ΚΟΣΜΙΚΙΣΜΟΣ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στον <span className="secularism-desc">Κοσμικισμό</span> είναι υπέρ της ανεξιθρησκείας και του διαχωρισμού Εκκλησίας και Κράτους.</p>
                        </Stack>
                    </div>
                    <div className='values-pair' gap={3}>
                        <Stack className='value' gap={2}>
                            <h2 className="value-title environment-desc">ΠΕΡΙΒΑΛΛΟΝ</h2>
                            <p>Άτομα με μεγάλα αποτελέσματα στο <span className="environment-desc">Περιβάλλον</span> επιδώκουν περισσότερη παρέμβαση για την προστασία του περιβάλλοντος της Ελλάδας και του πλανήτη γενικότερα.</p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className="value-title industry-desc">ΒΙΟΜΗΧΑΝΙΑ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στην <span className="industry-desc">Βιομηχανία</span> εναντιώνονται σε περιβαλλοντικές διατάξεις που θεωρούνται ότι περιορίζουν την παραγωγή.</p>
                        </Stack>
                    </div>
                    <div className='values-pair' gap={3}>
                        <Stack className='value' gap={2}>
                            <h2 className="value-title nationalism-desc">ΕΘΝΙΚΙΣΜΟΣ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στον <span className="nationalism-desc">Εθνικισμό</span> τοποθετούν την Ελλάδα πάνω από το παγκόσμιο συμφέρον και εμφανίζονται σκεπτικοί σε διακρατικές οργανώσεις όπως και το ευρώ.</p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className="value-title globalism-desc">ΠΑΓΚΟΣΜΙΟΠΟΙΗΣΗ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στην <span className="globalism-desc">Παγκοσμιοποίηση</span> υποστηρίζουν οργανώσεις όπως την Ευρωπαϊκή Ένωση και το NATO και δείχνουν λιγότερη έμφαση στην εθνικά συμφέροντα.</p>
                        </Stack>
                    </div>
                    <div className='values-pair' gap={3}>
                        <Stack className='value' gap={2}>
                            <h2 className='value-title assimilation-desc'>ΑΦΟΜΟΙΩΣΗ</h2>
                            <p>Υψηλά αποτελέσματα στην <span className="assimilation-desc">Αφομοίωση</span> υποδηλώνουν έμφαση στην διατήρηση του αυτόχθονος πληθυσμού και στη αποδοχή ελάχιστων με καθόλου μεταναστών.</p>
                        </Stack>
                        <img className="double-arrow" src={DoubleArrow} alt="double-arrow" width='150' height='75' />
                        <Stack className='value' gap={2}>
                            <h2 className='value-title multiculturalism-desc'>ΠΟΛΥΠΟΛΙΤΙΣΜΙΚΟΤΗΤΑ</h2>
                            <p>Άτομα με υψηλά αποτελέσματα στην <span className="multiculturalism-desc">Πολυπολιτισμικότητα</span> υποστηρίζουν την αποδοχή και ένταξη μεγάλου αριθμού μεταναστών στην Ελλάδα.</p>
                        </Stack>
                    </div>
                </Stack>
            </Container>
        </>
    );
}