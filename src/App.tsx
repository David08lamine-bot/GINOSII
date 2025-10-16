import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Glow viola più deciso in alto a sinistra */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(600px circle at 40% 40%, rgba(155, 78, 255, 0.45), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* HERO */}
      <header className="relative z-10 flex flex-col items-center pt-24 pb-10 px-6">
        {/* SOLO il titolo testuale (niente immagine duplicata) */}
        <div className="mb-6">
          <span className="inline-block rounded-md bg-white/5 px-4 py-2 text-3xl md:text-4xl font-semibold tracking-widest shadow-[0_0_60px_rgba(155,78,255,0.35)]">
            GINO’S II
          </span>
        </div>

        {/* Titolo e descrizione statuto */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          GINO’S II
        </h1>
        <p className="max-w-3xl text-center text-neutral-300 leading-relaxed">
          L’association a pour objet de promouvoir, soutenir et organiser des
          événements culturels et artistiques centrés sur les cultures queer, les
          danses issues du mouvement waacking, et les formes d&apos;expression
          issues des communautés marginalisées.
        </p>

        <p className="mt-4 text-sm text-neutral-500">
          SIRET 990 923 252 00011 • RNA W751280385
        </p>
      </header>

      {/* SEZIONE PROGETTI */}
      <section className="relative z-10 px-6 pb-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projets</h2>

        {/* Card “Coming Soon” con sfocatura più forte */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
          {/* layer sfuocato dietro */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 14px, transparent 14px 28px)",
              filter: "blur(8px)",
              opacity: 0.25,
            }}
          />
          {/* testo in primo piano */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-3 py-1 text-yellow-300 text-sm mb-3">
              ✨ Coming Soon
            </div>
            <h3 className="text-2xl font-bold tracking-wide mb-2">
              WAACK ME UP
            </h3>
            <p className="text-neutral-300 max-w-2xl">
              Première annonce très bientôt. Restez informé·e·s pour découvrir
              notre prochain événement : danse, arts visuels et médiation
              publique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
