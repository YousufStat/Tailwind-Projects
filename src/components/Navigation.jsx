import Logo from "../assets/img/yousuf.png";
import Lock from "../assets/img/lock.png";
import Search from "../assets/img/search.png"
export default function Navigation() {
  return (
    <>
    <div className="bg-gray-200">
      <nav className="container mx-auto flex flex-col md:flex-row gap-4 items-center py-2 ">
      <img src={Logo} className="w-[80px] h-[80px]" />    
         <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center ">
         <div className="flex flex-col md:flex-row gap-6 items-center">
            <a>Home</a>
            <a>Supports</a>
            <a>Channels</a>
            <a>About</a>
            <img src={Search}/>
          </div>
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <img src={Lock}/>
          <a>Login</a>
          <a className="bg-sky-500 px-8 py-3 rounded-md text-white">Portfolio</a>
        </div>
         </div>
         
    
        
      </nav>
      </div>
    </>
  );
}
