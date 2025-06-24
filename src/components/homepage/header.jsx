function Header (){

  return (
    <div>
    <nav className="flex items-center justify-between p-4 text-white bg-gray-800 md:text-base">

    <div className='flex-grow'>
        {/* Left section - Logo and Navigation Links */}
        <ul>
          <li className='relative flex items-center gap-4 group'>
            <button className='cursor-default hover:opacity-50'>
              <img src="./images/header/menu.png" alt="menu"
                className='block object-cover w-3 h-3 sm:hidden'
              />
            </button> 
            <div
            className = {`absolute left-0 z-50 invisible w-48 p-4 
              mt-2 transition-all duration-300 ease-in-out 
              transform bg-gray-700 rounded-lg shadow-lg 
              opacity-0 top-full group-hover:opacity-100 
              group-hover:visible group-hover:translate-y-2`}
            style={{ width: '200px' }}
            >
            <div className='relative z-40 p-2 space-y-2'>
              {/* Dropdown content */}
              <p className="cursor-pointer hover:text-gray-300">To do</p>
              <p className="cursor-pointer hover:text-gray-300">Weather App</p>
              <p className="cursor-pointer hover:text-gray-300">Random Quotes Generator</p>
            </div>
          </div>           
          </li>
        </ul>
        <div >         
          
        </div>
        {/* menu */}
        <ul className='items-center hidden gap-4 sm:flex'>
          <li className='mr-4 '>
            <a href="#" className='font-semibold '> To Do </a>
          </li>
          <li className='mr-4 '>
            <a href="#" className='font-semibold'> Weather App</a>
          </li>
          <li className='mr-4 '>
            <a href="#" className='font-semibold'> Random Quotes Generator </a>
          </li>
        </ul>
    </div>

      {/* Center Header  */}
      <div className="justify-center flex-grow"> 
        <a className='font-semibold '> My Creative Apps </a>
      </div>

      {/* Right section - Profile Info */}
      <div className='flex items-center gap-4'> 
        <img src='./images/header/profile-pic.png' alt="profile"
          className='object-cover w-6 h-6 rounded-full sm:w-5 sm:h-5 md:w-8 md:h-8'
        />
        <a> Gel </a>
      </div>
    </nav>    
    </div>
  );
}

export default Header;