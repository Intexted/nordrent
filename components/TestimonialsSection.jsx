"use client";
import Stars from "./Stars";
import { useTranslation } from "react-i18next";
import "@/styles/TestimonialsSection.css";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const reviews = [
    {
      name: "zouhayr aabirouche",
      review:
        "Nord Promo Car offers a wide range of car options to choose from. Whether you need a compact car or an SUV, they have you covered. Great selection ..",
    },
    {
      name: "Mohammed Atfaoui",
      review:
        "J'ai loué plusieurs fois chez Nord Promo Car et je suis toujours satisfait",
    },
    {
      name: "Abdrrahim Chaaibi",
      review:
        "Nord Promo Car propose des tarifs compétitifs et des offres spéciales attractives. J'ai pu économiser beaucoup d'argent lors de mes locations",
    },
    {
      name: "Bobby Lincoln",
      review:
        "Excellent & friendly service, great car, totally reasonable price. Definitely recommend!",
    },
    {
      name: "Fadoua Ikajouen",
      review:
        "Top service 👍car was delivered on time and there was nothing to complain about. Definitely worth repeating in shaa Allah",
    },
    {
      name: "Moha amzigh",
      review:
        "La mejor agencia de coches para alquiler en tanger , servicio muy eficaz y sobre todo mucha tranquilidad y confianza",
    },
  ];

  return (
    <div id="testimonials" className="testimonials-section">
      <h2 className="heading">{t("CustomerReviewsTitle")}</h2>
      <div className="reviews-container">
        {reviews.map((item) => (
          <div key={item.name} className="review-card">
            <div className="review-header">
              <div className="avatar">{item.name[0]}</div>
              <div className="review-details">
                <div>
                  <h3 className="reviewer-name" style={{ margin: 0 }}>
                    {item.name}
                  </h3>
                  <Stars />
                </div>
              </div>
            </div>
            <h3 className="review-text">{item.review}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
