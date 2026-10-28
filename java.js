/**
 * Aseart Nettoyer - Script Interactivo Vanilla JS
 * Funcionalidades: Menú móvil, Animación en Scroll, Traducción de contenido y Manejo de Formulario.
 */

document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            'nav.home': 'Inicio',
            'nav.services': 'Servicios',
            'nav.testimonials': 'Testimonios',
            'nav.contact': 'Contacto',
            'header.callNow': 'Llamar Ahora',
            'hero.badge': 'Garantía de Pulcritud & Confianza',
            'hero.subtitle': 'Transformamos su hogar en un espacio impecable, seguro y reluciente. Ofrecemos servicios de limpieza profesional adaptados al cuidado y tranquilidad que su familia y seres queridos merecen.',
            'hero.callButton': 'Llamar directo: #1 263 388 4647',
            'hero.servicesButton': 'Ver Servicios',
            'hero.feature1': 'Personal Verificado',
            'hero.feature2': 'Productos No Tóxicos',
            'hero.feature3': 'Atención Personalizada',
            'hero.cardTitle': '100% Satisfacción',
            'hero.cardText': 'Hogares relucientes todos los días',
            'services.subtitle': 'Nuestra Especialidad',
            'services.title': 'Servicios Integrales de Limpieza',
            'services.description': 'Nos encargamos de cada rincón de su casa privada para que usted disfrute de su tiempo con total comodidad y serenidad.',
            'service1.tag': 'Polvo & Desinfección',
            'service1.title': 'Limpieza de Polvo y Superficies',
            'service1.text': 'Eliminación meticulosa de polvo en muebles, repisas, marcos, electrodomésticos y zonas de difícil acceso con paños de microfibra de alta eficiencia.',
            'service2.tag': 'Higienización Total',
            'service2.title': 'Aseo Profundo de Baños',
            'service2.text': 'Desinfección de azulejos, inodoros, lavamanos, duchas y espejos. Eliminación de sarro, humedad y bacterias con insumos seguros de aroma fresco.',
            'service3.tag': 'Cocina Impecable',
            'service3.title': 'Limpieza Integral de Cocina',
            'service3.text': 'Limpieza exterior e interior de estufas, campanas, encimeras, fregaderos y gabinetes. Desengrase efectivo para un ambiente higiénico.',
            'service4.tag': 'Dormitorios',
            'service4.title': 'Tendido de Camas & Recámaras',
            'service4.text': 'Cambio de lencería de cama, tendido profesional, orden visual, sacudido de colchones y aireación completa para un descanso óptimo.',
            'service5.tag': 'Brillo Especial',
            'service5.title': 'Aspirado y Trapeado de Pisos',
            'service5.text': 'Tratamiento especializado para pisos de madera, cerámica, mármol o alfombras. Aspirado profundo y trapeado con acabados que resaltan el brillo.',
            'service6.tag': 'Mantenimiento Global',
            'service6.title': 'Aseo General y Limpieza Profunda',
            'service6.text': 'Jornadas periódicas o eventuales adaptadas a sus necesidades específicas. Mantenimiento completo de salas, comedores y pasillos.',
            'testimonials.subtitle': 'Reputación y Confianza',
            'testimonials.title': 'Lo que Opinan Nuestros Clientes',
            'testimonials.description': 'La tranquilidad de nuestros clientes es nuestro mejor respaldo. Conozca las experiencias de familias que confían en Aseart Nettoyer.',
            'testimonial1.text': '“Como persona mayor, encontrar un servicio de limpieza puntual, educado y meticuloso era fundamental para mí. En Aseart Nettoyer dejan mis baños y cocina relucientes cada semana.”',
            'testimonial1.role': 'Ama de casa • 64 años',
            'testimonial2.text': '“Con el trabajo y los niños, mantener la casa limpia era un reto constante. El equipo llega con puntualidad, limpia el polvo de cada rincón y deja las camas tendidas como de hotel.”',
            'testimonial2.role': 'Padre de familia',
            'testimonial3.text': '“Solicitamos la limpieza profunda antes de una reunión familiar y el resultado superó nuestras expectativas. El piso quedó con un brillo impecable. El número directo ayuda mucho.”',
            'testimonial3.role': 'Residente particular',
            'contact.badge': 'Atención Directa e Inmediata',
            'contact.title': '¿Listo para disfrutar de un hogar reluciente?',
            'contact.description': 'Estamos a una sola llamada de distancia. Comuníquese directamente con nuestro equipo para cotizaciones sin compromiso o para programar su servicio.',
            'contact.callTitle': 'Número de Atención Telefónica',
            'contact.callNote': 'Toca para realizar la llamada directo desde tu dispositivo',
            'contact.hoursTitle': 'Horarios Flexibles',
            'contact.hoursText': 'Lunes a Sábado de 7:00 AM a 7:00 PM',
            'contact.coverageTitle': 'Zona de Cobertura',
            'contact.coverageText': 'Servicio exclusivo a casas y residencias privadas',
            'form.headerTitle': 'Solicitar Presupuesto o Información',
            'form.headerText': 'Déjenos un mensaje y le responderemos enseguida.',
            'form.nameLabel': 'Nombre Completo *',
            'form.namePlaceholder': 'Ej. María Fernández',
            'form.phoneLabel': 'Teléfono de Contacto *',
            'form.phonePlaceholder': 'Ej. #1 263 388 4647',
            'form.serviceLabel': 'Tipo de Servicio Requerido',
            'form.optionGeneral': 'Aseo General de Casa',
            'form.optionDeep': 'Limpieza Profunda Detallada',
            'form.optionDust': 'Polvo y Muebles Delicados',
            'form.optionBathroomKitchen': 'Desinfección de Baños y Cocina',
            'form.optionOther': 'Otro Servicio Especial',
            'form.messageLabel': 'Detalles o Comentarios',
            'form.messagePlaceholder': 'Indíquenos el número de recámaras o requerimientos específicos...',
            'form.submit': 'Enviar Solicitud',
            'footer.brandDesc': 'Especialistas en la limpieza y cuidado meticuloso de casas privadas. Calidad, discreción y la máxima pulcritud en cada visita.',
            'footer.trust': 'Servicio Seguro & Asegurado',
            'footer.quickNav': 'Navegación Rápida',
            'footer.home': 'Inicio',
            'footer.services': 'Servicios de Limpieza',
            'footer.testimonials': 'Opiniones de Clientes',
            'footer.contact': 'Contactar Ahora',
            'footer.direct': 'Atención Directa',
            'footer.callHint': '¿Prefieres llamar por teléfono?',
            'footer.availability': '● Respuesta inmediata en horario hábil',
            'footer.rights': '© 2026 Aseart Nettoyer. Todos los derechos reservados.',
            'floating.call': 'Llamar Directo',
            'form.requiredFields': 'Por favor, complete los campos obligatorios para enviar su solicitud.',
            'form.submitting': '¡Enviando...!',
            'form.successBefore': '¡Muchas gracias,',
            'form.successAfter': 'Hemos recibido su mensaje. Nos pondremos en contacto al número',
            'form.successEnd': 'a la brevedad.',
            'lang.toggle': 'Cambiar idioma',
            'lang.es': 'Español',
            'lang.en': 'English',
            'lang.fr': 'Français'
        },
        en: {
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.testimonials': 'Testimonials',
            'nav.contact': 'Contact',
            'header.callNow': 'Call Now',
            'hero.badge': 'Cleanliness & Trust Guarantee',
            'hero.subtitle': 'We turn your home into a spotless, safe, and shining space. We offer professional cleaning services adapted to the care and peace of mind your family deserves.',
            'hero.callButton': 'Call directly: #1 263 388 4647',
            'hero.servicesButton': 'View Services',
            'hero.feature1': 'Verified Staff',
            'hero.feature2': 'Non-Toxic Products',
            'hero.feature3': 'Personalized Care',
            'hero.cardTitle': '100% Satisfaction',
            'hero.cardText': 'Sparkling homes every day',
            'services.subtitle': 'Our Specialty',
            'services.title': 'Complete Cleaning Services',
            'services.description': 'We take care of every corner of your private home so you can enjoy your time with total comfort and calm.',
            'service1.tag': 'Dust & Disinfection',
            'service1.title': 'Dust and Surface Cleaning',
            'service1.text': 'Meticulous dust removal from furniture, shelves, frames, appliances, and hard-to-reach areas with high-efficiency microfiber cloths.',
            'service2.tag': 'Full Sanitization',
            'service2.title': 'Deep Bathroom Cleaning',
            'service2.text': 'Disinfection of tiles, toilets, sinks, showers, and mirrors. Removal of limescale, moisture, and bacteria with safe aromatic products.',
            'service3.tag': 'Immaculate Kitchen',
            'service3.title': 'Complete Kitchen Cleaning',
            'service3.text': 'Exterior and interior cleaning of stoves, hoods, countertops, sinks, and cabinets. Effective degreasing for a hygienic environment.',
            'service4.tag': 'Bedrooms',
            'service4.title': 'Bed & Bedroom Setup',
            'service4.text': 'Changing bed linens, professional making, visual order, shaking mattresses, and complete airing for optimal rest.',
            'service5.tag': 'Special Shine',
            'service5.title': 'Vacuuming and Floor Mopping',
            'service5.text': 'Specialized treatment for wood, ceramic, marble, or carpet floors. Deep vacuuming and mopping with finishes that enhance brightness.',
            'service6.tag': 'Global Maintenance',
            'service6.title': 'General Cleaning & Deep Cleaning',
            'service6.text': 'Periodic or occasional sessions tailored to your specific needs. Complete maintenance for living rooms, dining rooms, and hallways.',
            'testimonials.subtitle': 'Reputation & Trust',
            'testimonials.title': 'What Our Clients Say',
            'testimonials.description': 'Our clients’ peace of mind is our greatest endorsement. Discover the experiences of families who trust Aseart Nettoyer.',
            'testimonial1.text': '“As an older adult, finding a cleaning service that is punctual, respectful, and meticulous was essential. Aseart Nettoyer leaves my bathroom and kitchen sparkling every week.”',
            'testimonial1.role': 'Housewife • 64 years old',
            'testimonial2.text': '“With work and kids, keeping the house clean was a constant challenge. The team arrives on time, cleans every corner, and leaves the beds made like in a hotel.”',
            'testimonial2.role': 'Father of a family',
            'testimonial3.text': '“We requested a deep cleaning before a family gathering and the result exceeded our expectations. The floor had an impeccable shine. The direct number helps a lot.”',
            'testimonial3.role': 'Private resident',
            'contact.badge': 'Direct and Immediate Attention',
            'contact.title': 'Ready to enjoy a sparkling home?',
            'contact.description': 'We are just one call away. Contact our team directly for free quotes or to schedule your service.',
            'contact.callTitle': 'Phone Support Number',
            'contact.callNote': 'Tap to call directly from your device',
            'contact.hoursTitle': 'Flexible Hours',
            'contact.hoursText': 'Monday to Saturday from 7:00 AM to 7:00 PM',
            'contact.coverageTitle': 'Coverage Area',
            'contact.coverageText': 'Exclusive service for homes and private residences',
            'form.headerTitle': 'Request a Quote or Information',
            'form.headerText': 'Leave us a message and we will respond as soon as possible.',
            'form.nameLabel': 'Full Name *',
            'form.namePlaceholder': 'e.g. Maria Fernández',
            'form.phoneLabel': 'Phone Number *',
            'form.phonePlaceholder': 'e.g. #1 263 388 4647',
            'form.serviceLabel': 'Required Service Type',
            'form.optionGeneral': 'General House Cleaning',
            'form.optionDeep': 'Detailed Deep Cleaning',
            'form.optionDust': 'Dust and Delicate Furniture',
            'form.optionBathroomKitchen': 'Bathroom and Kitchen Disinfection',
            'form.optionOther': 'Other Special Service',
            'form.messageLabel': 'Details or Comments',
            'form.messagePlaceholder': 'Tell us the number of bedrooms or specific requirements...',
            'form.submit': 'Send Request',
            'footer.brandDesc': 'Specialists in meticulous cleaning and care for private homes. Quality, discretion, and maximum cleanliness on every visit.',
            'footer.trust': 'Secure & Insured Service',
            'footer.quickNav': 'Quick Navigation',
            'footer.home': 'Home',
            'footer.services': 'Cleaning Services',
            'footer.testimonials': 'Customer Reviews',
            'footer.contact': 'Contact Now',
            'footer.direct': 'Direct Assistance',
            'footer.callHint': 'Prefer to call by phone?',
            'footer.availability': '● Immediate response during business hours',
            'footer.rights': '© 2026 Aseart Nettoyer. All rights reserved.',
            'floating.call': 'Call Directly',
            'form.requiredFields': 'Please complete the required fields to send your request.',
            'form.submitting': 'Sending...',
            'form.successBefore': 'Thank you,',
            'form.successAfter': 'We have received your message. We will contact you at',
            'form.successEnd': 'as soon as possible.',
            'lang.toggle': 'Change language',
            'lang.es': 'Español',
            'lang.en': 'English',
            'lang.fr': 'Français'
        },
        fr: {
            'nav.home': 'Accueil',
            'nav.services': 'Services',
            'nav.testimonials': 'Témoignages',
            'nav.contact': 'Contact',
            'header.callNow': 'Appeler maintenant',
            'hero.badge': 'Garantie de propreté et de confiance',
            'hero.subtitle': 'Nous transformons votre maison en un espace impeccable, sûr et brillant. Nous proposons des services de nettoyage professionnels adaptés au soin et à la tranquillité que votre famille mérite.',
            'hero.callButton': 'Appeler directement : #1 263 388 4647',
            'hero.servicesButton': 'Voir les services',
            'hero.feature1': 'Personnel vérifié',
            'hero.feature2': 'Produits non toxiques',
            'hero.feature3': 'Service personnalisé',
            'hero.cardTitle': '100 % satisfaction',
            'hero.cardText': 'Maisons brillantes chaque jour',
            'services.subtitle': 'Notre spécialité',
            'services.title': 'Services de nettoyage complets',
            'services.description': 'Nous prenons soin de chaque recoin de votre maison privée pour que vous puissiez profiter de votre temps en toute sérénité.',
            'service1.tag': 'Poussière & Désinfection',
            'service1.title': 'Nettoyage de la poussière et des surfaces',
            'service1.text': 'Élimination méticuleuse de la poussière sur les meubles, étagères, cadres, appareils et zones difficiles d’accès avec des chiffons microfibres haute efficacité.',
            'service2.tag': 'Sanitisation complète',
            'service2.title': 'Nettoyage profond des salles de bain',
            'service2.text': 'Désinfection des carreaux, toilettes, lavabos, douches et miroirs. Élimination du calcaire, de l’humidité et des bactéries avec des produits sûrs et parfumés.',
            'service3.tag': 'Cuisine immaculée',
            'service3.title': 'Nettoyage complet de la cuisine',
            'service3.text': 'Nettoyage intérieur et extérieur des cuisinières, hottes, plans de travail, éviers et armoires. Dégraissage efficace pour un environnement hygiénique.',
            'service4.tag': 'Chambres',
            'service4.title': 'Mise en place des lits & chambres',
            'service4.text': 'Changement du linge de lit, dressage professionnel, ordre visuel, battage des matelas et aération complète pour un repos optimal.',
            'service5.tag': 'Brillance spéciale',
            'service5.title': 'Aspirage et lavage des sols',
            'service5.text': 'Traitement spécialisé pour sols en bois, céramique, marbre ou moquette. Aspirage profond et lavage avec des finitions qui renforcent l’éclat.',
            'service6.tag': 'Entretien global',
            'service6.title': 'Nettoyage général & nettoyage profond',
            'service6.text': 'Journées périodiques ou ponctuelles adaptées à vos besoins spécifiques. Entretien complet des salons, salles à manger et couloirs.',
            'testimonials.subtitle': 'Réputation & confiance',
            'testimonials.title': 'Ce que nos clients disent',
            'testimonials.description': 'Le calme de nos clients est notre meilleure référence. Découvrez les expériences de familles qui font confiance à Aseart Nettoyer.',
            'testimonial1.text': '“À mon âge, trouver un service de nettoyage ponctuel, poli et minutieux était essentiel. Chez Aseart Nettoyer, ma salle de bain et ma cuisine brillent chaque semaine.”',
            'testimonial1.role': 'Femme au foyer • 64 ans',
            'testimonial2.text': '“Avec le travail et les enfants, garder la maison propre était un défi constant. L’équipe arrive à l’heure, nettoie chaque recoin et laisse les lits fait comme dans un hôtel.”',
            'testimonial2.role': 'Père de famille',
            'testimonial3.text': '“Nous avons demandé un nettoyage profond avant une réunion familiale et le résultat a dépassé nos attentes. Le sol brillait impeccablement. Le numéro direct aide beaucoup.”',
            'testimonial3.role': 'Résidente particulière',
            'contact.badge': 'Service direct et immédiat',
            'contact.title': 'Prêt à profiter d’une maison brillante ?',
            'contact.description': 'Nous sommes à une seule appel. Contactez directement notre équipe pour des devis sans engagement ou pour programmer votre service.',
            'contact.callTitle': 'Numéro d’assistance téléphonique',
            'contact.callNote': 'Touchez pour appeler directement depuis votre appareil',
            'contact.hoursTitle': 'Horaires flexibles',
            'contact.hoursText': 'Lundi à samedi de 7:00 à 19:00',
            'contact.coverageTitle': 'Zone de couverture',
            'contact.coverageText': 'Service exclusif pour maisons et résidences privées',
            'form.headerTitle': 'Demander un devis ou des informations',
            'form.headerText': 'Laissez-nous un message et nous vous répondrons rapidement.',
            'form.nameLabel': 'Nom complet *',
            'form.namePlaceholder': 'Ex. María Fernández',
            'form.phoneLabel': 'Téléphone de contact *',
            'form.phonePlaceholder': 'Ex. #1 263 388 4647',
            'form.serviceLabel': 'Type de service requis',
            'form.optionGeneral': 'Nettoyage général de la maison',
            'form.optionDeep': 'Nettoyage profond détaillé',
            'form.optionDust': 'Poussière et meubles délicats',
            'form.optionBathroomKitchen': 'Désinfection des salles de bain et cuisine',
            'form.optionOther': 'Autre service spécial',
            'form.messageLabel': 'Détails ou commentaires',
            'form.messagePlaceholder': 'Indiquez le nombre de chambres ou les besoins spécifiques...',
            'form.submit': 'Envoyer la demande',
            'footer.brandDesc': 'Spécialistes du nettoyage méticuleux et du soin des maisons privées. Qualité, discrétion et propreté maximale à chaque visite.',
            'footer.trust': 'Service sûr et assuré',
            'footer.quickNav': 'Navigation rapide',
            'footer.home': 'Accueil',
            'footer.services': 'Services de nettoyage',
            'footer.testimonials': 'Avis clients',
            'footer.contact': 'Nous contacter',
            'footer.direct': 'Assistance directe',
            'footer.callHint': 'Vous préférez appeler par téléphone ?',
            'footer.availability': '● Réponse immédiate pendant les heures ouvrables',
            'footer.rights': '© 2026 Aseart Nettoyer. Tous droits réservés.',
            'floating.call': 'Appeler directement',
            'form.requiredFields': 'Veuillez remplir les champs obligatoires pour envoyer votre demande.',
            'form.submitting': 'Envoi...',
            'form.successBefore': 'Merci,',
            'form.successAfter': 'Nous avons bien reçu votre message. Nous vous contacterons au numéro',
            'form.successEnd': 'dans les plus brefs délais.',
            'lang.toggle': 'Changer la langue',
            'lang.es': 'Español',
            'lang.en': 'English',
            'lang.fr': 'Français'
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const langButtons = document.querySelectorAll('.lang-option');
    const langCurrent = document.querySelector('[data-lang-current]');

    const setLanguage = (language) => {
        const validLanguage = translations[language] ? language : 'es';
        const dictionary = translations[validLanguage];

        document.documentElement.lang = validLanguage;
        localStorage.setItem('aseartLang', validLanguage);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.dataset.i18nPlaceholder;
            if (dictionary[key]) {
                element.placeholder = dictionary[key];
            }
        });

        document.querySelectorAll('[data-i18n-option]').forEach((element) => {
            const key = element.dataset.i18nOption;
            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }
        });

        if (langCurrent) {
            langCurrent.textContent = validLanguage.toUpperCase();
        }

        langButtons.forEach((button) => {
            const active = button.dataset.lang === validLanguage;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });

        if (langToggle) {
            langToggle.setAttribute('aria-label', dictionary['lang.toggle'] || 'Cambiar idioma');
        }
    };

    if (langToggle && langMenu) {
        langToggle.addEventListener('click', () => {
            langMenu.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
            if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
                langMenu.classList.remove('open');
            }
        });
    }

    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
            if (langMenu) {
                langMenu.classList.remove('open');
            }
        });
    });

    const savedLanguage = localStorage.getItem('aseartLang') || 'es';
    setLanguage(savedLanguage);

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', String(!isExpanded));
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const sections = document.querySelectorAll('section[id]');

    const highlightNavLink = () => {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);

    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach((element) => element.classList.add('visible'));
    }

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(5, 72, 149, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const dictionary = translations[document.documentElement.lang || 'es'];

            if (!nombre || !telefono) {
                alert(dictionary['form.requiredFields']);
                return;
            }

            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            const submitText = btnSubmit.querySelector('span');
            const originalText = submitText ? submitText.textContent : btnSubmit.innerText;

            if (submitText) {
                submitText.textContent = dictionary['form.submitting'];
            } else {
                btnSubmit.innerText = dictionary['form.submitting'];
            }
            btnSubmit.disabled = true;

            setTimeout(() => {
                alert(`${dictionary['form.successBefore']} ${nombre}! ${dictionary['form.successAfter']} ${telefono} ${dictionary['form.successEnd']}`);
                contactForm.reset();
                if (submitText) {
                    submitText.textContent = dictionary['form.submit'];
                } else {
                    btnSubmit.innerText = originalText;
                }
                btnSubmit.disabled = false;
            }, 1200);
        });
    }

    const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
    phoneButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('Iniciando llamada telefónica hacia #1 263 388 4647');
        });
    });
});