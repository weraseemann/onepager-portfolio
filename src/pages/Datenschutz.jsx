import { Link } from "react-router-dom";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm text-gray-600 transition hover:text-gray-900"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6 text-sm leading-7 text-gray-700">
          <div>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
              Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf
              Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser
              Datenschutzerklärung informieren wir Sie über die wichtigsten
              Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div>
            <p className="font-semibold">1. Verantwortlicher</p>
            <p>Verantwortlich für die Verarbeitung Ihrer Daten ist:</p>
            <p>Wera Seemann</p>
            <p>Kalvarienbergstr. 49</p>
            <p>87509 Immenstadt im Allgäu</p>
            <p>E-Mail: wera(dot)seemann(at)gmail(dot)com</p>
          </div>

          <div>
            <p className="font-semibold">2. Datenverarbeitung auf unserer Website</p>
          </div>

          <div>
            <p className="font-semibold">2.1 Zugriffsdaten</p>
            <p>Beim Besuch unserer Website werden automatisch folgende Daten erhoben:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und Betriebssystem</li>
              <li>Besuchte Seiten (URL)</li>
            </ul>
            <p className="mt-2">
              Diese Daten dienen ausschließlich der Sicherstellung eines
              störungsfreien Betriebs der Website und zur Verbesserung unseres
              Angebots. Eine Zuordnung zu bestimmten Personen erfolgt nicht.
            </p>
          </div>

          <div>
            <p className="font-semibold">2.2 Kontaktformular</p>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre
              angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
          </div>

          <div>
            <p className="font-semibold">3. Cookies</p>
            <p>
              Unsere Website verwendet Cookies, um die Nutzerfreundlichkeit zu
              verbessern. Einige Cookies bleiben auf Ihrem Gerät gespeichert,
              bis Sie diese löschen. Sie können Ihren Browser so einstellen,
              dass er Sie über das Setzen von Cookies informiert, und Cookies
              nur im Einzelfall erlauben.
            </p>
          </div>

          <div>
            <p className="font-semibold">4. Ihre Rechte</p>
            <p>Ihnen stehen die folgenden Rechte zu:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Übertragbarkeit Ihrer Daten</li>
            </ul>
            <p className="mt-2">
              Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns
              bitte unter wera(dot)seemann(at)gmail(dot)com.
            </p>
          </div>

          <div>
            <p className="font-semibold">5. Änderung der Datenschutzerklärung</p>
            <p>
              Wir behalten uns das Recht vor, diese Datenschutzerklärung bei
              Bedarf zu aktualisieren, um sie an geänderte gesetzliche
              Anforderungen oder an Änderungen unserer Dienstleistungen
              anzupassen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}