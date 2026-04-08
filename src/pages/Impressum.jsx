import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm text-gray-600 transition hover:text-gray-900"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">Impressum</h1>

        <div className="space-y-6 text-sm leading-7 text-gray-700">
          <div>
            <p className="font-semibold">Angaben gemäß § 5 TMG</p>
          </div>

          <div>
            <p className="font-semibold">Name des Anbieters:</p>
            <p>Wera Seemann</p>
          </div>

          <div>
            <p className="font-semibold">Adresse:</p>
            <p>Kalvarienbergstr. 49</p>
            <p>87509 Immenstadt im Allgäu</p>
            <p>Deutschland</p>
          </div>

          <div>
            <p className="font-semibold">Kontakt:</p>
            <p>Telefon: +49 (0)176 2289 5918</p>
            <p>E-Mail: wera(dot)seemann(at)gmail(dot)com</p>
          </div>

          <div>
            <p className="font-semibold">
              Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
            </p>
            <p>Wera Seemann</p>
            <p>Kalvarienbergstr. 49</p>
            <p>87509 Immenstadt im Allgäu</p>
          </div>

          <div>
            <p className="font-semibold">Haftungsausschluss:</p>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte können wir jedoch keine Gewähr übernehmen. Bei
              Bekanntwerden von Rechtsverletzungen werden wir entsprechende
              Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <p className="font-semibold">Urheberrecht:</p>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div>
            <p className="font-semibold">Datenschutz:</p>
            <p>Weitere Informationen finden Sie in unserer Datenschutzerklärung.</p>
          </div>
        </div>
      </div>
    </div>
  );
}