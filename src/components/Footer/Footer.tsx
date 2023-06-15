import React from 'react';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="main-container flex items-center justify-center"></div>
    </footer>
  );
};
