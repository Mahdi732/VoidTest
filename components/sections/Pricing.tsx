import { Check, Zap, BarChart3, Building } from 'lucide-react';

const plans = [
  {
    icon: Zap,
    name: 'Starter',
    subtitle: 'Campagne locale',
    description: 'Idéal pour tester sur un marché',
    features: [
      "Jusqu'à 1 000 utilisateurs",
      "Jusqu'à 10K QR codes",
      '1 pays / région',
      'Album standard',
      'Support par email',
    ],
    highlighted: false,
    buttonText: 'Demander un devis',
  },
  {
    icon: BarChart3,
    name: 'Scale',
    subtitle: 'Expansion nationale',
    description: "Pour des campagnes d'envergure",
    features: [
      "Jusqu'à 50 000 utilisateurs",
      'QR codes illimités',
      "Multi-pays (jusqu'à 5)",
      'Album complet',
      'Backoffice avancé',
      'API REST disponible',
    ],
    highlighted: true,
    buttonText: 'Planifier une démo',
  },
  {
    icon: Building,
    name: 'Enterprise',
    subtitle: 'Solution globale',
    description: 'Pour les groupes internationaux',
    features: [
      'Utilisateurs illimités',
      'Déploiement mondial',
      'Albums personnalisés',
      'Infrastructure dédiée',
      'SLA garanti 99.9%',
    ],
    highlighted: false,
    buttonText: 'Contactez-nous',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Des formules adaptées à votre échelle</h2>
          <p className="text-gray-500">Choisissez la solution qui correspond à vos besoins et votre ambition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 transition ${
                plan.highlighted
                  ? 'border-2 border-red-500 relative shadow-xl md:scale-105 z-10'
                  : 'border border-gray-100 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Populaire
                </div>
              )}

              <div
                className={`w-10 h-10 rounded flex items-center justify-center mb-4 ${
                  plan.highlighted
                    ? 'bg-red-50 text-redStart'
                    : 'bg-green-50 text-greenStart'
                }`}
              >
                <plan.icon size={18} />
              </div>

              <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-greenStart text-sm font-medium mb-4">{plan.subtitle}</p>
              <p className="text-sm text-gray-500 mb-8 border-b pb-8">{plan.description}</p>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check
                      size={14}
                      className={plan.highlighted ? 'text-red-500' : 'text-green-500'}
                    />
                    <span className={plan.highlighted && i === 0 ? 'font-semibold' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlighted
                    ? 'bg-gradient-red text-white hover:opacity-90'
                    : 'border border-gray-200 text-gray-700 hover:border-greenStart hover:text-greenStart'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
