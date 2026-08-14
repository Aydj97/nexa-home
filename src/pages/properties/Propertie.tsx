import { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
 
  ChevronDown,
 
  Filter,
  TrendingUp,
  Building2,
  Home,
  Crown,
  Eye,
 
  Phone,
 
  Share2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    title: "Luxury 4 Bedroom Duplex",
    location: "Lekki, Lagos",
    price: "₦85,000,000",
    beds: 4,
    baths: 5,
    area: "450 sqm",
    type: "For Sale",
    featured: true,
    yearBuilt: 2022,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    title: "Modern Family House",
    location: "Abuja",
    price: "₦65,000,000",
    beds: 3,
    baths: 4,
    area: "320 sqm",
    type: "For Sale",
    featured: false,
    yearBuilt: 2020,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    title: "Executive Apartment",
    location: "Victoria Island",
    price: "₦42,000,000",
    beds: 2,
    baths: 2,
    area: "210 sqm",
    type: "For Sale",
    featured: true,
    yearBuilt: 2021,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    title: "Luxury Villa",
    location: "Ikoyi",
    price: "₦150,000,000",
    beds: 6,
    baths: 7,
    area: "700 sqm",
    type: "For Sale",
    featured: true,
    yearBuilt: 2023,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    title: "Serviced Apartment",
    location: "Ikeja",
    price: "₦35,000,000",
    beds: 2,
    baths: 2,
    area: "180 sqm",
    type: "For Rent",
    featured: false,
    yearBuilt: 2019,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    title: "5 Bedroom Detached House",
    location: "Ajah",
    price: "₦95,000,000",
    beds: 5,
    baths: 6,
    area: "520 sqm",
    type: "For Sale",
    featured: false,
    yearBuilt: 2022,
  },
];

const PropertyCard = ({ property, index }: { property: typeof properties[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute left-3 sm:left-4 top-3 sm:top-4 flex flex-col gap-2">
          <span className={`rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg ${
            property.type === "For Sale" 
              ? "bg-emerald-500 text-white" 
              : "bg-blue-500 text-white"
          }`}>
            {property.type}
          </span>
          {property.featured && (
            <span className="flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-gray-900 shadow-lg">
              <Crown size={12} />
              Featured
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
          >
            <Heart
              size={16}
              className={`transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
          >
            <Share2 size={16} className="text-gray-600" />
          </motion.button>
        </div>

        {/* Quick View Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur-sm hover:bg-white sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Quick View
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-bold text-gray-900 sm:text-lg md:text-xl">
            {property.title}
          </h3>
          <span className="shrink-0 text-xs text-gray-400 sm:text-sm">
            {property.yearBuilt}
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-1 text-xs sm:text-sm text-gray-500">
          <MapPin size={14} className="shrink-0 text-blue-600 sm:size-16" />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="mt-3 sm:mt-4">
          <p className="text-lg font-extrabold text-blue-600 sm:text-xl md:text-2xl">
            {property.price}
          </p>
        </div>

        {/* Property Details */}
        <div className="mt-4 grid grid-cols-3 divide-x rounded-xl bg-gray-50 py-2 sm:py-3">
          <div className="flex flex-col items-center gap-0.5 text-gray-600">
            <BedDouble size={16} className="text-gray-500 sm:size-18" />
            <span className="text-[10px] sm:text-xs">
              {property.beds} Beds
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-gray-600">
            <Bath size={16} className="text-gray-500 sm:size-18" />
            <span className="text-[10px] sm:text-xs">
              {property.baths} Baths
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-gray-600">
            <Maximize size={16} className="text-gray-500 sm:size-18" />
            <span className="text-[10px] sm:text-xs">{property.area}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-gray-900 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            View Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-1 rounded-xl border-2 border-gray-200 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            <Phone size={14} />
            <span className="hidden xs:inline">Contact</span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Filter properties
  useEffect(() => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (propertyType) {
      filtered = filtered.filter(p => p.type === propertyType);
    }

    if (priceRange) {
      // Simple price filtering logic
      const ranges: { [key: string]: [number, number] } = {
        "0-50": [0, 50000000],
        "50-100": [50000000, 100000000],
        "100+": [100000000, Infinity],
      };
      const [min, max] = ranges[priceRange] || [0, Infinity];
      filtered = filtered.filter(p => {
        const price = parseInt(p.price.replace(/[₦,]/g, ''));
        return price >= min && price <= max;
      });
    }

    setFilteredProperties(filtered);
  }, [searchTerm, propertyType, priceRange]);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#1a237e] via-[#283593] to-[#dcae62]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-amber-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-sm">
                🏠 Find your perfect home
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Find Your Dream
              <span className="block text-amber-300">Property Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-4 max-w-2xl text-sm text-blue-50 sm:text-base md:text-lg"
            >
              Explore premium homes, apartments, land, and commercial
              properties in the best locations across Nigeria.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            >
              {[
                { label: "Properties", value: "500+", icon: Home },
                { label: "Happy Clients", value: "1,200+", icon: TrendingUp },
                { label: "Cities", value: "15", icon: Building2 },
                { label: "Listings", value: "850+", icon: Eye },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 border border-white/10"
                >
                  <stat.icon className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-amber-300" />
                  <div className="mt-1 text-lg sm:text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-blue-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= SEARCH BOX ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-sm sm:mt-10 sm:p-4"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
              {/* Location */}
              <div className="relative md:col-span-5">
                <MapPin
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:left-4"
                />
                <input
                  type="text"
                  placeholder="Search location or property..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:h-12 sm:pl-11 sm:text-base"
                />
              </div>

              {/* Property Type */}
              <div className="md:col-span-3">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:h-12 sm:px-4 sm:text-base"
                >
                  <option value="">Property Type</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>

              {/* Price */}
              <div className="md:col-span-2">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:h-12 sm:px-4 sm:text-base"
                >
                  <option value="">Price Range</option>
                  <option value="0-50">Under ₦50M</option>
                  <option value="50-100">₦50M - ₦100M</option>
                  <option value="100+">₦100M+</option>
                </select>
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 sm:h-12 md:col-span-2"
              >
                <Search size={18} />
                Search
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 sm:text-sm">
              Explore properties
            </p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Available Properties
            </h2>
            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              {filteredProperties.length} properties found
            </p>
          </div>

          <div className="flex w-full gap-2 sm:gap-3 sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 shadow-sm md:hidden"
            >
              <Filter size={16} />
              Filters
            </motion.button>

            <div className="relative flex-1 sm:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 pr-8 text-sm font-medium text-gray-700 shadow-sm outline-none sm:w-44 sm:px-4 sm:pr-10"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Lowest Price</option>
                <option value="price-high">Highest Price</option>
                <option value="popular">Most Popular</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden md:hidden"
            >
              <div className="rounded-xl bg-white p-4 shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600">
                      Property Type
                    </label>
                    <select className="mt-1 h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none">
                      <option>All</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Land</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600">
                      Price Range
                    </label>
                    <select className="mt-1 h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none">
                      <option>All</option>
                      <option>Under ₦50M</option>
                      <option>₦50M - ₦100M</option>
                      <option>₦100M+</option>
                    </select>
                  </div>
                </div>
                <button className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white">
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <Home className="h-16 w-16 text-gray-300" />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              No properties found
            </h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filters
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}

        {/* ================= PAGINATION ================= */}
        {filteredProperties.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-14"
          >
            <button className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-10 sm:min-w-10">
              Prev
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm font-medium transition sm:h-10 sm:min-w-10 ${
                  page === 1
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:h-10 sm:min-w-10">
              Next
            </button>
          </motion.div>
        )}
      </section>
    </main>
  );
}