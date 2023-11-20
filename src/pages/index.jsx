import Inicial from '../pages/Home/home'
import Publicacoes from '../pages/publicacoes/index.jsx'
import Education from '../pages/educacao/index.jsx'
import Books from '../pages/educacao/index.jsx'
import Events from '../pages/eventos/index.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Inicial />
        {/* <Publicacoes />
        <Education />
        <Books />
        <Events /> */}
        
      </div>

    </main>
  )
}
