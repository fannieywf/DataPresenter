# DataPresenter

Nutzer kann anhand eigener und anderer Eingaben einen Überblick bekommen, wie seine Attribute im Vergleich zu Eingaben von anderen aussehen. 

---

Die Adminseite dient als das Backend für die Datenverarbeitung. 

Nutzer gibt seine Eingaben in die Felder ein. Nach den Eingaben werden Daten validiert, bis alle Felder vollständig ausgefüllt werden. Die Angaben aus dem HTML-Formular werden durch das ***Dokumenten-Objekt-Modell*** (DOM) als Data-Objekt gespeichert. Jedes Data-Objekt wird in den bestehenden Daten aus Local Storage hinzugeführt. Daten werden wieder in ***Local Storage*** gespeichert. 

Die Indexseite dient als das Frontend für die Datendarstellung. 

Nach den Nutzereingaben auf der Adminseite werden die gesamten Informationen von allen Nutzern in einer Tabelle dargestellt. 

Attribute, Nutzereingaben und Statistik werden als neue Zeilen in die Tabelle hinzugefügt. 

Zusätzliche Informationen werden als Bericht gegeben. 
