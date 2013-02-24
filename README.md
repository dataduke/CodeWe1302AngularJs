# Evaluation of JavaScript Frameworks

### Grundidee

* Evaluierung diverser JavaScript Frameworks:
   * siehe https://github.com/dataduke/CodeWe1302JavaScript
* Realisierung der Testapplikation mit folgenden JavaScript Frameworks:
 * Backbone.js mit Underscore.js und Docco https://github.com/sebastianfuss/backbone-test
 * JavaScriptMVC mit StealJS, DocumentJS, jQuery und FuncUnit (QUnit, Selenium, Jasmine) https://github.com/realthargor/javascriptMVCCodingWe
 * _Hier:_ __AngularJS & AngularUI__ mit Bootstrap und jQueryUI

## Testapplikation mit AngularJS & AngularUI

### Implementierter Business Prozess

1. Personendaten erfassen
2. Adressdaten erfassen (noch nicht eingebunden)
3. Zusammenfassung anzeigen, bestätigen, absenden
4. Ende mit Link zur Neubestellung

### Konzepte

Trennung von (by Design):

* deklarativen HTML-Seiten mit Validierung und
* imperativen JavaScript-Controllern mit ViewModels

### Implementierung

* Modelattribute werden vom Framework on-the-fly aus HTML-Dokumenten erstellt
* Per Convention sollte die Modeldefinition mit allen Attributen pro View (im Controller) dennoch hinterlegt werden (zwecks Weiterentwicklung, Wartung etc.)
