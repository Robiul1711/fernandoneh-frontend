import React, { useEffect, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

const setGoogleTranslateCookie = (langCode) => {
  const cookieName = "googtrans";
  const cookieValue = `/en/${langCode}`;
  const domain = window.location.hostname;
  
  document.cookie = `${cookieName}=${cookieValue}; path=/; domain=${domain}`;
  
  const domainParts = domain.split(".");
  if (domainParts.length > 1) {
    const rootDomain = "." + domainParts.slice(-2).join(".");
    document.cookie = `${cookieName}=${cookieValue}; path=/; domain=${rootDomain}`;
  }

  document.cookie = `${cookieName}=${cookieValue}; path=/`;
};

const LanguageArea = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  useEffect(() => {
    // Inject style to prevent Google Translate from adding top margin/gap
    const style = document.createElement("style");
    style.innerHTML = `
      body { top: 0 !important; }
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      .goog-te-gadget { display: none !important; }
      #goog-gt-tt { display: none !important; }
      .goog-tooltip { display: none !important; }
      .goog-tooltip:hover { display: none !important; }
      .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
      iframe.goog-te-menu-frame { display: none !important; }
    `;
    document.head.appendChild(style);

    if (window.googleTranslateElementInit) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,pt",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    document.documentElement.lang = selectedLanguage;
    setGoogleTranslateCookie(selectedLanguage);

    const intervalId = setInterval(() => {
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement) {
        selectElement.value = selectedLanguage;
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [selectedLanguage]);

  const changeLanguage = (langCode) => {
    if (selectedLanguage !== langCode) {
      setSelectedLanguage(langCode);
      window.location.reload();
    }
  };

  return (
    <div className="relative inline-block">
      <div id="google_translate_element" style={{ display: "none" }} />

      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          className="appearance-none bg-[#1A1A1A] border border-transparent hover:border-[#333333] rounded-xl px-4 py-2 pl-10 pr-10 text-white text-xs md:text-sm font-medium cursor-pointer transition-all focus:outline-none hover:bg-[#262626] shadow-lg"
        >
          <option value="en">English</option>
          <option value="pt">Brazil (PT)</option>
        </select>
        
        {/* Icons Overlay */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Globe size={18} className="text-[#A1A1A1]" />
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown size={14} className="text-[#A1A1A1]" />
        </div>
      </div>
    </div>
  );
};

export default LanguageArea;

