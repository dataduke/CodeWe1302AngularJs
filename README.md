# Coding Weekend Project 

* Idee: Evaluierung diverser JavaScript Frameworks
   * siehe https://github.com/dataduke/Bestellung-AngularJS/wiki
* Testapplikationen zur Evanluierung:
 * Backbone.js mit Underscore.js und Docco https://github.com/sebastianfuss/backbone-test
 * JavaScriptMVC https://github.com/realthargor/javascriptMVCCodingWe
 * Hier: _AngularJS & AngularUI_ mit Bootstrap und jQueryUI
 
## Implemntierter Business Prozess

1. Personendaten erfassen
2. Adressdaten erfassen (noch nicht eingebunden)
3. Zusammenfassung anzeigen, best�tigen, absenden
4. Ende mit Link zur Neubestellung

## Konzepte dieses JS Frameworks

AngularJS trennt:

* deklarative HTML-Seiten mit Validierung und
* imperative JavaScript-Controller mit ViewModels

## Implementierung dieses JS Frameworks

* Modelattribute werden vom Framework on-the-fly aus HTML-Dokumenten erstellt
* Per Convention sollte die Modeldefinition mit allen Attributen pro View (im Controller) dennoch hinterlegt werden (zwecks Weiterentwicklung, Wartung etc.)
