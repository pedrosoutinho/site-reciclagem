// Collection point locations data
// Note: These coordinates are approximate for Fortaleza, CE
// Replace with actual GPS coordinates if available

const collectionPoints = {
    libanio: {
        id: 'libanio',
        name: 'Padaria O Libanio',
        address: 'Rua Otávio Rocha, 401',
        lat: -3.7327,
        lng: -38.5267,
        description: 'Ponto de coleta na Padaria O Libanio',
        hours: 'Segunda a Sábado: 7h às 19h'
    },
    cordeiro: {
        id: 'cordeiro',
        name: 'Padaria O Cordeiro',
        address: 'Cidade Ecológica, 237',
        lat: -3.7520,
        lng: -38.4810,
        description: 'Ponto de coleta na Padaria O Cordeiro',
        hours: 'Segunda a Sábado: 6h às 20h'
    },
    cicero: {
        id: 'cicero',
        name: 'Padaria Cicero',
        address: 'Rua Lucas F. Antônio, 245',
        lat: -3.7450,
        lng: -38.5100,
        description: 'Ponto de coleta na Padaria Cicero',
        hours: 'Segunda a Sábado: 7h às 18h'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { collectionPoints };
}

