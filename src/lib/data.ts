import { Award, Factory, HeartHandshake, Truck } from "lucide-react";

export const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
];

export const heroBadges = [
    { icon: Truck, text: 'Frota Própria' },
    { icon: Factory, text: 'Produção Nacional' },
    { icon: Truck, text: 'Entrega Rápida' },
];

export const differentiators = [
    {
        icon: Truck,
        title: "Frota Própria de Entregas",
        description: "Garantimos pontualidade, segurança e controle total dos prazos.",
    },
    {
        icon: Award,
        title: "Matéria-Prima Selecionada",
        description: "Utilizamos apenas materiais selecionados e produção organizada.",
    },
    {
        icon: Factory,
        title: "Produção Sob Demanda e em Volume",
        description: "Atendemos pedidos personalizados e grandes volumes com excelência.",
    },
    {
        icon: HeartHandshake,
        title: "Atendimento Humanizado",
        description: "Preços acessíveis e condições comerciais flexíveis para cada cliente.",
    },
];

export const catalogCategories = [
    { id: 'travesseiros', name: 'Travesseiros' },
    { id: 'almofadas', name: 'Almofadas' },
    { id: 'capas', name: 'Capas e Protetores' },
    { id: 'refil', name: 'Refil' },
    { id: 'fibra', name: 'Fibra' },
    { id: 'cama-pet', name: 'Cama Pet' },
    { id: 'toalha-de-mesa', name: 'Toalhas de Mesa' },
    { id: 'manta', name: 'Mantas' },
    { id: 'cama', name: 'Cama' },
    { id: 'utilidades', name: 'Utilidades' },
];

export const productsByCategory = {
    travesseiros: [
        { id: "001", name: "Travesseiro Nilo 48x68", imageId: "travesseiro-nilo" },
        { id: "002", name: "Travesseiro Nilo Prabom", imageId: "travesseiro-prabom" },
        { id: "003", name: "Travesseiro Nilo Toque de Plumas", imageId: "travesseiro-toque-de-plumas" },
        { id: "004", name: "Travesseiro Nilo Pop", imageId: "travesseiro-nilo-pop" },
        { id: "005", name: "Travesseiros de Cor", imageId: "travesseiros-de-cor" },
        { id: "006", name: "Travesseiro de Personagem", imageId: "travesseiro-personagem" },
        { id: "007", name: "Travesseiros Time", imageId: "travesseiros-times" },
        { id: "009", name: "Travesseiro Xuxão Infantil 40x90", imageId: "travesseiro-xuxao-infantil" },
        { id: "010", name: "Travesseiro Xuxão Adulto 40x1.30", imageId: "travesseiro-xuxao-adulto" },
        { id: "011", name: "Travesseiro de Viagem Estampado", imageId: "travesseiro-viagem-estampado" },
        { id: "012", name: "Travesseiro de Viagem Liso", imageId: "travesseiro-viagem-liso" },
    ],
    almofadas: [
        { id: "008", name: "Almofada Personalizada de Time", imageId: "almofada-time-008" },
        { id: "019", name: "Almofada Baguete Suede 30x42", imageId: "almofada-baguete-suede-019" },
        { id: "020", name: "Almofada Baguete Matelada 30x42", imageId: "almofada-baguete-matelada-020" },
        { id: "021", name: "Almofada Baguete Rústica 30x42", imageId: "almofada-baguete-rustica-021" },
        { id: "025", name: "Almofadas Suede 45x45", imageId: "almofada-suede-45x45-025" },
        { id: "026", name: "Almofadas Matelada 45x45", imageId: "almofada-matelada-45x45-026" },
        { id: "027", name: "Almofadas Rústica 45x45", imageId: "almofadas-rustica-027" },
        { id: "031", name: "Almofada Personalizada", imageId: "almofada-personalizada-031" },
    ],
    capas: [
        { id: "017", name: "Capa Protetora para Travesseiro", imageId: "capa-protetora-travesseiro-017" },
        { id: "018", name: "Porta Travesseiro Matelado", imageId: "porta-travesseiro-matelado-018" },
        { id: "022", name: "Capa para Baguete Suede 30x42", imageId: "capa-baguete-suede-022" },
        { id: "023", name: "Capa para Baguete Matelada 30x42", imageId: "capa-baguete-matelada-023" },
        { id: "024", name: "Capa para Baguete Rústica 30x42", imageId: "capa-baguete-rustica-024" },
        { id: "028", name: "Capas para Almofadas Suede 45x45", imageId: "capas-almofada-suede-028" },
        { id: "029", name: "Capas para Almofadas Matelada 45x45", imageId: "capas-almofada-matelada-029" },
        { id: "030", name: "Capas para Almofadas Rústica 45x45", imageId: "capas-almofada-rustica-030" },
    ],
    refil: [
        { id: "014", name: "Refil TNT 50x50", imageId: "refil-tnt-50x50-014" },
        { id: "015", name: "Refil para Almofada TNT 45x45", imageId: "refil-tnt-45x45-015" },
        { id: "016", name: "Refil para Almofada Baguete 30x42", imageId: "refil-baguete-30x42" },
    ],
    fibra: [
        { id: "013", name: "Fibra de Silicone", imageId: "fibra-siliconada" },
    ],
    "cama-pet": [
        { id: "032", name: "Cama Pet Lisa 50x60", imageId: "cama-pet-lisa-032" },
        { id: "033", name: "Cama Pet Estampada 50x60", imageId: "cama-pet-estampada-033" },
        { id: "034", name: "Cama Pet Lisa 50x50", imageId: "cama-pet-lisa-034" },
        { id: "035", name: "Cama Pet Estampada 50x50", imageId: "cama-pet-estampada-035" },
    ],
    "toalha-de-mesa": [
        { id: "036", name: "Toalha de Mesa Oxford 4 Cadeiras", imageId: "toalha-mesa-oxford-4-cadeiras-036" },
        { id: "037", name: "Toalha de Mesa Oxford 6 Cadeiras", imageId: "toalha-mesa-oxford-6-cadeiras-037" },
        { id: "038", name: "Toalha de Mesa Tecido Linhão 4 Cadeiras", imageId: "toalha-mesa-linhao-4-cadeiras-038" },
        { id: "039", name: "Toalha de Mesa Tecido Linhão 6 Cadeiras", imageId: "toalha-mesa-linhao-6-cadeiras-039" },
    ],
    manta: [
        { id: "040", name: "Manta Casal Lisa 1.80x2.00", imageId: "manta-casal-lisa-040" },
        { id: "041", name: "Manta Casal Estampada 1.80x2.00", imageId: "manta-casal-estampada-041" },
    ],
    cama: [
        { id: "042", name: "Lençol Casal", imageId: "lencol-casal-042" },
        { id: "043", name: "Cobre Leito 1.60x2.40", imageId: "cobre-leito-043" },
    ],
    utilidades: [
        { id: "044", name: "Vedador de Porta", imageId: "vedador-de-porta-044" },
    ]
};

export const testimonials = [
    {
        name: "Ana Silva",
        city: "São Paulo, SP",
        rating: 5,
        testimonial: "A qualidade dos travesseiros é incrível! Meus clientes amaram. A entrega foi super rápida e o atendimento nota 10.",
        imageId: 'testimonial1',
    },
    {
        name: "Carlos Pereira",
        city: "Belo Horizonte, MG",
        rating: 5,
        testimonial: "Desde que comecei a trabalhar com a Nilo, minhas vendas aumentaram. Produtos excelentes e com preço justo. Recomendo!",
        imageId: 'testimonial2',
    },
    {
        name: "Mariana Costa",
        city: "Salvador, BA",
        rating: 5,
        testimonial: "Estou muito satisfeita com a parceria. A flexibilidade nos pedidos e a frota própria fazem toda a diferença na logística.",
        imageId: 'testimonial3',
    },
    {
        name: "João Ferreira",
        city: "Curitiba, PR",
        rating: 5,
        testimonial: "Comprometimento e qualidade definem a Nilo Travesseiros. Uma empresa que realmente valoriza o cliente.",
        imageId: 'testimonial4',
    }
];
