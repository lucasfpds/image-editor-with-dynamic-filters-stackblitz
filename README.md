# Editor de Imagens com Filtros Dinâmicos

Uma aplicação web moderna para edição de imagens com filtros em tempo real, construída com Next.js 14, TypeScript e Tailwind CSS.

## ✨ Características

- **Filtros em Tempo Real**: Aplique filtros instantaneamente enquanto ajusta os controles
- **Interface Intuitiva**: Design moderno e responsivo com controles deslizantes
- **Upload por Drag & Drop**: Interface fácil para carregar imagens
- **Exportação de Alta Qualidade**: Baixe suas imagens editadas em alta resolução
- **Filtros Disponíveis**:
  - Brilho
  - Contraste
  - Saturação
  - Matiz (Hue)
  - Desfoque
  - Escala de Cinza
  - Sépia

## 🚀 Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Estilização utilitária moderna
- **React Dropzone**: Upload de arquivos por drag & drop
- **HTML2Canvas**: Captura e exportação de imagens
- **File-saver**: Download de arquivos processados

## 🛠️ Instalação e Uso

1. **Clone o repositório**:
```bash
git clone <url-do-repositorio>
cd image-editor-with-dynamic-filters
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**:
```bash
npm run dev
```

4. **Abra no navegador**:
Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
src/
├── app/                 # Next.js App Router
├── components/          # Componentes React reutilizáveis
│   ├── ImageEditor.tsx  # Componente principal do editor
│   ├── ImageUploader.tsx # Componente de upload
│   ├── ImagePreview.tsx # Preview da imagem com filtros
│   └── FilterControls.tsx # Controles de filtros
├── hooks/               # Hooks customizados
│   ├── useImageFilters.ts # Gerenciamento de filtros
│   └── useImageManager.ts # Gerenciamento de imagens
├── types/               # Definições TypeScript
├── utils/               # Utilitários e configurações
└── styles/              # Estilos globais
```

## 🎨 Como Usar

1. **Carregar Imagem**: Arraste uma imagem para a área de upload ou clique para selecionar
2. **Aplicar Filtros**: Use os controles deslizantes no painel lateral para ajustar os filtros
3. **Preview em Tempo Real**: Veja as mudanças instantaneamente na imagem
4. **Resetar**: Use o botão "Resetar" para voltar aos valores originais
5. **Exportar**: Clique em "Baixar Imagem" para salvar a versão editada

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktop
- Tablet
- Mobile

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
