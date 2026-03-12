import { Calendar, Mail } from 'lucide-react';

export function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-gradient-red text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre marketing ?</h2>
        <p className="opacity-90 mb-10 text-lg">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-3.5 rounded-md font-bold hover:bg-gray-100 transition"
          >
            <Calendar size={16} />
            Planifier une démo gratuite
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3.5 rounded-md font-bold hover:bg-white/10 transition"
          >
            <Mail size={16} />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
