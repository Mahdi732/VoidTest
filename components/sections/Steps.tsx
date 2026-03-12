import { ShoppingCart, QrCode, Unlock, LayoutGrid, Gift } from 'lucide-react';

const steps = [
  { icon: ShoppingCart, number: 1, title: 'Achat produit', description: 'Le client achète votre produit en magasin', color: 'green' },
  { icon: QrCode, number: 2, title: 'Scan QR Code', description: "Il scanne le code sur l'emballage", color: 'green' },
  { icon: Unlock, number: 3, title: 'Déblocage carte', description: 'Une carte digitale est débloquée', color: 'green' },
  { icon: LayoutGrid, number: 4, title: 'Collection', description: 'Il complète sa collection', color: 'red' },
  { icon: Gift, number: 5, title: 'Récompenses', description: 'Participe aux tirages', color: 'red' },
];

export function Steps() {
  return (
    <section id="parcours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Un parcours client simple et engageant</h2>
        <p className="text-gray-500 mb-16">De l&apos;achat du produit à la récompense, en 5 étapes</p>

        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10 translate-y-1/2" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center group">
              <div
                className={`w-16 h-16 bg-white border-2 rounded-2xl flex items-center justify-center text-xl shadow-sm mb-6 relative transition-colors ${
                  step.color === 'red'
                    ? 'border-green-100 text-redStart group-hover:border-redStart'
                    : 'border-green-100 text-greenStart group-hover:border-greenStart'
                }`}
              >
                <step.icon size={22} />
                <span
                  className={`absolute -top-3 -right-3 w-6 h-6 text-white rounded-full text-xs flex items-center justify-center ${
                    step.color === 'red' ? 'bg-red-500' : 'bg-gradient-green'
                  }`}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
