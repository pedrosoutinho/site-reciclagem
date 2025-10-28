# Circuito Sustentável 🌱

Transforme lixo eletrônico em energia para o futuro

## Sobre o Projeto

O **Circuito Sustentável** é um site desenvolvido para ensinar as pessoas sobre o descarte correto de lixo eletrônico e fornecer informações sobre pontos de coleta próximos. Este projeto foi desenvolvido por alunos de Ciência da Computação da UNIFOR na disciplina de Projeto de Tecnologia Intercursos.

## Pontos de Coleta

1. **Padaria O Libanio** - Rua Otávio Rocha, 401
2. **Padaria O Cordeiro** - Cidade Ecológica, 237
3. **Padaria Cicero** - Rua Lucas F. Antônio, 245

## O Que Recebemos

### Linha Verde
- Pilhas
- Baterias
- Fones
- Cabos
- Carregadores

### Linha Preta
- Teclados
- Mouses
- Tablets
- Smartphones

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Design responsivo com tema verde
- **JavaScript (Vanilla)**: Funcionalidade interativa
- **Leaflet.js**: Mapas interativos
- **OpenStreetMap**: Tiles de mapa gratuitos

## Como Usar

### Visualização Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/site-reciclagem.git
cd site-reciclagem
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

3. Acesse `http://localhost:8000` no navegador

## Estrutura do Projeto

```
site-reciclagem/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos e tema verde
├── js/
│   ├── map.js            # Lógica do mapa interativo
│   └── main.js           # Funcionalidades gerais
├── data/
│   └── locations.js      # Dados dos pontos de coleta
├── assets/
│   └── images/           # Imagens e ícones (se necessário)
├── README.md             # Este arquivo
└── .gitignore           # Arquivos ignorados pelo Git
```

## Customização

### Atualizar Coordenadas GPS

Edite o arquivo `data/locations.js` com as coordenadas exatas:

```javascript
const collectionPoints = {
    libanio: {
        lat: -3.7327,  // Latitude
        lng: -38.5267, // Longitude
        // ...
    }
    // ...
};
```

### Adicionar Novos Pontos de Coleta

1. Adicione um novo objeto em `data/locations.js`
2. O mapa será atualizado automaticamente

## Compatibilidade

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Navegadores móveis modernos

