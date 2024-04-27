import Vector from '../assets/img/Vector.png'
import Mypic from '../assets/img/mypic.png'


export default function Main() {
  return ( <>
    <section className="container mx-auto px-16 py-20 flex flex-col md:flex-row gap-6 justify-between items-center">
      <div className="">
          <h1 className="text-5xl font-bold"><span className="text-sky-600">Tailwind CSS</span> Learning & <br/>Practices with</h1>
          <h2 className="text-7xl font-bold text-secondary">Muhammad Yousuf</h2>
          <p className="font-bold">Frontend developer</p>
          <div className="flex gap-6 items-center pt-8">
              <button className="bg-green-500 px-8 py-3 rounded-md text-white font-bold">Get Token</button>
              <div className="flex gap-2 items-center">
                  <span>White paper</span>
                  <img src={Vector} alt="play" />
              </div>
          </div>
      </div>
      <div>
          <img src={Mypic} alt="shahjala Rafi" className='h-[370px] w-[370px] rounded-full' />
      </div>
  </section>
  
  </>
  )
}
