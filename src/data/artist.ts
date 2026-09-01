import type { Artist } from "@/types/artist";

/**
 * Fuente única de verdad para todo el sitio.
 * Contenido base tomado del brochure oficial "Brochure Juan 2026" y del
 * material entregado por el manager (fotos de estudio, portadas del álbum
 * "Desde mi voz", enlaces de plataformas y videos).
 *
 * NOTA: la biografía (bio.paragraphs) fue entregada/aprobada por el manager.
 * Las secciones marcadas con TODO (stats y testimonios) usan datos
 * aproximados / de ejemplo y deben actualizarse con información real.
 */
export const artist: Artist = {
  name: "Juan Cañas",
  stageName: "Juan Cañas",
  tagline: "El del alma vallenata",
  heroPhrase:
    "La voz romántica del vallenato, del acústico íntimo al grupo completo de 11 músicos en tarima.",
  location: "Barranquilla, Atlántico",
  coverage: "Cobertura nacional",

  bio: {
    short:
      "Cantante vallenato «el del alma vallenata», oriundo de Santa Marta. De sus inicios en el dúo Juan y Frank a su propuesta como solista con el álbum «Desde mi voz», con formatos que van del acústico íntimo al grupo completo de 11 músicos.",
    paragraphs: [
      "Juan Cañas es un cantante vallenato, oriundo de Santa Marta, Magdalena. Su historia en la música comenzó junto a su hermano gemelo Frank, con quien formó el dúo Juan y Frank, más adelante conocido como Los Mellos Cañas. En 2015 lanzaron su primer sencillo, «No Somos Novios», que logró gran reconocimiento en las emisoras de la ciudad y del país.",
      "Como agrupación obtuvieron el premio a Mejor Agrupación Vallenata en el Festival Indio Tayrona en 2016, y repitieron ese reconocimiento en los Premios Talento Local de Santa Marta en 2018. A ese recorrido se suman sencillos como «Si Tú Te Vas», «Nada Contigo» y «Logré Tus Besos», grabado en 2020.",
      "Hoy Juan Cañas lidera su propia propuesta como solista con el álbum «Desde mi voz». En 2024 participó en La Descarga de Caracol Televisión, donde fue destacado entre los 100 mejores cantantes del país. Su espectáculo se adapta a cualquier escenario: desde un formato acústico e íntimo con guitarra hasta el grupo completo de 11 músicos en tarima, siempre con la esencia romántica y tradicional del vallenato.",
    ],
  },

  whyUs: {
    title: "¿Por qué elegirnos?",
    description:
      "Más que interpretar canciones, hacemos de cada presentación una experiencia. Nos mueve la esencia romántica y tradicional del vallenato y el compromiso de entregar un show auténtico, con voz, sentimiento y profesionalismo, que conecte con el público y haga especial cada celebración.",
    points: [
      "Tres formatos: acústico íntimo, tipibajo y grupo completo",
      "Repertorio romántico y parrandero para cada tipo de evento",
      "Trayectoria desde 2015 y experiencia en festivales y televisión",
      "Puntualidad, sonido propio y un show que se adapta a tu escenario",
    ],
  },

  formats: [
    {
      id: "acustico-intimo",
      name: "Acústico · Íntimo",
      description:
        "Formato romántico para escuchar. Juan con su guitarra, incluye sonido para máximo 15 personas. Ideal para pedidas, cenas y reuniones privadas.",
    },
    {
      id: "formato-tipibajo",
      name: "Formato Tipibajo",
      description:
        "Formato parranda: caja, guacharaca, acordeón, bajo, guitarra y voz principal. La energía del vallenato para reuniones y celebraciones.",
    },
    {
      id: "grupo-completo",
      name: "Grupo Completo",
      description:
        "Formato de 11 músicos en tarima, con un amplio repertorio de la música vallenata. Para ferias, fiestas patronales y eventos masivos.",
    },
  ],

  achievements: [
    {
      id: "no-somos-novios-2015",
      title: "Primer sencillo — «No Somos Novios»",
      description:
        "Lanzamiento del primer sencillo, con gran reconocimiento en emisoras de la ciudad y del país.",
      year: "2015",
      image: "/images/press/live-1.jpg",
    },
    {
      id: "indio-tayrona-2016",
      title: "Mejor Agrupación Vallenata — Festival Indio Tayrona",
      description:
        "Premio a Mejor Agrupación Vallenata, consolidando la propuesta del grupo.",
      year: "2016",
      image: "/images/press/live-2.jpg",
    },
    {
      id: "talento-local-2018",
      title: "Mejor Agrupación Vallenata — Premios Talento Local",
      description: "Nuevo reconocimiento como Mejor Agrupación Vallenata en Santa Marta.",
      year: "2018",
    },
    {
      id: "la-descarga-2024",
      title: "La Descarga — Caracol Televisión",
      description:
        "Participación en La Descarga, destacándose entre los 100 mejores cantantes del país.",
      year: "2024",
    },
  ],

  heroImage: "/images/hero-main.jpg",
  heroImageAlt: "/images/hero-alt.jpg",
  bioImage: "/images/bio-portrait.jpg",
  logo: "/images/brand/logo.png",
  favicon: "/images/brand/logo.png",

  gallery: [
    {
      id: "g1",
      src: "/images/gallery/gallery-1.jpg",
      alt: "Juan Cañas de pie con guitarra en sesión de estudio",
      width: 1012,
      height: 1800,
      category: "Retrato",
    },
    {
      id: "g2",
      src: "/images/gallery/gallery-2.jpg",
      alt: "Juan Cañas sonriendo durante una presentación en vivo",
      width: 1800,
      height: 1177,
      category: "En vivo",
    },
    {
      id: "g3",
      src: "/images/gallery/gallery-3.jpg",
      alt: "Juan Cañas cantando junto a su agrupación en tarima",
      width: 1800,
      height: 1178,
      category: "En vivo",
    },
    {
      id: "g4",
      src: "/images/gallery/gallery-4.jpg",
      alt: "Retrato en blanco y negro de Juan Cañas con la guitarra al hombro",
      width: 1012,
      height: 1800,
      category: "Retrato",
    },
    {
      id: "g5",
      src: "/images/gallery/gallery-5.jpg",
      alt: "Juan Cañas interpretando con fuerza bajo las luces del escenario",
      width: 1800,
      height: 1178,
      category: "En vivo",
    },
    {
      id: "g6",
      src: "/images/gallery/gallery-6.jpg",
      alt: "Juan Cañas sentado con su guitarra en sesión de estudio",
      width: 1012,
      height: 1800,
      category: "Estudio",
    },
    {
      id: "g7",
      src: "/images/gallery/gallery-7.jpg",
      alt: "Juan Cañas riendo durante un show en vivo",
      width: 1800,
      height: 1366,
      category: "En vivo",
    },
    {
      id: "g8",
      src: "/images/gallery/gallery-8.jpg",
      alt: "Juan Cañas en traje, retrato de estudio",
      width: 1200,
      height: 1800,
      category: "Retrato",
    },
    {
      id: "g9",
      src: "/images/gallery/gallery-9.jpg",
      alt: "Juan Cañas cantando frente al micrófono en un concierto",
      width: 1800,
      height: 1177,
      category: "En vivo",
    },
    {
      id: "g10",
      src: "/images/gallery/gallery-10.jpg",
      alt: "Juan Cañas apoyado en un banco con su guitarra",
      width: 1012,
      height: 1800,
      category: "Estudio",
    },
  ],

  videos: [
    {
      id: "v1",
      title: "En vivo — Presentación",
      youtubeId: "O2X0V4nUQBw",
      thumbnail: "/images/gallery/gallery-2.jpg",
    },
    {
      id: "v2",
      title: "En vivo — Show completo",
      youtubeId: "8c4Hr6jY6HU",
      thumbnail: "/images/gallery/gallery-3.jpg",
    },
    {
      id: "v3",
      title: "En vivo — Formato parranda",
      youtubeId: "QggTyFmGRZU",
      thumbnail: "/images/gallery/gallery-5.jpg",
    },
    {
      id: "v4",
      title: "No Somos Novios",
      youtubeId: "fGHFpcsHfl4",
      thumbnail: "/images/gallery/gallery-7.jpg",
    },
    {
      id: "v5",
      title: "Si Tú Te Vas",
      youtubeId: "SS16UFHdz7Q",
      thumbnail: "/images/gallery/gallery-9.jpg",
    },
    {
      id: "v6",
      title: "Nada Contigo",
      youtubeId: "A_O_BDn0ZZw",
      thumbnail: "/images/gallery/gallery-1.jpg",
    },
    {
      id: "v7",
      title: "Logré Tus Besos",
      youtubeId: "8aTfIdZUtn8",
      thumbnail: "/images/gallery/gallery-4.jpg",
    },
  ],

  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      label: "Instagram",
      handle: "@juancanasmusic",
      url: "https://www.instagram.com/juancanasmusic",
      color: "#E1306C",
    },
    {
      id: "youtube",
      platform: "youtube",
      label: "YouTube",
      handle: "@juancanasmusic",
      url: "https://www.youtube.com/@juancanasmusic",
      color: "#FF0000",
    },
    {
      id: "tiktok",
      platform: "tiktok",
      label: "TikTok",
      handle: "@juancanasmusic",
      url: "https://www.tiktok.com/@juancanasmusic",
      color: "#25F4EE",
    },
    {
      id: "spotify",
      platform: "spotify",
      label: "Spotify",
      handle: "Juan Cañas",
      url: "https://open.spotify.com/intl-es/album/4kBgLsEdCQscev0oArXXJI",
      color: "#1DB954",
    },
    // TODO: confirmar perfil de artista en Spotify/Apple Music y agregar
    // Facebook si el artista lo tiene. El brochure también lista
    // Deezer, Tidal, Boomplay y Amazon Music (ver enlaces en discography).
  ],

  booking: {
    managerName: "Juan Cañas",
    managerRole: "Booking y Contrataciones",
    managerPhoto: "/images/artist-studio.jpg",
    whatsapp: "573017851959",
    whatsappDisplay: "301 785 1959",
    whatsappUrl: "https://wa.link/7uvll8",
    phone: "573017851959",
    email: "juancanaspalacio@gmail.com",
  },

  // TODO: cifras aproximadas a partir del brochure; actualizar con datos reales verificados.
  stats: [
    { id: "years", value: 10, suffix: "+", label: "Años de trayectoria" },
    { id: "songs", value: 10, suffix: "+", label: "Canciones" },
    { id: "musicians", value: 11, suffix: "", label: "Músicos en tarima" },
    { id: "formats", value: 3, suffix: "", label: "Formatos de show" },
  ],

  discography: [
    {
      id: "desde-mi-voz",
      title: "Desde mi voz",
      year: "2024",
      cover: "/images/discography/desde-mi-voz.jpg",
      listenUrl: "https://open.spotify.com/intl-es/album/4kBgLsEdCQscev0oArXXJI",
      type: "album",
    },
    {
      id: "logre-tus-besos",
      title: "Logré Tus Besos",
      year: "2020",
      cover: "/images/discography/logre-tus-besos.jpg",
      youtubeId: "8aTfIdZUtn8",
      listenUrl: "https://www.youtube.com/watch?v=8aTfIdZUtn8",
      type: "single",
    },
    {
      id: "nada-contigo",
      title: "Nada Contigo",
      year: "2018",
      cover: "/images/discography/nada-contigo.jpg",
      youtubeId: "A_O_BDn0ZZw",
      listenUrl: "https://www.youtube.com/watch?v=A_O_BDn0ZZw",
      type: "single",
    },
    {
      id: "si-tu-te-vas",
      title: "Si Tú Te Vas",
      year: "2017",
      cover: "/images/discography/si-tu-te-vas.jpg",
      youtubeId: "SS16UFHdz7Q",
      listenUrl: "https://www.youtube.com/watch?v=SS16UFHdz7Q",
      type: "single",
    },
    {
      id: "no-somos-novios",
      title: "No Somos Novios",
      year: "2015",
      cover: "/images/discography/no-somos-novios.jpg",
      youtubeId: "fGHFpcsHfl4",
      listenUrl: "https://www.youtube.com/watch?v=fGHFpcsHfl4",
      type: "single",
    },
  ],

  // Fallback si GOOGLE_SHEET_EVENTS_URL no está configurada o falla la carga
  // (ver src/lib/events.ts). La agenda real se administra desde Google Sheets.
  events: [
    {
      id: "e1",
      date: "2026-10-10",
      displayDate: "10 Oct 2026",
      city: "Barranquilla",
      venue: "Por confirmar",
      eventName: "Fecha disponible para tu evento",
      status: "proximamente",
    },
    {
      id: "e2",
      date: "2026-11-07",
      displayDate: "07 Nov 2026",
      city: "Santa Marta",
      venue: "Por confirmar",
      eventName: "Fecha disponible para tu evento",
      status: "proximamente",
    },
    {
      id: "e3",
      date: "2026-12-05",
      displayDate: "05 Dic 2026",
      city: "Valledupar",
      venue: "Por confirmar",
      eventName: "Fecha disponible para tu evento",
      status: "proximamente",
    },
  ],

  // TODO: testimonios de ejemplo; reemplazar con testimonios reales de clientes.
  testimonials: [
    {
      id: "t1",
      name: "Organizador de eventos",
      role: "Feria y fiestas municipales",
      quote:
        "Juan y su grupo llevaron el vallenato romántico a nuestro evento con voz, sentimiento y total profesionalismo. El público cantó toda la noche.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Celebración privada",
      role: "Aniversario",
      quote:
        "Contratamos el formato acústico para una pedida de mano y fue perfecto. Juan con su guitarra logró un momento inolvidable.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Coordinador cultural",
      role: "Festival regional",
      quote:
        "Un cantante que conserva la esencia del vallenato tradicional con una voz muy propia. Excelente el formato de grupo completo.",
      rating: 5,
    },
  ],

  seo: {
    title: "Juan Cañas | El del alma vallenata - Cantante Vallenato",
    description:
      "Juan Cañas, cantante vallenato de Barranquilla. Contrataciones para eventos, festivales y celebraciones a nivel nacional: formato acústico, tipibajo o grupo completo.",
    keywords: [
      "Juan Cañas",
      "vallenato",
      "cantante vallenato",
      "contrataciones vallenato",
      "Juan y Frank",
      "Los Mellos Cañas",
      "artista vallenato Barranquilla",
      "Portal Vallenato",
    ],
    url: "https://juancanasmusic.portalvallenato.com",
  },
};
