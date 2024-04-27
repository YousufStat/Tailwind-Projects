import Logo from "../assets/img/yousuf.png"
export default function Footer() {
  return (
    <>
       <footer className="bg-[#EEF5FF] p-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div>
                <div className="flex gap-2 items-center pb-6">
                    <img src={Logo} alt="code abc" className="w-[20px] h-[20px]" />
                    <h1 className="font-bold">Md Yousuf</h1>
                </div>
                <div>
                    <p>Terms of use | Privacy</p>
                    <p>Terms of use | Privacy</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">About Us</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>About Us</p>
                    <p>About Us</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">Our Information</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>About Us</p>
                    <p>About Us</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">My Account</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Support Center</p>
                    <p>Customer Support</p>
                    <p>About Us</p>
                    <p>About Us</p>
                </div>
            </div>
            <div>
                <div className="pb-6">
                    <h1 className="font-bold">Connect</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <img src="./assets/facebook.png" alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="./assets/dribble.png" alt="" />
                        <p>Dribble</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="./assets/github.png" alt="" />
                        <p>Github</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src="./assets/twitter.png" alt="" />
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>
  )
}
