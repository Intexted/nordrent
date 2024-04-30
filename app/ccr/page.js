"use client";

import i18n from "@/utils/i18n";

function CreditCardRequirements() {
  return (
    <div className="om-container">
      {i18n.language === "fr" && (
        <div style={{ padding: "20px" }}>
          <h1>Carte de Crédit - Conditions Requises</h1>
          <p>
            Toute location précommandée sur notre site impose de présenter une
            carte de crédit au nom du conducteur indiquée à la réservation.
          </p>
          <p>
            Prenez garde ! Il est d’usage de désigner toute carte bleue par
            l’expression « carte de crédit ». Cependant, un tel abus de langage
            est erroné.
          </p>
          <h3>Qu’est-ce qu’une carte de crédit ?</h3>
          <p>
            Une carte de crédit est un instrument de paiement permettant de
            régler tout achat à crédit, auprès de l’établissement bancaire
            choisi. Ce mode de paiement se distingue des cartes de débit et
            prépayées qui débitent le montant de l’achat sur le solde disponible
            du compte associé.
          </p>
          <h3>Pourquoi une carte de crédit ?</h3>
          <p>
            Le jour de la prise en charge du véhicule, nous allons vous demander
            de déposer une caution qui servira à couvrir la franchise, en cas de
            dégradation ou vol du véhicule et de ses accessoires. Une simple
            empreinte est réalisée sur votre carte. Une carte de crédit
            internationale constitue un mode de paiement plus sûr qu’une carte
            de débit ou prépayée, car c’est une carte qui dit toujours « oui »,
            même si le compte n’est pas solvable. Ainsi, pour garantir le
            paiement en cas de dommage constaté à la restitution du véhicule,
            nous exigeons une carte de crédit internationale.
          </p>
          <p>
            Notez qu’aucun autre mode de paiement ne sera accepté pour garantir
            votre location de véhicule : chèque, liquide, chèque vacances, carte
            prépayée.
          </p>
          <h3>Comment reconnaître une carte de crédit ?</h3>
          <p>
            Depuis le 9 juin 2016, dans le cadre de l’entrée en vigueur du
            Règlement européen 2015/751, les cartes bancaires nouvellement
            émises doivent mentionner la catégorie à laquelle elles
            appartiennent. Quatre catégories sont définies : carte de crédit,
            carte de débit, carte prépayée ou carte commerciale. Cette catégorie
            est obligatoirement imprimée sur la face visible de la carte
            bancaire. Pensez donc à bien vérifier que votre carte porte la
            mention « CRÉDIT ».
          </p>
          <p>
            Si aucune mention ne figure sur votre carte bancaire, pensez à
            contacter votre banque et demander si cette dernière relève de la
            catégorie « CARTE DE CRÉDIT », selon le classement défini par le
            Règlement européen.
          </p>
          <p>
            Attention ! La gamme de votre carte bancaire ne garantit aucunement
            son appartenance à la catégorie « CARTE DE CRÉDIT ». Ainsi, une
            carte VISA Premier/Infinite peut être une « CARTE DE DÉBIT », au
            même titre qu’une carte VISA Classic. Il en va de même pour les
            cartes de paiement Mastercard (Gold/Platinum).
          </p>
          <h3>J’ai une carte de crédit : que vérifier ?</h3>
          <ul>
            <li>
              Êtes-vous bien le conducteur principal de cette réservation ?
            </li>
            <li>Votre carte permet-elle des paiements à l’international ?</li>
            <li>
              Le plafond autorisé est-il supérieur au montant de la caution
              et/ou franchise précisée sur votre bon de location prépayé ?
            </li>
            <li>
              La date d’expiration de votre carte de crédit internationale
              est-elle, au moins, 30 jours supérieure à la date de restitution
              prévue ?
            </li>
          </ul>
          <p>
            Si votre réponse est « oui » à toutes ces questions, nous vous
            félicitons : votre carte est parfaitement conforme aux conditions
            requises !
          </p>
          <h3>
            Je n’ai pas de carte de crédit internationale avec un plafond
            suffisant : quelles solutions ?
          </h3>
          <p>
            Habituellement, nous proposons des options de rachat de la
            franchise. Avec ce type d’assurance, nul besoin d’une carte de
            crédit. L’intégralité du montant des dommages produits est pris en
            charge. Vous voyagez l’esprit tranquille. Seul hic, le tarif souvent
            dissuasif de ces assurances.
          </p>
          <p>
            Voici quelques astuces afin d’éviter de souscrire aux assurances :
          </p>
          <ul>
            <li>
              Vous pouvez inscrire un accompagnateur disposant d’une carte de
              crédit, en tant que conducteur principal et choisir, ensuite, de
              vous porter conducteur additionnel.
            </li>
            <li>
              Vous pouvez demander à votre banque d’éditer une carte de crédit à
              votre nom à recevoir avant votre départ.
            </li>
          </ul>
          <p>
            Je dispose déjà d’une assurance couvrant les dégâts et le vol du
            véhicule loué…
          </p>
          <p>
            Notez que le dépôt de la caution reste obligatoire, même si vous
            prédisposez d’une assurance de remboursement de la franchise. La
            seule exception au versement de la caution reste la souscription
            d’une assurance de rachat total de la franchise.
          </p>
          <p>
            Attention ! Une assurance de remboursement de la franchise est
            absolument invisible. Elle ne vaut qu’entre vous et le prestataire
            auprès duquel l’assurance a été souscrite. Vous restez donc
            entièrement responsable envers notre société du montant total de la
            franchise, en cas de dommage ou vol, pendant votre location.
          </p>
          <p>Ces cartes ne sont pas acceptées!</p>
        </div>
      )}
      {i18n.language === "es" && (
        <div style={{ padding: "20px" }}>
          <h1>Tarjeta de Crédito - Condiciones Requeridas</h1>
          <p>
            Toda reserva anticipada en nuestro sitio requiere la presentación de
            una tarjeta de crédito a nombre del conductor indicado en la
            reserva.
          </p>
          <p>
            ¡Ten cuidado! Es común referirse a cualquier tarjeta como
            &apos;tarjeta de crédito&apos;s. Sin embargo, ese uso incorrecto del
            lenguaje es erróneo.
          </p>
          <p>Vamos a intentar aclarar esta condición clave.</p>
          <h3>¿Qué es una tarjeta de crédito?</h3>
          <p>
            Una tarjeta de crédito es un medio de pago que permite realizar
            compras a crédito en el establecimiento bancario elegido. Este
            método de pago se diferencia de las tarjetas de débito y las
            tarjetas prepagas, que cargan el monto de la compra en el saldo
            disponible de la cuenta asociada.
          </p>
          <h3>¿Por qué se requiere una tarjeta de crédito?</h3>
          <p>
            El día en que retires el vehículo, te pediremos que dejes un
            depósito como garantía que cubrirá la franquicia en caso de daños o
            robo del vehículo y sus accesorios. Solo se hará un bloqueo temporal
            en tu tarjeta. Una tarjeta de crédito internacional es un método de
            pago más seguro que una tarjeta de débito o prepagada, ya que
            siempre es aceptada, incluso si la cuenta no tiene fondos
            suficientes. Por lo tanto, para garantizar el pago en caso de daños
            al devolver el vehículo, se requiere una tarjeta de crédito
            internacional.
          </p>
          <p>
            Ten en cuenta que no se aceptarán otros métodos de pago para
            garantizar tu alquiler de vehículo, como cheque, efectivo, cheques
            de vacaciones o tarjetas prepagadas.
          </p>
          <h3>¿Cómo reconocer una tarjeta de crédito?</h3>
          <p>
            Desde el 9 de junio de 2016, como parte de la implementación del
            Reglamento Europeo 2015/751, las tarjetas bancarias emitidas
            recientemente deben indicar la categoría a la que pertenecen. Se
            definen cuatro categorías: tarjeta de crédito, tarjeta de débito,
            tarjeta prepagada o tarjeta comercial. Esta categoría debe estar
            impresa obligatoriamente en el frente visible de la tarjeta
            bancaria. Asegúrate de verificar que tu tarjeta tenga la mención
            &apos;sCRÉDITO&apos;s.
          </p>
          <p>
            Si tu tarjeta bancaria no tiene ninguna mención, asegúrate de
            contactar a tu banco y preguntar si se clasifica como &apos;sTARJETA
            DE CRÉDITO&apos;s según la clasificación establecida por el
            Reglamento Europeo.
          </p>
          <p>
            ¡Atención! La marca de tu tarjeta bancaria no garantiza su
            clasificación como &apos;sTARJETA DE CRÉDITO&apos;s. Por ejemplo,
            una tarjeta VISA Premier/Infinite puede ser una &apos;sTARJETA DE
            DÉBITO&apos;s, al igual que una tarjeta VISA Classic. Lo mismo
            ocurre con las tarjetas de pago Mastercard (Gold/Platinium).
          </p>
          <h3>Tengo una tarjeta de crédito, ¿qué debo verificar?</h3>
          <ul>
            <li>¿Eres el conductor principal de esta reserva?</li>
            <li>¿Tu tarjeta permite pagos internacionales?</li>
            <li>
              ¿El límite de crédito es mayor al monto de la garantía y/o
              franquicia especificada en tu contrato de alquiler prepagado?
            </li>
            <li>
              ¿La fecha de vencimiento de tu tarjeta de crédito internacional es
              al menos 30 días posterior a la fecha de devolución prevista?
            </li>
          </ul>
          <p>
            Si tu respuesta es &apos;sí&apos; a todas estas preguntas,
            ¡felicidades! ¡Tu tarjeta cumple completamente con las condiciones
            requeridas!
          </p>
          <h3>
            No tengo una tarjeta de crédito internacional con un límite
            suficiente: ¿cuáles son las soluciones?
          </h3>
          <p>
            Por lo general, ofrecemos opciones de recompra de franquicia. Con
            este tipo de seguro, no se necesita una tarjeta de crédito. El monto
            total de los daños está cubierto. Puedes viajar con tranquilidad. La
            única desventaja es que estos seguros a menudo tienen una tarifa
            disuasiva.
          </p>
          <p>Aquí hay algunos consejos para evitar contratar seguros:</p>
          <ul>
            <li>
              Puedes registrar a una persona acompañante que tenga una tarjeta
              de crédito como conductor principal y luego elegir agregarte como
              conductor adicional.
            </li>
            <li>
              Puedes pedirle a tu banco que emita una tarjeta de crédito a tu
              nombre para recibirla antes de tu partida.
            </li>
          </ul>
          <p>
            Ya tengo un seguro que cubre los daños y el robo del vehículo
            alquilado...
          </p>
          <p>
            Ten en cuenta que el depósito de garantía sigue siendo obligatorio,
            incluso si tienes un seguro de reembolso de franquicia. La única
            excepción al depósito es la suscripción a un seguro total de
            recompra de franquicia.
          </p>
          <p>
            ¡Atención! El seguro de reembolso de franquicia es completamente
            invisible. Solo es válido entre tú y el proveedor con el que se
            contrató el seguro. Por lo tanto, sigues siendo totalmente
            responsable ante nuestra empresa por el monto total de la franquicia
            en caso de daños o robo durante tu alquiler.
          </p>
          <p>¡Estas tarjetas no son aceptadas!</p>
        </div>
      )}
      {i18n.language === "en" && (
        <div style={{ padding: "20px" }}>
          <p>
            Any advance reservation on our website requires the presentation of
            a credit card in the name of the driver indicated in the
            reservation.
          </p>
          <p>
            Be careful! It is common to refer to any card as a &apos;credit
            card.&apos; However, that incorrect use of language is wrong.
          </p>
          <p>Let&apos;s try to clarify this key condition.</p>
          <h2>What is a credit card?</h2>
          <p>
            A credit card is a payment method that allows for credit purchases
            at the chosen bank establishment. This payment method differs from
            debit cards and prepaid cards, which deduct the purchase amount from
            the available balance of the associated account.
          </p>
          <h2>Why is a credit card required?</h2>
          <p>
            On the day you pick up the vehicle, we will ask you to leave a
            deposit as a guarantee that will cover the deductible in case of
            damage or theft of the vehicle and its accessories. Only a temporary
            hold will be placed on your card. An international credit card is a
            safer payment method than a debit or prepaid card, as it is always
            accepted, even if the account does not have sufficient funds.
            Therefore, to ensure payment in case of damage upon returning the
            vehicle, an international credit card is required.
          </p>
          <p>
            Please note that other payment methods to guarantee your car rental,
            such as checks, cash, vacation vouchers, or prepaid cards, will not
            be accepted.
          </p>
          <h2>How to recognize a credit card?</h2>
          <p>
            Since June 9, 2016, as part of the implementation of European
            Regulation 2015/751, recently issued bank cards must indicate the
            category to which they belong. There are four defined categories:
            credit card, debit card, prepaid card, or commercial card. This
            category must be printed obligatorily on the visible front of the
            bank card. Make sure to check that your card bears the mention
            &apos;CREDIT.&apos;
          </p>
          <p>
            If your bank card does not have any mention, make sure to contact
            your bank and inquire if it is classified as a &apos;CREDIT
            CARD&apos; according to the classification established by the
            European Regulation.
          </p>
          <p>
            Attention! The brand of your bank card does not guarantee its
            classification as a &apos;CREDIT CARD.&apos; For example, a VISA
            Premier/Infinite card can be a &apos;DEBIT CARD,&apos; just like a
            VISA Classic card. The same applies to Mastercard payment cards
            (Gold/Platinum).
          </p>
          <h2>I have a credit card, what should I verify?</h2>
          <ul>
            <li>a) Are you the main driver of this reservation?</li>
            <li>b) Does your card allow for international payments?</li>
            <li>
              c) Is the credit limit higher than the amount of the guarantee
              and/or deductible specified in your prepaid rental agreement?
            </li>
            <li>
              d) Is the expiration date of your international credit card at
              least 30 days after the scheduled return date?
            </li>
          </ul>

          <p>
            If your answer is &apos;yes&apos; to all these questions,
            congratulations! Your card fully complies with the required
            conditions!
          </p>
          <h3>
            I don&apos;t have an international credit card with a sufficient
            limit: what are the solutions?
          </h3>
          <p>
            Usually, we offer franchise buyback options. With this type of
            insurance, there is no need for a credit card. The full amount of
            damages is covered. You can travel with peace of mind. The only
            downside is that these insurances often have a dissuasive rate.
          </p>
          <p>Here are some tips to avoid subscribing to insurances:</p>
          <ul>
            <li>
              You can register an accompanying person who has a credit card as
              the main driver and then choose to add yourself as an additional
              driver.
            </li>
            <li>
              You can ask your bank to issue a credit card in your name to
              receive before your departure.
            </li>
          </ul>
          <p>
            I already have insurance that covers damages and theft of the rented
            vehicle...
          </p>
          <p>
            Note that the deposit for the security remains mandatory, even if
            you have reimbursement insurance for the franchise. The only
            exception to the deposit is the subscription to a total franchise
            buyback insurance.
          </p>
          <p>
            Attention! Reimbursement insurance for the franchise is absolutely
            invisible. It is only valid between you and the provider with whom
            the insurance was taken out. Therefore, you remain fully responsible
            to our company for the total amount of the franchise in case of
            damage or theft during your rental.
          </p>
          <p>These cards are not accepted!</p>
        </div>
      )}
    </div>
  );
}

export default CreditCardRequirements;
