import { ExternalLink, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-green flex items-center justify-center text-white font-bold text-xs">
                Y
              </div>
              <span className="font-bold text-lg text-gray-900">YouCanwin</span>
            </div>
            <p className="text-gray-500 mb-6 text-xs leading-relaxed">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d&apos;Agency.Africa.
            </p>
            <div className="flex gap-2">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-greenStart hover:text-white transition text-xs font-bold capitalize"
                  aria-label={social}
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-500 text-xs">
              {['Nos offres', 'Nos jeux', 'Album 2025', 'À propos'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-greenStart transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact & Légal</h4>
            <ul className="space-y-2 text-gray-500 text-xs">
              <li>games@agency.africa</li>
              <li>Mentions légales</li>
              <li className="flex items-center gap-1">
                Protection des données (CNDP)
                <ExternalLink size={10} />
              </li>
              <li>Conditions d&apos;utilisation</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2025 YouCanWin. Tous droits réservés.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center text-green-600 gap-1">
              <Shield size={12} />
              Site conforme CNDP Maroc
            </span>
            <span>
              Un service de <strong className="text-gray-600">Agency.Africa</strong> — games.agency.africa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
