/*
let currentLang = localStorage.getItem("lang") || "en";//take user-selected lang, default to en
let translations = {};

//load JSON translations
async function loadTranslations(){
    const res = await fetch("lang.json");
    translations = await res.json();
    applyTranslations();
}

//fetching any marked text and replacing it?
function applyTranslations(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const text = translations[currentLang][key];

//alternate js proposed by chat - what is it exactly?
        if (!text) return;

        // If element has an icon, preserve it
        const icon = el.querySelector(".icon");
        if (icon) {
            el.innerHTML = text + icon.outerHTML;
        } else {
            el.textContent = text;
        }

        //if (text) el.childNodes[0].textContent = text;//limit target to first node (text)
    });
}

//switch from en to fr and vice versa
function toggleLanguage(){
    currentLang = currentLang === "en" ? "fr" : "en";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
}

//check for html file, load translations on button click
document.addEventListener("DOMContentLoaded", () => {
    loadTranslations();
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggleLanguage);
});
*/
/*
    FINAL TRANSLATION SYSTEM
    -------------------------------------------------------------------------------------------------------
    • No JSON file required
    • Safe to use with file:// (no fetch)
    • Works on all pages
    • Uses data-i18n attributes
    • Preserves icons inside accordion headers
*/

console.log("TRANSLATE JS LOADED");//debug thing

let currentLang = localStorage.getItem("lang") || "en";

// Translation dictionary (FULLY SELF-CONTAINED)
const translations = {
    en: {
        welcome: "Welcome",
        //sidebar/topbar text
        "location.brentwood": "Brentwood Station",
        "sidebar.home": "HOME",
        "sidebar.route": "ROUTE",
        "sidebar.schedule": "SCHEDULE",
        "sidebar.help": "HELP",
        "sidebar.lang": "FRANÇAIS",
        "sidebar.previous": "PREVIOUS",
    //help screen text
        "help.header": "Help & Support",
        "help.subheader": "How can we help you today?",
        "faq.card1": "How do I buy a ticket?",
        "faq.answer1": "Navigate to the ticket purchase screen with the button through the home screen. Select what you need, and pay.",
        "faq.card2": "How do I plan a trip?",
        "faq.answer2": "Navigate to the route planner by using the button in the left sidebar.",
        "faq.card3": "I'd like to report a problem.",
        "faq.answer3": "Call us at: 403-262-1000.",
        "faq.card4": "I'd like to find the lost and found.",
        "faq.answer4": "Lost and founds are only available at the city centre, Brentwood and Marlborough Bus Depots. Call the number 403-262-1000 to get more information.",
        "faq.card5": "What are the fares and prices?",
        "faq.answer5": "Check fares through the ticket purchase. You will be able to back out should you decide not to purchase.",
        "faq.card6": "I want to contact Calgary Transit immediately.",
        "faq.answer6": "Call us at: 403-262-1000.",
    //schedule screen text
        "schedule.incoming" : "Incoming Transit Options",
        "schedule.departures": "Live Departures",
        "schedule.route":"Route",
        "schedule.next":"Next bus",
        "schedule.following":"Following",
        "schedule.earlytag":"early",
        "schedule.ontimetag":"on time",
        "schedule.latetag":"late",
        "schedule.now":"Now",
    //route tool
        "route.header":"Plan your trip",
        "route.from":"FROM",
        "route.to":"TO",
        "route.buy":"Buy Ticket",
        "route.select": "Select Destination...",
    //ticket screen
        "ticket.header":"Select your fare:",
        "ticket.adultfare":"Adult",
        "ticket.adultfaredesc":"For riders ages 18 to 64.",
        "ticket.youthfare":"Youth",
        "ticket.youthfaredesc":"For riders ages 13 to 17.",
    //adult ticket screen
        "adultticket.header":"Select Adult Ticket:",
        "adultticket.toggle":"+ Select Youth Fare",
    //youth screen
        "youthscreen.header":"Select Youth Ticket",
        "youthticket.toggle":"+ Select Adult Fare",
    //ticket purchase screen text
        "ticket.single":"Single",
        "ticket.singletime":"Valid for 90 minutes",
        "ticket.daytime":"Valid until end of service day",
        "ticket.monthtime":"Valid until the end of the current calendar month",
        "ticket.daypass":"Day Pass",
        "ticket.monthpass":"Month Pass",

        "button.continue":"CONTINUE",
    //payment screen
        "payment.header":"How would you like to pay?",
        "payment.cart":"Your Cart",
        "payment.item":"ITEM",
        "payment.unit":"UNIT",
        "payment.cost":"COST",
        "payment.clearcart":"CLEAR CART",
        "payment.return":"RETURN TO TICKET SELECTION",
        "payment.cash":"Cash/Coins",
        "payment.card":"Credit/Debit",
        "payment.empty":"No ticets selected yet.",
    //pay cash screen
        "paycash.header":"Insert Coins or Bills.",
        "paycash.processing":"Processing payment...",
        "paycash.balancedue":"Balance Due:",
        "paycash.hint":"Tap anywhere to insert cash",
        //pay cash error
        "paycash.error":"There has been an error in your payment.",
        "paycash.errorreturn":"Please return to the payment screen and try again.",
        "paycash.buttonreturn":"Return to payment screen",
    //pay card screen
        "paycard.header":"Please follow the instructions on the card reader.",
        "paycard.sub":"Processing your payment...",
    //receipt selection menu
        "receipt.header":"How would you like your receipt?",
        "receipt.print":"Print",
        "receipt.email":"E-mail",
        "receipt.none":"No receipt",
        //print receipt
        "print.header":"Printing Receipt",
        "print.processing":"Processing...",
    //thank screen
        "thank.card":"Thank you for using Calgary Transit",
        "thank.subtext":"This kiosk will return to the welcome screen in:",
        "thank.countdown":"3 seconds",
     //enter email
        "enteremail.header":"Please type in your email:",
        "enteremail.type":"Enter Email:",
        "enteremail.submit":"SUBMIT",
        //email sent
        "emailsent.header":"Receipt Email",
        "emailsent.confirm":"Email sent",
        "emailsent.subtext":"Check your inbox",
        "emailsent.continue":"Tap here to continue",

    //home screen
        "home.welcome":"Welcome",
        "home.question":"What would you like to do today?",
        "home.buytickets":"Buy Tickets",
        "home.singleticket":"Single Ticket",
        "home.daypass":"Day Pass",
        "home.monthpass":"Monthly Pass",
        "home.map":"Map",
        "home.maptext":"View Map",
        "home.checksched":"Check Timings",
        "home.checktext":"Find out when the next bus is arriving.",
        "home.shortcut":"Quick Buy: 1 Adult Ticket"

        

    },

    fr: {
        welcome: "Bienvenue",

        "location.brentwood": "Gare de Brentwood",
        "sidebar.home": "ACCUEIL",
        "sidebar.route": "LIGNE",
        "sidebar.schedule": "HORAIRE",
        "sidebar.help": "AIDE",
        "sidebar.lang": "ENGLISH",
        "sidebar.previous": "PRÉCÉDENT",

        "help.header": "Assistance",
        "help.subheader": "Comment pouvons-nous vous aider aujourd’hui ?",
        "faq.card1": "Comment puis-je acheter un billet ?",
        "faq.answer1": "Naviguez vers l'écran d’achat à l’aide du bouton sur l’écran d’accueil. Sélectionnez ce dont vous avez besoin, puis payez.",
        "faq.card2": "Comment puis-je planifier un trajet ?",
        "faq.answer2": "Touchez le bouton « Route » dans la barre latérale pour accéder au planificateur.",
        "faq.card3": "Je veux signaler un problème.",
        "faq.answer3": "Appelez-nous au : 403-262-1000.",
        "faq.card4": "Je cherche les objets trouvés.",
        "faq.answer4": "Les objets trouvés sont disponibles au centre-ville ainsi qu’aux gares routières de Brentwood et Marlborough. Pour plus d'informations, composez le 403-262-1000.",
        "faq.card5": "Quels sont les tarifs ?",
        "faq.answer5": "Consultez les tarifs en ouvrant l'écran d'achat de billets. Vous pourrez revenir en arrière sans payer.",
        "faq.card6": "Je veux contacter Calgary Transit immédiatement.",
        "faq.answer6": "Appelez-nous au : 403-262-1000.",
    //schedule screen text
        "schedule.incoming": "Transit à venir",
        "schedule.departures": "Départs en direct",
        "schedule.route":"Ligne",
        "schedule.next":"Prochain bus",
        "schedule.following":"Suivant",
        "schedule.earlytag":"en avance",
        "schedule.ontimetag":"à l'heure",
        "schedule.latetag":"en retard",
        "schedule.now":"Actuellement",
    //route tool
        "route.header":"Planifiez Votre Voyage",
        "route.from":"DE",
        "route.to":"À",
        "route.buy":"Achetez un billet",
        "route.select": "Sélectionnez votre destination...",
    //ticket screen
        "ticket.header":"Sélectionnez vos tickets:",
        "ticket.adultfare":"Adulte",
        "ticket.adultfaredesc":"Pour les passagers âgés de 18 à 64 ans",
        "ticket.youthfare":"Jeune",
        "ticket.youthfaredesc":"Pour les passagers âgés de 13 à 17 ans",
    //adult ticket
        "youthticket.toggle":"+ Sélectionnez le Tarif Jeunesse",
        "adultticket.header":"Selectionnez Vos Tickets:",
    //youth tickets
        "youthticket.header":"Selectionnez Vos Tickets:",
        "adultticket.toggle":"+ Sélectionnez le Tarif Adulte",
    //generic ticket text
        "ticket.single":"Aller Simple",
        "ticket.singletime":"Valable pour 90 minutes",
        "ticket.daypass":"Passe Journalière",
        "ticket.monthpass":"Passe Mensuelle",
        "ticket.daytime":"Valable jusqu'à la fin de la journée de service",
        "ticket.monthtime":"Valable jusqu'à la fin du mois.",
        "button.continue":"PROCHAIN",

    //payment screen
        "payment.header":"Comment souhaitez-vous payer?",
        "payment.cart":"Votre Panier",
        "payment.item":"ARTICLE",
        "payment.unit":"UNITÉ",
        "payment.cost":"PRIX",
        "payment.clearcart":"VIDER LE PANIER",
        "payment.return":"RETOUR À LA SÉLECTION DE TICKETS",
        "payment.cash":"Les espèces",
        "payment.card":"Crédit/Débit",
        "payment.empty":"Aucun ticket sélectionné pour l'instant.",
    //pay cash screen
        "paycash.header":"Insérez des pièces ou des billets.",
        "paycash.processing":"Traitement du paiement...",
        "paycash.balancedue":"Solde dû:",
        "paycash.hint":"Appuyez n'importe où pour insérer de l'argent.",
        //pay cash error
        "paycash.error":"Une erreur s'est produite lors de votre paiement.",
        "paycash.errorreturn":"Veuillez retourner à l'écran de paiement et réessayer.",
        "paycash.buttonreturn":"Revenir à l'écran de paiement",
    //pay card screen
        "paycard.header":"Veuillez suivre les instructions du lecteur de carte.",
        "paycard.sub":"Traitement de votre paiement...",
    //receipt menu
        "receipt.header":"Comment souhaitez-vous recevoir votre reçu ?",
        "receipt.print":"Imprimé",
        "receipt.email":"E-mail",
        "receipt.none":"Aucun",
        //print receipt
        "print.header":"Imprimant votre reçu",
        "print.processing":"Traitement...",
    //enter email
        "enteremail.header":"Veuillez saisir votre adresse e-mail :",
        "enteremail.type":"Entrez votre e-mail :",
        "enteremail.submit":"SOUMETTRE",
    //thank screen
        "thank.card":"Merci d'avoir utilisé Calgary Transit",
        "thank.subtext":"Ce kiosque reviendra à l'écran d'accueil en:",
        "thank.countdown":"3 secondes",
        //email sent
        "emailsent.header":"Reçu par courriel",
        "emailsent.confirm":"E-mail envoyé",
        "emailsent.subtext":"Vérifiez votre boîte de réception",
        "emailsent.continue":"Appuyez ici pour continuer",
    //home screen
        "home.welcome":"Bienvenue",
        "home.question":"Qu'aimerais-vous faire aujourd'hui ?",
        "home.buytickets":"Acheter des tickets",
        "home.singleticket":"Aller Simple",
        "home.daypass":"Passe Journalière",
        "home.monthpass":"Passe Mensuel",
        "home.map":"Carte",
        "home.maptext":"Voir la carte",
        "home.checksched":"Vérifier l'horaire",
        "home.checktext":"Renseignez-vous sur l'heure d'arrivée du prochain bus.",
        "home.shortcut":"Achat rapide: 1 ticket adulte"



    }
};


/* -----------------------------------------
   APPLY TRANSLATIONS
----------------------------------------- */
function applyTranslations() {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        const text = translations[currentLang][key];

        if (!text) return; // safety check

        // If the element has an icon (.icon)
        const icon = el.querySelector(".icon");

        if (icon) {
            // Keep the icon on the right
            icon.remove(); // remove temporarily
            el.textContent = text; // set translated text
            el.appendChild(icon); // reinsert the icon
        } else {
            // Simple text element
            el.textContent = text;
        }
    });
}


/* -----------------------------------------
   LANGUAGE TOGGLE
----------------------------------------- */
function toggleLanguage() {
    currentLang = currentLang === "en" ? "fr" : "en";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
}


/* -----------------------------------------
   INITIALIZATION
----------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();

    const btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggleLanguage);
});
