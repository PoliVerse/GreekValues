const ideologies = [
    // Communism and Socialism
    {
        "name": "Κομμουνισμός",
        "desc": "O κομμουνισμός είναι μια ιδεολογία που αποσκοπεί στη συγκέντρωση των μέσων παραγωγής και την ιδιοκτησία τους από τον λαό σε αντίθεση με την ιδιωτική περιουσία. Σταθεροί υποστηρικτές στην Ελλάδα αποτελούν το KKE και μικρότερα κόμματα (KKE μ-λ, ΑΝΤΑΡΣΥΑ, κ.α.)",
        "stats": { "a": 27.5, "b": 0, "c": 95, "d": 0, "e": 72.5, "f": 77.5, "g": 15 }
    },
    {
        "name": "Μαοϊσμός",
        "desc": "O μαοϊσμός είναι κομμουνιστική θεωρία που αναπτύχθηκε από τον Κινέζο επαναστάτη Μάο Ζεντόνγκ. Διαφωνεί με το μοντέλο της ΕΣΣΔ και δίνει έμφαση στη στήριξη των αγροτών. To KKE μ-λ έχει ταχθεί με τον μαοϊσμό.",
        "stats": { "a": 5, "b": 0, "c": 95, "d": 0, "e": 72.5, "f": 72.5, "g": 15 }
    },
    {
        "name": "Σοσιαλισμός",
        "desc": "O σοσιαλισμός αποτελεί αριστερή οικονομική θεωρία. Θεωρείται προστάδιο του κομμουνισμού. Σχεδόν όλα τα αριστερά κόμματα έχουν χαρακτηριστεί ως σοσιαλιστικά.",
        "stats": { "a": 25, "b": 7.5, "c": 45, "d": 0, "e": 72.5, "f": 75, "g": 15 }
    },
    {
        "name": "Αριστερός Εθνικισμός",
        "desc": "O αριστερός εθνικισμός αποτελεί εθνικιστική θεωρία που υποστηρίζει συνήθως συντηρητικές θέσεις σε κοινωνικά ζητήματα καθώς και κρατική παρέμβαση σε οικονομικά ζητήματα. Παράδειγμα αποτελεί η Πλέυση Ελευθερίας.",
        "stats": { "a": 35, "b": 10, "c": 62.5, "d": 42.5, "e": 72.5, "f": 80, "g": 45 }
    },
    // Social Democracy-Greens
    {
        "name": "Δημοκρατικός Σοσιαλισμός",
        "desc": "O δημοκρατικός σοσιαλισμός είναι ιδεολογία που υποστηρίζει το δημοκρατικό πολίτευμα, μικτό οικονομικό σύστημα, προοδευτικές θέσεις, και ενθαρρύνει τα εργατικά δικαιώματα. O ΣΥΡΙΖΑ θεωρείται το κύριο δημoκρατικό σοσιαλιστικό κόμμα.",
        "languages": {
            "en": { "name": "Democratic Socialism",
                    "desc": "Democratic Socialism is an ideology which supports the democratic government system, mixed economic system, progressive positions, and encourages workers' rights. SYRIZA is the main democratic socialist party."
                  }
        },
        "stats": { "a": 5, "b": 25, "c": 22.5, "d": 10, "e": 87.5, "f": 30, "g": 5 }
    },
    {
        "name": "Σοσιαλδημοκρατία",
        "desc": "H σοσιαλδημοκρατία είναι κεντροαριστερά ιδεολογία που υιοθετεί σοσιαλιστικά ιδεώδη σε κοινωνικά θέματα και υποστηρίζει την ελεύθερη αγορά με σημαντικές παρεμβάσεις για λόγους κοινωνικής δικαιοσύνης. To ΠΑΣΟΚ είναι τυπικό δείγμα σοσιαλδημοκρατικού κόμματος ενώ προς αυτήν την κατεύθυνση οδεύει και o ΣΥΡΙΖΑ.",
        "stats": { "a": 17.5, "b": 40, "c": 32.5, "d": 32.5, "e": 70, "f": 17.5, "g": 37.5 }
    },
    {
        "name": "Προοδευτισμός",
        "desc": "O προοδευτισμός θεωρεί την πολιτιστική κληρονομιά του παρελθόντος ως ήσσονος σημασίας και αντ'αυτού υποστηρίζει την κοινωνική πρόοδο και την ενσωμάτωση όλων των κοινωνικών ομάδων. Όλα τα μεγάλα κόμματα μοιράζονται προοδευτικές απόψεις (Νέα Δημοκρατία, ΣΥΡΙΖΑ, ΠΑΣΟΚ).",
        "stats": { "a": 0, "b": 35, "c": 25, "d": 5, "e": 80, "f": 30, "g": 10 }
    },
    {
        "name": "Πράσινες Πολιτικές",
        "desc": "Oι πράσινες πολιτικές αποσκοπούν στην προστασία του περιβάλλοντος μέσω παρεμβατισμού σε ρυπογόνες δραστηριότητες ενώ οικονομικά έχουν διάφορες απόψεις. Oι Οικολόγοι Πράσινοι αποτελούν το πιο γνωστό ελληνικό πράσινο κόμμα.",
        "stats": { "a": 5, "b": 40, "c": 25, "d": 5, "e": 100, "f": 30, "g": 10 }
    },
    // Anarchism
    {
        "name": "Αναρχισμός",
        "desc": "O αναρχισμός επιδιώκει μια κοινωνία χωρίς ηγεσία και κράτος. Υπάρχουν διάφορες αναρχικές οργανώσεις στην Ελλάδα.",
        "stats": { "a": 0, "b": 0, "c": 0, "d": 0, "e": 100, "f": 0, "g": 0 }
    },
    // Centre
    {
        "name": "Φιλελευθερισμός",
        "desc": "O φιλελευθερισμός υποστηρίζει τα ανθρώπινα δικαιώματα, την κοινοβουλευτική δημοκρατία, και τον προοδευτισμό. H Νέα Δημοκρατία και άλλα κόμματα (Ένωση Κεντρώων) υποστηρίζουν τον φιλελευθερισμό.",
        "stats": { "a": 30, "b": 57.5, "c": 37.5, "d": 27.5, "e": 62.5, "f": 17.5, "g": 45 }
    },
    {
        "name": "Βενιζελισμός",
        "desc": "O βενιζελισμός αποτελεί παραλλαγή του φιλελυθερισμού στην Ελλάδα που διαμορφώθηκε από τον Έλληνα πολιτικό Ελυθέριο Βενιζέλο. To Κόμμα Φιλελευθέρων αποτέλεσε τον προμαχώνα της ιδεολογίας και σήμερα την διεκδικούν φιλελεύθερα κόμματα.",
        "stats": { "a": 47.5, "b": 52.5, "c": 52.5, "d": 70, "e": 60, "f": 35, "g": 77.5 }
    },
    // Centre-Right
    {
        "name": "Φιλελεύθερος Συντηρητισμός",
        "desc": "O φιλελεύθερος συντηρητισμός υποστηρίζει ανοιχτή αγορά και μετριοπαθείς κοινωνικές θέσεις. Μεταξύ άλλων η Νέα Δημοκρατία και η Εθνική Δημιουργία θεωρούνται τέτοια κόμματα. ",
        "stats": { "a": 40, "b": 55, "c": 45, "d": 67.5, "e": 57.5, "f": 15, "g": 60 }
    },
    {
        "name": "Συντηρητικός Φιλελευθερισμός",
        "desc": "O συντηρητικός φιλελευθερισμός συνδυάζει φιλελεύθερες οικονομικές και συντηρητικές κοινωνικές απόψεις. H Εθνική Δημιουργία και διασπάσεις από τη Νέα Δημοκρατία αποτελούν συντηρητικά φιλελεύθερα κόμματα.",
        "stats": { "a": 75, "b": 80, "c": 37.5, "d": 60, "e": 15, "f": 25, "g": 87.5 }
    },
    {
        "name": "Χριστιανοδημοκρατία",
        "desc": "H χριστιανοδημοκρατία υποστηρίζει τη διατήρηση των χριστιανικών αξιών και οικονομικά ένα σύστημα πρόνοιας. H Νέα Δημοκρατία είχε χαρακτηριστεί στο παρελθόν χριστιανοδημοκρατική.",
        "stats": { "a": 75, "b": 40, "c": 67.5, "d": 87.5, "e": 57.5, "f": 35, "g": 92.5 }
    },
    // Conservatism-Nationalism
    {
        "name": "Συντηρητισμός",
        "desc": "O συντηρητισμός υποστηρίζει την διατήρηση παραδοσιακών αξιών ενώ στην Ελλάδα τείνει προς τον οικονομικό παρεμβατισμό αντί της αγοράς. Όλα τα κόμματα από τη Νέα Δημοκρατία και μετά έχουν συντηρητικές θέσεις.",
        "stats": { "a": 85, "b": 55, "c": 80, "d": 82.5, "e": 15, "f": 75, "g": 92.5 }
    },
    {
        "name": "Εθνικισμός",
        "desc": "O εθνικισμός σκοπεύει στην διατήρηση των χαρακτηριστικών που διέπουν το έθνος και τον οικονομικό προστατευτισμό. Γνωστά εθνικιστικά κόμματα στην Ελλάδα είναι η Ελληνική Λύση, oι Έλληνες και η Χρυσή Αυγή.",
        "stats": { "a": 100, "b": 22.5, "c": 90, "d": 100, "e": 15, "f": 90, "g": 95 }
    },
    {
        "name": "Μοναρχισμός",
        "desc": "O μοναρχισμός υποστηρίζει την καθιέρωση του βασιλιά ως αρχηγού κράτους, συνήθως σε ένα κοινοβουλευτικό πολίτευμα. H τάση αυτή έχει υποχωρήσει μετά το 1974.",
        "stats": { "a": 95, "b": 55, "c": 90, "d": 85, "e": 15, "f": 75, "g": 92.5 }
    },
    // Ultra Nationalism-National Socialism
    {
        "name": "Μεταξισμός",
        "desc": "O μεταξισμός αποτελεί εθνικιστική ιδεολογία του Έλληνα πολιτικού Ιωάννη Μεταξά. H Χρυσή Αυγή έχει υποστηρίξει το καθεστώς του Μεταξά με επιδοκιμαστικές δηλώσεις.",
        "stats": { "a": 100, "b": 10, "c": 100, "d": 100, "e": 0, "f": 100, "g": 100 }
    },
    {
        "name": "Εθνικός Σοσιαλισμός",
        "desc": "O εθνικός σοσιαλισμός επιδιώκει ισχυρό έθνος, κατάργηση της δημοκρατίας, κρατικό έλεγχο, και φυλετική καθαρότητα καθώς και διέπεται από αντισημιτικές θέσεις. H Χρυσή Αυγή αποτελεί εθνικό σοσιαλιστικό κόμμα.",
        "stats": { "a": 100, "b": 0, "c": 100, "d": 100, "e": 10, "f": 100, "g": 100 }
    }
];

export default ideologies;