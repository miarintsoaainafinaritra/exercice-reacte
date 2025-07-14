import React, { useState, useEffect } from 'react';
import { 
  FaAngleLeft, FaAngleRight, FaChevronLeft, FaChevronRight,
  FaGraduationCap, FaUsers, FaMedal,
  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube
} from 'react-icons/fa';
import './App.css';
import logo from './images/hei-logo.png';
import slider1 from './images/logo10.jpg';
import slider2 from './images/logo9.jpg';
import slider3 from './images/logo11.jpg';
import aboutImg from './images/test.webp';
import team1 from './images/logo3.jpg';
import team2 from './images/logo15.jpg';
import team3 from './images/logo5.jpg';
import team4 from './images/logo14.jpg';
import team5 from './images/logo8.jpg';
import team6 from './images/logo7.jpg';
import team7 from './images/logo6.jpg';
import domain1 from './images/mage3.jpg';
import domain2 from './images/6qi2uomj.png';
import domain3 from './images/szri5kdx.png';
import careersImg from './images/logo12.jpg';
import partner1 from './images/33oo4emc.png';
import partner2 from './images/mave.jpg';
import partner3 from './images/sl54t8nf.png';
import partner4 from './images/964pfgvo.png';
import partner5 from './images/OIP.webp';
import partner6 from './images/ako7gy37.png';
import partner7 from './images/1200x630wa.png';
import partner8 from './images/uxs22sac.png';
import partner9 from './images/wcggi34c.png';
import tech1 from './images/we.jpg';
import tech2 from './images/dete.jpg';
import tech3 from './images/javascriot.jpg';
import tech4 from './images/mage5.jpg';
import tech5 from './images/mage8.jpg';
import tech6 from './images/rock.jpg';
import tech7 from './images/phpt.jpg';
import tech8 from './images/koc.jpg';
import tech9 from './images/mage2.jpg'; 
import tech10 from './images/alt.jpg';
import tech11 from './images/as.jpg';
import programme1 from './images/logo16.jpg';
import programme2 from './images/client.jpg';
import programme3 from './images/port.jpg';
import liste1 from './images/Images1.png';
import liste2 from './images/Images2.png';
import liste3 from './images/Images3.png';
import liste4 from './images/Images4.png';
import photo1 from './images/liste.jpg';

function App() {
  // State pour le slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: slider1,
      title: "Haute École d'Informatique",
      text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants."
    },
    {
      image: slider2,
      title: "Haute École d'Informatique",
      text: "« L'éducation est l'arme la plus puissante pour changer le monde » selon Nelson Mandela. « L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C'est notre mission."
    },
    {
      image: slider3,
      title: "Haute École d'Informatique",
      text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants."
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Données de l'équipe
  const teamMembers = [
    {
      image: team1,
      name: "Mirado RAFENOMAHENINTSOA",
      role: "Data and Business Intelligence Specialist 5+"
    },
    {
      image: team2,
      name: "Julien RAJERISON",
      role: "Lead Développeur | Fondateur de l'association Techzara Madagascar"
    },
    {
      image: team3,
      name: "Ryan ANDRIAMAHERY",
      role: "Développeur back end | Cofondateur et Directeur des opérations de HEI"
    },
    {
      image: team4,
      name: "Jean Aimer Maxa",
      role: "Responsable technique cybersécurité chez CES France Continental (Toulouse-France)"
    },
    {
      image: team5,
      name: "Yannick Raharijaona",
      role: "Responsable technique ML chez Rocket Science (Ottawa-Canada)"
    },
    {
      image: team6,
      name: "Dr Lou Maurica",
      role: "Docteur-Ingénieur en informatique | Fondateur et Directeur de HEI"
    },
    {
      image: team7,
      name: "Dre Tahina Ralitera",
      role: "Docteur-Ingénieur, CNRS France | Prix L'Oréal-UNESCO pour les femmes en la science (2019)"
    }
  ];

  // Données des domaines
  const domains = [
    {
      image: domain1,
      title: "Cloud et cybersécurité",
      description: "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces."
    },
    {
      image: domain2,
      title: "Intelligence artificielle",
      description: "Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures semi-autonomes vous fascinent ? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de l'intelligence artificielle lors de vos cours chez HEI."
    },
    {
      image: domain3,
      title: "Ingénierie logicielle",
      description: "Développez des applications robustes et performantes. Apprenez à concevoir, développer et maintenir des logiciels de qualité professionnelle pour répondre aux besoins des entreprises et des utilisateurs."
    }
  ];

  // Données des partenaires avec liens
  const partners = [
    { 
      image: partner1, 
      name: "Passerelles Numériques", 
      url: "https://www.passerellesnumeriques.org/fr/" 
    },
    { 
      image: partner2, 
      name: "Nexta", 
      url: "http://www.nexta.mg/" 
    },
    { 
      image: partner3, 
      name: "Yooz", 
      url: "https://www.getyooz.com/fr/" 
    },
    { 
      image: partner4, 
      name: "ETech Consulting", 
      url: "https://etechconsulting-mg.com/" 
    },
    { 
      image: partner5, 
      name: "EMIT", 
      url: "https://emit.mg/accueil" 
    },
    { 
      image: partner6, 
      name: "Numer Tech", 
      url: "https://www.numer.tech/" 
    },
    { 
      image: partner7, 
      name: "Birdia", 
      url: "https://www.birdia.fr/" 
    },
    { 
      image: partner8, 
      name: "Your IT Factory", 
      url: "https://youritfactory.com/" 
    },
    { 
      image: partner9, 
      name: "Kanteco", 
      url: "https://kanteco.com/home" 
    }
  ];

  // Technologies utilisées
  const technologies = [
    { image: tech1, name: "" },
    { image: tech2, name: "" },
    { image: tech3, name: "" },
    { image: tech4, name: "" },
    { image: tech5, name: "" },
    { image: tech6, name: "" },
    { image: tech7, name: "" },
    { image: tech8, name: "" },
    { image: tech9, name: "" },
    { image: tech10, name: "" },
    { image: tech11, name: "" }
  ];
  const programmes = [
    { image: programme1, name: " " },
    { image: programme2, name: " " },
    { image: programme3, name: " " },
  ];
  const listes = [
    { image: liste1, name: " " },
    { image: liste2, name: " " },
    { image: liste3, name: " " },
    { image: liste4, name: " " },
  ];
  const photos = [
    { image: photo1, name: " " },
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header" role="banner">
        <div className="container">
          <div className="logo">
            <a href="/" aria-label="Retour à l'accueil">
              <img src={logo} alt="HEI | Haute École d'Informatique de Madagascar" />
            </a>
          </div>
          
          <nav className="main-nav" aria-label="Navigation principale">
            <ul>
              <li className="active"><a href="/">Accueil</a></li>
              <li><a href="/actualites">Actualités</a></li>
              <li><a href="/bourse-detudes">Bourse d'études</a></li>
              <li><a href="/inscription">Inscription</a></li>
            </ul>
          </nav>
          
          <a href="https://admin.hei.school/" className="btn intranet-btn" aria-label="Accès intranet">
            INTRANET
          </a>
        </div>
      </header>

      <main>
        {/* Hero Slider */}
        <section className="hero-slider" aria-label="Diaporama principal">
          <div className="slider-container">
            <div className="slider">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{backgroundImage: `url(${slide.image})`}}
                  aria-hidden={index !== currentSlide}
                >
                  <div className="slide-content">
                    <h1>{slide.title}</h1>
                    <br /><br />
                    <p>{slide.text}</p>
                    <br /><br />
                    <div className="slide-buttons">
                      <a href="/inscription" className="btn">Inscrivez-vous ici</a>
                      <a href="https://admin.hei.school/calendar" className="btn">Emploi du temps</a>
                      <a href="https://drive.google.com/file/d/1FdooEeAKPO5ucNKXMnyEBZ3RTTE80q7e/view?usp=sharing" className="btn">Programme pédagogique</a>
                    </div>
                    <br /><br /><br />
                    <p className="habilitation">Habilitation MESupRES, suivant l'arrêté n°31309/2023</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="slider-nav prev" onClick={prevSlide} aria-label="Diapositive précédente">
              <FaAngleLeft />
            </button>
            <button className="slider-nav next" onClick={nextSlide} aria-label="Diapositive suivante">
              <FaAngleRight />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-image">
              <img src={aboutImg} alt="Étudiants en informatique" loading="lazy" />
            </div>
            
            <div className="about-content">
              <h2 id="about-heading">À propos de <span>nous</span></h2>
              
              <div className="about-feature">
                <div className="feature-icon">
                  <FaGraduationCap aria-hidden="true" />
                  <h3>+3 ans</h3>
                </div>
                <p>Depuis 3 ans, nous formons ceux qui décodent le futur aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et de passionnés de l'informatique de Madagascar et du monde entier.</p>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon">
                  <FaUsers aria-hidden="true" />
                  <h3>+250 étudiants</h3>
                </div>
                <p>Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HEI".</p>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon">
                  <FaMedal aria-hidden="true" />
                  <h3>Notre mission</h3>
                </div>
                <p>Notre mission est d'amener des jeunes malgaches vers des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section" aria-labelledby="team-heading">
          <div className="container">
            <h2 id="team-heading">L'équipe pédagogique</h2>
            <p>Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique, de la cybersécurité, de l'intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l'informatique et sont engagés vers l'excellence.</p>
            
            <div className="team-carousel">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
              
              <button className="carousel-nav prev" aria-label="Membre précédent">
                <FaChevronLeft />
              </button>
              <button className="carousel-nav next" aria-label="Membre suivant">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="careers-section" aria-labelledby="careers-heading">
          <div className="container">
            <div className="careers-content">
              <h2 id="careers-heading">Quelques débouchés</h2>
              <p>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur...</p>
              <p>Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité...</p>
            </div>
            
            <div className="careers-image">
              <img src={careersImg} alt="Étudiants en cours d'informatique" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="domains-section" aria-labelledby="domains-heading">
          <div className="container">
            <h2 id="domains-heading">Domaines</h2>
            <p>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :</p>
            
            <div className="domains-grid">
              {domains.map((domain, index) => (
                <div key={index} className="domain-card">
                  <img src={domain.image} alt={domain.title} loading="lazy" />
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
          <br /><br /><br />
          <div className='repport'>
            <div className="admission">
              <h1>Admission</h1>
            </div>
            <div className="admission-content">
              <p>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :</p>
              <p>une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.</p>
            </div>
            <div className='admission-nombres'>
              <h5 className='good'>01 <p className='colore'>Dépôt de dossiers : pour les bacheliers de toutes séries sans limite d’âge</p></h5>
              <h5>02 <p className='colore'>Test de niveau : composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p></h5>
              <h5>03 <p className='colore'>Inscription définitive (si test réussi)</p></h5>
            </div>
            <br /><br /><br />
            <div className="slide-buttons">
              <a href="/inscription" className="btn">Inscrivez-vous ici</a>
              <a href="https://drive.google.com/drive/folders/1saqFZ9ZWkQ-QHZheOvY8nAzIBRy0MkA0" className='btn'>Resultats concours</a>
            </div>
          </div>   
          <br /><br /><br /><br /><br /><br /><br />
          <div className="listes-section">
            {photos.map((photos, index) => (
              <div key={index} className="listes-card">
                <img src={photos.image} alt={photos.name} loading="lazy" />
                <h3>{photos.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <div className="carte">
          <br /><br />
          <h2 className='carte-rouge'>Le programme pédagogique</h2>  
          <div className="carte-bleu">
            <p>Suivant le système LMD, jusqu’au Master, notre formation</p>
            <p> repose sur un programme</p>
            <p>pédagogique conçu en adéquation</p>
            <p>avec les attentes du marché.</p>
            <p>pour s'adapter aux évolutions</p>
            <p> Il est mis à jour régulièrement </p>
            <p>  La formation est sanctionnée </p>
            <p>par un diplôme de Licence et de Master</p>
            <p> en Informatique reconnu par le MESupRes de Madagascar.</p>
            <br /><br /><br />
            <div className="clique-buttons">
              <a href="https://drive.google.com/file/d/1FdooEeAKPO5ucNKXMnyEBZ3RTTE80q7e/view?usp=sharing" className="clique">Notre Programme</a>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="programmes-section">
              {listes.map((listes, index) => (
                <div key={index} className="programmes-card">
                  <img src={listes.image} alt={listes.name} loading="lazy" />
                  <h3>{listes.name}</h3>
                </div>
              ))}
            </div>
            <br /><br /><br />
          </div> 
          <br /><br /><br />
          <div className="programmes-section">
            {programmes.map((programmes, index) => (
              <div key={index} className="programmes-card">
                <img src={programmes.image} alt={programmes.name} loading="lazy" />
                <h3>{programmes.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        {/* Technologies Section */}
        <section className="technologies-section" aria-labelledby="technologies-heading">
          <div className="container">
            <div className="emmet">
              <br /><br /><br />
              
              <h2 className="technologies-heading">Technologies utilisées</h2>
              <p>Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
              <br /><br /><br />
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="technology-card">
                    <img src={tech.image} alt={tech.name} loading="lazy" />
                    <h3>{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section" aria-labelledby="partners-heading">
          <div className="container">
            <h2 className="partners-heading">Nos partenaires</h2>
            <p>
              L'employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique,
              la qualité de notre corps enseignant et la collaboration avec nos entreprises partenaires.
            </p>
            
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-logo">
            <img src={logo} alt="HEI | Haute École d'Informatique de Madagascar" loading="lazy" />
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <h4>Formation habilitée par</h4>
              <p>Lot II M 47 Ter A, Antananarivo</p>
              <p>l'État suivant le système</p>
              <p>LMD</p>
              <br />
              <p>Habilitation MESupRes</p>
              <p>n°31309/2023</p>
            </div>
            <div className="links-column">
              <h2>Adresse</h2>
              <p>II J 161 R Ambodivoanjo</p>
              <br />
              <p>Ivandry Antananarivo</p>
              <br />
              <p>101, Madagascar</p>
            </div>
            <div className="redirect-column">
              <h2>Navigation</h2>
              <a href="/">Accueil</a>
              <br />
              <a href="/actualites">Actualités</a>
              <br />
              <a href="/bourse-detudes">Bourse d'études</a>
              <br />
              <a href="/inscription">Inscription</a>
            </div>
            
            <div className="links-column">
              <h2>Médias sociaux</h2>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>© HEI Madagascar </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;