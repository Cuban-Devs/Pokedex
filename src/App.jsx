import { Route, Switch } from 'wouter'
import { HomeView } from './views/Home'

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeView} />
    </Switch>
  )
}

export default App
