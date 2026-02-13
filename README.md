# Obsidian Bio Experience - Link-in-Bio de Alta Performance

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Sobre

Uma experiência premium de Link-in-Bio desenvolvida para o Obsidian Auto Studio, apresentando um layout sofisticado Bento Grid com efeitos de glassmorphism e micro-interações avançadas. Construído com arquitetura mobile-first e otimizado para alta performance.

### Destaques Técnicos

- **Layout Bento Grid**: Design baseado em cards assimétricos quebrando padrões tradicionais de bio link
- **Stagger Animations**: Aparição sequencial de cards com física de mola para sensação premium
- **Slider Interativo**: Componente de comparação Antes/Depois com suporte touch e mouse
- **Compatível WCAG AA**: Navegação completa por teclado, aria-labels e estados de foco
- **Mobile-First**: Tipografia responsiva usando CSS clamp(), touch targets mínimos de 44px
- **Otimizado para Performance**: Animações a 60fps, lazy loading, tamanho de bundle otimizado
- **Integração vCard**: Salvamento de contato com um clique e integração nativa com dispositivo

### Arquitetura

```
ObsidianBio.tsx
├── ComparisonSlider Component (Antes/Depois interativo)
├── Stagger Animation System (Variantes do Framer Motion)
├── Toast Notification (Feedback visual)
└── Responsive Bento Grid (Layout adaptativo 2 colunas)
```

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/IsaqueCodeX/obsidian-bio-experience.git
cd obsidian-bio-experience
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## Build

Gere o build de produção:

```bash
npm run build
```

Visualize o build de produção localmente:

```bash
npm run preview
```

## Stack Tecnológico

- **React 18.2** - Framework UI
- **TypeScript 5.2** - Segurança de Tipos
- **Vite 5.0** - Build Tool e Dev Server
- **Tailwind CSS 3.4** - Estilização Utility-First
- **Framer Motion 10.16** - Biblioteca de Animação
- **Lucide React** - Sistema de Ícones

## Estrutura do Projeto

```
src/
├── main.tsx           # Ponto de entrada da aplicação
├── index.css          # Estilos globais e diretivas Tailwind
ObsidianBio.tsx        # Componente principal Bio
package.json           # Dependências e scripts
vite.config.ts         # Configuração do Vite
tailwind.config.js     # Customização do Tailwind
```

## Funcionalidades

### Acessibilidade

- Suporte completo à navegação por teclado
- Taxas de contraste WCAG AA
- Compatível com leitores de tela via aria-labels
- Estados de foco visíveis em todos os elementos interativos

### Design Responsivo

- Abordagem mobile-first
- Tipografia adaptativa (16px-32px)
- Interações otimizadas para touch
- Testado de iPhone SE até Desktop 4K

### Performance

- Animações a 60fps via aceleração GPU
- Tamanho de bundle otimizado
- Recursos carregados com lazy loading
- Re-renderizações eficientes com otimização React

## Customização

Edite o objeto `DATA` em `ObsidianBio.tsx`:

```tsx
const DATA = {
  name: "Nome do Seu Negócio",
  role: "Seu Slogan",
  address: "Seu Endereço",
  whatsapp: "5511999999999",
  instagram: "@seu.perfil",
  videoBg: "url-do-seu-video.mp4"
};
```

## Licença

Este projeto é open source e está disponível sob a Licença MIT.

## Autor

**Isaque Santos**

- GitHub: [https://github.com/IsaqueCodeX](https://github.com/IsaqueCodeX)
- Portfolio: [https://isaquesantosdev.com](https://isaquesantosdev.com)
- LinkedIn: [https://www.linkedin.com/in/isaque-santos-720b8b15a](https://www.linkedin.com/in/isaque-santos-720b8b15a)

---

Construído com precisão e performance em mente. 2026.
