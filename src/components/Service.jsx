import Group from "../assets/img/Group.png";
import Forma from "../assets/img/Forma.png"
export default function Service() {
  return (
    <>
    <section className="bg-[#EEF5FF] p-20">
        <div className="text-center ">
            <p className="text-[#0092E4] font-bold">Service we work for</p>
            <h1 className="pb-8">What care we do for your career</h1>
            <img src={Forma} alt="" className="mx-auto" />
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 bg-white p-20">
            <div className="text-center flex flex-col gap-4">
                <img src={Group} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl">Coding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit jgj save dosm svnjhf</p>
                <button className="text-[#0092E4] font-bold">
                    Learn more
                    <span></span>
                </button>
            </div>
            <div className="text-center flex flex-col gap-4">
                <img src={Group} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl">Coding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-[#0092E4] font-bold">
                    Learn more
                    <span></span>
                </button>
            </div>
            <div className="text-center flex flex-col gap-4">
                <img src={Group} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl">Coding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-[#0092E4] font-bold">
                    Learn more
                    <span></span>
                </button>
            </div>
            <div className="text-center flex flex-col gap-4">
                <img src={Group} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl">Coding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-[#0092E4] font-bold">
                    Learn more
                    <span></span>
                </button>
            </div>
            <div className="text-center flex flex-col gap-4">
                <img src={Group} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl">Coding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-[#0092E4] font-bold">
                    Learn more
                    <span></span>
                </button>
            </div>
            <div className="text-center flex flex-col gap-4">
                <img src={Group} alt="" className="mx-auto" />
                <h1 className="font-bold text-xl">Coding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="text-[#0092E4] font-bold">
                    Learn more
                    <span></span>
                </button>
            </div>
          

        </div>

        <div className="max-w-5xl mx-auto  my-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
                <h1 className="text-3xl text-[#0092E4]">254</h1>
                <p>Successful Project</p>
            </div>
            <div className="text-center">
                <h1 className="text-3xl text-[#0092E4]">254</h1>
                <p>Successful Project</p>
            </div>
            <div className="text-center">
                <h1 className="text-3xl text-[#0092E4]">6M</h1>
                <p>Successful Project</p>
            </div>
            <div className="text-center">
                <h1 className="text-3xl text-[#0092E4]">60+</h1>
                <p>Successful Project</p>
            </div>
        </div>
    </section>
    </>
  )
}
