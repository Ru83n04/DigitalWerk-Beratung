# DigitalWerk Beratung – Website v2

Moderne, statische Website für DigitalWerk Beratung GbR.  
Gebaut mit reinem HTML, CSS und JavaScript – kein Framework, keine Dependencies.

## Struktur

```
/
├── index.html          → Startseite
├── leistungen.html     → Leistungsübersicht
├── ueber-uns.html      → Über uns
├── kontakt.html        → Kontaktformular
├── impressum.html      → Impressum (Platzhalter ausfüllen!)
├── datenschutz.html    → Datenschutz (Platzhalter ausfüllen!)
└── assets/
    ├── css/
    │   └── style.css   → Hauptstylesheet
    ├── js/
    │   └── main.js     → JavaScript
    └── img/
        └── logo.png    → DigitalWerk Logo
```

## GitHub Pages Deployment

1. Repository auf GitHub erstellen
2. Alle Dateien hochladen (inkl. `assets/`-Ordner)
3. In den Repository-Einstellungen → **Pages** → Source: `main` Branch → Root `/`
4. Die Website ist dann erreichbar unter: `https://[username].github.io/[repo-name]/`

## Eigene Domain verbinden

1. In GitHub Pages → **Custom domain** eintragen (z.B. `www.digitalwerkberatung.de`)
2. Beim Domain-Anbieter DNS-Einträge setzen:
   - CNAME: `www` → `[username].github.io`
   - Oder A-Records auf GitHub IPs (185.199.108-111.153)
3. HTTPS wird automatisch aktiviert (kann 24h dauern)

## Vor dem Go-Live anpassen

- [ ] `impressum.html`: Alle `[PLATZHALTER]` mit echten Firmendaten ersetzen
- [ ] `datenschutz.html`: Rechtlich prüfen lassen (z.B. via datenschutz-generator.de)
- [ ] `kontakt.html`: E-Mail-Adressen & Social-Media-Links aktualisieren
- [ ] Kontaktformular: Backend oder Dienst wie Formspree/Netlify Forms einbinden
- [ ] Logo-Datei ggf. ersetzen: `assets/img/logo.png`

## Kontaktformular (Backend)

Das Formular sendet aktuell an `action="#"` – es braucht ein Backend.  
Einfachste Lösung für statische Sites: **[Formspree](https://formspree.io/)**

```html
<!-- In kontakt.html, action-Attribut ändern: -->
<form class="js-form" action="https://formspree.io/f/[IHR-CODE]" method="POST">
```

## Fonts

- **Fraunces** (Display/Headings) – Google Fonts
- **Outfit** (Body) – Google Fonts

Für maximale Performance können diese Fonts auch lokal gehostet werden.
