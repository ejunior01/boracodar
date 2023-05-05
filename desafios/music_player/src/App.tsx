import { Player } from './components/Player'
import style from './App.module.css'
import { Cover } from './components/Cover'
import { Description } from './components/Description'
import { Controls } from './components/Controls'
import { Progress } from './components/Progress'

function App() {
  return (
    <div className={style.container}>
      <Player format="verticalFull">
        <Cover size="big" />
        <Description />
        <Controls />
        <Progress />
      </Player>
      <Player format="horizontalFull">
        <Cover size="small" />
        <Description />
        <Controls />
        <Progress />
      </Player>
      <Player format="horizontalSimple">
        <Cover size="small" />
        <Description />
        <Controls />
      </Player>
    </div>
  )
}

export default App
