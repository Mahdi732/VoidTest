import Image from 'next/image';
import { Smartphone, Layers, Gift, BarChart3, CheckCircle, Calendar } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Activation instantanée',
    description: 'QR codes uniques sur chaque produit',
  },
  {
    icon: Layers,
    title: 'Collection digitale',
    description: 'Cartes de joueurs, raretés, échanges',
  },
  {
    icon: Gift,
    title: 'Récompenses exclusives',
    description: 'Tirages au sort, lots partenaires, expériences VIP',
  },
  {
    icon: BarChart3,
    title: 'Analytics avancés',
    description: 'Dashboard temps réel, insights consommateurs',
  },
];

export function Solution() {
  return (
    <section id="offres" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
            <Image
              src="/images/foot.png"
              alt="Football"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold text-greenStart shadow-lg flex items-center gap-2">
              <CheckCircle size={16} />
              Solution complète
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Le terrain de jeu digital de votre marque
            </h2>
            <p className="text-gray-600">
              YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d&apos;engagement avec vos consommateurs.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-greenStart flex-shrink-0">
                    <feature.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-red text-white px-8 py-3 rounded-md font-semibold hover:shadow-lg transition"
            >
              Planifier une démo
              <Calendar size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
