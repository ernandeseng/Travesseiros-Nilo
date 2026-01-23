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
        { id: "008", name: "Almofada personalizada de time", imageId: 'almofada-time-008', badge: 'FARDO/60' },
        { id: "018", name: "Almofada Suede Lisa", imageId: 'almofada-suede-lisa-018', badge: 'FARDO/60' },
        { id: "020", name: "Almofada Estampada", imageId: 'product3', badge: 'FARDO/60' },
        { id: "015", name: "Almofada Suede 45x45", imageId: 'product4', badge: 'FARDO/60' },
        { id: "039", name: "Almofada Personalizada de Time", imageId: 'product5', badge: 'FARDO/60' },
        { id: "037", name: "Almofada Personalizada Infantil", imageId: 'product6', badge: 'FARDO/60' },
    ],
    'cama-pet': [
        { id: "032", name: "Cama Pet Estampada", imageId: 'pet-bed-estampada-032', badge: 'FARDO/50' },
        { id: "031", name: "Cama Pet Lisa", imageId: 'cama-pet-lisa-031', badge: 'FARDO/50' },
    ],
    capas: [
        { id: "027", name: "Capa de Almofada Estampada", imageId: 'capa-estampada-027', badge: 'FARDO/100' },
    ],
    travesseiros: [
        { id: "001", name: "Travesseiro Nilo", imageId: 'travesseiro-nilo', badge: 'FARDO/20' },
        { id: "002", name: "Travesseiro Nilo Prabom", imageId: 'travesseiro-prabom', badge: 'FARDO/20' },
    ],
    refil: [
        { id: "015", name: "Refil TNT Para Almofada 45x45", imageId: 'refil-tnt', badge: 'FARDO/50' },
    ],
    fibra: [
        { id: "013", name: "Fibra de Silicone", imageId: 'fibra-siliconada', badge: 'PACOTE/1kg' },
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
