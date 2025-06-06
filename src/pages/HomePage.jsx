import Header  from '../components/homepage/header';
import TodoPage from './TodoPage';

function HomePage() {
  return (
    <div>
      <div>
        <img src= "/images/header-background.jpeg" alt = "Header Background" 
            className="object-cover w-full h-60 " />
      </div>
      <Header />
      <main>
        <TodoPage />
      </main>
    </div>
  );
}
export default HomePage;