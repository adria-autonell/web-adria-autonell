import { Mail } from 'lucide-react'
import { useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { site } from '../data/site'
import { confirmed, isPending } from '../data/pending'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'
import { ButtonLink } from '../components/ButtonLink'
import { Pending } from '../components/Pending'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'

export function Contact() {
  const tx = useTx()
  const { linkedin } = site.links
  const email = confirmed(site.links.email)
  const github = confirmed(site.links.github)

  return (
    <Section id="contact" number={sectionNumber('contact')} label={tx(ui.nav.contact)} title={tx(ui.contact.title)}>
      <p className="reveal max-w-prose font-serif text-2xl leading-snug sm:text-3xl">{tx(ui.contact.body)}</p>

      <div className="reveal mt-10 flex flex-wrap gap-3">
        {email && (
          <ButtonLink href={`mailto:${email}`}>
            <Mail className="size-4" aria-hidden="true" />
            {tx(ui.contact.email)}
          </ButtonLink>
        )}
        <ButtonLink href={linkedin} variant={email ? 'secondary' : 'primary'}>
          <LinkedInIcon />
          {tx(ui.contact.linkedin)}
        </ButtonLink>
        {github && (
          <ButtonLink href={github} variant="secondary">
            <GitHubIcon />
            {tx(ui.contact.github)}
          </ButtonLink>
        )}
      </div>

      {email && (
        <p className="meta mt-6">
          <a className="link text-sm" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      )}
      {[site.links.email, site.links.github].map(
        (v, i) => isPending(v) && <Pending key={i} value={v} block />,
      )}
    </Section>
  )
}
