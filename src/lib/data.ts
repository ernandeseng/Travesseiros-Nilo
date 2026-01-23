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
    { id: 'almofadas', name: 'Almofadas' },
    { id: 'cama-pet', name: 'Cama Pet' },
    { id: 'capas', name: 'Capas para Almofada' },
    { id: 'travesseiros', name: 'Travesseiros' },
    { id: 'refil', name: 'Refil' },
    { id: 'fibra', name: 'Fibra' },
];

export const productsByCategory = {
    almofadas: [
        { id: "008", name: "Almofada personalizada de time", imageId: 'almofada-time-008' },
        { id: "018", name: "Almofada Suede Lisa", imageId: 'almofada-suede-lisa-018' },
        { id: "020", name: "Almofada Estampada", imageId: 'product3' },
        { id: "039", name: "Almofada Personalizada de Time", imageId: 'product5' },
        { id: "037", name: "Almofada Personalizada Infantil", imageId: 'product6' },
        { id: "042", name: "Almofadas Suede 45x45", imageId: "almofada-suede-45x45-042" },
        { id: "043", name: "Almofadas Matelada 45x45", imageId: "almofada-matelada-45x45-043" },
        { id: "046", name: "Almofada Personalizada", imageId: "almofada-personalizada-046" },
    ],
    'cama-pet': [
        { id: "032", name: "Cama Pet Estampada", imageId: 'pet-bed-estampada-032' },
        { id: "031", name: "Cama Pet Lisa", imageId: 'cama-pet-lisa-031' },
    ],
    capas: [
        { id: "027", name: "Capa de Almofada Estampada", imageId: 'capa-estampada-027' },
        { id: "040", name: "Capa para Baguete Martelada", imageId: "capa-baguete-martelada-040" },
        { id: "041", name: "Capa para Baguete Rústica", imageId: "capa-baguete-rustica-041" },
        { id: "044", name: "Capas para Almofadas Matelada 45x45", imageId: "capa-almofada-matelada-45x45-044" },
        { id: "045", name: "Capas para Almofadas Rústicas", imageId: "capa-almofada-rustica-045" },
    ],
    travesseiros: [
        { id: "001", name: "Travesseiro Nilo", imageId: 'travesseiro-nilo' },
        { id: "002", name: "Travesseiro Nilo Prabom", imageId: 'travesseiro-prabom' },
        { id: "003", name: "Travesseiro Nilo Toque de Plumas", imageId: "travesseiro-toque-de-plumas" },
        { id: "004", name: "Travesseiro Nilo Pop", imageId: "travesseiro-nilo-pop" },
        { id: "005", name: "Travesseiros de Cor", imageId: "travesseiros-de-cor" },
        { id: "006", name: "Travesseiro de Personagem", imageId: "travesseiro-personagem" },
        { id: "007", name: "Travesseiros de Times", imageId: "travesseiros-times" },
        { id: "009", name: "Travesseiro Xuxão Adulto", imageId: "travesseiro-xuxao-adulto" },
        { id: "010", name: "Travesseiro de Viagem Estampado", imageId: "travesseiro-viagem-estampado" },
        { id: "011", name: "Travesseiro de Viagem Liso", imageId: "travesseiro-viagem-liso" },
        { id: "012", name: "Travesseiro Xuxão Infantil", imageId: "travesseiro-xuxao-infantil" },
    ],
    refil: [
        { id: "015", name: "Refil TNT Para Almofada 45x45", imageId: 'refil-tnt' },
        { id: "016", name: "Refil TNT Para Almofada 50x50", imageId: 'refil-tnt-50x50' },
        { id: "017", name: "Refil para Almofada Baguete 30x42", imageId: 'refil-baguete-30x42'},
    ],
    fibra: [
        { id: "013", name: "Fibra de Silicone", imageId: 'fibra-siliconada' },
    ],
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
