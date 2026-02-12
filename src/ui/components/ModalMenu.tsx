import { emitUICommand } from '../../store/store'

function ModalMenu() {
  return (
    <div className='menu text-center ' >
      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-50 m-auto mt-10"
        onClick={ ()=> { emitUICommand({type: "START"})} }
      >Start!</div>
    </div>
  )
}

export default ModalMenu