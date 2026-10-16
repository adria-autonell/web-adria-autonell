import { Route, Routes, useParams, Outlet } from 'react-router'
import { PREFIXED_LANGS, type Lang } from './i18n'
import { InfraProvider } from './hooks/useInfraMode'
import { privacy, legal } from './data/legal'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'
import { LegalPage } from './pages/LegalPage'
import { NotFound } from './pages/NotFound'

/** Mismas páginas en todos los idiomas: en la raíz (catalán) y bajo /es y /en. */
const pages = (
  <>
    <Route index element={<Home />} />
    <Route path="projects/:slug" element={<ProjectPage />} />
    <Route path="privacy" element={<LegalPage doc={privacy} />} />
    <Route path="legal" element={<LegalPage doc={legal} />} />
    <Route path="*" element={<NotFound />} />
  </>
)

/** Solo deja pasar los prefijos de idioma válidos; "/loquesea" acaba en la 404. */
function LangPrefix() {
  const { lang } = useParams()
  return PREFIXED_LANGS.includes(lang as Lang) ? <Outlet /> : <NotFound />
}

export function App() {
  return (
    <InfraProvider>
      <Routes>
        <Route element={<Layout />}>
          {pages}
          <Route path=":lang" element={<LangPrefix />}>
            {pages}
          </Route>
        </Route>
      </Routes>
    </InfraProvider>
  )
}
