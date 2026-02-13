import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Instagram, ArrowRight, ShieldCheck, Download, Sparkles, Car } from 'lucide-react';

// --- CONFIGURAÇÃO DE DADOS (Edite aqui) ---
const DATA = {
  name: "Obsidian Auto Studio",
  role: "Estética Automotiva Premium",
  address: "Av. Europa, 1500 - Jardins, SP",
  whatsapp: "5511999999999",
  instagram: "@obsidian.studio",
  // Vídeo de fundo (Dark Abstract Flow - Leve e Loopável)
  videoBg: "https://videos.pexels.com/video-files/2516159/2516159-hd_1920_1080_24fps.mp4",
};

// --- COMPONENTE: SLIDER ANTES/DEPOIS ---
const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const isDragging = React.useRef(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  // Navegação por teclado
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setSliderPosition(prev => Math.max(0, prev - 5));
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      setSliderPosition(prev => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={sliderRef}
      tabIndex={0}
      role="slider"
      aria-label="Comparação Antes e Depois"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderPosition)}
      className={`relative w-full h-32 rounded-xl overflow-hidden select-none border transition-all ${isDragging.current ? 'cursor-grabbing border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]' :
        isHovering ? 'cursor-grab border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]' :
          'cursor-col-resize border-white/10 shadow-inner'
        }`}
      onMouseDown={() => isDragging.current = true}
      onTouchStart={() => isDragging.current = true}
      onMouseUp={() => isDragging.current = false}
      onTouchEnd={() => isDragging.current = false}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        isDragging.current = false;
        setIsHovering(false);
      }}
      onKeyDown={handleKeyDown}
    >
      {/* IMAGEM DEPOIS (Fundo - Espelhado) */}
      <img
        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop"
        alt="Depois"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs text-green-400 font-bold border border-green-500/40 shadow-lg">
        PADRÃO OBSIDIAN
      </div>

      {/* IMAGEM ANTES (Sobreposta - Riscada) */}
      <div
        className="absolute inset-0 h-full overflow-hidden border-r-2 border-blue-500"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src="https://images.unsplash.com/photo-1533106958155-d7d553434eb2?q=80&w=800&auto=format&fit=crop"
          alt="Antes"
          className="h-full object-cover"
          style={{ width: '100vw', maxWidth: 'none' }}
        />
        <div className="absolute inset-0 bg-zinc-900/60"></div>
        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs text-red-400 font-bold border border-red-500/40 shadow-lg">
          ANTES
        </div>
      </div>

      {/* HANDLE (O Controlador) - Com indicador visual de drag */}
      <div
        className={`absolute top-0 bottom-0 w-1 z-10 flex items-center justify-center transition-all ${isDragging.current ? 'bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,1)]' :
          isHovering ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.9)]' :
            'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]'
          }`}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={`w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${isDragging.current ? 'scale-110' : isHovering ? 'scale-105' : 'scale-100'
          }`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Tooltip de teclado quando focado */}
      {isHovering && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-[10px] text-white/80 pointer-events-none">
          ← → para navegar
        </div>
      )}
    </div>
  );
};

// --- VARIANTES DE ANIMAÇÃO (Stagger) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// --- COMPONENTE PRINCIPAL ---
export default function ObsidianBio() {
  const [showToast, setShowToast] = React.useState(false);

  // Função vCard (Salvar Contato)
  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${DATA.name}
ORG:${DATA.role}
TEL;TYPE=WORK,VOICE:${DATA.whatsapp}
ADR;TYPE=WORK:;;${DATA.address};;;;
URL:https://instagram.com/${DATA.instagram.replace('@', '')}
END:VCARD`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Contato_Obsidian.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Toast feedback
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 flex items-center justify-center p-4 relative overflow-hidden font-sans">

      {/* GRADIENT ANIMADO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#050505] to-blue-600/10 animate-gradient-shift"></div>
      </div>

      {/* PARTÍCULAS FLUTUANTES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* 1. BACKGROUND VIDEO (Cinemagraph) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover grayscale brightness-50"
          poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop"
        >
          <source src={DATA.videoBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
      </div>

      {/* 2. CONTAINER PRINCIPAL (Glassmorphism) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-md flex flex-col gap-4"
      >

        {/* HEADER */}
        <div className="text-center flex flex-col items-center mb-2">
          <div className="relative w-28 h-28 mb-4">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-pulse"></div>
            <img
              src="/src/logo.svg"
              alt="Logo Obsidian"
              className="w-full h-full rounded-full object-cover border-4 border-black shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            />
            <div className="absolute bottom-1 right-1 bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full text-white border border-black flex items-center gap-1">
              <ShieldCheck size={10} /> 9H CERTIFIED
            </div>
          </div>
          <h1 className="text-[clamp(1.5rem,5vw,2rem)] font-bold text-white tracking-wide">{DATA.name}</h1>
          <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
            <MapPin size={12} className="text-blue-500" /> {DATA.address}
          </p>
        </div>

        {/* BENTO GRID (O Layout Diferenciado) */}
        <div className="grid grid-cols-2 gap-3">

          {/* BLOCO 1: ORÇAMENTO (Principal - Ocupa 2 colunas) */}
          <motion.a
            href={`https://wa.me/${DATA.whatsapp}?text=Olá,%20gostaria%20de%20um%20orçamento%20Obsidian.`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            aria-label="Solicitar orçamento via WhatsApp"
            className="col-span-2 bg-gradient-to-r from-blue-900/40 to-blue-600/20 backdrop-blur-xl border border-blue-500/30 p-5 rounded-2xl flex items-center justify-between group cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.15)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            <div>
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <Sparkles size={18} className="text-blue-400" />
                Orçamento VIP
              </h2>
              <p className="text-xs text-blue-200/70 mt-1">Atendimento prioritário via WhatsApp</p>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-400 transition-colors">
              <ArrowRight className="text-black" size={20} />
            </div>
          </motion.a>

          {/* BLOCO 2: ANTES E DEPOIS (Visual - Ocupa 2 colunas) */}
          <motion.div
            variants={cardVariants}
            className="col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl"
          >
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-xs font-semibold text-gray-300 flex items-center gap-1">
                <Car size={12} /> A Transformação
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">Arraste para ver</span>
            </div>
            <ComparisonSlider />
          </motion.div>

          {/* BLOCO 3: SALVAR CONTATO (vCard) */}
          <motion.button
            onClick={handleSaveContact}
            variants={cardVariants}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Salvar contato do Obsidian Auto Studio"
            className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            <Download size={24} className="text-gray-400" />
            <span className="text-xs font-medium text-gray-300">Salvar Contato</span>
          </motion.button>

          {/* BLOCO 4: LOCALIZAÇÃO (Waze) */}
          <motion.a
            href="https://waze.com/ul"
            variants={cardVariants}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Abrir localização no Waze"
            className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            <MapPin size={24} className="text-gray-400" />
            <span className="text-xs font-medium text-gray-300">Ir com Waze</span>
          </motion.a>

          {/* BLOCO 5: INSTAGRAM (Full Width) */}
          <motion.a
            href={`https://instagram.com/${DATA.instagram.replace('@', '')}`}
            variants={cardVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            aria-label="Seguir Obsidian Auto Studio no Instagram"
            className="col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-2 cursor-pointer hover:border-pink-500/30 transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            <Instagram size={18} className="text-pink-400" />
            <span className="text-sm font-medium text-gray-300">Siga nosso Portfólio Diário</span>
          </motion.a>

        </div>

        {/* TOAST NOTIFICATION */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <ShieldCheck size={20} />
            <span className="font-medium">Contato salvo com sucesso!</span>
          </motion.div>
        )}

        {/* FOOTER */}
        <div className="text-center mt-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">Obsidian Auto Studio © 2026</p>
        </div>

      </motion.div>
    </div>
  );
}
