import { emitUICommand } from '../../store/store'

function PauseMenu() {
  return (
    <div className='menu text-center'>
      
      <div
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-50 m-auto mt-10"
        onClick={() => emitUICommand({ type: "RESUME" })}
      >
        Resume
      </div>

      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-50 m-auto mt-4"
        onClick={() => emitUICommand({ type: "OPEN_SETTINGS" })}
      >
        Settings
      </div>

      <div
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-50 m-auto mt-4"
        onClick={() => emitUICommand({ type: "RESTART" })}
      >
        Restart
      </div>

      <div
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-50 m-auto mt-4"
        onClick={() => emitUICommand({ type: "GO_TO_START" })}
      >
        Main Menu
      </div>

    </div>
  )
}

export default PauseMenu
