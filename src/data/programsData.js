// This file contains the data from the original programsData array
// converted to a format suitable for React

const programsData = [
  {
    id: 1,
    name: "Adobe Photoshop",
    version: "2023.5.0",
    category: "diseno",
    categoryName: "Diseño",
    description: "Software de edición de imágenes líder en el mercado para profesionales y aficionados.",
    fullDescription: `
      <p>Adobe Photoshop es el estándar de la industria en edición de imágenes, utilizado por profesionales de todo el mundo para diseño, fotografía y más. Con su potente conjunto de herramientas, puedes dar vida a cualquier idea creativa.</p>
      
      <h3>Características principales</h3>
      <ul>
        <li>Edición profesional de imágenes con capas</li>
        <li>Herramientas avanzadas de selección y máscaras</li>
        <li>Funciones de corrección de color de nivel profesional</li>
        <li>Pinceles y herramientas de dibujo personalizables</li>
        <li>Compatibilidad con gran variedad de formatos de archivo</li>
        <li>Integración con otras aplicaciones de Adobe Creative Cloud</li>
        <li>Funciones de IA para selección y manipulación de objetos</li>
      </ul>
      
      <h3>¿Para quién está diseñado?</h3>
      <p>Fotógrafos, diseñadores gráficos, artistas digitales, diseñadores web, y cualquier persona que necesite editar o manipular imágenes con calidad profesional.</p>
    `,
    features: ["Capas", "Retoque", "Filtros", "Automatización"],
    thumbnail: "/img/programs/photoshop.jpg",
    screenshots: [
      "/img/screenshots/photoshop-1.jpg",
      "/img/screenshots/photoshop-2.jpg",
      "/img/screenshots/photoshop-3.jpg"
    ],
    os: ["windows", "mac"],
    developer: "Adobe Inc.",
    releaseDate: "2023-05-15",
    size: "2.5 GB",
    license: "Comercial",
    rating: 4.8,
    downloads: 150000,
    website: "https://www.adobe.com/products/photoshop.html",
    downloadLink: "#",
    isFeatured: true,
    isNew: false,
    requirements: {
      minimum: [
        "Windows 10 (64 bits) o macOS 10.15",
        "Procesador Intel o AMD de 2 GHz",
        "8 GB de RAM",
        "4 GB de espacio disponible en disco duro",
        "Resolución de pantalla 1280 x 800"
      ],
      recommended: [
        "Windows 10 (64 bits) actualizado o macOS 11",
        "Procesador Intel o AMD multicore",
        "16 GB de RAM",
        "SSD con 8 GB de espacio disponible",
        "Resolución de pantalla 1920 x 1080",
        "Tarjeta gráfica con 2 GB de VRAM"
      ]
    }
  },
  {
    id: 2,
    name: "Microsoft Office",
    version: "2023",
    category: "productividad",
    categoryName: "Productividad",
    description: "Suite ofimática completa con Word, Excel, PowerPoint y más para uso profesional y personal.",
    fullDescription: `
      <p>Microsoft Office es una suite de aplicaciones de productividad que incluye programas como Word, Excel, PowerPoint, Outlook y más, diseñados para ayudarte a crear, comunicar y colaborar de manera eficiente.</p>
      
      <h3>Aplicaciones incluidas</h3>
      <ul>
        <li>Word: Procesador de texto completo</li>
        <li>Excel: Hojas de cálculo avanzadas</li>
        <li>PowerPoint: Presentaciones dinámicas</li>
        <li>Outlook: Cliente de correo electrónico y calendario</li>
        <li>Access: Gestión de bases de datos (solo en Windows)</li>
        <li>OneNote: Organización de notas</li>
        <li>Teams: Colaboración y comunicación en equipo</li>
      </ul>
      
      <h3>Ventajas principales</h3>
      <p>Compatibilidad universal, actualizaciones regulares, acceso desde cualquier dispositivo, almacenamiento en la nube con OneDrive, y herramientas de colaboración en tiempo real.</p>
    `,
    features: ["Word", "Excel", "PowerPoint", "Outlook"],
    thumbnail: "/img/programs/office.jpg",
    screenshots: [
      "/img/screenshots/office-1.jpg",
      "/img/screenshots/office-2.jpg",
      "/img/screenshots/office-3.jpg"
    ],
    os: ["windows", "mac"],
    developer: "Microsoft Corporation",
    releaseDate: "2023-01-10",
    size: "4 GB",
    license: "Comercial",
    rating: 4.7,
    downloads: 250000,
    website: "https://www.microsoft.com/microsoft-365",
    downloadLink: "#",
    isFeatured: true,
    isNew: false,
    requirements: {
      minimum: [
        "Windows 10 o macOS 10.14",
        "Procesador a 1.6 GHz o superior",
        "4 GB de RAM",
        "4 GB de espacio disponible en disco",
        "Resolución de pantalla 1280 x 768"
      ],
      recommended: [
        "Windows 10 actualizado o macOS 11",
        "Procesador a 2.0 GHz o superior",
        "8 GB de RAM",
        "SSD con 8 GB de espacio disponible",
        "Resolución de pantalla 1920 x 1080"
      ]
    }
  },
  {
    id: 3,
    name: "Avast Antivirus",
    version: "23.11.6",
    category: "seguridad",
    categoryName: "Seguridad",
    description: "Protección antivirus completa con escudo en tiempo real, firewall y protección web.",
    fullDescription: `
      <p>Avast Antivirus proporciona protección en tiempo real contra virus, malware, spyware y ransomware. Con múltiples capas de seguridad, mantiene tu sistema protegido mientras navegas, trabajas o juegas.</p>
      
      <h3>Características de seguridad</h3>
      <ul>
        <li>Protección en tiempo real contra amenazas</li>
        <li>Escudo web para navegación segura</li>
        <li>Firewall avanzado</li>
        <li>Protección contra ransomware</li>
        <li>Escáner de Wi-Fi para detectar redes inseguras</li>
        <li>Protección de correo electrónico</li>
        <li>Actualizaciones automáticas de la base de datos de virus</li>
      </ul>
      
      <h3>Ventajas adicionales</h3>
      <p>Impacto mínimo en el rendimiento del sistema, interfaz fácil de usar, y opciones de configuración para usuarios avanzados. La versión gratuita ofrece protección básica, mientras que las versiones premium desbloquean funciones adicionales.</p>
    `,
    features: ["Antivirus", "Firewall", "Anti-Ransomware", "Escudo Web"],
    thumbnail: "/img/programs/avast.jpg",
    screenshots: [
      "/img/screenshots/avast-1.jpg",
      "/img/screenshots/avast-2.jpg",
      "/img/screenshots/avast-3.jpg"
    ],
    os: ["windows", "mac", "android", "ios"],
    developer: "Avast Software",
    releaseDate: "2023-11-20",
    size: "500 MB",
    license: "Freemium",
    rating: 4.5,
    downloads: 320000,
    website: "https://www.avast.com",
    downloadLink: "#",
    isFeatured: false,
    isNew: true,
    requirements: {
      minimum: [
        "Windows 7 o superior / macOS 10.13 o superior",
        "Procesador Intel Pentium 4 / AMD Athlon 64",
        "2 GB de RAM",
        "2 GB de espacio disponible en disco",
        "Conexión a Internet para actualizaciones"
      ],
      recommended: [
        "Windows 10 actualizado / macOS 11 o superior",
        "Procesador Intel o AMD multicore",
        "4 GB de RAM",
        "SSD con 4 GB de espacio disponible",
        "Conexión a Internet de banda ancha"
      ]
    }
  },
  {
    id: 4,
    name: "VLC Media Player",
    version: "3.0.18",
    category: "multimedia",
    categoryName: "Multimedia",
    description: "Reproductor multimedia gratuito y de código abierto que reproduce casi cualquier formato de archivo.",
    fullDescription: `
      <p>VLC Media Player es un reproductor multimedia gratuito y de código abierto compatible con prácticamente todos los formatos de audio y video sin necesidad de códecs adicionales. Es altamente personalizable y ofrece funciones avanzadas.</p>
      
      <h3>Características principales</h3>
      <ul>
        <li>Reproducción de casi cualquier formato de video y audio</li>
        <li>No requiere códecs adicionales</li>
        <li>Reproducción de DVDs, CDs y VCDs</li>
        <li>Streaming y conversión de medios</li>
        <li>Grabación de pantalla</li>
        <li>Soporte para subtítulos</li>
        <li>Personalización con temas y extensiones</li>
      </ul>
      
      <h3>Ventajas sobre otros reproductores</h3>
      <p>Ligero, rápido, no contiene anuncios, código abierto y gratuito, altamente personalizable, y con actualizaciones regulares de seguridad.</p>
    `,
    features: ["Reproductor Universal", "Códecs Integrados", "Streaming", "Conversión"],
    thumbnail: "/img/programs/vlc.jpg",
    screenshots: [
      "/img/screenshots/vlc-1.jpg",
      "/img/screenshots/vlc-2.jpg",
      "/img/screenshots/vlc-3.jpg"
    ],
    os: ["windows", "mac", "linux", "android", "ios"],
    developer: "VideoLAN Organization",
    releaseDate: "2023-02-08",
    size: "40 MB",
    license: "Código abierto (GPL)",
    rating: 4.9,
    downloads: 500000,
    website: "https://www.videolan.org/vlc/",
    downloadLink: "#",
    isFeatured: true,
    isNew: false,
    requirements: {
      minimum: [
        "Windows XP o superior / macOS 10.7 o superior / Linux",
        "Procesador x86 a 1 GHz",
        "512 MB de RAM",
        "100 MB de espacio en disco",
        "Tarjeta de vídeo básica"
      ],
      recommended: [
        "Windows 10 / macOS 11 / Ubuntu 20.04 o superior",
        "Procesador multicore",
        "2 GB de RAM",
        "200 MB de espacio en disco",
        "Tarjeta gráfica compatible con OpenGL"
      ]
    }
  },
  {
    id: 5,
    name: "Visual Studio Code",
    version: "1.76.0",
    category: "desarrollo",
    categoryName: "Desarrollo",
    description: "Editor de código fuente gratuito, potente y multiplataforma con extensa compatibilidad de lenguajes.",
    fullDescription: `
      <p>Visual Studio Code es un editor de código fuente desarrollado por Microsoft que ha ganado enorme popularidad entre los desarrolladores. Combina la facilidad de uso de un editor de texto con características avanzadas como depuración, control de versiones Git integrado y una extensa biblioteca de extensiones.</p>
      
      <h3>Características destacadas</h3>
      <ul>
        <li>Resaltado de sintaxis para más de 50 lenguajes de programación</li>
        <li>Depurador integrado</li>
        <li>Control de versiones Git incorporado</li>
        <li>Terminal integrada</li>
        <li>IntelliSense para autocompletado inteligente</li>
        <li>Miles de extensiones para personalizar la experiencia</li>
        <li>Personalización avanzada con temas y configuraciones</li>
      </ul>
      
      <h3>Por qué los desarrolladores lo aman</h3>
      <p>Ligero pero potente, altamente personalizable, gratuito y de código abierto, con actualizaciones mensuales y una comunidad activa que desarrolla extensiones y mejoras constantemente.</p>
    `,
    features: ["IntelliSense", "Depurador", "Git", "Extensiones"],
    thumbnail: "/img/programs/vscode.jpg",
    screenshots: [
      "/img/screenshots/vscode-1.jpg",
      "/img/screenshots/vscode-2.jpg",
      "/img/screenshots/vscode-3.jpg"
    ],
    os: ["windows", "mac", "linux"],
    developer: "Microsoft",
    releaseDate: "2023-03-10",
    size: "70 MB",
    license: "Código abierto (MIT)",
    rating: 4.9,
    downloads: 450000,
    website: "https://code.visualstudio.com/",
    downloadLink: "#",
    isFeatured: true,
    isNew: false,
    requirements: {
      minimum: [
        "Windows 10 / macOS 10.11+ / Linux",
        "Procesador a 1.6 GHz o superior",
        "1 GB de RAM",
        "200 MB de espacio disponible en disco"
      ],
      recommended: [
        "Windows 11 / macOS 12+ / Ubuntu 22.04+",
        "Procesador multicore a 2.0 GHz o superior",
        "4 GB de RAM",
        "SSD con 500 MB de espacio disponible"
      ]
    }
  }
];

// Define categories
const categoriesData = [
  {
    id: "productividad",
    name: "Productividad",
    icon: "fas fa-briefcase",
    description: "Mejora tu eficiencia diaria",
    featuredImage: "/img/categories/productivity.jpg"
  },
  {
    id: "diseno",
    name: "Diseño",
    icon: "fas fa-paint-brush",
    description: "Herramientas creativas",
    featuredImage: "/img/categories/design.jpg"
  },
  {
    id: "seguridad",
    name: "Seguridad",
    icon: "fas fa-shield-alt",
    description: "Protege tus dispositivos",
    featuredImage: "/img/categories/security.jpg"
  },
  {
    id: "multimedia",
    name: "Multimedia",
    icon: "fas fa-film",
    description: "Audio, video y más",
    featuredImage: "/img/categories/multimedia.jpg"
  },
  {
    id: "desarrollo",
    name: "Desarrollo",
    icon: "fas fa-code",
    description: "Herramientas para programadores",
    featuredImage: "/img/categories/development.jpg"
  },
  {
    id: "juegos",
    name: "Juegos",
    icon: "fas fa-gamepad",
    description: "Entretenimiento digital",
    featuredImage: "/img/categories/games.jpg"
  }
];

// Helper functions for data access
export const getAllPrograms = () => programsData;

export const getFeaturedPrograms = () => programsData.filter(program => program.isFeatured);

export const getNewPrograms = () => programsData.filter(program => program.isNew);

export const getPopularPrograms = () => 
  [...programsData].sort((a, b) => b.downloads - a.downloads);

export const getProgramsByCategory = (categoryId) => 
  programsData.filter(program => program.category === categoryId);

export const getProgramById = (id) => 
  programsData.find(program => program.id.toString() === id.toString());

// Función original para búsqueda local
const searchProgramsLocal = (query) => {
  const searchTerm = query.toLowerCase();
  return programsData.filter(program => 
    program.name.toLowerCase().includes(searchTerm) || 
    program.description.toLowerCase().includes(searchTerm) ||
    program.categoryName.toLowerCase().includes(searchTerm)
  );
};

// Nueva función para búsqueda en el backend
export const searchPrograms = async (query) => {
  try {    // URL de la API de backend
    const apiUrl = `http://localhost:8080/api/programs/search?q=${encodeURIComponent(query)}`;
    
    // Hacer la petición al backend
    const response = await fetch(apiUrl);
    
    // Si la respuesta no es correcta, lanzar un error
    if (!response.ok) {
      throw new Error('Error al buscar programas');
    }
    
    // Convertir la respuesta a JSON
    const data = await response.json();
    
    // Devolver los programas encontrados
    return data.programs || [];
  } catch (error) {
    console.error('Error al buscar programas:', error);
    // En caso de error, fallback a la búsqueda local
    return searchProgramsLocal(query);
  }
};

export const getRelatedPrograms = (programId, limit = 4) => {
  const program = getProgramById(programId);
  if (!program) return [];
  
  // Get programs from the same category but exclude the current program
  const related = programsData
    .filter(p => p.category === program.category && p.id !== programId)
    .slice(0, limit);
    
  // If we don't have enough related programs, add some popular ones
  if (related.length < limit) {
    const popular = getPopularPrograms()
      .filter(p => p.id !== programId && !related.find(r => r.id === p.id))
      .slice(0, limit - related.length);
      
    return [...related, ...popular];
  }
  
  return related;
};

export const getAllCategories = () => categoriesData;

export const getCategoryById = (categoryId) => 
  categoriesData.find(category => category.id === categoryId);

export default {
  getAllPrograms,
  getFeaturedPrograms,
  getNewPrograms,
  getPopularPrograms,
  getProgramsByCategory,
  getProgramById,
  searchPrograms,
  getRelatedPrograms,
  getAllCategories,
  getCategoryById
};
