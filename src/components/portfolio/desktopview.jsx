import MenuOptions from './menu';

function DesktopView(){
  return(
    <>
      <div className={`
        md:flex bg-[url('/images/portfolio/Background.jpg')]
        hidden bg-cover bg-center h-screen w-full
        `}>        
        <div className='flex justify-end w-full p-10 mt-32'>
          <MenuOptions />
        </div>
        <img 
          src="/images/portfolio/profile.jpg" 
          alt="profile"
          className={`            
            rounded-full hidden opacity-80
            md:flex mt-96 ml-40
          `}
        />        
      </div>
    </>
  );
}

export default DesktopView;