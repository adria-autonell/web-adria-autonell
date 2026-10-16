import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from './App'

export { getMeta, headTags, publicPaths } from './seo'
export { LANGS, DEFAULT_LANG, localePath } from './i18n'
export { site } from './data/site'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
