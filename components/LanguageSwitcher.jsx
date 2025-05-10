'use client';
import i18n from 'i18next';

export default function LanguageSwitcher() {
  return (
    <div className="language-switcher">
      <span onClick={() => i18n.changeLanguage('en')}>EN</span>
      <span className="divider">|</span>
      <span onClick={() => i18n.changeLanguage('pt')}>PT</span>
    </div>
  );
}
