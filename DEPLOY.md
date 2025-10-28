# Guia de Deploy - Circuito Sustentável

Este guia fornece instruções detalhadas para fazer deploy do site no GitHub Pages.

## Pré-requisitos

- Conta no GitHub (gratuita): https://github.com/signup
- Git instalado no seu computador

## Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Configure o repositório:
   - **Repository name**: `site-reciclagem`
   - **Description**: "Site educativo sobre reciclagem de lixo eletrônico"
   - **Visibilidade**: Public (necessário para GitHub Pages gratuito)
   - **NÃO** marque "Initialize this repository with a README"
4. Clique em "Create repository"

## Passo 2: Configurar Git Localmente

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Circuito Sustentável website"

# Renomear branch para main
git branch -M main

# Adicionar repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/site-reciclagem.git

# Enviar código para GitHub
git push -u origin main
```

**Nota**: Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

## Passo 3: Ativar GitHub Pages

1. No seu repositório no GitHub, clique em **Settings** (Configurações)
2. No menu lateral esquerdo, clique em **Pages**
3. Em "Source", selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em **Save**

## Passo 4: Aguardar Deploy

- O GitHub começará a fazer deploy do site automaticamente
- Isso pode levar de 1 a 5 minutos
- Quando estiver pronto, você verá um banner verde com a URL do site

## Passo 5: Acessar o Site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/site-reciclagem/
```

## Gerar QR Codes para os Pontos de Coleta

Agora que o site está no ar, gere QR codes para cada ponto de coleta:

### URLs para QR Codes

1. **Padaria O Libanio**:
   ```
   https://SEU-USUARIO.github.io/site-reciclagem/?location=libanio
   ```

2. **Padaria O Cordeiro**:
   ```
   https://SEU-USUARIO.github.io/site-reciclagem/?location=cordeiro
   ```

3. **Padaria Cicero**:
   ```
   https://SEU-USUARIO.github.io/site-reciclagem/?location=cicero
   ```

### Sites para Gerar QR Codes (Gratuitos)

1. **QR Code Generator**: https://www.qr-code-generator.com/
   - Cole a URL
   - Escolha o tamanho (recomendado: 300x300px ou maior)
   - Baixe o QR code

2. **QRCode Monkey**: https://www.qrcode-monkey.com/
   - Cole a URL
   - Personalize as cores (use verde: #00ff88)
   - Baixe em alta qualidade

3. **QR Code Generator via API** (Python):
   ```python
   import qrcode
   
   urls = {
       'libanio': 'https://SEU-USUARIO.github.io/site-reciclagem/?location=libanio',
       'cordeiro': 'https://SEU-USUARIO.github.io/site-reciclagem/?location=cordeiro',
       'cicero': 'https://SEU-USUARIO.github.io/site-reciclagem/?location=cicero'
   }
   
   for name, url in urls.items():
       qr = qrcode.QRCode(version=1, box_size=10, border=5)
       qr.add_data(url)
       qr.make(fit=True)
       img = qr.make_image(fill_color="black", back_color="white")
       img.save(f'qrcode_{name}.png')
   ```

## Atualizar o Site

Quando fizer mudanças no código:

```bash
# Adicionar arquivos modificados
git add .

# Criar commit com mensagem descritiva
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

O GitHub Pages atualizará automaticamente em alguns minutos.

## Verificar Status do Deploy

1. Vá para a aba **Actions** no seu repositório
2. Você verá o histórico de deploys
3. Um check verde ✓ indica que o deploy foi bem-sucedido

## Solução de Problemas

### Site não carrega

- Aguarde 5-10 minutos após ativar GitHub Pages
- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
- Verifique se o repositório é público

### Mapa não aparece

- Abra o Console do navegador (F12)
- Verifique se há erros de JavaScript
- Confirme que `data/locations.js` foi enviado corretamente

### QR Code não funciona

- Teste a URL diretamente no navegador
- Verifique se o parâmetro `?location=` está correto
- Regere o QR code se necessário

## Configurações Opcionais

### Domínio Personalizado (Opcional)

Se você tiver um domínio próprio:

1. Em Settings → Pages
2. Em "Custom domain", adicione seu domínio
3. Configure os DNS conforme instruções do GitHub

### HTTPS

O GitHub Pages fornece HTTPS automaticamente. Sempre use URLs com `https://`.

## Custos

- ✅ GitHub Pages: **GRATUITO**
- ✅ OpenStreetMap: **GRATUITO**
- ✅ Leaflet.js: **GRATUITO**
- ✅ Hospedagem: **GRATUITO**

**Total: R$ 0,00 / mês**

## Limites do GitHub Pages

- Tamanho do repositório: 1 GB (mais que suficiente)
- Largura de banda: 100 GB/mês
- Builds: 10 por hora

Para um site de pequeno porte como este, os limites são mais que adequados.

## Monitoramento

Para ver quantas pessoas acessam o site:

1. Use Google Analytics (gratuito)
2. Ou veja "Traffic" na aba Insights do GitHub (dados básicos)

## Próximos Passos

- [ ] Imprimir QR codes e colocar nos pontos de coleta
- [ ] Testar o site em diferentes smartphones
- [ ] Compartilhar o link nas redes sociais
- [ ] Coletar feedback dos usuários
- [ ] Atualizar coordenadas GPS se necessário

## Suporte

Se encontrar problemas:
- Consulte a documentação do GitHub Pages: https://docs.github.com/pages
- Verifique o README.md do projeto
- Revise os logs na aba Actions do GitHub

---

**Parabéns!** Seu site está no ar e pronto para ajudar as pessoas a reciclar corretamente! 🎉🌱

