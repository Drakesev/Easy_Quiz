const questions = [

    { question: "Il sole è una stella?", answer: true },
    { question: "La luna è più grande della terra?", answer: false },
    { question: "Node.js è un linguaggio di programmazione?", answer: false },
    { question: "JavaScript può essere usato lato server?", answer: true },
    { question: "L acqua bolle a 100 gradi Celsius a livello del mare?", answer: true },
    { question: "La terra è piatta?", answer: false },
    { question: "Gli esseri umani hanno 4 polmoni?", answer: false },
    { question: "Il ferro è un metallo?", answer: true },
    { question: "La luce viaggia più veloce del suono?", answer: true },
    { question: "Gli insetti hanno sei zampe?", answer: true },
    { question: "La gravità sulla luna è uguale a quella sulla terra?", answer: false },
    { question: "Python è un tipo di serpente?", answer: true },
    { question: "Il numero zero è maggiore di uno?", answer: false },
    { question: "Il silicio è utilizzato nei circuiti elettronici?", answer: true },
    { question: "Il latte di mucca è viola?", answer: false },
    { question: "L acqua è composta da due atomi di idrogeno e uno di ossigeno?", answer: true },
    { question: "Gli esseri umani respirano anidride carbonica?", answer: false },
    { question: "La capitale della Francia è Parigi?", answer: true },
    { question: "Il corpo umano ha tre cervelli?", answer: false },
    { question: "Il numero π è approssimativamente 3.14?", answer: true },
    { question: "Le balene sono pesci?", answer: false },
    { question: "L oro è un metallo prezioso?", answer: true },
    { question: "Le piante producono ossigeno durante la fotosintesi?", answer: true },
    { question: "Il pianeta Marte ha due lune?", answer: true },
    { question: "I gatti sono animali erbivori?", answer: false },
    { question: "La velocità della luce è circa 300.000 km/s?", answer: true },
    { question: "Il tè contiene caffeina?", answer: true },
    { question: "Gli umani possono respirare sott acqua senza attrezzatura?", answer: false },
    { question: "Il Giappone è un continente?", answer: false },
    { question: "Le api producono miele?", answer: true },
    { question: "Il Sahara è una foresta pluviale?", answer: false },
    { question: "Il DNA si trova nel nucleo delle cellule?", answer: true },
    { question: "Gli uccelli hanno denti?", answer: false },
    { question: "La gravità è più debole sulla luna che sulla terra?", answer: true },
    { question: "Il sale comune è composto da sodio e cloro?", answer: true },
    { question: "I rettili respirano attraverso le branchie?", answer: false },
    { question: "Il numero 7 è considerato fortunato in molte culture?", answer: true },
    { question: "La fotosintesi produce anidride carbonica?", answer: false },
    { question: "Il caffè è una bevanda derivata dai chicchi della pianta di caffè?", answer: true },
    { question: "Il ghiaccio è più leggero dell acqua liquida?", answer: true },
    { question: "Gli squali sono mammiferi?", answer: false },
    { question: "La bandiera italiana ha tre colori: verde, bianco e rosso?", answer: true },
    { question: "Il latte materno è nutriente per i neonati?", answer: true },
    { question: "Le stelle di mare hanno sangue rosso?", answer: false },
    { question: "L elettricità è una forma di energia?", answer: true },
    { question: "I computer quantistici usano bit tradizionali?", answer: false },
    { question: "L oceano Pacifico è il più grande del mondo?", answer: true },
    { question: "Il sole sorge a ovest?", answer: false },
    { question: "Gli esseri umani hanno due occhi?", answer: true },
    { question: "La Luna ha la stessa dimensione del Sole visto dalla Terra?", answer: false },
    { question: "Il fiume Nilo è in Africa?", answer: true },
    { question: "Le giraffe hanno il collo corto?", answer: false },
    { question: "La radiazione solare è composta principalmente da luce visibile?", answer: true },
    { question: "Il Monte Everest è la montagna più alta della Terra?", answer: true },
    { question: "Le rane sono mammiferi?", answer: false },
    { question: "L acciaio è una lega di ferro e carbonio?", answer: true },
    { question: "Gli elefanti volano naturalmente?", answer: false },
    { question: "Il Sahara è il deserto più grande del mondo?", answer: true },
    { question: "I polpi hanno otto braccia?", answer: true },
    { question: "Il mare Mediterraneo è un oceano?", answer: false },
    { question: "La Terra ha tre stati principali: solido, liquido, gassoso?", answer: true },
    { question: "Il vetro è trasparente per natura?", answer: true },
    { question: "Gli aerei volano grazie alla gravità?", answer: false },
    { question: "Il latte è una fonte di calcio?", answer: true },
    { question: "Gli insetti hanno quattro zampe?", answer: false },
    { question: "Il primo uomo sulla luna è stato Neil Armstrong?", answer: true },
    { question: "L acqua è un liquido a temperatura ambiente?", answer: true },
    { question: "Le formiche possono volare come gli uccelli?", answer: false },
    { question: "Il calcio è un metallo alcalino?", answer: true },
    { question: "Il vento è causato dal movimento dell acqua?", answer: false },
    { question: "La penicillina è un tipo di antibiotico?", answer: true },
    { question: "I panda sono originari dell Africa?", answer: false },
    { question: "Il latte contiene proteine?", answer: true },
    { question: "Gli squali hanno ossa fragili come i pesci?", answer: false },
    { question: "Il pianeta Venere è più caldo della Terra?", answer: true },
    { question: "Il ghiaccio è più denso dell acqua?", answer: false },
    { question: "Gli esseri umani hanno cinque dita per mano?", answer: true },
    { question: "Il fuoco è una sostanza solida?", answer: false },
    { question: "La Terra gira attorno al Sole?", answer: true },
    { question: "I pipistrelli sono uccelli?", answer: false },
    { question: "Le arance contengono vitamina C?", answer: true },
    { question: "I fiumi scorrono sempre da sud a nord?", answer: false },
    { question: "La matematica utilizza numeri e simboli?", answer: true },
    { question: "Il computer è stato inventato nel XX secolo?", answer: true },
    { question: "Il platano è un tipo di uccello?", answer: false },
    { question: "Il latte può essere bevuto crudo senza rischi?", answer: false },
    { question: "Gli scimpanzé sono primati?", answer: true },
    { question: "La Terra è il terzo pianeta dal Sole?", answer: true },
    { question: "Le tartarughe volano naturalmente?", answer: false },
    { question: "Il miele è prodotto dalle api?", answer: true },
    { question: "I gatti sono erbivori?", answer: false },
    { question: "Il numero e (≈2.718) è importante in matematica?", answer: true },
    { question: "Gli astronauti galleggiano nello spazio per assenza di gravità?", answer: true },
    { question: "La gravità non esiste sulla luna?", answer: false },
    { question: "Il corpo umano ha due reni?", answer: true },
    { question: "I vulcani possono eruttare lava e cenere?", answer: true },
    { question: "Il caffè decaffeinato non contiene caffeina?", answer: false },
    { question: "L arcobaleno è causato dalla rifrazione della luce?", answer: true },
    { question: "Gli uccelli migrano solo in inverno?", answer: false },
    { question: "La Luna ruota attorno alla Terra?", answer: true },
    { question: "I pesci respirano aria come gli esseri umani?", answer: false },
    { question: "Il ghiaccio si scioglie a temperature sopra 0°C?", answer: true },
    { question: "Le api possono pungere più volte senza morire?", answer: false },
    { question: "La plastica è biodegradabile naturalmente?", answer: false },
    { question: "Gli squali sono carnivori?", answer: true },
    { question: "La velocità del suono nell aria è circa 343 m/s?", answer: true },
    { question: "I delfini sono mammiferi?", answer: true },
    { question: "Le piante assorbono anidride carbonica?", answer: true },
    { question: "Il petrolio è una fonte rinnovabile?", answer: false },
    { question: "Il Monte Bianco è in Italia?", answer: true },
    { question: "Il ferro galleggia sull acqua?", answer: false },
    { question: "Il latte di mucca è una bevanda lattiero-casearia?", answer: true },
    { question: "I ragni hanno sei zampe?", answer: false },
    { question: "La gravità aumenta avvicinandosi al centro della Terra?", answer: true },
    { question: "Il vento può essere misurato con un anemometro?", answer: true },

];

let score = 0;
let index_question = 0;

const askQuestion = () => {
    if (index_question < questions.length) {
        const q = questions[index_question];
        process.stdout.write(`${q.question} (vero/falso): `);
        

        process.stdin.resume();
        process.stdin.once('data', (data) => {
            const input = data.toString().trim().toLowerCase();

            if (input !== "vero" && input !== "falso") {
                console.log(" Inserisci solo Vero e Falso ");
                askQuestion();
                return;
            }


            const userAnswer = input === "vero";
            


            if (userAnswer == q.answer) {
                console.log(" ✅ INDOVINATO");
            } else {
                console.log("❌ SBAGLIATO")
            } 

            index_question++;
            askQuestion();
        });

    } else {
        console.log(`Quiz finito! Hai totalizzato ${score} su ${questions.length}`);
        process.exit();
    }
        
}

askQuestion();
