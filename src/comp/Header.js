
function Header(props) {
  return (
    <header className="bg-white ">
    <nav x-data="{ isOpen: false }" className="px-6 py-4 shadow">
        <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex items-center justify-between">
                <a href="../pages/Contact" target="_blank" className="mx-auto ">
                    <h2 className="text-3xl font-bold text-orange-500 logo">{props.logoText}</h2>
                </a>
        </div>
        </div>
    </nav>
    <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Download Your Any<span className="text-orange-500 "><br/>Govt. Documents</span></h2>

                <p className="mt-4 text-sm text-gray-500 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</header>
  );
}
export default Header;