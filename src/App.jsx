import './App.css'

function App() {

  return (
    <>
      <header className='bg-[url("..\src\assets\bg-mobile-light.jpg")] bg-no-repeat bg-cover h-[200px] px-5 flex flex-col justify-evenly py-3'>
        <div className=' flex justify-between items-center ml-1'>
        <h1 className='text-white text-[26px] font-semibold uppercase tracking-[10px]'>Todo</h1>
        <img className='w-5 h-5' src="..\src\assets\icon-moon.svg" alt="" />
        </div>
        <div className='w-full bg-white h-12 rounded-lg'>
          
        </div>

      </header>

      <body>
        <p>Clear Completed</p>
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>

        <div>
          <p>Drag and drop to reorder list</p>
        </div>
      </body>

      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </>
  )
}

export default App
