import DesktopView from '../components/portfolio/desktopview';

function Portfolio(){

  return(

      <>
      <div className='h-screen bg-purple-100 '>
          {/* background */}
          <div className='relative flex'>
            <img 
              src="/images/portfolio/Background.jpg" 
              alt="background"
              className='object-cover w-full max-h-screen  sm:hidden'
            />
          </div>

          {/* Desktop View */}
          <DesktopView />

      </div>

      </>
  );
}

export default Portfolio;