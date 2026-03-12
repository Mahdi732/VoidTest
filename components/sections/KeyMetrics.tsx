import { BarChart3, Users, Star, LifeBuoy } from 'lucide-react';

const metrics = [
  { icon: BarChart3, value: '500K+', label: 'Interactions mensuelles' },
  { icon: Users, value: '50+', label: 'Marques partenaires' },
  { icon: Star, value: '98%', label: 'Taux de satisfaction' },
  { icon: LifeBuoy, value: '24/7', label: 'Support technique' },
];

export function KeyMetrics() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <metric.icon className="text-greenStart mx-auto mb-2" size={20} />
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-xs text-gray-500">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
