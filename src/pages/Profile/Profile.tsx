export function Profile() {
  // const getUserData = async => {
  //   const response = await('https://api.homologation.cliqdrive.com.br/auth/profile/')
  //   const data = await response.json()
  // }

  return (
    <>
      <header className="bg-white-1 h-[70px] flex items-center justify-end mr-[34px]">
        <a href="/"><button className="w-[272px] h-11 bg-blue-2 rounded-[6.33px] text-white-1 font-bold">Logout</button></a>
      </header>
      <main className="h-profile_page_size flex items-center justify-center bg-white-4">
        <div className="w-[356px] p-[30px] bg-white-1 rounded-2xl shadow-profile_box_shadow">
          <div className="flex flex-col items-center">
            <h2 className="text-center mb-[9px] font-semibold">Profile picture</h2>
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={75} height={75} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="name">Your <strong>Name</strong></label>
            <input className="bg-white-3 mb-[20px] p-4 rounded-[9px]" type="text" placeholder="Christine James" disabled />
            <label className="mb-2" htmlFor="name">Your <strong>Email</strong></label>
            <input className="bg-white-3 p-4 rounded-[9px]" type="text" placeholder="christinejames@gmail.com" disabled />
          </div>
        </div>
      </main>
    </>
  )
}
