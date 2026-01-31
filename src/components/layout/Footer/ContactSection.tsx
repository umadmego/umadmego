
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className='flex flex-col text-white'>
      <h3 className="font-bold text-lg mb-6">Fale Conosco</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <FaMapMarkerAlt className="text-secondary mt-1 mr-4 flex-shrink-0" />
          <span>Av. 208, 930, Setor Leste Universitário, Goiânia - GO</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="text-secondary mr-4" />
          <a href="mailto:marketing.umadmego@gmail.com" className="hover:text-secondary">marketing.umadmego@gmail.com</a>
        </li>
        <li className="flex items-center">
          <FaPhone className="text-secondary mr-4" />
          <a href="tel:+5562999999999" className="hover:text-secondary">(62) 9 9999-9999</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactSection;
