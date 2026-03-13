import styles from './Header.module.css';
import { useState } from 'react';

const Header = ({ pathname: propPathname }) => {
  const pathname = propPathname || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Decodificamos la URL para que %C3%B3 sea ó, y quitamos el slash final si lo hay para que compare igual siempre
  const currentPath = decodeURIComponent(pathname).replace(/\/$/, '') || '/';
  
  const links = [
    { href: "/", label: "Suiza Tropical" },
    { href: "/información", label: "Información" },
  ];

  const redes = [
    {
      href: "https://www.instagram.com/suizatropical/", 
      image: "/instagram.webp"
    },
    {
      href: "https://api.whatsapp.com/send?phone=584125796895&text=Quiero%20más%20info", 
      image: "/whatsapp.webp"
    }
  ]
  return (
    <nav className={styles.container}>
      <div className={styles.containerLogo}>
          <img src="/logo.webp" alt="Logo Suiza Tropical" className={styles.logo} />
      </div>
      
      <ul className={`${styles.containerMenu} ${isMenuOpen ? styles.mobileMenu : ''}`}>
        {links.map((link) => (
          <li key={link.label} className={`${styles.btnMenu} ${link.href === currentPath ? styles.linkMenuActive : ''}`}>
            <a 
              href={link.href} 
              className={styles.linkMenu}
              target={link.label === "Instagram" ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
        {
          isMenuOpen && (
            <li className={`${styles.mobileRedes}`}>
              {redes.map((red) => (
                <img 
                  key={red.href}
                  onClick={() => window.open(red.href, '_blank')}
                  src={red.image} 
                  alt="Red Social" 
                  className={styles.redes} 
                />
              ))}
            </li>
          )
        }
      </ul>

      <div className={`${styles.containerRedes}`}>
          {redes.map((red) => (
            <img 
              key={red.href}
              onClick={() => window.open(red.href, '_blank')}
              src={red.image} 
              alt="Red Social" 
              className={styles.redes} 
            />
          ))}
      </div>

      <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d32727">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <path d="M20 7L4 7" stroke={isMenuOpen ? "#2e7d32" : "#d32727"} stroke-width="1.5" stroke-linecap="round"></path> 
            <path d="M20 12L4 12" stroke={isMenuOpen ? "#2e7d32" : "#d32727"} stroke-width="1.5" stroke-linecap="round"></path> 
            <path d="M20 17L4 17" stroke={isMenuOpen ? "#2e7d32" : "#d32727"} stroke-width="1.5" stroke-linecap="round"></path> 
          </g>
        </svg>
      </div>
    </nav>
  );
};

export default Header;