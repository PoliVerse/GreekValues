const parties = [
    {
        "name": "Νέα Δημοκρατία (ΝΔ)",
        "desc": "Φιλελεύθερο συντηρητικό κόμμα που ιδρύθηκε το 1974. Με διάφορες κυβερνητικές θητείες αποτελεί ένα από τα μεγάλα κόμματα της Ελλάδας. Ανάλογα με την εκλογική βάση έχει αλλάξει συχνά στάσεις σε οικονομικά, εθνικά, και κοινωνικά θέματα.",
        "stats": { "a": 40, "b": 55, "c": 45, "d": 67.5, "e": 62.5, "f": 15, "g": 60 }
    },
    {
        "name": "Συνασπισμός Ριζοσπαστικής Αριστεράς (ΣΥΡΙΖΑ)",
        "desc": "Προοδευτικό κόμμα που ιδρύθηκε το 1991 και ανασυντάχθηκε το 2012. Κυβέρνησε κατά την τετραετία 2015-2019 όπου και άλλαξε τη στάση του στα μνημόνια και τις πολιτικές λιτότητας ενώ εφάρμοσε προοδευτικές κοινωνικές πολιτικές.",
        "stats": { "a": 5, "b": 40, "c": 27.5, "d": 22.5, "e": 70, "f": 25, "g": 20 }
    },
    {
        "name": "Πανελλήνιο Σοσιαλιστικό Κίνημα (ΠΑΣΟΚ)",
        "desc": "Κόμμα που ασπάζεται τη σοσιαλδημοκρατία, συστάθηκε το 1974 ως σοσιαλιστικό κίνημα. Είναι ιδιαίτερα γνωστό για τις πρώτες θητείες του Ανδρέα Παπανδρέου (1981-1989) όπου και ακολούθησε επεκτατική οικονομική πολιτική. Κατά τη δεκαετία 2010, η δημοτικότητα του κόμματος έπεσε, κάτι που αντιστρέφεται από το 2019 και μετά.",
        "stats": { "a": 20, "b": 40, "c": 52.5, "d": 60, "e": 70, "f": 30, "g": 50 }
    },
    {
        "name": "Κομμουνιστικό Κόμμα Ελλάδας (KKE)",
        "desc": "Το κύριο ελληνικό κομμουνιστικό κόμμα και το παλιότερο που υπάρχει και σήμερα (ιδρύθηκε το 1918). Απαγορεύτηκε το 1936 και ξανά το 1949 μετά τη λήξη του εμφυλίου πολέμου και νομιμοποιήθηκε το 1974. Από το 1990 έχει στάσιμη εκλογική βάση.",
        "stats": { "a": 35, "b": 5, "c": 95, "d": 5, "e": 65, "f": 80, "g": 15 }
    },
    {
        "name": "Ελληνική Λύση (EΛ)",
        "desc": "Κόμμα με εθνικές συντηρητικές απόψεις που ιδρύθηκε το 2016. Αναδύθηκε στην επιφάνεια το 2018 μετά την υπογραφή της συμφωνίας των Πρεσπών.",
        "stats": { "a": 85, "b": 55, "c": 80, "d": 82.5, "e": 20, "f": 70, "g": 90 }
    },
    {
        "name": "Μέτωπο Ευρωπαϊκής Ρεαλιστικής Avuπακoής 25 (ΜέΡA25)",
        "desc": "Δημοκρατικό σοσιαλιστικό κόμμα που συστάθηκε το 2018. Ανήκει στον ευρύτερο ευρωπαϊκό συνασπισμό DiEM25 και υποστηρίζει προοδευτικές κοινωνικές θέσεις και κράτος πρόνοιας.",
        "stats": { "a": 5, "b": 25, "c": 22.5, "d": 5, "e": 95, "f": 30, "g": 5 }
    },
    {
        "name": "Χρυσή Αυγή (XA)",
        "desc": "Εθνικιστικό κόμμα με εθνικές σοσιαλιστικές τάσεις. Ιδρύθηκε το 1984 και η δημοτικότητα του ανέβηκε τη δεκαετία 2010 λόγω της οικονομικής κρίσης, αγγίζοντας το 10%. Το 2020 καταδικάστηκε ως εγκληματική οργάνωση.",
        "stats": { "a": 100, "b": 0, "c": 100, "d": 100, "e": 10, "f": 100, "g": 100 }
    },
    {
        "name": "Πλεύση Ελευθερίας (ΠΕ)",
        "desc": "Κόμμα με αριστερές εθνικιστικές και προοδευτικές θέσεις. Ιδρύθηκε το 2016 και συμμετείχε στις τελευταίες κοινοβουλευτικές εκλογές όπου και απέσπασε 1.6%",
        "stats": { "a": 25, "b": 15, "c": 40, "d": 32.5, "e": 70, "f": 80, "g": 37.5 }
    },
    {
        "name": "Ένωση Κεντρώων (EK)",
        "desc": "Κεντρώο κόμμα που συστάθηκε το 1992. Μπήκε στο κοινοβούλιο στις εκλογές Σεπτεμβρίου του 2015 για μια τεραετία.",
        "stats": { "a": 35, "b": 52.5, "c": 52.5, "d": 70, "e": 65, "f": 35, "g": 77.5 }
    },
    {
        "name": "Εθνική Δημιουργία (ΕΔ)",
        "desc": "Συντηρητική φιλελεύθερη συμμαχία που δημιουργήθηκε το 2022. Οικονομικά φιλελεύθερη και κοινωνικά συντηρητική, έχει εξελέξει περιφερειακούς συμβούλους σε προηγούμενες εκλογές μέσω της Δημιουργίας Ξανά.",
        "stats": { "a": 75, "b": 80, "c": 37.5, "d": 60, "e": 15, "f": 25, "g": 87.5 }
    },
    {
        "name": "Ενιαίο Παλλαϊκό Μέτωπο (ΕΠΑΜ)",
        "desc": "Κόμμα χωρίς ιδιαίτερη ιδεολογία που ιδρύθηκε το 2011. Υποστηρίζει την εθνικοποίηση της οικονομίας και την επιστροφή σε εθνικό νόμισμα, ενώ δεν έχει θέσεις σε κοινωνικά θέματα.",
        "stats": { "a": 60, "b": 15, "c": 40, "d": 70, "e": 65, "f": 90, "g": 70 }
    },
    {
        "name": "Αντικαπιταλιστική Αριστερή Συνεργασία για την Ανατροπή (ANTAPΣYA)",
        "desc": "Κομμουνιστικός συνασπισμός που ιδρύθηκε το 2009. Δραστηριοποιείται κυρίως στο φοιτητικό κίνημα όπου έχει κατηγορηθεί για περιστατικά βίας.",
        "stats": { "a": 0, "b": 0, "c": 20, "d": 0, "e": 95, "f": 67.5, "g": 0 }
    },
    {
        "name": "Κομμουνιστικό Κόμμα Ελλάδας (Μαρξιστικό–Λενινιστικό) (KKE μ-λ)",
        "desc": "Μαοϊκό κόμμα που συστάθηκε το 1976. Συμμετέχει σε όλες τις εκλογές καταγράφοντας ποσοστά κάτω του 1%.",
        "stats": { "a": 5, "b": 0, "c": 95, "d": 0, "e": 72.5, "f": 67.5, "g": 15 }
    },
    {
        "name": "Έλληνες (Έλληνες)",
        "desc": "Εθνικιστικό κόμμα που δημιουργήθηκε το 2020 μετά από διάσπαση στη Χρυσή Αυγή. Θα συμμετάσχει στις επόμενες εκλογές.",
        "stats": { "a": 100, "b": 20, "c": 90, "d": 100, "e": 15, "f": 80, "g": 95 }
    },
    {
        "name": "Πατριωτική Δύναμη Αλλαγής (ΠΑΤΡΙΔΑ)",
        "desc": "Κόμμα συντηρητικών απόψεων που ιδρύθηκε το 2022 μετά από διάσπαση στη Νέα Δημοκρατία και την Εθνική Δημιουργία. Θα συμμετάσχει στις επόμενες εκλογές.",
        "stats": { "a": 72.5, "b": 75, "c": 40, "d": 70, "e": 15, "f": 20, "g": 80 }
    },
    {
        "name": "Πράσινο & Μωβ (Π&Μ)",
        "desc": "Προοδευτικός συνασπισμός μεταξύ πράσινων και φιλελεύθερων κομμάτων (συμπεριλαμβανομένων και των Οικολόγων Πράσινων) που συστάθηκε το 2022. Θα συμμετάσχει στις επόμενες εκλογές.", 
        "stats": { "a": 5, "b": 40, "c": 25, "d": 20, "e": 100, "f": 30, "g": 10 }
    }
];

export default parties;