# Guia Rápido - Circuito Sustentável

## ✅ O Que Foi Criado

Seu site está completamente funcional e inclui:

1. **Página Principal** (`index.html`)
   - Hero section com logo e tagline
   - Navegação sticky
   - Mapa interativo
   - Conteúdo educativo expandível
   - Seção de impacto ambiental
   - Footer com créditos

2. **Estilos** (`css/styles.css`)
   - Tema verde inspirado no poster
   - Design mobile-first
   - Animações suaves
   - Totalmente responsivo

3. **Funcionalidades JavaScript**
   - `js/map.js`: Mapa interativo com Leaflet
   - `js/main.js`: Cards expandíveis e navegação suave
   - `data/locations.js`: Dados dos 3 pontos de coleta

4. **Documentação**
   - `README.md`: Documentação completa do projeto
   - `DEPLOY.md`: Guia detalhado de deploy no GitHub Pages
   - `.gitignore`: Configurado para Git

## 🚀 Como Testar Localmente

O servidor já está rodando! Abra seu navegador e acesse:

```
http://localhost:8000
```

### Testar com QR Code Simulation

Teste as diferentes localizações adicionando parâmetros à URL:

- **Padaria O Libanio**: http://localhost:8000/?location=libanio
- **Padaria O Cordeiro**: http://localhost:8000/?location=cordeiro
- **Padaria Cicero**: http://localhost:8000/?location=cicero

## 📱 Como Testar em Smartphone

### Opção 1: Mesmo WiFi
1. Descubra o IP do seu computador:
   ```bash
   hostname -I | awk '{print $1}'
   ```
2. No smartphone, acesse: `http://SEU_IP:8000`

### Opção 2: DevTools
No navegador, pressione F12 e use o modo responsivo para simular diferentes dispositivos.

## 🎯 Próximos Passos

### 1. Ajustar Coordenadas GPS (Opcional mas Recomendado)

As coordenadas em `data/locations.js` são aproximadas. Para maior precisão:

1. Use o Google Maps para encontrar cada endereço
2. Clique com botão direito no mapa → "O que há aqui?"
3. Copie as coordenadas
4. Atualize `data/locations.js`:

```javascript
libanio: {
    lat: -3.7327,  // ← Substitua pela coordenada real
    lng: -38.5267, // ← Substitua pela coordenada real
    // ...
}
```

### 2. Deploy no GitHub Pages

Siga as instruções em `DEPLOY.md` ou este resumo rápido:

```bash
# 1. Criar repositório no GitHub (via interface web)

# 2. Enviar código
git init
git add .
git commit -m "Initial commit: Circuito Sustentável"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/site-reciclagem.git
git push -u origin main

# 3. Ativar GitHub Pages nas configurações do repositório
```

### 3. Gerar QR Codes

Após o deploy, gere QR codes para estas URLs:
- `https://SEU-USUARIO.github.io/site-reciclagem/?location=libanio`
- `https://SEU-USUARIO.github.io/site-reciclagem/?location=cordeiro`
- `https://SEU-USUARIO.github.io/site-reciclagem/?location=cicero`

Use: https://www.qr-code-generator.com/

### 4. Imprimir e Distribuir

Imprima os QR codes e coloque-os nos respectivos pontos de coleta.

## 🎨 Customizações Rápidas

### Mudar Cores

Edite `css/styles.css`, linha 8-17:

```css
:root {
    --color-dark-green: #0d3d30;    /* Fundo escuro */
    --color-bright-green: #00ff88;  /* Verde brilhante */
    /* ... */
}
```

### Adicionar Mais Itens Recicláveis

Edite `index.html` e adicione novos cards na seção "O QUE RECEBEMOS".

### Adicionar Novos Pontos de Coleta

Adicione novos pontos em `data/locations.js`:

```javascript
novolocal: {
    id: 'novolocal',
    name: 'Nome do Local',
    address: 'Endereço Completo',
    lat: -3.7400,
    lng: -38.5100,
    description: 'Descrição',
    hours: 'Horário de funcionamento'
}
```

## 🐛 Solução de Problemas

### Mapa não carrega
- Verifique sua conexão com internet (Leaflet precisa carregar)
- Veja o console do navegador (F12) para erros

### Cards não expandem
- Verifique se `js/main.js` está carregando corretamente
- Veja o console do navegador para erros JavaScript

### Estilos quebrados
- Confirme que `css/styles.css` existe e está correto
- Limpe o cache do navegador (Ctrl+Shift+R)

## 📊 Estrutura de Arquivos

```
site-reciclagem/
├── index.html              ← Página principal
├── css/
│   └── styles.css         ← Todos os estilos
├── js/
│   ├── map.js            ← Lógica do mapa
│   └── main.js           ← Interatividade
├── data/
│   └── locations.js      ← Pontos de coleta
├── assets/
│   └── images/           ← Adicione imagens aqui (se necessário)
├── README.md             ← Documentação completa
├── DEPLOY.md             ← Guia de deploy
├── QUICK_START.md        ← Este arquivo
└── .gitignore            ← Configuração Git
```

## ✨ Características Implementadas

- [x] Design mobile-first responsivo
- [x] Tema verde do poster original
- [x] Mapa interativo com OpenStreetMap
- [x] Sistema de QR codes com parâmetros de URL
- [x] 9 itens recicláveis com informações detalhadas
- [x] Cards expandíveis
- [x] Navegação suave
- [x] Cálculo de distâncias entre pontos
- [x] Seção de impacto ambiental
- [x] Footer com créditos
- [x] Animações e transições
- [x] 100% gratuito para hospedar

## 💡 Dicas

1. **Performance**: Site é super leve (< 100 KB total)
2. **SEO**: Já tem meta tags básicas
3. **Acessibilidade**: Estrutura semântica com HTML5
4. **Manutenção**: Fácil de atualizar (apenas arquivos estáticos)

## 📞 Precisa de Ajuda?

Consulte:
- `README.md` - Documentação técnica completa
- `DEPLOY.md` - Guia detalhado de deploy
- Console do navegador (F12) - Para debug

---

**Seu site está pronto!** 🎉

Agora é só testar, fazer deploy e começar a ajudar o meio ambiente! 🌱♻️

