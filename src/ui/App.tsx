import './App.css'
import { useAtomValue } from 'jotai'
import { showMenuAtom } from '../store/store'
import ModalMenu from './components/ModalMenu';

function App() {
  const showMenu = useAtomValue(showMenuAtom);

  console.log(showMenu)

  return (
    <>
      {showMenu && <ModalMenu></ModalMenu>}
    </>
  )
}

export default App;