# Coding Weekend Project 

* Idee: Evaluierung diverser JavaScript Frameworks
   * siehe https://github.com/dataduke/Bestellung-AngularJS/wiki
* Implementierte Testapplikationen zur Evaluierung:
 * Backbone.js mit Underscore.js und Docco https://github.com/sebastianfuss/backbone-test
 * JavaScriptMVC https://github.com/realthargor/javascriptMVCCodingWe
 * _Hier:_ __AngularJS & AngularUI__ mit Bootstrap und jQueryUI
 
## Implementierter Business Prozess

1. Personendaten erfassen
2. Adressdaten erfassen (noch nicht eingebunden)
3. Zusammenfassung anzeigen, best�tigen, absenden
4. Ende mit Link zur Neubestellung

## Konzepte von AngularJS

Trennung von (by Design):

* deklarative HTML-Seiten mit Validierung und
* imperative JavaScript-Controller mit ViewModels

## Implementierung von AngularJS

* Modelattribute werden vom Framework on-the-fly aus HTML-Dokumenten erstellt
* Per Convention sollte die Modeldefinition mit allen Attributen pro View (im Controller) dennoch hinterlegt werden (zwecks Weiterentwicklung, Wartung etc.)
