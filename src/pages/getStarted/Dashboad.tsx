import { useState } from 'react';
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
  Menu,
  X,
  ChevronRight,
  Eye,
  Star,
  Clock,
  Award,
  Building2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [] = useState("dashboard");

  const stats = [
    {
      title: "Saved Properties",
      value: "24",
      icon: Heart,
      change: "+12%",
      trend: "up",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      title: "My Listings",
      value: "8",
      icon: Home,
      change: "+3%",
      trend: "up",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Messages",
      value: "12",
      icon: MessageCircle,
      change: "-5%",
      trend: "down",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "Property Views",
      value: "1,284",
      icon: Eye,
      change: "+28%",
      trend: "up",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
    },
  ];

  const recentProperties = [
    {
      id: 1,
      title: "Luxury 4 Bedroom Duplex",
      location: "Lekki, Lagos",
      price: "₦85,000,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
      status: "Available",
      featured: true,
    },
    {
      id: 2,
      title: "Modern 3 Bedroom Apartment",
      location: "Victoria Island, Lagos",
      price: "₦120,000,000",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
      status: "Pending",
      featured: false,
    },
    {
      id: 3,
      title: "Executive 5 Bedroom Mansion",
      location: "Banana Island, Lagos",
      price: "₦250,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      status: "Sold",
      featured: true,
    },
  ];

  const activities = [
    { icon: Eye, text: "Someone viewed your property", time: "2 mins ago" },
    { icon: Heart, text: "Property added to favorites", time: "15 mins ago" },
    { icon: MessageCircle, text: "New message from client", time: "1 hour ago" },
    { icon: Star, text: "Received 5-star rating", time: "3 hours ago" },
  ];

  const sidebarLinks = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Browse Properties", icon: Search },
    { name: "Saved Properties", icon: Heart },
    { name: "Messages", icon: MessageCircle },
    { name: "Profile", icon: User },
    { name: "Settings", icon: Settings },
    { name: "Logout", icon: LogOut, danger: true },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Mobile Navbar */}
      <header className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nexa Homes
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors" size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </div>
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="Profile"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all cursor-pointer"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 min-h-screen p-6 sticky top-0">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nexa Homes
            </h1>
          </div>

          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img
                src="https://i.pravatar.cc/150?img=11"
                className="w-24 h-24 rounded-full ring-4 ring-blue-500/20 mx-auto hover:ring-blue-500/40 transition-all"
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <h2 className="font-bold text-xl mt-4 text-gray-800">John Doe</h2>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              <Award size={14} className="text-blue-500" />
              Premium Buyer
            </p>
          </div>

          <nav className="space-y-1">
            {sidebarLinks.map((link, index) => (
              <a
                key={index}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer group ${
                  link.active
                    ? "bg-linear-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold shadow-sm"
                    : link.danger
                    ? "text-red-500 hover:bg-red-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <link.icon size={20} className={link.active ? "text-blue-600" : ""} />
                <span className="flex-1">{link.name}</span>
                {link.active && <ChevronRight size={16} className="text-blue-600" />}
              </a>
            ))}
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Nexa Homes
              </h1>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="text-center mb-8">
              <img
                src="https://i.pravatar.cc/150?img=11"
                className="w-20 h-20 rounded-full ring-4 ring-blue-500/20 mx-auto"
                alt="Profile"
              />
              <h2 className="font-bold text-xl mt-3">John Doe</h2>
              <p className="text-gray-500 text-sm">Premium Buyer</p>
            </div>

            <nav className="space-y-1">
              {sidebarLinks.map((link, index) => (
                <a
                  key={index}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    link.active
                      ? "bg-linear-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold"
                      : link.danger
                      ? "text-red-500 hover:bg-red-50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Welcome Back 👋
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Here's an overview of your account activity
              </p>
            </div>
            <button className="w-full sm:w-auto bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold">
              <Plus size={18} />
              Add Property
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:border-blue-100/50"
              >
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} className={`text-${item.color.split('-')[1]}-600`} />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${
                    item.trend === "up" ? "text-emerald-600" : "text-red-600"
                  }`}>
                    {item.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {item.change}
                  </div>
                </div>
                <h3 className="text-gray-500 text-sm mt-4">{item.title}</h3>
                <p className="text-2xl font-bold text-gray-800 mt-1">{item.value}</p>
                <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full w-3/4 bg-linear-to-r ${item.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Recent Properties - Takes 2/3 on large screens */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Recently Viewed Properties</h2>
                    <p className="text-gray-500 text-sm">Properties you've been checking out</p>
                  </div>
                  <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View All <ChevronRight size={16} />
                  </button>
                </div>

                <div className="divide-y divide-gray-100">
                  {recentProperties.map((property) => (
                    <div
                      key={property.id}
                      className="p-6 hover:bg-gray-50/50 transition-all duration-200 group"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative shrink-0">
                          <img
                            src={property.image}
                            className="w-full sm:w-40 h-28 sm:h-32 object-cover rounded-xl"
                            alt={property.title}
                          />
                          {property.featured && (
                            <span className="absolute top-2 left-2 bg-linear-to-r from-amber-400 to-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                              Featured
                            </span>
                          )}
                          <span className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-lg ${
                            property.status === "Available"
                              ? "bg-emerald-100 text-emerald-700"
                              : property.status === "Pending"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {property.status}
                          </span>
                        </div>
                        <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {property.title}
                            </h3>
                            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                              <MapPin size={14} />
                              {property.location}
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg text-gray-600 flex items-center gap-1">
                                <Building2 size={12} /> 4 Beds
                              </span>
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg text-gray-600 flex items-center gap-1">
                                <Users size={12} /> 3 Baths
                              </span>
                            </div>
                          </div>
                          <div className="text-right w-full sm:w-auto">
                            <p className="text-blue-600 text-xl font-bold">{property.price}</p>
                            <button className="mt-2 border border-blue-600 text-blue-600 px-4 py-1.5 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Feed - Takes 1/3 on large screens */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
                  <p className="text-gray-500 text-sm">Your latest notifications</p>
                </div>

                <div className="p-6 space-y-4">
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <activity.icon size={18} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 font-medium">{activity.text}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <Clock size={12} />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-100">
                  <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Upgrade to Pro</p>
                        <p className="text-xs text-gray-500">Get premium features</p>
                      </div>
                      <button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions - Mobile Bottom Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 lg:hidden z-40">
            <div className="flex justify-around items-center p-3">
              <button className="flex flex-col items-center gap-0.5 text-blue-600">
                <Home size={22} />
                <span className="text-[10px] font-medium">Home</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-gray-600">
                <Search size={22} />
                <span className="text-[10px] font-medium">Search</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-gray-600 relative">
                <Heart size={22} />
                <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center font-bold">
                  24
                </span>
                <span className="text-[10px] font-medium">Saved</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-gray-600">
                <MessageCircle size={22} />
                <span className="text-[10px] font-medium">Messages</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-gray-600">
                <User size={22} />
                <span className="text-[10px] font-medium">Profile</span>
              </button>
            </div>
          </div>

          {/* Bottom padding for mobile nav */}
          <div className="h-20 lg:hidden"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;