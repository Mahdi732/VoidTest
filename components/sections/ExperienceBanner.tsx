import { Zap, Heart, Share2 } from 'lucide-react';

const cards = [
  {
    icon: Zap,
    title: 'Engagement immédiat',
    description: 'Chaque produit devient une opportunité de jeu',
  },
  {
    icon: Heart,
    title: 'Fidélisation naturelle',
    description: 'Les clients reviennent pour compléter leur collection',
  },
  {
    icon: Share2,
    title: 'Viralité organique',
    description: 'Les fans partagent et échangent entre eux',
  },
];

export function ExperienceBanner() {
  return (
    <section className="py-20 bg-gradient-green text-center text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-12">
          YouCanWin offre à vos clients plus qu&apos;un produit : une expérience interactive complète autour du football
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/20 transition"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <card.icon size={20} />
              </div>
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-sm opacity-80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
