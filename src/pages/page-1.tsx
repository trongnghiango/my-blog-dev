
export default function Page() {

  const isOpen = false;
  return (
    <div className="h-screen overflow-auto">
      <div className="flex flex-col bg-green-300">
        <h1>HHHHH</h1>
      </div>
      <div
        className="top-0 z-30 w-full h-auto backdrop-filter backdrop-blur-lg sticky shadow-xl"
      >
        <div
          className="relative w-full transition-all ease-out duration-150 transform h-full"
          x-data="{ isOpen: false }"
        >
          <nav
            className="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
          >
            <div className="flex items-center justify-between">
              <a
                className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
                href="#"
              >Real Estate
              </a>
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    >
                    </path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ${isOpen ? "flex" : "hidden"
                }`}
            >
              <a
                className="text-sm text-gray-800 hover:text-blue-400"
                href="index.html">Home</a
              >
              <a
                className="text-sm text-gray-800 hover:text-blue-400"
                href="properties.html">Properties</a
              >
              <a
                className="text-sm text-gray-800 hover:text-blue-400"
                href="single-property.html">Single Properties</a
              >
              <a
                className="text-sm text-gray-800 hover:text-blue-400"
                href="contact-us.html">Contact Us</a
              >
            </div>
          </nav>
        </div>
      </div>

      <section
        className="p-12 text-center bg-gradient-to-r from-blue-200 to-purple-500 lg:p-56"
      >
        <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-5xl">
          Find Your Dream Home
        </h1>

        <p className="mb-8 text-lg text-center text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          officiis odit eum veniam iusto quibusdam? Qui tempora placeat fugit.
          Ut optio, commodi libero sit consequatur qui aliquid vel maiores
          consequuntur.
        </p>

        <div className="flex items-center justify-center space-x-2">
          <a
            href="#"
            className="px-2 py-2 text-gray-800 bg-gray-300 border rounded-lg lg:px-8 lg:py-3 hover:bg-gray-200 hover:shadow"
          >View Properties
          </a>
          <a
            href="#"
            className="px-4 py-2 text-yellow-900 transition duration-300 bg-yellow-400 border border-gray-600 rounded-lg lg:px-8 lg:py-3 hover:bg-yellow-300 hover:shadow-xl"
          >Buy Now</a
          >
        </div>
      </section>
      {/* property search section */}
      <div className="m-4 lg:m-0">
        <div className="p-8 bg-white lg:flex lg:items-center lg:justify-center">
          <form
            className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 lg:flex-nowrap"
          >
            <div className="">
              <select
                className="w-full py-2.5 px-8 bg-white border border-gray-400 rounded outline-none focus:ring-2"
              >
                <option>Type</option>
                <option>Apartment</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
                <option>Hotel</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                placeholder="Location"
              />
            </div>
            <div>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                placeholder="min"
              />
            </div>
            <div>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                placeholder="max"
              />
            </div>
            <div>
              <button className="px-8 py-2 text-blue-100 bg-gray-600 rounded">
                Search</button
              >
            </div>
          </form>
        </div>
      </div>

      {/* Feature Property */}
      <section className="px-4 py-4 bg-gray-200 lg:px-32 lg:py-20">
        <div className="">
          <h1 className="text-2xl font-bold text-center text-blue-600 lg:text-4xl">
            Feature Property
          </h1>
          <div className="flex justify-center">
            <div className="w-40 h-1 bg-indigo-400 rounded"></div>
          </div>
        </div>
        <div
          className="mt-4 space-x-0 space-y-2 lg:flex lg:flex-nowrap lg:space-x-4 lg:space-y-0 lg:mt-20"
        >
          <div className="p-4 bg-white rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="property"
            />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">
                Modern Design villa
              </h4>
              {/* <div>
                                2 beds &bull; 2 baths
                            </div> */}
              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600"
                >$3000.00</span
                > /M
              </div>
              <div className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                {/* 4/5 starts (based on 13 reviews) */}
              </div>
            </div>
            <div
              className="flex justify-between p-4 text-gray-700 border-t border-gray-300"
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
                  >
                  </path>
                </svg>
                <p><span className="font-bold text-gray-900">3</span> Bedrooms</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                  >
                  </path>
                </svg>
                <p><span className="font-bold text-gray-900">2</span> Bathrooms</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600992045264-136a22de917e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="property"
            />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">
                Modern Design villa
              </h4>
              {/* <div>
                                2 beds &bull; 2 baths
                            </div> */}
              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600"
                >$3000.00</span
                > /M
              </div>
              <div className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                {/* 4/5 starts (based on 13 reviews) */}
              </div>
            </div>
            <div
              className="flex justify-between p-4 text-gray-700 border-t border-gray-300"
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
                  >
                  </path>
                </svg>
                <p><span className="font-bold text-gray-900">3</span> Bedrooms</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                  >
                  </path>
                </svg>
                <p><span className="font-bold text-gray-900">2</span> Bathrooms</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWxlc3RhdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="property"
            />

            <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">
                Modern Design villa
              </h4>
              {/* <div>
                                2 beds &bull; 2 baths
                            </div> */}
              <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600"
                >$3000.00</span
                > /M
              </div>
              <div className="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                {/* 4/5 starts (based on 13 reviews) */}
              </div>
            </div>
            <div
              className="flex justify-between p-4 text-gray-700 border-t border-gray-300"
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
                  >
                  </path>
                </svg>
                <p><span className="font-bold text-gray-900">3</span> Bedrooms</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                  >
                  </path>
                </svg>
                <p><span className="font-bold text-gray-900">2</span> Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white">
        <div className="px-6 py-16 mx-auto max-w-7xl">
          <div className="mb-8">
            <h1
              className="text-2xl font-bold text-center text-blue-600 lg:text-4xl"
            >
              Our Services
            </h1>
            <div className="flex justify-center">
              <div className="w-40 h-1 bg-indigo-400 rounded"></div>
            </div>
          </div>

          <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Rent</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>

            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Sell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>

            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Sell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Resell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Resell</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
            <div className="px-6 py-8 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-800">Buy</h2>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                volutpat, viverra magna risus aliquam massa.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="px-4 pt-12 pb-32 mt-12 bg-gray-200 border-t lg:0">
        <div className="lg:flex lg:justify-evenly">
          <div className="max-w-sm mt-6 text-center lg:mt-0">
            <h6 className="mb-4 text-4xl font-semibold text-gray-700">
              Real Estate
            </h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              tenetur. Sint, vel sit molestiae velit doloribus aspernatur.
              Voluptate, necessitatibus. Inventore corrupti aliquid atque
              tempora quo eaque error voluptas et earum.
            </p>
          </div>
          <div className="mt-6 text-center lg:mt-0">
            <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
            <ul>
              <li><a href="" className="block py-2 text-gray-600">Home</a></li>
              <li><a href="" className="block py-2 text-gray-600">About us</a></li>
              <li>
                <a href="" className="block py-2 text-gray-600">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="mt-6 text-center lg:mt-0">
            <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
            <ul>
              <li><a href="" className="block py-2 text-gray-600">Property</a></li>
              <li><a href="" className="block py-2 text-gray-600">About us</a></li>
              <li><a href="" className="block py-2 text-gray-600">Help</a></li>
            </ul>
          </div>
          <div className="mt-6 text-center lg:mt-0">
            <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
            <ul>
              <li><a href="" className="block py-2 text-gray-600">FAQ</a></li>
              <li><a href="" className="block py-2 text-gray-600">About us</a></li>
              <li>
                <a href="" className="block py-2 text-gray-600">New Property</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}