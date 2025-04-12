import chiaiaCover from '../images/places/cover/chiaia.webp';
import chiaiaVisible from '../images/places/visible/chiaia.webp';
import chiaiaHidden from '../images/places/hidden/chiaia.webp';
import chiaiaBorder from '../images/places/border/chiaia.png';

import chiaiolellaCover from '../images/places/cover/chiaiolella.webp';
import chiaiolellaVisible from '../images/places/visible/chiaiolella.webp';
import chiaiolellaHidden from '../images/places/hidden/chiaiolella.webp';
import chiaiolellaBorder from '../images/places/border/chiaiolella.png';

import vivaraCover from '../images/places/cover/vivara.webp';
import vivaraVisible from '../images/places/visible/vivara.png';
import vivaraHidden from '../images/places/hidden/vivara.png';
import vivaraBorder from '../images/places/border/vivara.png';

import mamozioCover from '../images/places/cover/mamozio.webp';
import mamozioVisible from '../images/places/visible/mamozio.png';
import mamozioHidden from '../images/places/hidden/mamozio.png';
import mamozioBorder from '../images/places/border/mamozio.png';

import canaleCover from '../images/places/cover/canale.webp';
import canaleVisible from '../images/places/visible/canale.png';
import canaleHidden from '../images/places/hidden/canale.png';
import canaleBorder from '../images/places/border/canale.png';

import martiriCover from '../images/places/cover/martiri.webp';
import martiriVisible from '../images/places/visible/martiri.png';
import martiriHidden from '../images/places/hidden/martiri.webp';
import martiriBorder from '../images/places/border/martiri.png';

import cannoniCover from '../images/places/cover/cannoni.webp';
import cannoniVisible from '../images/places/visible/cannoni.png';
import cannoniHidden from '../images/places/hidden/cannoni.png';
import cannoniBorder from '../images/places/border/cannoni.png';

import carcereCover from '../images/places/cover/carcere.webp';
import carcereVisible from '../images/places/visible/carcere.webp';
import carcereHidden from '../images/places/hidden/carcere.webp';
import carcereBorder from '../images/places/border/carcere.png';

import culturaCover from '../images/places/cover/cultura.webp';
import culturaVisible from '../images/places/visible/cultura.webp';
import culturaHidden from '../images/places/hidden/cultura.webp';
import culturaBorder from '../images/places/border/cultura.png';

import abbaziaCover from '../images/places/cover/abbazia.webp';
import abbaziaVisible from '../images/places/visible/abbazia.png';
import abbaziaHidden from '../images/places/hidden/abbazia.png';
import abbaziaBorder from '../images/places/border/abbazia.png';

import corricellaCover from '../images/places/cover/corricella.webp';
import corricellaVisible from '../images/places/visible/corricella.webp';
import corricellaHidden from '../images/places/hidden/corricella.webp';
import corricellaBorder from '../images/places/border/corricella.png';

import faroCover from '../images/places/cover/faro.webp';
import faroVisible from '../images/places/visible/faro.webp';
import faroHidden from '../images/places/hidden/faro.webp';
import faroBorder from '../images/places/border/faro.png';

import marinaCover from '../images/places/cover/marina.webp';
import marinaVisible from '../images/places/visible/marina.webp';
import marinaHidden from '../images/places/hidden/marina.webp';
import marinaBorder from '../images/places/border/marina.png';

import cimiteroCover from '../images/places/cover/cimitero.webp';
import cimiteroVisible from '../images/places/visible/cimitero.png';
import cimiteroHidden from '../images/places/hidden/cimitero.webp';
import cimiteroBorder from '../images/places/border/cimitero.png';



const dbPlaces = [
    { 
      'id' : "1",
      'name' : 'vivara', 
      'description' : "L'Isola di Vivara fa parte del Comune di Procida. Vivara è una riserva naturale statale e un'oasi di protezione naturale.Tra gli arbusti ed alberi sempreverdi presenti ci sono il Lentisco, il Mirto, la Fillirea e l'Alaterno, che dominano le zone più calde e aride dell'isola. Nella parte sud-orientale dell'isola si trova un bosco di Roverella e Leccio. Tra le specie di uccelli protette ci sono il Gabbiano Corso, il Falco Pellegrino e il Succiacapre.",
      'imgCover' : vivaraCover,
      'imgVisible' : vivaraVisible,
      'imgHidden' : vivaraHidden,
      'imgBorder' : vivaraBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "2",
      'name' : 'chiaiolella',
      'description' : "La Chiaiolella (“spiaggiolella”, piccola spiaggia) è l'ultima Marina dell'isola. È caratterizzata dalla presenza del porto turistico e della spiaggia più grande dell’isola. Tra le caratteristiche case a schiera si erge il Santuario di San Giuseppe (XIX sec.). Alle spalle del lungomare che costeggia la spiaggia di “Ciracciello” si trova la zona delle \"parùle\", terreni già paludosi irrigati con l'impiego di caratteristiche norie, che estraevano l'acqua da pozzi artesiani.",
      'imgCover' : chiaiolellaCover,
      'imgVisible' : chiaiolellaVisible,
      'imgHidden' : chiaiolellaHidden,
      'imgBorder' : chiaiolellaBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "3",
      'name' : 'belvedere chiaia',
      'description' : "Il belvedere è dedicato alla celebre scrittrice Elsa Morante, autrice del romanzo \"L'isola di Arturo\", ambientato proprio a Procida. La Morante trascorse lunghi periodi sull'isola, traendo ispirazione dai suoi paesaggi e dalla sua atmosfera. Il belvedere offre una vista spettacolare sulla Spiaggia della Chiaia, sulla Corricella e sul Golfo di Napoli. Da qui si possono ammirare le case colorate della Corricella, il mare cristallino e, sullo sfondo, il Vesuvio.",
      'imgCover' : chiaiaCover,
      'imgVisible' : chiaiaVisible,
      'imgHidden' : chiaiaHidden,
      'imgBorder' : chiaiaBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "4",
      'name' : 'san giacomo', 
      'description' : "San Giacomo è un quartiere residenziale che conserva l'atmosfera autentica di Procida, con le sue case colorate e le stradine strette. La sua posizione centrale la rende un punto di partenza ideale per esplorare l'isola. A pochi passi si trova la Chiesa del Cristo Morto, conosciuta anche come la Chiesa di San Tommaso d'Aquino. Essa ospita una straordinaria scultura lignea del Cristo Morto, opera dell'artista Carmine Lantriceni, risalente al 1728.",
      'imgCover' : mamozioCover,
      'imgVisible' : mamozioVisible,
      'imgHidden' : mamozioHidden,
      'imgBorder' : mamozioBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "5",
      'name' : 'san leonardo', 
      'description' : "San Leonardo è una zona che ruota intorno alla sua chiesa. La chiesa parrocchiale di San Leonardo è un edificio religioso situato in via Vittorio Emanuele. La sua storia ha radici profonde, con testimonianze di devozione a San Leonardo già nel XVI secolo. Il culto di San Leonardo a Procida è probabilmente stato introdotto dai Benedettini. Per intercessione del santo, inoltre, l'isola fu liberata da una devastante epidemia.",
      'imgCover' : canaleCover,
      'imgVisible' : canaleVisible,
      'imgHidden' : canaleHidden,
      'imgBorder' : canaleBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "6",
      'name' : 'piazza dei martiri',
      'description' : "In Piazza dei Martiri i rivoluzionari isolani issarono l'albero della Libertà nel 1799. La rivolta fu però presto soffocata nel sangue dai Borbone e dagli Inglesi, che riconquistarono l'isola prima di Napoli. E proprio nel canale di Procida la flotta inglese dell'ammiraglio Nelson affrontò con successo le navi della Repubblica Partenopea. A ricordare la furia reazionaria c'é una stele commemorativa dei gentiluomini, dei proprietari e dei sacerdoti giustiziati per aver dato il proprio contributo al governo repubblicano.", 
      'imgCover' : martiriCover,
      'imgVisible' : martiriVisible,
      'imgHidden' : martiriHidden,
      'imgBorder' : martiriBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "7",
      'name' : 'santa margherita', 
      'description' : "Il Monastero di Santa Margherita Nuova risale al XVI secolo. Fu costruito dai monaci domenicani che si trasferirono dal più antico Cenobio di Santa Margherita Vecchia, situato alla Chiaiolella, a causa delle incursioni saracene. La sua posizione strategica, tra la Corricella e Terra Murata, lo rendeva un punto di controllo importante. A due passi si trova il Belvedere dei Cannoni: una bellissima terrazza panoramica sulla Corricella con due cannoni di epoca borbonica.",
      'imgCover' : cannoniCover,
      'imgVisible' : cannoniVisible,
      'imgHidden' : cannoniHidden,
      'imgBorder' : cannoniBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "8",
      'name' : 'piazza d\'armi', 
      'description' : "La Piazza d'Armi fu realizzata nel XVI secolo, quando il borgo di Terra Murata fu fortificato per proteggere l'isola dalle incursioni dei pirati. La piazza era destinata ad ospitare le truppe e le armi, ed era un importante punto di riferimento strategico e militare. Durante il periodo borbonico, il Palazzo d'Avalos divenne una residenza reale e la piazza assunse un ruolo di rappresentanza, ospitando feste e manifestazioni ufficiali.",
      'imgCover' : carcereCover,
      'imgVisible' : carcereVisible,
      'imgHidden' : carcereHidden,
      'imgBorder' : carcereBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "9",
      'name' : 'terra murata', 
      'description' : "L'Abbazia di San Michele fu costruita dai benedettini nell’XI secolo e affidata, poi, in commenda a cardinali. L’edificio religioso, costruito su un impianto basilicale, si articola su due livelli, di cui quello superiore ospita la chiesa, mentre il piano inferiore comprende il complesso abbaziale. L’interno della chiesa accoglie tre navate di cui quella centrale è coperta da un soffitto a cassettoni in legno ed oro zecchino con al centro il dipinto raffigurante San Michele che sconfigge Satana, realizzato nel XVII secolo.",
      'imgCover' : culturaCover,
      'imgVisible' : culturaVisible,
      'imgHidden' : culturaHidden,
      'imgBorder' : culturaBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "10",
      'name' : 'abbazia di san michele', 
      'description' : "Terra Murata è il cuore storico di Procida, un borgo fortificato che domina l'isola dall'alto di un promontorio a picco sul mare. Il borgo ha origini antiche, risalenti al Medioevo, quando l'isola era spesso soggetta ad incursioni piratesche. La sua posizione strategica e le imponenti mura di difesa la resero un rifugio sicuro per la popolazione. Nel corso dei secoli, il borgo ha subito diverse trasformazioni, ospitando un'abbazia, un castello e, successivamente, un carcere.",
      'imgCover' : abbaziaCover,
      'imgVisible' : abbaziaVisible,
      'imgHidden' : abbaziaHidden,
      'imgBorder' : abbaziaBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "11",
      'name' : 'corricella', 
      'description' : "La Marina Corricella è la fotografia di Procida. Nel borgo, inaccessibile ad auto e moto, le case dei pescatori sono aggrappate sull'alta e ripida costa formando un caratteristico agglomerato molto particolare per l'utilizzo dei colori pastello giallo, rosa, azzurro, verde, bianco, utili ai naviganti a riconoscere la propria casa dal mare. Il nome Corricella deriva dal greco \"core callos\" (bella contrada), la medesima etimologia di Callìa, che ne costituisce la parte superiore.",
      'imgCover' : corricellaCover,
      'imgVisible' : corricellaVisible,
      'imgHidden' : corricellaHidden,
      'imgBorder' : corricellaBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "12",
      'name' : 'marina grande',
      'description' : "Marina Grande è l'unico porto commerciale di Procida, quindi è qui che attraccano traghetti e aliscafi provenienti dalla terraferma e dalle isole vicine. Il porto è sempre animato, con pescatori che scaricano il pescato, turisti che arrivano e partono, e residenti che si incontrano per chiacchierare. Le case che si affacciano sul porto sono dipinte con colori vivaci, creando un'immagine pittoresca e indimenticabile.", 
      'imgCover' : marinaCover,
      'imgVisible' : marinaVisible,
      'imgHidden' : marinaHidden,
      'imgBorder' : marinaBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "13",
      'name' : 'faro', 
      'description' : "La sua posizione a Punta Pioppeto offre una vista mozzafiato sulla costa flegrea, su Capo Miseno, sul Monte di Procida, su Torregaveta e, nelle giornate limpide, fino a Gaeta. Le sue origini risalgono al XVI secolo, il che lo rende uno dei monumenti storici più antichi dell'isola. Ha svolto un ruolo cruciale nel guidare i naviganti attraverso le acque del Golfo di Napoli per secoli. Oltre alla sua funzione di segnalamento marittimo, il faro è un simbolo dell'identità di Procida.",
      'imgCover' : faroCover,
      'imgVisible' : faroVisible,
      'imgHidden' : faroHidden,
      'imgBorder' : faroBorder,
      'unblocked' : false,
      'time' : ''
    },
    { 
      'id' : "14",
      'name' : 'pozzo vecchio', 
      'description' : "La zona di Pozzo Vecchio a Procida è un luogo di straordinaria bellezza, noto soprattutto per la sua iconica spiaggia. La spiaggia è racchiusa in una bellissima baia naturale dove sono state girate scene dell’ultimo film di Massimo Troisi, \"Il Postino\". Per questo la Spiaggia del Pozzo Vecchio è conosciuta anche come Spiaggia del Postino. La sua sabbia vulcanica e scura crea un contrasto affascinante con il colore azzurro intenso del mare.",
      'imgCover' : cimiteroCover,
      'imgVisible' : cimiteroVisible,
      'imgHidden' : cimiteroHidden,
      'imgBorder' : cimiteroBorder,
      'unblocked' : false,
      'time' : ''
    },
  ];
  
  export default dbPlaces;


