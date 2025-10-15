import React, { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState<number>(20);
  const [confirmed, setConfirmed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [method, setMethod] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(false);
    setMethod(null);
  };

  const startPayment = (m: string) => {
    setMethod(m);
    setProcessing(true);
    setTimeout(() => {
      const tx = `G2-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
      setTransactionId(tx);
      setProcessing(false);
      setConfirmed(true);
      setShowForm(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,#7c3aed_0%,transparent_45%),radial-gradient(700px_350px_at_120%_10%,#db2777_0%,transparent_50%)] opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <img src="/ginos-logo.svg" alt="GINO'S II" className="w-56 md:w-72 mx-auto mb-6 drop-shadow-[0_0_24px_rgba(255,255,255,.2)]" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">GINO’S II</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            L’association a pour objet de promouvoir, soutenir et organiser des événements culturels et artistiques centrés sur les cultures queer, les danses issues du mouvement waacking, et les formes d'expression issues des communautés marginalisées.
          </p>
          <div className="mt-6 text-sm text-white/60">SIRET 990 923 252 00011 • RNA W751280385</div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Projets</h2>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 select-none pointer-events-none grid place-items-center">
              <div className="text-[18vw] md:text-[12vw] font-black tracking-tight opacity-20 blur-sm">
                WAACK ME UP
              </div>
            </div>
            <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize:"3px 3px"}}/>
            <div className="relative p-8 md:p-12 grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
              <div>
                <p className="text-lg font-semibold">✨ Coming Soon</p>
                <p className="mt-2 text-white/80 max-w-prose">
                  Première annonce très bientôt. Restez attentif·ve·s pour découvrir notre prochain événement : danse, arts visuels et médiation publique.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-6">
                <p className="text-sm text-white/70">Inscrivez-vous à notre newsletter pour être informé·e :</p>
                <form onSubmit={(e)=>e.preventDefault()} className="mt-3 grid grid-cols-[1fr_auto] gap-2">
                  <input type="email" placeholder="votre@email" className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-white/30 text-sm"/>
                  <button className="px-4 py-2 rounded-xl bg-white text-black text-sm hover:bg-white/90">S’inscrire</button>
                </form>
                <p className="mt-2 text-xs text-white/50">Aucune pub. On écrit juste quand c’est utile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUTENIR */}
      <section id="support" className="py-14 md:py-20 bg-white/5 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Soutenir GINO’S II</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Votre soutien nous aide à développer des projets inclusifs et accessibles. Merci de contribuer à la vitalité de notre communauté.
          </p>
          <div className="mt-6">
            <button onClick={() => setShowForm(True)} className="px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90">
              Faire un don
            </button>
          </div>

          {showForm && (
            <div className="mt-8 max-w-md mx-auto bg-black/70 border border-white/20 rounded-2xl p-6">
              {!confirmed ? (
                <form onSubmit={handleDonate} className="grid gap-4">
                  <label className="text-left text-sm text-white/80">Montant du don (€)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Math.max(5, Number(e.target.value || 0)))}
                    className="w-full rounded-xl px-3 py-2 bg-black/40 border border-white/20 text-white outline-none focus:border-white/40"
                    min={5}
                  />
                  <div className="flex gap-3">
                    <button type="button" onClick={() => startPayment('CB')} className="flex-1 px-3 py-2 rounded-xl bg-yellow-400 text-black font-semibold">Payer avec CB</button>
                    <button type="button" onClick={() => startPayment('PayPal')} className="flex-1 px-3 py-2 rounded-xl border border-white/20">Payer avec PayPal</button>
                  </div>
                  <div className="text-xs text-white/60">Vous serez redirigé·e vers un système de paiement sécurisé (simulation).</div>
                </form>
              ) : (
                <div className="text-center text-white/80">
                  <div className="text-lg font-semibold">Merci pour votre soutien !</div>
                  <div className="mt-2">Nous avons bien reçu votre don de <span className="font-semibold">{amount} €</span>.</div>
                  <div className="mt-2 text-xs text-white/60">Référence transaction : <span className="font-mono">{transactionId}</span></div>
                </div>
              )}

              {processing && (
                <div className="mt-4 text-center text-sm text-white/70">Traitement de la transaction ({method})…</div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 md:py-14 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-3 grid gap-1 text-white/80">
              <div>Email : <a className="underline" href="mailto:ginos2.paris@gmail.com">ginos2.paris@gmail.com</a></div>
              <div>Téléphone : <a className="underline" href="tel:+33745028295">+33 7 45 02 82 95</a></div>
              <div>Adresse : 10 Rue de Montyon, 75009 Paris</div>
            </div>
          </div>
          <div className="text-white/60 self-end text-xs">
            © {new Date().getFullYear()} GINO’S II — Tous droits réservés
          </div>
        </div>
      </section>
    </div>
  );
}
