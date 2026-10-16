import type { L } from '../i18n'
import type { Pending } from './pending'

/*
 * Textos legales de una web personal sin actividad económica, sin cookies y sin formularios.
 * No son asesoramiento jurídico: los puntos marcados como pendientes requieren confirmación.
 * `{contact}` se sustituye por el correo (si está publicado) o por el enlace de LinkedIn.
 */

export interface LegalDoc {
  title: L
  updated: string
  sections: { heading: L; body: (L | Pending)[] }[]
}

export const privacy: LegalDoc = {
  title: { ca: 'Política de privacitat', es: 'Política de privacidad', en: 'Privacy policy' },
  updated: '2026-10-17',
  sections: [
    {
      heading: { ca: 'Qui és el responsable', es: 'Quién es el responsable', en: 'Who is responsible' },
      body: [
        {
          ca: 'El responsable del tractament és Adrià Autonell. Pots contactar-hi a través de {contact}.',
          es: 'El responsable del tratamiento es Adrià Autonell. Puedes contactar a través de {contact}.',
          en: 'The data controller is Adrià Autonell. You can get in touch via {contact}.',
        },
      ],
    },
    {
      heading: { ca: 'Quines dades es tracten', es: 'Qué datos se tratan', en: 'What data is processed' },
      body: [
        {
          ca: 'Aquesta web no fa servir galetes, ni analítica, ni publicitat, ni continguts incrustats de tercers. Les tipografies s’allotgen a la mateixa web.',
          es: 'Esta web no usa cookies, ni analítica, ni publicidad, ni contenidos incrustados de terceros. Las tipografías se alojan en la propia web.',
          en: 'This site uses no cookies, analytics, advertising or embedded third-party content. Fonts are hosted on the site itself.',
        },
        {
          ca: 'Registres tècnics: el proveïdor d’allotjament (Cloudflare, Inc.) pot registrar dades tècniques com l’adreça IP, la data i el navegador per servir la web i protegir-la d’abusos. La base legal és l’interès legítim (art. 6.1.f del RGPD).',
          es: 'Registros técnicos: el proveedor de alojamiento (Cloudflare, Inc.) puede registrar datos técnicos como la dirección IP, la fecha y el navegador para servir la web y protegerla de abusos. La base legal es el interés legítimo (art. 6.1.f del RGPD).',
          en: 'Technical logs: the hosting provider (Cloudflare, Inc.) may log technical data such as IP address, date and browser in order to serve the site and protect it from abuse. The legal basis is legitimate interest (Art. 6(1)(f) GDPR).',
        },
        {
          ca: 'Preferències locals: si actives «Veure la infraestructura», el navegador ho recorda amb localStorage. Aquesta dada no surt del teu dispositiu i la pots esborrar des del navegador. Com que és una funció que demanes tu, no requereix consentiment (art. 22.2 de la LSSI).',
          es: 'Preferencias locales: si activas «Ver la infraestructura», el navegador lo recuerda con localStorage. Ese dato no sale de tu dispositivo y puedes borrarlo desde el navegador. Al ser una función que pides tú, no requiere consentimiento (art. 22.2 de la LSSI).',
          en: 'Local preferences: if you turn on “Show the infrastructure”, your browser remembers it using localStorage. This never leaves your device and you can clear it from your browser. As it’s a feature you request, it doesn’t require consent (Art. 22.2 of Spain’s LSSI).',
        },
        {
          ca: 'Contacte: si m’escrius per correu o per LinkedIn, faré servir les teves dades només per respondre’t i les conservaré el temps necessari per atendre la conversa.',
          es: 'Contacto: si me escribes por correo o por LinkedIn, usaré tus datos solo para responderte y los conservaré el tiempo necesario para atender la conversación.',
          en: 'Contact: if you write to me by email or on LinkedIn, I’ll use your details only to reply and keep them only as long as the conversation requires.',
        },
        {
          ca: 'Conservaré aquests missatges el temps necessari per respondre’t i, com a màxim, 12 mesos des de l’últim contacte, llevat que una obligació legal en requereixi la conservació durant més temps. La base legal és el teu consentiment en escriure’m (art. 6.1.a del RGPD).',
          es: 'Conservaré esos mensajes el tiempo necesario para responderte y, como máximo, 12 meses desde el último contacto, salvo que una obligación legal exija conservarlos más tiempo. La base legal es tu consentimiento al escribirme (art. 6.1.a del RGPD).',
          en: 'I’ll keep those messages as long as needed to reply and, at most, 12 months after our last contact, unless a legal obligation requires keeping them longer. The legal basis is your consent when you write to me (Art. 6(1)(a) GDPR).',
        },
      ],
    },
    {
      heading: { ca: 'Proveïdors i transferències', es: 'Proveedores y transferencias', en: 'Providers and transfers' },
      body: [
        {
          ca: 'La web s’allotja a Cloudflare Workers, de Cloudflare, Inc., amb seu als Estats Units, que actua com a encarregat del tractament.',
          es: 'La web se aloja en Cloudflare Workers, de Cloudflare, Inc., con sede en Estados Unidos, que actúa como encargado del tratamiento.',
          en: 'The site is hosted on Cloudflare Workers by Cloudflare, Inc., based in the United States, acting as data processor.',
        },
        {
          ca: 'Cloudflare està certificada en el Marc de Privacitat de Dades UE-EUA (EU-U.S. Data Privacy Framework), que empara les transferències de dades als Estats Units. Com a garantia addicional, el seu acord de tractament de dades incorpora les clàusules contractuals tipus de la Comissió Europea.',
          es: 'Cloudflare está certificada en el Marco de Privacidad de Datos UE-EE. UU. (EU-U.S. Data Privacy Framework), que ampara las transferencias de datos a Estados Unidos. Como garantía adicional, su acuerdo de tratamiento de datos incorpora las cláusulas contractuales tipo de la Comisión Europea.',
          en: 'Cloudflare is certified under the EU-U.S. Data Privacy Framework, which covers data transfers to the United States. As an additional safeguard, its data processing agreement includes the European Commission’s Standard Contractual Clauses.',
        },
      ],
    },
    {
      heading: { ca: 'Els teus drets', es: 'Tus derechos', en: 'Your rights' },
      body: [
        {
          ca: 'Pots exercir els drets d’accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a {contact}. Si consideres que no s’han respectat, pots presentar una reclamació a l’Agència Espanyola de Protecció de Dades (aepd.es).',
          es: 'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {contact}. Si consideras que no se han respetado, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).',
          en: 'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to {contact}. If you believe they haven’t been respected, you can file a complaint with the Spanish Data Protection Agency (aepd.es).',
        },
      ],
    },
  ],
}

export const legal: LegalDoc = {
  title: { ca: 'Avís legal i condicions d’ús', es: 'Aviso legal y condiciones de uso', en: 'Legal notice and terms of use' },
  updated: '2026-10-17',
  sections: [
    {
      heading: { ca: 'Titular', es: 'Titular', en: 'Owner' },
      body: [
        {
          ca: 'Aquesta web és d’Adrià Autonell, amb residència a Castellterçol (Barcelona). Contacte: {contact}.',
          es: 'Esta web pertenece a Adrià Autonell, con residencia en Castellterçol (Barcelona). Contacto: {contact}.',
          en: 'This website belongs to Adrià Autonell, based in Castellterçol (Barcelona, Spain). Contact: {contact}.',
        },
        {
          ca: 'És una web personal sense activitat econòmica: no ofereix productes ni serveis, no conté publicitat i no recull pagaments.',
          es: 'Es una web personal sin actividad económica: no ofrece productos ni servicios, no contiene publicidad y no recoge pagos.',
          en: 'This is a personal website with no economic activity: it offers no products or services, carries no advertising and takes no payments.',
        },
      ],
    },
    {
      heading: { ca: 'Objecte', es: 'Objeto', en: 'Purpose' },
      body: [
        {
          ca: 'És una web personal i sense activitat econòmica. Serveix per presentar la meva formació, la meva experiència i els meus projectes.',
          es: 'Es una web personal y sin actividad económica. Sirve para presentar mi formación, mi experiencia y mis proyectos.',
          en: 'This is a personal, non-commercial website. It presents my education, experience and projects.',
        },
      ],
    },
    {
      heading: { ca: 'Propietat intel·lectual', es: 'Propiedad intelectual', en: 'Intellectual property' },
      body: [
        {
          ca: 'Els textos i el disseny d’aquesta web són d’Adrià Autonell, llevat que s’indiqui el contrari. Els noms d’empreses i entitats que hi apareixen pertanyen als seus titulars i es citen només amb finalitat informativa.',
          es: 'Los textos y el diseño de esta web son de Adrià Autonell, salvo que se indique lo contrario. Los nombres de empresas y entidades que aparecen pertenecen a sus titulares y se citan solo con fines informativos.',
          en: 'The text and design of this website belong to Adrià Autonell unless stated otherwise. Names of companies and organisations mentioned belong to their owners and are cited for information only.',
        },
        {
          ca: 'El codi font és públic a GitHub sota llicència MIT. Aquesta llicència cobreix només el codi: els textos, les fotografies i el logotip no hi estan inclosos i se’n reserven tots els drets.',
          es: 'El código fuente es público en GitHub bajo licencia MIT. Esa licencia cubre solo el código: los textos, las fotografías y el logotipo no están incluidos y se reservan todos los derechos.',
          en: 'The source code is public on GitHub under the MIT licence. That licence covers the code only: the text, photographs and logo are not included and all rights are reserved.',
        },
      ],
    },
    {
      heading: { ca: 'Enllaços i responsabilitat', es: 'Enlaces y responsabilidad', en: 'Links and liability' },
      body: [
        {
          ca: 'Procuro que la informació sigui correcta i estigui actualitzada, però pot contenir errors. Els enllaços externs porten a webs que no controlo i de les quals no em faig responsable.',
          es: 'Procuro que la información sea correcta y esté actualizada, pero puede contener errores. Los enlaces externos llevan a webs que no controlo y de las que no me hago responsable.',
          en: 'I try to keep the information accurate and up to date, but it may contain errors. External links lead to sites I don’t control and am not responsible for.',
        },
      ],
    },
    {
      heading: { ca: 'Llei aplicable', es: 'Ley aplicable', en: 'Governing law' },
      body: [
        {
          ca: 'Aquestes condicions es regeixen per la legislació espanyola.',
          es: 'Estas condiciones se rigen por la legislación española.',
          en: 'These terms are governed by Spanish law.',
        },
      ],
    },
  ],
}
