import React from 'react';
import { Variants } from '../../types';
import './VariantCard.css'

interface VariantCardProps {
  variant: Variants
}

const VariantCard: React.FC<VariantCardProps> = ({ variant }) => {
  const { 
    name, 
    total_price,
    display_properties, 
    cancellation_timeline, 
    additional_info 
  } = variant;

  return (
    <div className="variant-card">
      {/* Variant Name */}
      <h3 className="variant-name">{name}</h3>

      {/* Pricing Section */}
      <div className="pricing">
        <p className="discounted-price">
          <strong>{total_price.discounted_price.toFixed(2)} {total_price.currency}</strong>
        </p>
        {total_price.total_price > total_price.discounted_price && (
          <p className="original-price">
            <s>{total_price.total_price.toFixed(2)} {total_price.currency}</s>
          </p>
        )}
        {total_price.promo_list.length > 0 && (
          <p className="promo">
            {total_price.promo_list[0].offer_title}: {total_price.promo_list[0].offer_description}
          </p>
        )}
      </div>

      {/* Display Properties */}
      <ul className="room-details">
        {display_properties.map((property) => (
          <li key={property.name}>
            <span className="property-name">{property.display_name}: </span>
            <span className="property-value">{property.value}</span>
          </li>
        ))}
      </ul>

      {/* Cancellation Policy */}
      <div className="cancellation-policy">
        <h4>Cancellation Policy</h4>
        {cancellation_timeline.cancellation_rules.map((rule, index) => (
          <p key={index}>
            <strong>{rule.title}</strong> - {rule.sub_title}
          </p>
        ))}
      </div>

      {/* Additional Notes */}
      <div className="additional-info">
        <h4>Additional Info</h4>
        <p>{additional_info.short_tariff_notes}</p>
      </div>
    </div>
  );
};

export default VariantCard;
