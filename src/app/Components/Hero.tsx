"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiMapPin,
  FiBriefcase,
  FiCalendar,
} from "react-icons/fi";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);
  const [availabilityIndex, setAvailabilityIndex] = useState(0);
  const [titleDirection, setTitleDirection] = useState("right");
  const [availabilityDirection, setAvailabilityDirection] = useState("right");

  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.95]), {
    stiffness: 100,
    damping: 30,
  });

  const titles = [
    "Full Stack Developer",
    "Full Stack Engineer",
    "MERN Developer",
    "Next.js Developer",
    "AWS Certified Cloud Practitioner",
  ];

  const availabilityStatuses = [
    "Available for freelance",
    "Open to full time roles",
  ];

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleDirection("right");
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 150);
    }, 2500);

    const availabilityInterval = setInterval(() => {
      setAvailabilityDirection("right");
      setTimeout(() => {
        setAvailabilityIndex(
          (prev) => (prev + 1) % availabilityStatuses.length,
        );
      }, 150);
    }, 2500);

    return () => {
      clearInterval(titleInterval);
      clearInterval(availabilityInterval);
    };
  }, [titles.length, availabilityStatuses.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const myInfo = {
    name: "Waqas Ahmed",
    experience: " 0 - 1 Years",
    location: "Pakistan",
    email: "waqasahm.139@gmail.com",
    bio: "Full Stack Developer with 0 - 1 years of experience building scalable web applications. Strong problem-solving skills, expertise in Agile methodologies, and a passion for learning new technologies.",
    github: "https://github.com/Waqas-Tanoli",
    linkedin: "https://linkedin.com/in/waqas-ah",
    resumeLink: "/public/Waqas Ahmed - Resume (5).pdf",
    stats: [
      { label: "Projects", value: "5+", icon: FiBriefcase },
      { label: "Experience", value: "0 - 1 Years", icon: FiCalendar },
    ],
  };

  const nameParts = myInfo.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  // Slide animation variants with proper typing
  const titleVariants = {
    initial: (direction: string) => ({
      x: direction === "right" ? 200 : -200,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        duration: 0.4,
      },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -200 : 200,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const availabilityVariants = {
    initial: (direction: string) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        duration: 0.35,
      },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />

        {/* Mouse Follow Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <motion.div
        style={{ scale }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="space-y-8 text-center">
              {/* Availability Badge with Left-Right Animation */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm mx-auto overflow-hidden"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <div className="relative w-[180px] overflow-hidden">
                  <AnimatePresence mode="wait" custom={availabilityDirection}>
                    <motion.span
                      key={availabilityIndex}
                      custom={availabilityDirection}
                      variants={availabilityVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="text-cyan-400 text-sm font-medium inline-block whitespace-nowrap"
                    >
                      {availabilityStatuses[availabilityIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {firstName}
                  </span>{" "}
                  <span className="text-white">{lastName}</span>
                </h1>

                {/* Animated Title with Left-Right Slide */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  <div className="relative h-12 w-[320px] overflow-hidden">
                    <AnimatePresence mode="wait" custom={titleDirection}>
                      <motion.div
                        key={titleIndex}
                        custom={titleDirection}
                        variants={titleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <p className="text-gray-400 text-lg font-medium tracking-wide whitespace-nowrap">
                          {titles[titleIndex]}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                </div>
              </motion.div>

              {/* Info Chips */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                  <FiMapPin className="text-cyan-400" size={14} />
                  <span className="text-sm text-gray-300">
                    {myInfo.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                  <FiBriefcase className="text-cyan-400" size={14} />
                  <span className="text-sm text-gray-300">
                    {myInfo.experience} exp
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                  <FiMail className="text-cyan-400" size={14} />
                  <span className="text-sm text-gray-300">{myInfo.email}</span>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 leading-relaxed text-base max-w-2xl mx-auto"
              >
                {myInfo.bio}
              </motion.p>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6 justify-center"
              >
                {myInfo.stats.map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                    {index < myInfo.stats.length - 1 && (
                      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-px h-8 bg-gray-800" />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
              >
                <Link
                  href="/projects"
                  className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <FiArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </span>
                </Link>

                <a
                  href={myInfo.resumeLink}
                  download
                  className="group px-8 py-3 border border-cyan-500/30 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiDownload size={18} />
                  Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-3 justify-center"
              >
                {[
                  { icon: FiGithub, href: myInfo.github, label: "GitHub" },
                  {
                    icon: FiLinkedin,
                    href: myInfo.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: FiMail,
                    href: `mailto:${myInfo.email}`,
                    label: "Email",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 tracking-wider">Scroll</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
