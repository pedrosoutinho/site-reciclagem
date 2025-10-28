# Circuito Sustentável 🌱

Transforme lixo eletrônico em energia para o futuro

## Sobre o Projeto

O **Circuito Sustentável** é um site desenvolvido para ensinar as pessoas sobre o descarte correto de lixo eletrônico e fornecer informações sobre pontos de coleta próximos. Este projeto foi desenvolvido por alunos de Ciência da Computação da UNIFOR na disciplina de Projeto de Tecnologia Intercursos.

## Características

- 📱 **Mobile-First**: Otimizado para smartphones
- 🗺️ **Mapa Interativo**: Visualize os pontos de coleta usando Leaflet.js e OpenStreetMap
- 🔍 **Sistema de QR Code**: Escaneie QR codes em cada ponto de coleta para ver sua localização
- 📚 **Conteúdo Educativo**: Informações detalhadas sobre como e por que reciclar cada tipo de eletrônico
- 🌍 **Impacto Ambiental**: Conscientização sobre os benefícios da reciclagem eletrônica

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

### Sistema de QR Code

O site suporta parâmetros de URL para destacar localizações específicas:

- `?location=libanio` - Destaca Padaria O Libanio
- `?location=cordeiro` - Destaca Padaria O Cordeiro
- `?location=cicero` - Destaca Padaria Cicero

Exemplo: `https://seu-site.github.io/site-reciclagem/?location=libanio`

### Gerando QR Codes

Você pode gerar QR codes usando sites gratuitos como:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- [QR.io](https://qr.io/)

URLs para gerar:
1. `https://seu-usuario.github.io/site-reciclagem/?location=libanio`
2. `https://seu-usuario.github.io/site-reciclagem/?location=cordeiro`
3. `https://seu-usuario.github.io/site-reciclagem/?location=cicero`

## Hospedagem no GitHub Pages

### Passo a Passo

1. **Crie um repositório no GitHub**:
   - Vá para https://github.com/new
   - Nome: `site-reciclagem`
   - Visibilidade: Público
   - Clique em "Create repository"

2. **Envie o código para o GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: Circuito Sustentável website"
git branch -M main
git remote add origin https://github.com/seu-usuario/site-reciclagem.git
git push -u origin main
```

3. **Ative o GitHub Pages**:
   - Vá para Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Clique em "Save"

4. **Acesse seu site**:
   - URL: `https://seu-usuario.github.io/site-reciclagem/`
   - O site estará disponível em alguns minutos

### Atualizações

Para atualizar o site:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Pages atualizará automaticamente em poucos minutos.

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

### Mudar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --color-dark-green: #0d3d30;
    --color-bright-green: #00ff88;
    /* ... */
}
```

## Performance

- ✅ Site estático (carregamento rápido)
- ✅ Sem dependência de backend
- ✅ CDN para Leaflet.js
- ✅ Otimizado para dispositivos móveis
- ✅ Compatível com conexões lentas

## Compatibilidade

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Navegadores móveis modernos

## Contribuindo

Este é um projeto educacional. Sugestões e melhorias são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto é educacional e foi desenvolvido para a disciplina de Projeto de Tecnologia Intercursos na UNIFOR.

## Autores

**ResTech** - Alunos de Ciência da Computação da UNIFOR

## Contato

Para mais informações sobre pontos de coleta e reciclagem de eletrônicos, entre em contato com os locais listados.

---

**Ajude o meio ambiente!** Evite a contaminação do solo e da água e colabore para a reciclagem de materiais valiosos. 🌍♻️

