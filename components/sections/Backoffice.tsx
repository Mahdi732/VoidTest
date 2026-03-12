import {
  QrCode, Users, SlidersHorizontal, BarChart3,
  Gift, Bell, FileOutput, Layers, ChevronRight, Settings,
} from 'lucide-react';

const features = [
  { icon: QrCode, title: 'Générateur QR Codes', description: 'Créez et téléchargez vos QR codes uniques en masse' },
  { icon: Users, title: 'CRM Participants', description: 'Collectez et gérez vos participants avec segmentation avancée' },
  { icon: SlidersHorizontal, title: 'Configuration jeux', description: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels' },
  { icon: BarChart3, title: 'Analytics temps réel', description: 'Suivez vos KPIs : scans, conversions, engagement, ROI' },
  { icon: Gift, title: 'Gestion des lots', description: 'Définissez vos récompenses et gérez les tirages au sort' },
  { icon: Bell, title: 'Notifications', description: 'Envoyez des push, emails et SMS à vos participants' },
  { icon: FileOutput, title: 'Export données', description: 'Téléchargez vos données en CSV, Excel ou via API' },
  { icon: Layers, title: 'Multi-campagnes', description: 'Gérez plusieurs campagnes simultanément' },
];

export function Backoffice() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
            <Settings size={12} />
            Backoffice tout-en-un
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-gray-600">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl hover:shadow-md transition border border-gray-100"
            >
              <div className="text-greenStart mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-green text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Demander un accès au backoffice
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
