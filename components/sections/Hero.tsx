import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Transformez chaque{' '}
              <span className="text-gradient-green">produit</span>{' '}
              en expérience de jeu
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes.{' '}
              <strong>Codes QR, cartes digitales, défis et récompenses.</strong>
            </p>

            <div className="flex gap-8 text-sm md:text-base border-t border-b border-gray-100 py-4 w-full">
              <div>
                <span className="block text-2xl font-bold text-greenStart">500K+</span>
                <span className="text-gray-500 text-xs uppercase tracking-wide">Interactions/mois</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-redStart">50+</span>
                <span className="text-gray-500 text-xs uppercase tracking-wide">Marques actives</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-800">x3.5</span>
                <span className="text-gray-500 text-xs uppercase tracking-wide">ROI moyen</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-green text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:opacity-90 transition text-center inline-flex items-center justify-center gap-2"
              >
                Voir la démo
                <ArrowRight size={16} />
              </a>
              <a
                href="#parcours"
                className="bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <PlayCircle size={18} />
                Comment ça marche
              </a>
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                Ils nous font confiance
              </p>
              <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                {['Maroc Telecom', 'Inwi', 'Orange', 'Carrefour'].map((name) => (
                  <div key={name} className="text-sm font-bold text-gray-400">{name}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <Image
              src="/images/phone1.png"
              alt="YouCanWin App Interface"
              width={600}
              height={800}
              className="h-[600px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
