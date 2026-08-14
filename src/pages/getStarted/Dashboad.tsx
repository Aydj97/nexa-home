// import React from 'react'

import {
  Home,
  Heart,
  Search,
  MessageCircle,
  Bell,
  User,
  Settings,
  LogOut,
  MapPin,
  Plus,
} from "lucide-react"


const Dashboad = () => {
     const stats = [
    {
      title: "Saved Properties",
      value: "24",
      icon: Heart,
    },
    {
      title: "My Listings",
      value: "8",
      icon: Home,
    },
    {
      title: "Messages",
      value: "12",
      icon: MessageCircle,
    },
    {
      title: "Property Views",
      value: "1,284",
      icon: Search,
    },
  ];

  return (
    <div className="outer-container">
        <div className="inner-container">

            <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-600">
            Nexa Homes
          </h1>

          <div className="flex items-center gap-5">
            <Bell className="cursor-pointer" />
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>

        </div>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-72 bg-white shadow min-h-screen p-6">

          <div className="text-center">

            <img
              src="https://i.pravatar.cc/150"
              className="w-24 h-24 rounded-full mx-auto"
              alt=""
            />

            <h2 className="font-bold text-xl mt-4">
              John Doe
            </h2>

            <p className="text-gray-500">
              Buyer
            </p>

          </div>

          <nav className="mt-10 space-y-3">

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-blue-600">
              <Home size={20} />
              Dashboard
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <Search size={20} />
              Browse Properties
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <Heart size={20} />
              Saved Properties
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <MessageCircle size={20} />
              Messages
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <User size={20} />
              Profile
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
              <Settings size={20} />
              Settings
            </a>

            <a className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50">
              <LogOut size={20} />
              Logout
            </a>

          </nav>

        </aside>

        {/* Main */}
        <main className="flex-1 p-8">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-3xl font-bold">
                Welcome Back 👋
              </h2>

              <p className="text-gray-500">
                Here's an overview of your account.
              </p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
              <Plus size={18} />
              Add Property
            </button>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow"
              >
                <item.icon
                  className="text-blue-600"
                  size={30}
                />

                <h3 className="text-gray-500 mt-4">
                  {item.title}
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

          {/* Recent Properties */}
          <div className="bg-white rounded-xl shadow mt-10">

            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">
                Recently Viewed Properties
              </h2>
            </div>

            <div className="divide-y">

              {[1,2,3].map((item)=>(
                <div
                  key={item}
                  className="flex justify-between items-center p-6"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={`https://picsum.photos/120/90?random=${item}`}
                      className="rounded-lg w-28 h-20 object-cover"
                      alt=""
                    />

                    <div>

                      <h3 className="font-semibold">
                        Luxury 4 Bedroom Duplex
                      </h3>

                      <div className="flex items-center gap-1 text-gray-500 mt-1">
                        <MapPin size={16}/>
                        Lekki, Lagos
                      </div>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-blue-600 text-xl font-bold">
                      ₦85,000,000
                    </p>

                    <button className="mt-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                      View Details
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </main>

      </div>

    </div>

        </div>

    </div>
  )
}

export default Dashboad