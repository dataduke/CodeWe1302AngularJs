
# Coding Weekend Project 

* Idee: Evaluierung diverser JavaScript Frameworks
* Hier: AngularJS mit Bootstrap und JQuery

## Business Prozess

1. Personendaten erfassen
2. Adressdaten erfassen (noch nicht eingebunden)
3. Zusammenfassung anzeigen, bestätigen, absenden
4. Ende mit Link zur Neubestellung

## Konzept

AngularJS trennt:

* deklarative HTML-Seiten mit Validierung und
* imperative JavaScript-Controller mit ViewModels

## Implementierung

* Modelattribute werden vom Framework on-the-fly aus HTML-Dokumenten erstellt
* Per Convention sollte die Modeldefinition mit allen Attributen pro View (im Controller) dennoch hinterlegt werden (zwecks Weiterentwicklung, Wartung etc.)