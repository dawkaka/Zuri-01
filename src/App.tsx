import './App.css'
import { Links } from "../components/link"
import { Profile } from "../components/profile"


function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="content">
          <Profile picture="./me.jpg" twitterName="mo_yussif" slackName="devGrammer" />
          <Links />

        </div>
      </main>
    </div>
  )
}

export default App
