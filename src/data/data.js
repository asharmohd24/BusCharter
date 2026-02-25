export const siteData = {
  // Site Identity
  siteName: "Global Bus Charter",
  siteTitle: "Global Bus Charter | Premium Group Transportation & Bus Rentals",
  siteDescription: "Reliable charter bus services for corporate events, weddings, and group travel. Explore our modern fleet of mini-buses, coaches, and party buses. Get a quote today.",
  logo: "/assets/images/logo2.png",

  // SEO
  seo: {
    defaultTitle: "Global Bus Charter | Group Transportation Experts",
    titleTemplate: "%s | Global Bus Charter",
    keywords: "charter bus rental, group transportation, bus charter services, corporate event transportation, wedding shuttle service, party bus rental, mini bus hire, coach rental for groups, airport shuttle service, school trip transportation",
  },

  // Contact Information
  contact: {
    phone: "+44 208 4326 423",
    phoneFormatted: "+442084326423",
    email: "info@globalbuscharters.com",
    address: {
      full: "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
    },
    workingHours: {
      weekdays: "Mon - Fri: 8:00 AM - 6:00 PM",
      weekend: "Sat - Sun: 9:00 AM - 4:00 PM",
    },
  },

  // Google Maps
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9160537426387!2d-0.12614482337948946!3d51.514756071814894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876058c7c9527fb%3A0x79bc7464573598c1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sae!4v1771929033057!5m2!1sen!2sae",
  },

  
  // Navigation Menu
  navigation: [
    { name: "Home", path: "/", active: true },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Fleet", path: "/our-fleet" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ],

  // Hero Banner
  hero: {
    title: "Travel Together, Travel Better",
    subtitle: "Spacious, comfortable buses for group travel – corporate events, weddings, airport transfers, and more.",
    ctaText: "Get a Quote",
    ctaLink: "/booking",
  },

  // Services Section - Each service has a unique slug, matching icon, and detailed content
  services: [
    {
      id: 1,
      slug: "corporate-employee-transport",
      icon: "corporate", // Briefcase/building icon
      image: "/assets/images/corp1.jpg",
      title: "Corporate & Employee Transport",
      description: "Reliable daily shuttles for your staff. Comfortable coaches with WiFi and power outlets to keep your team productive.",
      link: "/services/corporate-employee-transport",
      // Detailed content for service detail page
      fullDescription: "Transform your employee commute with our premium corporate transportation solutions. We understand that a productive workday begins with a stress-free journey. Our corporate shuttle services are designed to maximize efficiency while ensuring comfort for your entire team.",
      features: [
        "Dedicated account manager for seamless coordination",
        "Real-time GPS tracking for fleet visibility",
        "WiFi and power outlets on all vehicles",
        "Climate-controlled cabins for year-round comfort",
        "Flexible scheduling to match your business hours",
        "Monthly billing with detailed trip reports",
        "Background-checked, professionally trained drivers",
        "ADA-compliant vehicles available upon request"
      ],
      benefits: [
        { title: "Boost Productivity", description: "Employees can work, relax, or prepare for meetings during their commute instead of focusing on traffic." },
        { title: "Reduce Parking Costs", description: "Minimize the need for expensive parking facilities by consolidating employee transportation." },
        { title: "Environmental Impact", description: "Reduce your company's carbon footprint by taking multiple cars off the road." },
        { title: "Employee Satisfaction", description: "Offer a valuable perk that improves work-life balance and reduces commute stress." }
      ],
      pricing: {
        startingAt: "$1,500/month",
        note: "Custom packages available based on route, frequency, and passenger count"
      },
      faqs: [
        { question: "How far in advance should we book corporate shuttles?", answer: "We recommend booking at least 2 weeks in advance for regular routes. However, we can accommodate last-minute requests based on fleet availability." },
        { question: "Can routes be customized for our office locations?", answer: "Absolutely! We design routes specifically for your needs, including multiple pickup points and timing that aligns with your work schedule." },
        { question: "What happens if a vehicle breaks down?", answer: "We maintain backup vehicles and have a rapid response protocol to ensure minimal disruption to your service." }
      ]
    },
    {
      id: 2,
      slug: "airport-group-transfers",
      icon: "airport", // Airplane icon
      image: "/assets/images/shuttle.png",
      title: "Airport Group Transfers",
      description: "Stress-free airport transportation for large groups. We monitor flight times and coordinate pickups so you never wait.",
      link: "/services/airport-group-transfers",
      fullDescription: "Eliminate the chaos of coordinating airport transportation for large groups. Whether you're managing a conference delegation, sports team, or tour group, our airport transfer service ensures everyone arrives together, on time, and stress-free.",
      features: [
        "Real-time flight monitoring and tracking",
        "Meet-and-greet service at arrivals",
        "Luggage handling assistance",
        "Coordination with multiple flight arrivals",
        "Direct communication with group leaders",
        "Comfortable seating with ample luggage space",
        "Service to all major airports",
        "24/7 dispatch support"
      ],
      benefits: [
        { title: "Flight Monitoring", description: "We track all incoming flights and adjust pickup times automatically for delays." },
        { title: "Group Coordination", description: "One vehicle, one driver, one pickup – eliminate the confusion of multiple rideshares." },
        { title: "Cost Effective", description: "Group charter is often more economical than individual taxis or rideshares." },
        { title: "Professional Welcome", description: "Make a great first impression with professional drivers holding welcome signs." }
      ],
      pricing: {
        startingAt: "$350",
        note: "Price varies by group size, airport, and destination distance"
      },
      faqs: [
        { question: "What if our flight is delayed?", answer: "We monitor all flights in real-time and automatically adjust pickup times. There's no additional charge for flight delays." },
        { question: "Can you accommodate groups on different flights?", answer: "Yes! We can coordinate multiple pickups or arrange for a single pickup once all flights have landed." },
        { question: "Is there room for luggage?", answer: "All our coaches have generous luggage compartments. Let us know your group size and we'll ensure adequate space." }
      ]
    },
    {
      id: 3,
      slug: "wedding-party-buses",
      icon: "wedding", // Heart/rings icon
      image: "/assets/images/wed.png",
      title: "Wedding & Party Buses",
      description: "Celebrate in style with our luxury party buses. Equipped with sound systems, ambient lighting, and a bar area.",
      link: "/services/wedding-party-buses",
      fullDescription: "Your special day deserves special transportation. Our wedding and party buses add an unforgettable touch to celebrations, keeping your guests together, entertained, and arriving in style. From elegant coaches for formal affairs to festive party buses for bachelor/bachelorette parties, we have the perfect vehicle for every celebration.",
      features: [
        "Luxury interior with premium seating",
        "Premium sound system with Bluetooth connectivity",
        "LED ambient lighting with customizable colors",
        "Built-in bar area with ice storage",
        "Champagne toast packages available",
        "Red carpet service upon request",
        "Professional chauffeur in formal attire",
        "Decoration coordination with wedding planners"
      ],
      benefits: [
        { title: "Keep The Party Going", description: "Your celebration doesn't pause during transit – it continues with music, drinks, and good company." },
        { title: "Guest Convenience", description: "No one needs to worry about designated drivers or parking at multiple venues." },
        { title: "Photo Opportunities", description: "Our stunning vehicles make for beautiful wedding photos and memorable moments." },
        { title: "Stress-Free Logistics", description: "Keep your entire wedding party together and on schedule throughout the day." }
      ],
      pricing: {
        startingAt: "$800",
        note: "4-hour minimum. Packages available for full-day wedding service"
      },
      faqs: [
        { question: "Can we decorate the bus?", answer: "Yes! We allow tasteful decorations. We also offer decoration packages and can coordinate with your wedding planner." },
        { question: "Is alcohol allowed on the bus?", answer: "Yes, for passengers 21 and over. We can provide coolers and ice, or arrange for a champagne package." },
        { question: "How early should we book for a wedding?", answer: "We recommend booking 3-6 months in advance, especially for peak wedding season (May-October)." }
      ]
    },
    {
      id: 4,
      slug: "school-sports-transport",
      icon: "school", // Graduation cap icon
      image: "/assets/images/sport.png",
      title: "School & Sports Team Transport",
      description: "Safe, reliable transportation for students and athletes. All drivers undergo background checks and defensive driving training.",
      link: "/services/school-sports-transport",
      fullDescription: "Safety is our top priority when transporting students. Our school and sports team transportation services meet the highest safety standards while providing comfortable, reliable service for field trips, athletic events, band competitions, and more. Parents and administrators can rest easy knowing their students are in professional hands.",
      features: [
        "DOT-compliant vehicles with regular inspections",
        "Background-checked and drug-tested drivers",
        "Defensive driving certified chauffeurs",
        "GPS tracking for real-time location updates",
        "Direct communication with school administrators",
        "Equipment storage for sports gear and instruments",
        "Climate-controlled comfortable seating",
        "First aid kits on all vehicles"
      ],
      benefits: [
        { title: "Safety First", description: "All drivers complete extensive background checks, drug testing, and specialized training for transporting minors." },
        { title: "Reliability", description: "We understand school schedules don't have flexibility – we're always on time, every time." },
        { title: "Communication", description: "Real-time updates keep parents and administrators informed throughout every trip." },
        { title: "Equipment Space", description: "Dedicated storage for sports equipment, band instruments, or field trip supplies." }
      ],
      pricing: {
        startingAt: "$450",
        note: "Educational institution discounts available. Seasonal contracts for sports teams."
      },
      faqs: [
        { question: "Are your drivers trained to work with children?", answer: "Yes, all drivers complete specialized training for student transportation, including emergency protocols and age-appropriate communication." },
        { question: "Can parents track the bus location?", answer: "Yes, we provide real-time GPS tracking links that can be shared with parents and administrators." },
        { question: "Do you offer discounts for schools?", answer: "Yes, we offer special rates for educational institutions and seasonal contracts for sports teams." }
      ]
    },
    // Add more services as needed - the structure supports unlimited additions
    // Example of additional services that can be added:
    /*
    {
      id: 5,
      slug: "city-tours",
      icon: "tour",
      title: "City Tours & Sightseeing",
      description: "Explore the city with our guided tour buses...",
      ...
    },
    {
      id: 6,
      slug: "concert-event-transport",
      icon: "event",
      title: "Concert & Event Transportation",
      description: "Get your group to concerts, festivals, and events...",
      ...
    },
    */
  ],

  // Why Choose Us (Process Steps)
  whyChooseUs: [
    {
      id: 1,
      icon: "bus-select",
      title: "Choose Your Bus",
      description: "Browse our fleet of modern coaches, minibuses, and party buses. Select the one that fits your group size and needs.",
    },
    {
      id: 2,
      icon: "quote",
      title: "Get a Free Quote",
      description: "Tell us your trip details and receive a competitive, all-inclusive quote within hours – no hidden fees.",
    },
    {
      id: 3,
      icon: "enjoy",
      title: "Enjoy the Ride",
      description: "Sit back and relax while our professional drivers handle the road. We ensure a smooth, safe journey.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "John Smith",
      role: "Event Planner",
      avatar: "/assets/images/testimonial-1.webp",
      rating: 5,
      text: "Global Bus Charter made our corporate retreat seamless. The coach was immaculate, the driver was punctual, and the booking process was a breeze.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Wedding Coordinator",
      avatar: "/assets/images/testimonial-2.webp",
      rating: 5,
      text: "Our wedding guests loved the party bus! It added a fun touch and kept everyone together. Highly recommend their service.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "School Principal",
      avatar: "/assets/images/testimonial-3.webp",
      rating: 5,
      text: "We've used them for multiple school trips. Always on time, safe, and the kids enjoy the WiFi on board. Great experience!",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Travel Blogger",
      avatar: "/assets/images/testimonial-4.webp",
      rating: 5,
      text: "Traveling with a group of 40 has never been easier. The coach was comfortable, clean, and the driver knew all the best stops.",
    },
  ],

  // Fleet (Vehicles) - Each vehicle has detailed specs and descriptions
  cars: [
    {
      id: 1,
      slug: "volvo-9700-coach",
      name: "Volvo 9700 Coach",
      category: "Luxury Coach",
      price: 999,
      priceUnit: "day",
      image: "/assets/images/volvo971.png",
      features: ["Reclining Seats", "Onboard Restroom", "WiFi", "Power Outlets", "Entertainment System"],
      specs: {
        passengers: 49,
        luggage: 40,
        doors: 2,
        transmission: "Automatic",
        fuel: "Diesel",
      },
      // Detailed content for vehicle detail page
      fullDescription: "The Volvo 9700 represents the pinnacle of coach travel. Designed for long-distance comfort and efficiency, this luxury coach delivers an exceptional experience for corporate travel, tour groups, and any occasion where comfort and style matter. The spacious interior, combined with Volvo's renowned safety features, makes every journey a pleasure.",
      amenities: [
        { name: "Reclining Seats", icon: "seat", description: "Plush seats with 3-position recline and adjustable headrests" },
        { name: "Onboard Restroom", icon: "restroom", description: "Clean, well-maintained restroom facility" },
        { name: "WiFi", icon: "wifi", description: "Complimentary high-speed WiFi throughout the cabin" },
        { name: "Power Outlets", icon: "power", description: "110V outlets and USB ports at every seat" },
        { name: "Entertainment System", icon: "entertainment", description: "Multiple LCD screens with DVD/Blu-ray capability" },
        { name: "Climate Control", icon: "climate", description: "Individual overhead air vents for personal comfort" },
        { name: "PA System", icon: "speaker", description: "Professional PA system with multiple microphones" },
        { name: "Reading Lights", icon: "light", description: "Individual LED reading lights" }
      ],
      idealFor: ["Corporate retreats", "Long-distance travel", "Tour groups", "Conference shuttles", "Casino trips"],
      safetyFeatures: ["Electronic Stability Control", "Lane Departure Warning", "Adaptive Cruise Control", "Emergency Exit Windows", "Fire Suppression System"],
      dimensions: {
        length: "45 feet",
        width: "8.5 feet",
        height: "12.5 feet"
      }
    },
    {
      id: 2,
      slug: "mercedes-benz-sprinter",
      name: "Mercedes-Benz Sprinter",
      category: "Minibus",
      price: 599,
      priceUnit: "day",
      image: "/assets/images/benzs.png",
      features: ["Leather Seats", "Air Conditioning", "Bluetooth Audio", "Overhead Storage"],
      specs: {
        passengers: 16,
        luggage: 12,
        doors: 2,
        transmission: "Automatic",
        fuel: "Diesel",
      },
      fullDescription: "The Mercedes-Benz Sprinter is the perfect choice for smaller groups seeking premium transportation. This versatile minibus combines Mercedes-Benz luxury with practical functionality, making it ideal for executive transport, small wedding parties, and intimate group outings. The refined interior and smooth ride ensure every passenger travels in comfort.",
      amenities: [
        { name: "Leather Seats", icon: "seat", description: "Premium leather captain's chairs with armrests" },
        { name: "Air Conditioning", icon: "climate", description: "Powerful dual-zone climate control" },
        { name: "Bluetooth Audio", icon: "music", description: "Premium sound system with Bluetooth connectivity" },
        { name: "Overhead Storage", icon: "luggage", description: "Generous overhead bins for personal items" },
        { name: "Tinted Windows", icon: "window", description: "Privacy tinted windows throughout" },
        { name: "USB Charging", icon: "power", description: "USB charging ports for all passengers" }
      ],
      idealFor: ["Executive transport", "Small wedding parties", "Airport transfers", "Wine tours", "Business meetings"],
      safetyFeatures: ["Crosswind Assist", "Attention Assist", "Active Brake Assist", "Blind Spot Monitoring"],
      dimensions: {
        length: "24 feet",
        width: "6.5 feet",
        height: "9.5 feet"
      }
    },
    {
      id: 3,
      slug: "prevost-h3-45",
      name: "Prevost H3-45",
      category: "Premium Coach",
      price: 1299,
      priceUnit: "day",
      image: "/assets/images/pre.png",
      features: ["Full Bathroom", "Leather Lounge Seating", "Flat‑Screen TVs", "Surround Sound", "Wet Bar"],
      specs: {
        passengers: 36,
        luggage: 50,
        doors: 2,
        transmission: "Automatic",
        fuel: "Diesel",
      },
      fullDescription: "The Prevost H3-45 is our ultimate entertainment coach, designed for those who want to travel in absolute luxury. This premium vehicle transforms group transportation into an experience, featuring a full entertainment center, lounge-style seating, and amenities you'd expect from a five-star hotel. Perfect for VIP events, celebrity transport, and milestone celebrations.",
      amenities: [
        { name: "Full Bathroom", icon: "restroom", description: "Complete bathroom with toilet, sink, and vanity" },
        { name: "Leather Lounge Seating", icon: "seat", description: "Executive lounge chairs and sofa seating" },
        { name: "Flat-Screen TVs", icon: "entertainment", description: "Multiple 42\" flat-screen monitors" },
        { name: "Surround Sound", icon: "speaker", description: "Bose surround sound system" },
        { name: "Wet Bar", icon: "bar", description: "Full wet bar with refrigerator and ice maker" },
        { name: "Satellite TV", icon: "satellite", description: "DirecTV satellite television" },
        { name: "Gaming Console", icon: "game", description: "PlayStation 5 gaming system" },
        { name: "Hardwood Floors", icon: "floor", description: "Elegant hardwood flooring throughout" }
      ],
      idealFor: ["VIP events", "Bachelor/bachelorette parties", "Celebrity transport", "Concert shuttles", "Milestone celebrations"],
      safetyFeatures: ["360° Camera System", "Advanced Driver Assistance", "Emergency Exits", "Fire Detection System", "Electronic Stability"],
      dimensions: {
        length: "45 feet",
        width: "8.5 feet",
        height: "12.5 feet"
      }
    },
    {
      id: 4,
      slug: "vdl-futura-luxuria",
      name: "VDL Futura FHD2 Luxuria",
      category: "Executive Coach",
      price: 1199,
      priceUnit: "day",
      image: "/assets/images/vdl.png",
      features: ["2+1 Seating", "Personal Entertainment", "Onboard Servery", "Leather Interior", "Tables"],
      specs: {
        passengers: 31,
        luggage: 45,
        doors: 2,
        transmission: "Automatic",
        fuel: "Diesel",
      },
      fullDescription: "Experience the business-class equivalent of coach travel. The VDL Futura in Luxuria specification is among the most luxurious vehicles on the road, designed for discerning travelers who refuse to compromise on comfort. With a spacious 2+1 seating layout, personal touch-screen TVs, and an onboard servery for refreshments, this coach transforms long-distance journeys into a relaxing experience.",
      amenities: [
        { name: "2+1 Leather Seats", icon: "seat", description: "Wider seats with more legroom in a 2+1 configuration, some with tables" },
        { name: "Personal Entertainment", icon: "entertainment", description: "Individual touch-screen TVs with a wide selection of media" },
        { name: "Onboard Servery", icon: "bar", description: "Convenient area for complimentary hot and cold refreshments" },
        { name: "Power & USB Outlets", icon: "power", description: "Plug-in and USB ports at every seat" },
        { name: "Premium WiFi", icon: "wifi", description: "High-speed internet connectivity throughout your journey" },
        { name: "Ambient Lighting", icon: "light", description: "Adjustable mood lighting for a relaxed atmosphere" }
      ],
      idealFor: ["Executive travel", "European tours", "Airport alternative travel", "High-end corporate shuttles", "Luxury group getaways"],
      safetyFeatures: ["Advanced Emergency Braking System", "Lane Departure Warning", "Adaptive Cruise Control", "Tire Pressure Monitoring", "Electronic Stability Program"],
      dimensions: {
        length: "43 feet",
        width: "8.4 feet",
        height: "12.3 feet"
      }
    },
    {
      id: 5,
      slug: "mercedes-benz-tourismo",
      name: "Mercedes-Benz Tourismo",
      category: "Premium Coach",
      price: 899,
      priceUnit: "day",
      image: "/assets/images/benztou.jpg",
      features: ["61 Seats", "Tri-axle Stability", "Large Luggage Hold", "Onboard Restroom", "Air Conditioning"],
      specs: {
        passengers: 61,
        luggage: 55,
        doors: 2,
        transmission: "Automated Manual",
        fuel: "Diesel",
      },
      fullDescription: "The Mercedes-Benz Tourismo is a benchmark in the coach industry, celebrated for its reliability, safety, and efficiency. This tri-axle version offers exceptional stability and comfort for large groups on long-haul routes. Whether for a school trip, an athletic team traveling to a championship, or a large tour group, the Tourismo provides a smooth, quiet, and dignified travel experience for up to 61 passengers.",
      amenities: [
        { name: "Onboard Restroom", icon: "restroom", description: "Convenient restroom facility for long journeys" },
        { name: "Multi-zone Climate Control", icon: "climate", description: "Powerful air conditioning and heating for passenger comfort" },
        { name: "Entertainment Monitors", icon: "entertainment", description: "Overhead screens showing films or presentations" },
        { name: "Comfort Seating", icon: "seat", description: "Ergonomic, reclining seats with armrests" },
        { name: "Onboard PA System", icon: "speaker", description: "Public address system for tour guides or drivers" },
        { name: "Generous Luggage Bays", icon: "luggage", description: "Massive underfloor storage for suitcases and equipment" }
      ],
      idealFor: ["School trips", "Athletic team transport", "Large tour groups", "Multi-day excursions", "Airport transfers for large groups"],
      safetyFeatures: ["Active Brake Assist", "Lane Keeping Assist", "Stability Control", "Rain and Light Sensors", "Tire Pressure Monitor"],
      dimensions: {
        length: "46 feet",
        width: "8.4 feet",
        height: "12.6 feet"
      }
    },
    // --- Additional Minibuses & Mini-Coaches ---
    {
      id: 6,
      slug: "ford-transit-15passenger",
      name: "Ford Transit 15-Passenger Minibus",
      category: "Minibus",
      price: 399,
      priceUnit: "day",
      image: "/assets/images/frd.png",
      features: ["High Roof", "Captain's Chairs", "Dual A/C", "Rear Camera", "Bluetooth"],
      specs: {
        passengers: 15,
        luggage: 10,
        doors: 2,
        transmission: "Automatic",
        fuel: "Gasoline",
      },
      fullDescription: "The Ford Transit 15-Passenger Minibus is the perfect blend of maneuverability and capacity. Ideal for shuttling small to medium groups, it offers comfortable seating, ample headroom with its high-roof design, and smooth handling. Whether for airport transfers, church outings, or sports team travel, the Transit delivers reliability and comfort.",
      amenities: [
        { name: "Captain's Chairs", icon: "seat", description: "Comfortable high-back captain's chairs with armrests" },
        { name: "Dual A/C", icon: "climate", description: "Separate front and rear climate control for passenger comfort" },
        { name: "Bluetooth Audio", icon: "music", description: "Connect your device for music and calls" },
        { name: "Overhead Storage", icon: "luggage", description: "Overhead bins for personal items" },
        { name: "USB Charging", icon: "power", description: "Multiple USB ports for device charging" },
        { name: "Privacy Glass", icon: "window", description: "Tinted windows for shade and privacy" }
      ],
      idealFor: ["Airport shuttles", "Church groups", "Sports teams", "Small corporate events", "Family reunions"],
      safetyFeatures: ["Rearview Camera", "Traction Control", "Stability Control", "Multiple Airbags", "Parking Sensors"],
      dimensions: {
        length: "22 feet",
        width: "6.8 feet",
        height: "8.5 feet"
      }
    },
    {
      id: 7,
      slug: "setra-s-515-md",
      name: "Setra S 515 MD Luxury Mini-Coach",
      category: "Executive Coach",
      price: 699,
      priceUnit: "day",
      image: "/assets/images/setra.png",
      features: ["Luxury Interior", "Leather Seats", "Onboard Restroom", "Entertainment System", "Refrigerator"],
      specs: {
        passengers: 35,
        luggage: 30,
        doors: 2,
        transmission: "Automatic",
        fuel: "Diesel",
      },
      fullDescription: "The Setra S 515 MD is a premium mini-coach that combines the elegance of a full-size luxury coach with the maneuverability of a smaller vehicle. Ideal for executive groups, corporate shuttles, and upscale tours, it features a beautifully appointed interior with leather seats, ample legroom, and a compact onboard restroom. The refined ride and attention to detail make every journey feel first-class.",
      amenities: [
        { name: "Leather Reclining Seats", icon: "seat", description: "Premium leather seats with recline and footrests" },
        { name: "Compact Restroom", icon: "restroom", description: "Convenient onboard restroom for long trips" },
        { name: "Entertainment System", icon: "entertainment", description: "Multiple monitors and DVD/Blu-ray player" },
        { name: "Refrigerator", icon: "bar", description: "Built-in refrigerator for beverages" },
        { name: "WiFi & Power", icon: "wifi", description: "Complimentary high-speed WiFi and power outlets" },
        { name: "Climate Control", icon: "climate", description: "Individual overhead air vents" }
      ],
      idealFor: ["Corporate retreats", "Executive shuttles", "Wine tours", "Small tour groups", "Airport transfers"],
      safetyFeatures: ["Electronic Stability Program", "Lane Departure Warning", "Adaptive Cruise Control", "Rain Sensor", "Tire Pressure Monitoring"],
      dimensions: {
        length: "30 feet",
        width: "8.2 feet",
        height: "11.0 feet"
      }
    },
    {
      id: 8,
      slug: "volkswagen-crafter-9seater",
      name: "Volkswagen Crafter 9-Seater Minibus",
      category: "Minibus",
      price: 329,
      priceUnit: "day",
      image: "/assets/images/vw.png",
      features: ["9 Seats", "Executive Interior", "Dual A/C", "Leather Trim", "Privacy Glass"],
      specs: {
        passengers: 9,
        luggage: 8,
        doors: 2,
        transmission: "Automatic",
        fuel: "Diesel",
      },
      fullDescription: "The Volkswagen Crafter 9-Seater offers a premium small-group transport solution. With its executive interior, comfortable leather seats, and refined diesel engine, it's perfect for VIP airport transfers, small corporate groups, or a stylish way to travel with family and friends. The compact size makes it easy to park and maneuver in urban environments while providing ample space for passengers and luggage.",
      amenities: [
        { name: "Leather Seats", icon: "seat", description: "Premium leather seats with armrests" },
        { name: "Dual Climate Control", icon: "climate", description: "Separate climate zones for driver and passengers" },
        { name: "Privacy Glass", icon: "window", description: "Tinted windows for privacy and shade" },
        { name: "USB Charging", icon: "power", description: "Charging ports for all passengers" },
        { name: "Bluetooth Audio", icon: "music", description: "Connect your device for entertainment" }
      ],
      idealFor: ["VIP airport transfers", "Small corporate groups", "Private family trips", "City tours", "Business meetings"],
      safetyFeatures: ["Electronic Stability Control", "Hill Start Assist", "Crosswind Assist", "Multiple Airbags", "Rearview Camera"],
      dimensions: {
        length: "20 feet",
        width: "6.5 feet",
        height: "8.5 feet"
      }
    },
    // --- Luxury Cars ---
    {
      id: 9,
      slug: "mercedes-benz-s-class",
      name: "Mercedes-Benz S-Class",
      category: "Luxury Sedan",
      price: 399,
      priceUnit: "day",
      image: "/assets/images/sclass.jpg",
      features: ["Leather Interior", "Massaging Seats", "Ambient Lighting", "Burmester Sound System", "Panoramic Sunroof"],
      specs: {
        passengers: 4,
        luggage: 3,
        doors: 4,
        transmission: "Automatic",
        fuel: "Hybrid",
      },
      fullDescription: "The Mercedes-Benz S-Class is the definitive luxury sedan. It serves as the pinnacle of automotive innovation and comfort, providing a serene and technologically advanced environment for executive travel, VIP airport transfers, or a special night out. With its massage seats, premium sound system, and whisper-quiet cabin, every journey becomes a first-class experience.",
      amenities: [
        { name: "Massaging Seats", icon: "seat", description: "Heated, cooled, and massaging multi-contour front seats" },
        { name: "Burmester 3D Sound", icon: "music", description: "High-end surround sound system for an immersive audio experience" },
        { name: "Rear Executive Seats", icon: "seat", description: "Reclining rear seats with footrests (chauffeur package)" },
        { name: "Ambient Lighting", icon: "light", description: "Customizable 64-color ambient lighting" },
        { name: "Panoramic Sunroof", icon: "sunroof", description: "Large panoramic glass roof to let in light" }
      ],
      idealFor: ["Executive travel", "Airport transfers", "Wedding parties", "VIP transport", "Special anniversaries"],
      safetyFeatures: ["Active Distance Assist", "Active Steering Assist", "Pre-Safe Impulse Side", "Traffic Sign Assist", "Active Parking Assist"],
      dimensions: {
        length: "17.5 feet",
        width: "6.5 feet",
        height: "5.0 feet"
      }
    },
    {
      id: 10,
      slug: "cadillac-escalade",
      name: "Cadillac Escalade",
      category: "Luxury SUV",
      price: 499,
      priceUnit: "day",
      image: "/assets/images/escalade.jpg",
      features: ["Leather Captain's Chairs", "Massive Cargo Space", "Rear Entertainment", "AKG Sound System", "Magnetic Ride Control"],
      specs: {
        passengers: 7,
        luggage: 5,
        doors: 4,
        transmission: "Automatic",
        fuel: "Gasoline",
      },
      fullDescription: "Make a bold statement with the Cadillac Escalade, the ultimate luxury SUV for those who demand space, power, and prestige. Whether you are transporting a small group in ultimate comfort, heading to a corporate retreat, or need a stylish vehicle for a bachelor/bachelorette party, the Escalade delivers. With its commanding presence, plush interior, and state-of-the-art entertainment system, it's the perfect choice for when you want to arrive in style.",
      amenities: [
        { name: "Leather Captain's Chairs", icon: "seat", description: "Premium leather seats with heating and ventilation" },
        { name: "Rear-Seat Entertainment", icon: "entertainment", description: "Dual 12.6-inch touch screens for rear passengers" },
        { name: "AKG Studio Sound", icon: "music", description: "36-speaker studio reference sound system" },
        { name: "Power-Fold Seats", icon: "seat", description: "Power-folding second and third-row seats for cargo" },
        { name: "Panoramic Roof", icon: "sunroof", description: "Power-operated panoramic sunroof" }
      ],
      idealFor: ["Executive transport", "Bachelor/bachelorette groups", "Large families", "Airport transfers", "Wine country tours"],
      safetyFeatures: ["Super Cruise", "Automatic Emergency Braking", "Front and Rear Park Assist", "Safety Alert Seat", "HD Surround Vision"],
      dimensions: {
        length: "19.0 feet",
        width: "6.8 feet",
        height: "6.4 feet"
      }
    },
    {
      id: 11,
      slug: "bmw-7-series",
      name: "BMW 7 Series",
      category: "Luxury Sedan",
      price: 429,
      priceUnit: "day",
      image: "/assets/images/7series.jpg",
      features: ["Theater Screen", "Panoramic Sky Lounge", "Bowers & Wilkins Sound", "Executive Lounge Seating", "BMW Interaction Bar"],
      specs: {
        passengers: 4,
        luggage: 3,
        doors: 4,
        transmission: "Automatic",
        fuel: "Plug-in Hybrid",
      },
      fullDescription: "The BMW 7 Series redefines modern luxury with a stunning blend of advanced technology and sophisticated comfort. The highlight is the optional 31-inch Theater Screen that descends from the headliner, turning the rear cabin into a private cinema. Combined with the Panoramic Sky Lounge LED roof and the executive lounge seating, it offers an unparalleled travel experience for discerning clients and corporate executives.",
      amenities: [
        { name: "31-inch Theater Screen", icon: "entertainment", description: "Ultra-wide 31-inch rear-seat entertainment screen with Amazon Fire TV" },
        { name: "Executive Lounge Seating", icon: "seat", description: "Power-reclining rear seat with massage function" },
        { name: "Bowers & Wilkins Sound", icon: "music", description: "Diamond surround sound system with 3D audio" },
        { name: "Panoramic Sky Lounge", icon: "light", description: "Illuminated glass roof with adjustable lighting" },
        { name: "BMW Interaction Bar", icon: "tech", description: "Interactive control and ambient light bar across the dashboard" }
      ],
      idealFor: ["Corporate executives", "VIP airport transfers", "Luxury leisure travel", "Wedding transport", "Technology enthusiasts"],
      safetyFeatures: ["Highway Assistant", "Active Lane Keeping", "Evasive Aid", "Parking Assistant Professional", "Drive Recorder"],
      dimensions: {
        length: "17.9 feet",
        width: "6.7 feet",
        height: "5.1 feet"
      }
    },
    {
      id: 12,
      slug: "range-rover-autobiography",
      name: "Range Rover Autobiography",
      category: "Luxury SUV",
      price: 549,
      priceUnit: "day",
      image: "/assets/images/vogue.png",
      features: ["Semi-Aniline Leather", "Executive Class Seats", "Meridian Sound System", "Air Suspension", "Fragrance System"],
      specs: {
        passengers: 4,
        luggage: 4,
        doors: 4,
        transmission: "Automatic",
        fuel: "Diesel Hybrid",
      },
      fullDescription: "Experience the epitome of British luxury and off-road capability with the Range Rover Autobiography. This vehicle provides a 'place of serenity' for its occupants, with opulent materials, whisper-quiet refinement, and electronically controlled air suspension that glides over any terrain. The Executive Class comfort seats with massage and heating make it an ideal choice for those who appreciate the finer details in life.",
      amenities: [
        { name: "Executive Class Seats", icon: "seat", description: "24-way heated, ventilated, massaging rear seats with recline" },
        { name: "Semi-Aniline Leather", icon: "leather", description: "Luxurious semi-aniline leather upholstery throughout" },
        { name: "Meridian Signature Sound", icon: "music", description: "1600W Meridian surround sound system" },
        { name: "Fragrance System", icon: "air", description: "Ambient cabin fragrance system for a personalized atmosphere" },
        { name: "Air Suspension", icon: "suspension", description: "Adaptive air suspension for an unmatched ride quality" }
      ],
      idealFor: ["Countryside tours", "Executive retreats", "VIP transport", "Airport transfers", "Luxury getaways"],
      safetyFeatures: ["Adaptive Cruise Control", "ClearSight Ground View", "3D Surround Camera", "Emergency Braking", "Driver Condition Monitor"],
      dimensions: {
        length: "18.5 feet",
        width: "6.9 feet",
        height: "6.2 feet"
      }
    }
    // Add more vehicles as needed - the structure supports unlimited additions
    /*
    {
      id: 5,
      slug: "van-hool-cx45",
      name: "Van Hool CX45",
      category: "Premium Coach",
      ...
    },
    */
  ],

  // Blog Posts - Each post has full article content
  blogPosts: [
    {
      id: 1,
      slug: "10-tips-stress-free-group-trip",
      title: "10 Tips for a Stress‑Free Group Trip",
      excerpt: "Planning a group outing? From choosing the right bus to packing efficiently, here's how to keep everyone happy.",
      image: "/assets/images/10tips.jpg",
      date: "2025-02-10",
      author: "Admin",
      category: "Travel Tips",
      // Full article content
      content: `
        <p>Planning a group trip can feel overwhelming, but with the right preparation, you can ensure a smooth and enjoyable experience for everyone. Whether you're organizing a corporate retreat, family reunion, or school excursion, these proven tips will help you navigate the process like a pro.</p>
        
        <h3>1. Start Planning Early</h3>
        <p>The earlier you begin planning, the better. This gives you time to research options, compare prices, and secure the best bus for your group. For large events, we recommend booking at least 4-6 weeks in advance, especially during peak travel seasons.</p>
        
        <h3>2. Get an Accurate Headcount</h3>
        <p>Before booking transportation, confirm your exact group size. A bus that's too small creates discomfort, while one that's too large wastes money. Consider potential last-minute additions and build in a small buffer.</p>
        
        <h3>3. Choose the Right Bus</h3>
        <p>Different trips call for different vehicles. A luxury coach with WiFi and restrooms is ideal for long-distance travel, while a minibus might be perfect for a short city tour. Consider your passengers' needs – do they need power outlets for laptops? Space for sports equipment?</p>
        
        <h3>4. Plan Your Route Carefully</h3>
        <p>Work with your charter company to optimize the route. Consider traffic patterns, rest stop locations, and scenic alternatives. A well-planned route can turn travel time into an enjoyable part of the trip.</p>
        
        <h3>5. Communicate the Itinerary</h3>
        <p>Share detailed trip information with all participants well in advance. Include pickup times, locations, what to bring, and emergency contact numbers. Clear communication prevents confusion and delays.</p>
        
        <h3>6. Prepare for Comfort</h3>
        <p>Remind travelers to dress comfortably, bring entertainment for the journey, and pack snacks. For longer trips, suggest items like neck pillows, headphones, and chargers.</p>
        
        <h3>7. Designate a Trip Leader</h3>
        <p>Having one person serve as the primary contact for the driver and charter company streamlines communication. This person can handle headcounts, manage timing, and address any issues that arise.</p>
        
        <h3>8. Build in Buffer Time</h3>
        <p>Things rarely go exactly as planned. Build extra time into your schedule for bathroom breaks, traffic, and unexpected delays. It's better to arrive early than to rush your group.</p>
        
        <h3>9. Consider Special Needs</h3>
        <p>Ask about accessibility requirements, dietary restrictions, and any health considerations. Ensure the bus can accommodate wheelchairs if needed, and know the location of the nearest hospitals along your route.</p>
        
        <h3>10. Enjoy the Journey</h3>
        <p>Remember, the trip itself is part of the experience. Use travel time for team bonding, games, or simply enjoying the scenery together. A well-planned journey sets the tone for a successful event.</p>
        
        <h3>Conclusion</h3>
        <p>With careful planning and attention to detail, group travel can be enjoyable for everyone involved. At Global Bus Charter, we're here to help make your group transportation seamless. Contact us today for a free quote and let us handle the driving while you focus on making memories.</p>
      `,
      tags: ["Group Travel", "Planning Tips", "Bus Charter", "Travel Advice"],
      relatedPosts: [2, 3]
    },
    {
      id: 2,
      slug: "why-charter-bus-corporate-events",
      title: "Why Charter a Bus for Corporate Events?",
      excerpt: "Discover the benefits of group transportation for team building, conferences, and client outings.",
      image: "/assets/images/corp.png",
      date: "2025-02-01",
      author: "Admin",
      category: "Corporate Travel",
      content: `
        <p>Corporate events require seamless logistics, and transportation often makes or breaks the experience. Here's why more companies are choosing charter buses for their business events.</p>
        
        <h3>Professionalism from Start to Finish</h3>
        <p>First impressions matter in business. Arriving together in a professional coach makes a statement. Your clients and partners see an organized company that pays attention to details. For team members, it demonstrates that their employer values their comfort and time.</p>
        
        <h3>Maximize Productivity</h3>
        <p>Unlike individual car travel, a charter bus allows your team to continue working. With WiFi and power outlets, employees can finish presentations, respond to emails, or hold impromptu meetings. Turn commute time into productive time.</p>
        
        <h3>Team Building Starts on the Bus</h3>
        <p>There's something about group travel that naturally encourages conversation. Colleagues who might never interact at the office find themselves chatting on the bus. This organic networking strengthens team bonds before the event even begins.</p>
        
        <h3>Stress-Free Logistics</h3>
        <p>Coordinating individual transportation for 30+ people is a logistical nightmare. Someone gets lost. Someone's car breaks down. Someone can't find parking. A charter bus eliminates these variables. One vehicle, one pickup time, one arrival – everyone together.</p>
        
        <h3>Cost-Effective Solution</h3>
        <p>When you factor in fuel, parking, tolls, and employee time spent driving, charter buses often cost less than reimbursing individual travel. Plus, there's no wear and tear on personal vehicles or company cars.</p>
        
        <h3>Alcohol-Friendly Events</h3>
        <p>Planning a client dinner or team celebration with drinks? A charter bus means no one needs to worry about driving. Everyone can enjoy the event fully, knowing they have safe, professional transportation home.</p>
        
        <h3>Customizable Experience</h3>
        <p>Many charter buses offer onboard amenities you can customize for your event. Need to show a company video? Use the entertainment system. Want to brief the team en route? The PA system is at your service.</p>
        
        <h3>Environmental Responsibility</h3>
        <p>More companies are prioritizing sustainability. Taking 30 people in one bus instead of 30 cars significantly reduces your event's carbon footprint. It's a tangible way to demonstrate corporate environmental responsibility.</p>
        
        <h3>Ready to Elevate Your Corporate Events?</h3>
        <p>At Global Bus Charter, we specialize in corporate transportation that reflects your company's professionalism. From executive minibuses to full-size coaches, we have the perfect vehicle for your next business event. Contact us for a customized quote.</p>
      `,
      tags: ["Corporate Events", "Business Travel", "Team Building", "Professional Transport"],
      relatedPosts: [1, 3]
    },
    {
      id: 3,
      slug: "bus-maintenance-safety-checks",
      title: "A Guide to Bus Maintenance & Safety Checks",
      excerpt: "Learn about the rigorous safety inspections our fleet undergoes to ensure your peace of mind.",
      image: "/assets/images/main.png",
      date: "2025-01-25",
      author: "Admin",
      category: "Safety",
      content: `
        <p>When you book a charter bus, you're trusting the company with your safety. At Global Bus Charter, we take this responsibility seriously. Here's an inside look at our comprehensive maintenance and safety protocols.</p>
        
        <h3>Daily Pre-Trip Inspections</h3>
        <p>Before every trip, our drivers conduct a thorough pre-trip inspection. This includes checking:</p>
        <ul>
          <li>Tire pressure and tread depth</li>
          <li>Brake function and fluid levels</li>
          <li>All lights and signals</li>
          <li>Mirrors and windows</li>
          <li>Horn and warning devices</li>
          <li>Emergency equipment</li>
          <li>Fluid levels (oil, coolant, windshield washer)</li>
        </ul>
        
        <h3>Weekly Maintenance Checks</h3>
        <p>Our maintenance team performs weekly inspections that go beyond daily checks. These include detailed brake inspections, belt and hose examinations, and comprehensive fluid analyses.</p>
        
        <h3>Monthly Deep Inspections</h3>
        <p>Once a month, each vehicle undergoes an extensive inspection that covers:</p>
        <ul>
          <li>Complete brake system evaluation</li>
          <li>Suspension components</li>
          <li>Steering system</li>
          <li>Exhaust system</li>
          <li>All safety equipment functionality</li>
          <li>Climate control systems</li>
        </ul>
        
        <h3>Annual DOT Inspections</h3>
        <p>Every bus in our fleet must pass the Federal Motor Carrier Safety Administration's annual inspection. This rigorous examination covers over 150 points and must be conducted by certified inspectors.</p>
        
        <h3>Driver Safety Training</h3>
        <p>Our safety program extends beyond the vehicles to our drivers. All Global Bus Charter drivers must:</p>
        <ul>
          <li>Hold a Commercial Driver's License (CDL)</li>
          <li>Pass comprehensive background checks</li>
          <li>Complete drug and alcohol testing</li>
          <li>Undergo defensive driving training</li>
          <li>Participate in ongoing safety education</li>
        </ul>
        
        <h3>Emergency Preparedness</h3>
        <p>Every bus carries emergency equipment including first aid kits, fire extinguishers, reflective triangles, and emergency contact information. Drivers are trained in emergency response procedures and evacuation protocols.</p>
        
        <h3>GPS Monitoring</h3>
        <p>Our entire fleet is equipped with GPS tracking. This allows us to monitor vehicle locations in real-time, track driver behavior, and respond quickly to any situation.</p>
        
        <h3>Your Safety Is Our Priority</h3>
        <p>These protocols represent our commitment to passenger safety. When you ride with Global Bus Charter, you can relax knowing that every precaution has been taken to ensure your safe journey.</p>
      `,
      tags: ["Safety", "Maintenance", "Fleet Management", "DOT Compliance"],
      relatedPosts: [1, 2]
    },
    // Add more blog posts as needed - the structure supports unlimited additions
    /*
    {
      id: 4,
      slug: "best-destinations-charter-bus-tour",
      title: "Best Destinations for a Charter Bus Tour",
      excerpt: "Explore the top destinations perfect for group travel...",
      ...
    },
    */
  ],

  // Brand Partners (Bus Manufacturers)
  brands: [
    { id: 1, name: "Shell", logo: "/assets/images/sh.png" },
    { id: 2, name: "Euro Wings", logo: "/assets/images/ew.png" },
    { id: 3, name: "Education First", logo: "/assets/images/ef.png" },
    { id: 4, name: "Accor", logo: "/assets/images/ac.png" },
    { id: 5, name: "Champions League", logo: "/assets/images/uefa.png" },
    { id: 6, name: "Renault", logo: "/assets/images/rn.png" },
  ],

  // Footer
  footer: {
    description: "Your trusted partner for group transportation. We offer modern, well‑maintained buses with professional drivers for any occasion.",
    quickLinks: [
      { name: "About Us", path: "/about" },
      { name: "Our Services", path: "/services" },
      { name: "Contact Us", path: "/contact" },
      // { name: "Privacy Policy", path: "/privacy-policy" },
    ],
    serviceLinks: [
      { name: "Corporate Charters", path: "/services/corporate-employee-transport" },
      { name: "Airport Transfers", path: "/services/airport-group-transfers" },
      { name: "Wedding Buses", path: "/services/wedding-party-buses" },
      { name: "School Transport", path: "/services/school-sports-transport" },
    ],
    copyright: `© ${new Date().getFullYear()} All Rights Reserved By Global Bus Charter`,
    paymentMethods: [
      "/assets/images/apay.png",
      "/assets/images/gpay.png",
      "/assets/images/visa.png",
      "/assets/images/mcard.png",
      "/assets/images/paymentcard-5.webp",
    ],
  },

  // About Page
  about: {
    title: "About Global Bus Charter",
    subtitle: "Your Journey, Our Priority Since 2010",
    description: "We specialize in group transportation, offering a diverse fleet of buses and professional drivers. Whether it's a corporate retreat, wedding, or school trip, we ensure a safe, comfortable, and memorable ride.",
    stats: [
      { number: "10K+", label: "Happy Groups", icon: "groups" },
      { number: "50+", label: "Buses in Fleet", icon: "bus" },
      { number: "100+", label: "Professional Drivers", icon: "driver" },
      { number: "24/7", label: "Customer Support", icon: "support" },
    ],
    team: [
      {
        id: 1,
        name: "Robert Wilson",
        role: "CEO & Founder",
        image: "/assets/images/team-1.webp",
      },
      {
        id: 2,
        name: "Jessica Miller",
        role: "Operations Manager",
        image: "/assets/images/team-2.webp",
      },
      {
        id: 3,
        name: "David Thompson",
        role: "Fleet Manager",
        image: "/assets/images/team-3.webp",
      },
    ],
  },

  // FAQs
  faqs: [
    {
      id: 1,
      question: "How do I get a quote for a bus rental?",
      answer: "You can request a free quote through our online form, email, or phone. Provide your trip dates, group size, and any special requirements, and we'll get back to you within a few hours.",
    },
    {
      id: 2,
      question: "What is your cancellation policy?",
      answer: "Cancellations made at least 7 days before the trip receive a full refund. For cancellations within 7 days, a 50% fee applies. No refunds for same‑day cancellations.",
    },
    {
      id: 3,
      question: "Do your buses have WiFi and restrooms?",
      answer: "Many of our coaches are equipped with free WiFi, power outlets, and onboard restrooms. Check the specific bus details or ask our representative when booking.",
    },
    {
      id: 4,
      question: "Are your drivers licensed and insured?",
      answer: "Absolutely. All drivers hold commercial licenses, undergo background checks, and complete defensive driving training. We maintain full liability insurance.",
    },
  ],
};

// Helper function to find service by slug
export const getServiceBySlug = (slug) => {
  return siteData.services.find(service => service.slug === slug);
};

// Helper function to find vehicle by slug
export const getVehicleBySlug = (slug) => {
  return siteData.cars.find(car => car.slug === slug);
};

// Helper function to find blog post by slug
export const getBlogBySlug = (slug) => {
  return siteData.blogPosts.find(post => post.slug === slug);
};

// Form validation messages
export const formMessages = {
  required: "This field is required",
  email: "Please enter a valid email address",
  phone: "Please enter a valid phone number",
  minLength: (min) => `Minimum ${min} characters required`,
  maxLength: (max) => `Maximum ${max} characters allowed`,
  success: "Your message has been sent successfully!",
  error: "Something went wrong. Please try again.",
  recaptchaError: "Please verify that you are not a robot.",
  recaptchaScoreLow: "Verification failed. Please try again.",
};

export default siteData;