function MenuOptions(){
  return(
    <>
    <nav>
      <ul className='flex justify-end p-8 bg-white rounded-l-full opacity-75'>
        <li className='ml-24 mr-8 text-2xl font-semibold cursor-pointer text-slate-900 hover:translate-x-1'>About Me</li>
        <li className='ml-24 mr-8 text-2xl font-semibold cursor-pointer text-slate-900 hover:translate-x-1'>Apps</li>
        <li className='ml-24 mr-8 text-2xl font-semibold cursor-pointer text-slate-900 hover:translate-x-1'>Skills</li>
        <li className='ml-24 mr-8 text-2xl font-semibold cursor-pointer text-slate-900 hover:translate-x-1'>Experience</li>
        <li className='ml-24 mr-8 text-2xl font-semibold cursor-pointer text-slate-900 hover:translate-x-1'>Contact</li>
      </ul>
    </nav>
    </>
  );
}

export default MenuOptions