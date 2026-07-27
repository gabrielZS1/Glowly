import './App.css'

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  UserCircle2,
  LayoutGrid,
  Store,
  TrendingUp,
  Check,
  ChevronDown,
  Mail,
  Star,
  ArrowRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Design tokens (see brief: amarelo #F6C344 / preto #0D0D0D / branco)*/
/* ------------------------------------------------------------------ */
const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');

:root{
  --glowly-yellow:#F6C344;
  --glowly-yellow-soft:#FCE3A6;
  --glowly-black:#0D0D0D;
  --glowly-white:#FFFFFF;
  --glowly-ink:#6B6B70;
  --glowly-bg:#FAF9F6;
  --glowly-border:#ECEAE4;
}
.font-display{ font-family:'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
.font-body{ font-family:'Inter', ui-sans-serif, system-ui, sans-serif; }
html{ scroll-behavior:smooth; }

.glow-halo{
  position:absolute;
  border-radius:9999px;
  background:radial-gradient(circle, rgba(246,195,68,0.55) 0%, rgba(246,195,68,0.0) 70%);
  filter:blur(40px);
  pointer-events:none;
}
.glow-ring{
  box-shadow:0 0 0 0 rgba(246,195,68,0);
  transition:box-shadow .4s ease, transform .4s ease;
}
.glow-ring:hover{
  box-shadow:0 0 40px 6px rgba(246,195,68,0.35);
  transform:translateY(-4px);
}
@media (prefers-reduced-motion: reduce){
  *{ animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important; scroll-behavior:auto !important; }
}
`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Vantagens", href: "#vantagens" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[var(--glowly-border)] bg-white/60 backdrop-blur-xl px-5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
          <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-lg tracking-tight text-[var(--glowly-black)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--glowly-black)]">
              <Sparkles className="h-4 w-4 text-[var(--glowly-yellow)]" strokeWidth={2.5} />
            </span>
            Glowly
          </a>

          <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-[var(--glowly-black)]/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--glowly-black)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#parceiros"
              className="font-body inline-flex items-center gap-1.5 rounded-full bg-[var(--glowly-yellow)] px-5 py-2.5 text-sm font-semibold text-[var(--glowly-black)] glow-ring"
            >
              Primeiros Parceiros
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-[var(--glowly-border)] bg-white p-5 font-body shadow-lg">
            <div className="flex flex-col gap-4 text-sm font-medium text-[var(--glowly-black)]/80">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a
                href="#parceiros"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--glowly-yellow)] px-5 py-3 text-sm font-semibold text-[var(--glowly-black)]"
              >
                Primeiros Parceiros
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero — phone mockup illustration built from primitives             */
/* ------------------------------------------------------------------ */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="glow-halo h-72 w-72 -top-6 -right-6" />
      <div className="glow-halo h-56 w-56 bottom-0 -left-10" />

      {/* phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[var(--glowly-black)] bg-[var(--glowly-black)] shadow-2xl">
        <div className="rounded-[2.1rem] overflow-hidden bg-white">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 font-body text-[11px] text-[var(--glowly-black)]/60">
            <span>9:41</span>
            <span className="h-2.5 w-16 rounded-full bg-[var(--glowly-black)]/10" />
          </div>

          {/* app header */}
          <div className="px-6 pt-2 pb-4">
            <p className="font-body text-xs text-[var(--glowly-ink)]">Bom dia ✨</p>
            <p className="font-display text-lg font-bold text-[var(--glowly-black)]">Encontre seu profissional</p>
          </div>

          {/* search pill */}
          <div className="mx-6 mb-4 flex items-center gap-2 rounded-full border border-[var(--glowly-border)] bg-[var(--glowly-bg)] px-4 py-2.5">
            <MapPin className="h-3.5 w-3.5 text-[var(--glowly-black)]/40" />
            <span className="font-body text-xs text-[var(--glowly-black)]/40">Perto de você</span>
          </div>

          {/* establishment cards */}
          <div className="px-6 pb-6 flex flex-col gap-3">
            {[
              { name: "Studio Bela Vista", tag: "Cabelo & Coloração", rating: "4.9" },
              { name: "Barbearia Nobre", tag: "Corte & Barba", rating: "4.8" },
              { name: "Nail Lab", tag: "Manicure & Nail Art", rating: "5.0" },
            ].map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3 rounded-2xl border border-[var(--glowly-border)] p-3"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-[var(--glowly-yellow-soft)] flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-[var(--glowly-black)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[13px] font-semibold text-[var(--glowly-black)] truncate">{card.name}</p>
                  <p className="font-body text-[11px] text-[var(--glowly-ink)] truncate">{card.tag}</p>
                </div>
                <div className="flex items-center gap-1 font-body text-[11px] font-semibold text-[var(--glowly-black)]">
                  <Star className="h-3 w-3 fill-[var(--glowly-yellow)] text-[var(--glowly-yellow)]" />
                  {card.rating}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* floating booking chip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute -left-8 top-16 hidden sm:flex items-center gap-2 rounded-2xl bg-white border border-[var(--glowly-border)] px-4 py-3 shadow-xl"
      >
        <Calendar className="h-4 w-4 text-[var(--glowly-black)]" />
        <div>
          <p className="font-body text-[11px] font-semibold text-[var(--glowly-black)]">Agendado!</p>
          <p className="font-body text-[10px] text-[var(--glowly-ink)]">Hoje, 15:30</p>
        </div>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--glowly-black)]/5 px-4 py-1.5 font-body text-xs font-medium text-[var(--glowly-black)]/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--glowly-yellow)]" />
            Programa de Primeiros Parceiros aberto
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-[var(--glowly-black)]">
            Conectando clientes aos melhores profissionais da{" "}
            <span className="relative inline-block">
              beleza
              <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,7 Q100,-3 200,7" stroke="#F6C344" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>

          <p className="font-body mt-6 text-base sm:text-lg text-[var(--glowly-ink)] max-w-xl leading-relaxed">
            A Glowly é uma plataforma que reúne barbearias, salões de beleza, manicures, estúdios de estética e
            outros profissionais em um só lugar, facilitando agendamentos e aumentando a visibilidade dos
            estabelecimentos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#parceiros"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full bg-[var(--glowly-yellow)] px-7 py-4 text-sm font-semibold text-[var(--glowly-black)] glow-ring"
            >
              Fazer parte dos Primeiros Parceiros
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#vantagens"
              className="font-body inline-flex items-center justify-center gap-2 rounded-full bg-[var(--glowly-black)] px-7 py-4 text-sm font-semibold text-white hover:bg-[var(--glowly-black)]/90 transition-colors"
            >
              Saiba mais
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 font-body">
            <div>
              <p className="font-display text-2xl font-extrabold text-[var(--glowly-black)]">100%</p>
              <p className="text-xs text-[var(--glowly-ink)]">Focado em beleza</p>
            </div>
            <div className="h-8 w-px bg-[var(--glowly-border)]" />
            <div>
              <p className="font-display text-2xl font-extrabold text-[var(--glowly-black)]">2026</p>
              <p className="text-xs text-[var(--glowly-ink)]">Lançamento oficial</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Vantagens (6 cards)                                                */
/* ------------------------------------------------------------------ */
function Vantagens() {
  const items = [
    { icon: Calendar, title: "Agendamento Online", text: "Permita que seus clientes agendem horários de forma simples e rápida." },
    { icon: MapPin, title: "Mais Visibilidade", text: "Seu estabelecimento aparece para novos clientes próximos à sua região." },
    { icon: UserCircle2, title: "Perfil Profissional", text: "Apresente seus serviços, horários, fotos e avaliações em um único lugar." },
    { icon: LayoutGrid, title: "Organização", text: "Gerencie seus agendamentos com praticidade." },
    { icon: Store, title: "Marketplace", text: "Faça parte de uma plataforma focada exclusivamente no setor da beleza." },
    { icon: TrendingUp, title: "Crescimento", text: "Aumente sua presença digital e conquiste novos clientes." },
  ];

  return (
    <section id="vantagens" className="py-24 lg:py-32 bg-[var(--glowly-bg)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="max-w-2xl mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--glowly-black)]/40">Vantagens</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--glowly-black)]">
            Por que escolher a Glowly?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="glow-ring rounded-3xl border border-[var(--glowly-border)] bg-white p-8"
            >
              <div className="h-12 w-12 rounded-2xl bg-[var(--glowly-black)] flex items-center justify-center mb-6">
                <it.icon className="h-5 w-5 text-[var(--glowly-yellow)]" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--glowly-black)] mb-2">{it.title}</h3>
              <p className="font-body text-sm text-[var(--glowly-ink)] leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Como funciona (timeline — genuine sequence, numbering justified)   */
/* ------------------------------------------------------------------ */
function ComoFunciona() {
  const steps = [
    { title: "Cadastre seu estabelecimento", text: "Crie seu perfil em minutos com fotos, endereço e especialidades." },
    { title: "Configure seus serviços e horários", text: "Defina preços, duração e disponibilidade de cada atendimento." },
    { title: "Receba agendamentos", text: "Clientes encontram seu perfil e marcam horários direto pelo app." },
    { title: "Atenda seus clientes", text: "Gerencie sua agenda e cresça com avaliações reais." },
  ];

  return (
    <section id="como-funciona" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="max-w-2xl mb-20">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--glowly-black)]/40">Como funciona</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--glowly-black)]">
            Do cadastro ao primeiro cliente
          </h2>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[var(--glowly-border)]" />
          {steps.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="relative">
              <div className="relative z-10 h-12 w-12 rounded-full bg-[var(--glowly-yellow)] text-[var(--glowly-black)] font-display font-extrabold flex items-center justify-center mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-base font-bold text-[var(--glowly-black)] mb-2">{s.title}</h3>
              <p className="font-body text-sm text-[var(--glowly-ink)] leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Parceiros Fundadores (pricing)                                     */
/* ------------------------------------------------------------------ */
function Parceiros() {
  const plans = [
    {
      name: "Parceiro Fundador",
      price: "R$ 19",
      period: "pagamento único",
      features: ["Acesso ao grupo exclusivo", "3 meses gratuitos após o lançamento", "Prioridade no cadastro", "Benefícios exclusivos"],
      cta: "Quero participar",
      link: "https://pay.cakto.com.br/7ogy87g_1005440",
      highlight: false,
    },
    {
      name: "Fundador Premium",
      price: "R$ 49",
      period: "pagamento único",
      features: ["Tudo do plano anterior", "6 meses gratuitos", "Destaque na plataforma durante o lançamento", "Benefícios exclusivos"],
      cta: "Quero ser Premium",
      link: "https://pay.cakto.com.br/wk867db",
      highlight: true,
    },
  ];

  return (
    <section id="parceiros" className="py-24 lg:py-32 bg-[var(--glowly-black)] relative overflow-hidden">
      <div className="glow-halo h-[26rem] w-[26rem] -top-40 left-1/2 -translate-x-1/2 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--glowly-yellow)]">Lançamento</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Faça parte dos Primeiros Parceiros da Glowly
          </h2>
          <p className="font-body mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
            Estamos selecionando estabelecimentos para participar do lançamento oficial da plataforma. Quem
            entrar agora garante benefícios exclusivos e condições especiais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.highlight ? "bg-white border-2 border-[var(--glowly-yellow)]" : "bg-white/5 border border-white/10"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-[var(--glowly-yellow)] px-3.5 py-1 font-body text-[11px] font-bold text-[var(--glowly-black)]">
                  ⭐ Mais escolhido
                </span>
              )}
              <h3 className={`font-display text-lg font-bold ${p.highlight ? "text-[var(--glowly-black)]" : "text-white"}`}>{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`font-display text-4xl font-extrabold ${p.highlight ? "text-[var(--glowly-black)]" : "text-white"}`}>{p.price}</span>
                <span className={`font-body text-xs ${p.highlight ? "text-[var(--glowly-black)]/50" : "text-white/50"}`}>{p.period}</span>
              </div>

              <ul className="mt-8 space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 font-body text-sm ${p.highlight ? "text-[var(--glowly-black)]/80" : "text-white/70"}`}>
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-[var(--glowly-black)]" : "text-[var(--glowly-yellow)]"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-body text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-[var(--glowly-black)] text-white hover:bg-[var(--glowly-black)]/85"
                    : "bg-[var(--glowly-yellow)] text-[var(--glowly-black)] hover:bg-[var(--glowly-yellow-soft)]"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Depoimentos                                                        */
/* ------------------------------------------------------------------ */
function Avatar({ initials, tone }) {
  return (
    <div
      className="h-12 w-12 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0"
      style={{ background: tone === "dark" ? "var(--glowly-black)" : "var(--glowly-yellow-soft)", color: tone === "dark" ? "var(--glowly-yellow)" : "var(--glowly-black)" }}
    >
      {initials}
    </div>
  );
}

function Depoimentos() {
  const list = [
    { name: "Camila Andrade", role: "Studio Bela Vista", initials: "CA", tone: "light", text: "Desde que entrei como Primeira Parceira, a expectativa é ótima. A ideia de ter tudo centralizado em um app feito para o setor de beleza faz total sentido." },
    { name: "Rodrigo Nunes", role: "Barbearia Nobre", initials: "RN", tone: "dark", text: "Gerenciar agenda sempre foi um problema pra gente. A proposta da Glowly de simplificar isso e ainda trazer mais visibilidade é exatamente o que faltava." },
    { name: "Juliana Prado", role: "Nail Lab", initials: "JP", tone: "light", text: "Gostei muito da forma como a plataforma valoriza o perfil do profissional. Já garanti minha vaga como Fundadora Premium." },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="max-w-2xl mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--glowly-black)]/40">Depoimentos</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--glowly-black)]">
            Quem já está por dentro
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <motion.div key={t.name} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="rounded-3xl border border-[var(--glowly-border)] bg-white p-8">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-[var(--glowly-yellow)] text-[var(--glowly-yellow)]" />
                ))}
              </div>
              <p className="font-body text-sm text-[var(--glowly-black)]/80 leading-relaxed mb-8">“{t.text}”</p>
              <div className="flex items-center gap-3">
                <Avatar initials={t.initials} tone={t.tone} />
                <div>
                  <p className="font-body text-sm font-semibold text-[var(--glowly-black)]">{t.name}</p>
                  <p className="font-body text-xs text-[var(--glowly-ink)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-body text-xs text-[var(--glowly-ink)]/60 mt-8 text-center">Depoimentos ilustrativos para fins de demonstração.</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                 */
/* ------------------------------------------------------------------ */
function FAQ() {
  const faqs = [
    { q: "Quando a Glowly será lançada?", a: "Estamos com o lançamento oficial previsto para 2026. Os Primeiros Parceiros terão acesso prioritário assim que a plataforma abrir." },
    { q: "Como funciona o período gratuito?", a: "Ao entrar no programa de Primeiros Parceiros, você garante meses gratuitos de uso assim que a Glowly for lançada, de acordo com o plano escolhido." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Não há fidelidade obrigatória — você pode cancelar sua participação a qualquer momento." },
    { q: "Como funciona a assinatura?", a: "O valor de entrada no programa é único e garante seu lugar entre os Primeiros Parceiros, com os benefícios do plano escolhido aplicados no lançamento." },
    { q: "Meu estabelecimento aparecerá para clientes da minha cidade?", a: "Sim. A busca da Glowly prioriza estabelecimentos próximos ao cliente, aumentando a visibilidade do seu negócio na sua região." },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[var(--glowly-bg)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-14 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--glowly-black)]/40">Dúvidas</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--glowly-black)]">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="rounded-2xl border border-[var(--glowly-border)] bg-white overflow-hidden">
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-body text-sm sm:text-base font-semibold text-[var(--glowly-black)]">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[var(--glowly-black)]/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="font-body text-sm text-[var(--glowly-ink)] leading-relaxed px-6 pb-5">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA final                                                           */
/* ------------------------------------------------------------------ */
function CTAFinal() {
  return (
    <section id="cta-final" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] bg-[var(--glowly-black)] px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          <div className="glow-halo h-80 w-80 -top-20 -right-10" />
          <div className="glow-halo h-64 w-64 -bottom-20 -left-10" />
          <h2 className="relative font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl mx-auto">
            Seu estabelecimento merece estar onde os clientes procuram.
          </h2>
          <p className="relative font-body mt-6 text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Entre para os Primeiros Parceiros da Glowly e participe da construção da plataforma desde o início.
          </p>
          <a
            href="https://pay.cakto.com.br/7ogy87g_1005440"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--glowly-yellow)] px-9 py-4 font-body text-sm sm:text-base font-bold text-[var(--glowly-black)] glow-ring"
          >
            Quero fazer parte da Glowly
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                               */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="bg-[var(--glowly-black)] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 pb-10 border-b border-white/10">
          <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-lg text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--glowly-yellow)]">
              <Sparkles className="h-4 w-4 text-[var(--glowly-black)]" strokeWidth={2.5} />
            </span>
            Glowly
          </a>

          <div className="flex flex-wrap gap-x-10 gap-y-4 font-body text-sm text-white/60">
        
            <a href="mailto:contato@glowly.com" className="flex items-center gap-2 hover:text-[var(--glowly-yellow)] transition-colors">
              <Mail className="h-4 w-4" /> contato@glowly.com
            </a>
            <a href="#" className="hover:text-[var(--glowly-yellow)] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[var(--glowly-yellow)] transition-colors">Termos de Uso</a>
          </div>
        </div>

        <p className="font-body text-xs text-white/30 pt-8">© {new Date().getFullYear()} Glowly. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                  */
/* ------------------------------------------------------------------ */
export default function GlowlySite() {
  return (
    <div className="font-body bg-white text-[var(--glowly-black)] antialiased">
      <style>{FONT_IMPORT}</style>
      <Navbar />
      <main>
        <Hero />
        <Vantagens />
        <ComoFunciona />
        <Parceiros />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}