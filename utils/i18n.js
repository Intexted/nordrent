import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      title: "Book your car rental in Tangier now !",
      location: "Locations",
      contact: "Contacts",
      pickUpAgency: "Pick-up Agency",
      departureDate: "Departure Date",
      returnAgency: "Return Agency",
      returnDate: "Return Date",
      myAge: "My Age",
      tangerCity: "Tangier City",
      tangerAirport: "Tangier Airport",
      tetouanAirport: "Tetouan Airport",
      agePlus: "23 and above",
      dateChoice: "Choose a date",
      search: "Search",
      clients: "Clients",
      vehicles: "Vehicles",
      bookings: "Bookings",
      home: "Home",
      services: "Services",
      about: "About",
      reviews: "Reviews",
      fuelType: "Fuel Type",
      transmission: "Transmission",
      manual: "Manual",
      automatic: "Automatic",
      doors: "Doors",
      passengers: "Passengers",
      day: "Day",
      NosServices: "Our Services",
      NosServicesSubTitle: "One among the best car rental services in Tangier",
      pay: "Book now",
      ChauffeurDrive: "Private Chauffeur in Tangier",
      ChauffeurDriveDescription:
        "Begin your journey in style with a private chauffeur-driven car in Tangier. Our professional chauffeurs will meet you at your arrival and transport you to your destination or back to the airport. Book a private chauffeur with Nord Promo Car for a luxurious and convenient car rental Tangier experience.",
      FuelPlans: " Fuel Plans for Car Rental Tangier",
      FuelPlansDescription:
        "We offer flexible fuel plan options to simplify your car rental Tangier experience. Prepay for a full tank of fuel and return the car empty, or opt for purchasing a full tank just before returning the vehicle. Optimize your rental with our customized fuel plans.",
      PickupAndDelivery: "Pickup and Delivery in Tangier",
      PickupAndDeliveryDescription:
        "Nord Promo Car offers exceptional pickup and delivery services for your car rental Tangier needs. We'll pick you up or deliver your vehicle to your office, home, or repair shop. Enjoy our convenient pickup and delivery service to facilitate your car rental Tangier experience.",
      AboutTangierTitle: "What do you know about Tangier",
      AboutTangierDescription:
        "Tangier, a city located in northern Morocco, is known for its laid-back lifestyle and vibrant cultural scene. Whether you're looking to explore local markets or enjoy a night out on the town, Tangier has something for everyone. Plus, with its convenient location just off the European coast, it's easy to explore all the Mediterranean destinations.",
      AboutCarRentalAgencyTitle: "About our car rental agency in Tangier",
      AboutCarRentalAgencyDescription:
        "Nord Promo Car is your trusted partner for car rental in Tangier, Morocco. We are committed to offering reliable and high-quality car rental services to ensure your satisfaction. Our diverse fleet accommodates all needs and budgets, from compact cars to luxury models. Our experienced team assists you in selecting the perfect vehicle for your stay in Tangier. Benefit from our competitive rates and flexible options, whether for short-term or long-term rentals. Contact us today for a hassle-free car rental in Tangier experience with Nord Promo Car.",
      CustomerReviewsTitle: "What are customers saying about us?",
      ContactQuestion:
        "Do you have any questions or need additional information? Get in touch with us!",
      ContactAddress: "Address:",
      SendMessageButton: "Send Message",
      SendMessagePlaceholder: "Send Message",
      FirstNamePlaceholder: "Your First Name*",
      EmailPlaceholder: "Your email*",
      MessagePlaceholder: "Your message*",
      ChooseYourVehicle: "Choose your vehicle",
      RentalTermsAndConditions: "RENTAL TERMS AND CONDITIONS",
      CreditCardRequirements: "CREDIT CARD - REQUIRED CONDITIONS",
      Return: "Return",
      Depart: "Depart",
      time: "Time",
      reservationDetails: "Reservation Details",
      departureDate: "Departure Date",
      returnDate: "Return Date",
      vehicle: "Vehicle",
      clientInformation: "Client Information",
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "Phone Number",
      gender: "Gender",
      mr: "Mr",
      mme: "Mme",
      country: "Country",
      city: "City",
      extrasOptions: "Extras & Options",
      additionalDriver: "Additional Driver",
      gpsNavigator: "GPS Navigator",
      childBoosterSeat: "Child Booster Seat",
      babyChildSeat: "Baby/Child Seat",
      fullCarInsurance: "Full Car Insurance",
      tireGlassInsurance: "Tire and Glass Insurance",
      airportDelivery: "Airport Delivery",
      unlimitedMileage: "Unlimited Mileage",
      payment: "Payment",
      confirm: "Confirm",
      cashPayment: "Cash Payment",
      Edit: "Edit",
      Franchise: "Franchise",
    },
  },
  fr: {
    translation: {
      title: "Réservez votre location de voiture à Tanger dès maintenant !",
      location: "Locations",
      contact: "Contacts",
      home: "Accueil",
      services: "Services",
      about: "À propos",
      reviews: "Avis",
      pickUpAgency: "Agence de départ",
      departureDate: "Date de départ",
      returnAgency: "Agence de retour",
      returnDate: "Date de retour",
      myAge: "Mon âge",
      tangerCity: "Tanger centre ville",
      tangerAirport: "Tanger aéroport",
      tetouanAirport: "Tétouan aéroport",
      agePlus: "23 et +",
      dateChoice: "Choisissez une date",
      search: "Rechercher",
      clients: "Clients",
      vehicles: "Véhicules",
      bookings: "Réservations",
      fuelType: "Carburation",
      transmission: "Transmission",
      manual: "Manuelle",
      automatic: "Automatique",
      doors: "Portes",
      passengers: "Passagers",
      day: "Jour",
      NosServices: "Nos Services",
      NosServicesSubTitle:
        "Parmi les meilleurs services de location de voitures à Tanger",
      pay: "Reserver maintenant",
      ChauffeurDrive: "Chauffeur privé à Tanger",
      ChauffeurDriveDescription:
        " Commencez votre voyage en toute élégance avec un transfert en voiture avec chauffeur à Tanger. Nos chauffeurs professionnels vous attendent à votre arrivée pour vous conduire à votre destination ou pour vous ramener à l'aéroport. Réservez un chauffeur privé avec Nord Promo Car pour une expérience de location voiture Tanger luxueuse et pratique.",
      FuelPlans: "Plans de carburant pour location voiture Tanger",
      FuelPlansDescription:
        "Nous proposons des options flexibles de plan de carburant pour simplifier votre location voiture Tanger. Choisissez de payer à l'avance pour un plein de carburant et ramenez la voiture vide, ou optez pour un plein de carburant avant de rendre le véhicule. Optimisez votre expérience de location avec nos plans de carburant personnalisés.",
      PickupAndDelivery: "Prise en charge et livraison à Tanger",
      PickupAndDeliveryDescription:
        "Nord Promo Car offre un service de prise en charge et de livraison exceptionnel pour votre location voiture Tanger. Nous venons vous chercher ou livrer votre véhicule à votre bureau, domicile ou atelier de réparation. Profitez de notre service pratique de prise en charge et de livraison pour faciliter vos besoins de location voiture Tanger.",
      AboutTangierTitle: "Que savez-vous sur Tanger",
      AboutTangierDescription:
        "Tanger, une ville située dans le nord du Maroc, est connue pour son style de vie décontracté et sa scène culturelle dynamique. Que vous cherchiez à explorer les marchés locaux ou à profiter d'une soirée en ville, Tanger a quelque chose pour tout le monde. De plus, avec un emplacement pratique juste au large de la côte européenne, il est facile d'explorer toutes les destinations méditerranéennes.",
      AboutCarRentalAgencyTitle:
        "À propos de notre agence de location de voiture à Tanger",
      AboutCarRentalAgencyDescription:
        "Nord Promo Car est votre partenaire de confiance pour la location de voiture à Tanger, Maroc. Nous nous engageons à offrir des services de location de voitures fiables et de qualité pour garantir votre satisfaction. Notre flotte diversifiée s'adapte à tous les besoins et budgets, allant des voitures compactes aux modèles de luxe. Notre équipe expérimentée vous aide à choisir le véhicule parfait pour votre séjour à Tanger. Profitez de nos tarifs compétitifs et options flexibles, que ce soit pour des locations à court ou long terme. Contactez-nous aujourd'hui pour une expérience de location de voiture à Tanger sans tracas avec Nord Promo Car.",
      CustomerReviewsTitle: "Que disent les clients à notre sujet ?",
      ContactQuestion:
        "Avez-vous des questions ou avez-vous besoin d'informations supplémentaires ? Contactez-nous !",
      ContactAddress: "Adresse :",
      SendMessageButton: "Envoyer le message",
      SendMessagePlaceholder: "Envoyer le message",
      FirstNamePlaceholder: "Votre Prénom*",
      EmailPlaceholder: "Votre email*",
      MessagePlaceholder: "Votre message*",
      ChooseYourVehicle: "Choisissez votre véhicule",
      RentalTermsAndConditions: "CONDITIONS GÉNÉRALES DE LOCATION",
      CreditCardRequirements: "CARTE DE CRÉDIT - CONDITIONS REQUISES",
      Return: "Retour",
      Depart: "Départ",
      time: "Heure",
      reservationDetails: "Détails de la réservation",
      departureDate: "Date de départ",
      returnDate: "Date de retour",
      vehicle: "Véhicule",
      clientInformation: "Informations Client",
      firstName: "Prénom",
      lastName: "Nom de famille",
      phoneNumber: "Numéro de téléphone",
      gender: "Genre",
      mr: "M.",
      mme: "Mme",
      country: "Pays",
      city: "Ville",
      extrasOptions: "Extras et options",
      additionalDriver: "Conducteur supplémentaire",
      gpsNavigator: "Navigateur GPS",
      childBoosterSeat: "Rehausseur enfant",
      babyChildSeat: "Siège bébé/enfant",
      fullCarInsurance: "Assurance voiture complète",
      tireGlassInsurance: "Assurance Pneus et Verres",
      airportDelivery: "Livraison à l'aéroport",
      unlimitedMileage: "Kilomètrage illimité",
      payment: "Paiement",
      confirm: "Confirmer",
      cashPayment: "Paiement en espèces",
      Edit: "Modifier",
      Franchise: "Franchise",
    },
  },
  es: {
    translation: {
      title: "Reserva tu alquiler de coches en Tánger ahora !",
      location: "Ubicaciones",
      contact: "Contactos",
      home: "Inicio",
      services: "Servicios",
      about: "Acerca de",
      reviews: "Reseñas",
      fuelType: "Tipo de Combustible",
      transmission: "Transmisión",
      manual: "Manual",
      automatic: "Automática",
      doors: "Puertas",
      passengers: "Pasajeros",
      pickUpAgency: "Agencia de partida",
      departureDate: "Fecha de partida",
      returnAgency: "Agencia de retorno",
      returnDate: "Fecha de retorno",
      myAge: "Mi edad",
      tangerCity: "Tánger centro",
      tangerAirport: "Aeropuerto de Tánger",
      tetouanAirport: "Aeropuerto de Tetuán",
      agePlus: "23 y más",
      dateChoice: "Elija una fecha",
      search: "Buscar",
      clients: "Clientes",
      vehicles: "Vehículos",
      bookings: "Reservaciones",
      day: "Día",
      NosServices: "Nuestros servicios",
      NosServicesSubTitle:
        "Entre los mejores servicios de alquiler de coches en Tánger",
      pay: "reservar ahora",
      ChauffeurDrive: "Chofer privado en Tánger",
      ChauffeurDriveDescription:
        "Comienza tu viaje con estilo con un coche con chofer privado en Tánger. Nuestros choferes profesionales te esperan a tu llegada y te transportan a tu destino o de vuelta al aeropuerto. Reserva un chofer privado con Nord Promo Car para una experiencia de alquiler de coches en Tánger lujosa y conveniente.",
      FuelPlans: "Planes de combustible para alquiler de coches en Tánger",
      FuelPlansDescription:
        "Ofrecemos opciones flexibles de planes de combustible para simplificar tu experiencia de alquiler de coches en Tánger. Prepaga por un tanque completo de combustible y devuelve el coche vacío, o elige comprar un tanque completo justo antes de devolver el vehículo. Optimiza tu alquiler con nuestros planes de combustible personalizados.",
      PickupAndDelivery: "Recogida y entrega en Tánger",
      PickupAndDeliveryDescription:
        "Nord Promo Car ofrece un servicio excepcional de recogida y entrega para tus necesidades de alquiler de coches en Tánger. Te recogemos o te entregamos tu vehículo en tu oficina, hogar o taller de reparación. Disfruta de nuestro servicio conveniente de recogida y entrega para facilitar tu experiencia de alquiler de coches en Tánger.",
      AboutTangierTitle: "¿Qué sabes sobre Tánger?",
      AboutTangierDescription:
        "Tánger, una ciudad ubicada en el norte de Marruecos, es conocida por su estilo de vida relajado y su vibrante escena cultural. Ya sea que estés buscando explorar los mercados locales o disfrutar de una noche en la ciudad, Tánger tiene algo para todos. Además, con su ubicación conveniente justo frente a la costa europea, es fácil explorar todos los destinos del Mediterráneo.",
      AboutCarRentalAgencyTitle:
        "Acerca de nuestra agencia de alquiler de coches en Tánger",
      AboutCarRentalAgencyDescription:
        "Nord Promo Car es tu socio de confianza para el alquiler de coches en Tánger, Marruecos. Estamos comprometidos con ofrecer servicios de alquiler de coches fiables y de alta calidad para garantizar tu satisfacción. Nuestra diversa flota se adapta a todas las necesidades y presupuestos, desde coches compactos hasta modelos de lujo. Nuestro equipo experimentado te ayuda a seleccionar el vehículo perfecto para tu estancia en Tánger. Disfruta de nuestras tarifas competitivas y opciones flexibles, ya sea para alquileres a corto o largo plazo. Contáctanos hoy para una experiencia de alquiler de coches en Tánger sin complicaciones con Nord Promo Car.",
      CustomerReviewsTitle: "¿Qué dicen los clientes sobre nosotros?",
      ContactQuestion:
        "¿Tiene alguna pregunta o necesita información adicional? ¡Contáctanos!",
      ContactAddress: "Dirección:",
      SendMessageButton: "Enviar mensaje",
      SendMessagePlaceholder: "Enviar mensaje",
      FirstNamePlaceholder: "Su nombre*",
      EmailPlaceholder: "Su correo electrónico*",
      MessagePlaceholder: "Su mensaje*",
      ChooseYourVehicle: "Elija su vehículo",
      RentalTermsAndConditions: "TÉRMINOS Y CONDICIONES DE ALQUILER",
      CreditCardRequirements: "TARJETA DE CRÉDITO - CONDICIONES REQUERIDAS",
      Return: "Regreso",
      Depart: "Salida",
      time: "Hora",
      reservationDetails: "Detalles de la reserva",
      departureDate: "Fecha de salida",
      returnDate: "Fecha de retorno",
      vehicle: "Vehículo",
      clientInformation: "Información del Cliente",
      firstName: "Nombre",
      lastName: "Apellido",
      phoneNumber: "Número de teléfono",
      gender: "Género",
      mr: "Sr.",
      mme: "Sra.",
      country: "País",
      city: "Ciudad",
      extrasOptions: "Extras y opciones",
      additionalDriver: "Conductor adicional",
      gpsNavigator: "Navegador GPS",
      childBoosterSeat: "Asiento elevador para niños",
      babyChildSeat: "Asiento para bebé/niño",
      fullCarInsurance: "Seguro de coche completo",
      tireGlassInsurance: "Seguro de neumáticos y cristales",
      airportDelivery: "Entrega en el aeropuerto",
      unlimitedMileage: "Kilometraje ilimitado",
      payment: "Pago",
      confirm: "Confirmar",
      cashPayment: "Pago en efectivo",
      Edit: "Editar",
      Franchise: "Franquicia",
    },
  },
};

const init_i18 = ({ resources }) => {
  return i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources,
      //   lng: 'fr', // if you're using a language detector, do not define the lng option
      fallbackLng: "fr",

      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "path",
          "subdomain",
        ],
      },

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};

init_i18({ resources });

const change_lang = () => {
  let lng = i18n.language.split("-")[0].toLowerCase();
  if (lng === "en" || lng === "fr" || lng === "es") {
    i18n.changeLanguage(lng);
  } else {
    i18n.changeLanguage("fr");
  }
};
change_lang();

export { init_i18 };
export default i18n;
