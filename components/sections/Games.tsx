import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const games = [
  {
    image: '/images/game-1.png',
    title: 'Album Digital 2025',
    description: 'Collection de cartes avec échanges et défis.',
    badge: 'STAR',
    badgeColor: 'bg-green-500',
    hasLink: true,
  },
  {
    image: '/images/game-2.png',
    title: 'Quiz Football',
    description: "Questions sur l'actualité et l'histoire du foot.",
    badge: 'QUIZ',
    badgeColor: 'bg-purple-600',
    hasLink: false,
  },
  {
    image: '/images/game-3.png',
    title: 'Tombola digitale',
    description: 'Tirages au sort avec lots sponsorisés.',
    badge: null,
    badgeColor: '',
    hasLink: false,
  },
  {
    image: '/images/game-4.png',
    title: 'Pronostics',
    description: 'Prédictions de matchs et classements.',
    badge: null,
    badgeColor: '',
    hasLink: false,
  },
];

export function Games() {
  return (
    <section id="jeux" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Catalogue de jeux</h2>
          <p className="text-gray-500">Des mécaniques éprouvées pour engager vos audiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div key={game.title} className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="h-40 bg-gray-200 relative">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
                {game.badge && (
                  <span className={`absolute top-2 right-2 ${game.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded`}>
                    {game.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">{game.title}</h4>
                <p className="text-xs text-gray-500 mb-4">{game.description}</p>
                {game.hasLink && (
                  <a href="#" className="text-greenStart text-xs font-semibold flex items-center">
                    Découvrir
                    <ChevronRight size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
