import { Users, QrCode, Globe, Images, Cloud } from 'lucide-react';

const items = [
  { icon: Users, title: 'Utilisateurs', description: 'De 1k à Illimité' },
  { icon: QrCode, title: 'QR Codes', description: 'Volume adapté' },
  { icon: Globe, title: 'Couverture', description: 'Local à mondial' },
  { icon: Images, title: 'Albums', description: 'Standard ou custom' },
  { icon: Cloud, title: 'Infrastructure', description: 'Cloud ou On-Premise' },
];

export function FeaturesOverview() {
  return (
    <div className="border-y border-gray-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between text-center">
        {items.map((item) => (
          <div key={item.title} className="w-1/2 md:w-auto mb-6 md:mb-0">
            <item.icon className="text-greenStart mx-auto mb-2" size={24} />
            <div className="font-bold">{item.title}</div>
            <div className="text-xs text-gray-500">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
