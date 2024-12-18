

function App() {

  return (
    <div className="w-full h-dvh flex justify-center items-center bg-[#f6f5f7] lg:p-[20%] p-0">
      <div className="rounded-lg h-[36rem] w-[50rem] flex justify-center items-center bg-white drop-shadow-xl">
        <div className="w-[50%] ">
          <form className="flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="font-bold text-4xl">Sign in</h1>
              <span className="text-sm text-gray-500">Use your email</span>
            </div>
            <input type="email" placeholder="Email" className="bg-[#eee] m-2 p-2 focus:outline-yellow-500" />
            <input type="password" placeholder="Password" className="bg-[#eee] m-2 p-2 focus:outline-yellow-500" />
            <a href="#" className="text-base text-gray-500 m-2" >Forgot your password?</a>
            <button className="bg-red-400 w-32 rounded-2xl pt-1 pb-1 transition ease-in-out delay-150 hover:scale-110 font-bold text-sm text-white">SIGN IN</button>
          </form>
        </div>
        <div className="w-[50%] h-full bg-red-500 flex justify-center items-center bg-gradient-to-r from-red-600 to-pink-500">
          <form className="flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="font-bold text-4xl text-white" >Hello, Friend!</h1>
              <p className="text-sm text-white m-6">Enter your personal details and start <br />journey with us</p>
            </div>
            <button className="bg-transparent border-solid border-white border-2 w-32 rounded-2xl pt-1 pb-1 font-bold text-sm transition ease-in-out delay-150 hover:scale-110 text-bold text-white">SIGN UP</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
