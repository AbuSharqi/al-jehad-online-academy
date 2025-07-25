import { motion } from 'framer-motion';
import { BookOpen, House, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 via-emerald-100/30 to-slate-100 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-amber-400/20 blur-xl animate-pulse"></div>
            <div className="absolute bottom-40 right-12 w-24 h-24 rounded-full bg-emerald-400/20 blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-emerald-300/30 dark:bg-emerald-600/20 blur-lg"></div>

            {/* Islamic pattern overlay */}
            <div className="absolute inset-0 opacity-10 dark:opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '120px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Floating icons with motion */}
                    <motion.div
                        className="flex justify-center space-x-8 mb-10"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-slate-800 p-5 rounded-full shadow-xl flex items-center justify-center w-20 h-20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                        <motion.div
                            className="bg-white dark:bg-slate-800 p-5 rounded-full shadow-xl flex items-center justify-center w-20 h-20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <House className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                        </motion.div>
                        <motion.div
                            className="bg-white dark:bg-slate-800 p-5 rounded-full shadow-xl flex items-center justify-center w-20 h-20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Star className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 dark:text-white mb-6 leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="block">Journey Through</span>
                        <span className="text-amber-600 mt-2 inline-block">The World of Marketing</span>
                    </motion.h1>

                    {/* Arabic verse */}
                    <motion.div
                        className="mb-8 max-w-3xl mx-auto px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-sm"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-3xl font-arabic mb-4 text-emerald-800 dark:text-emerald-200 leading-loose md:leading-normal">﴾ فَإِذَا قُضِيَتِ الصَّلَاةُ فَانْتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِنْ فَضْلِ اللَّهِ﴿</p>
                        <p className="text-lg text-emerald-700 dark:text-emerald-300 italic">
                            "And when the prayer has been concluded, disperse within the land and seek from the bounty of Allāh..."
                        </p>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">- Al-Jumu'ah (62:10)</p>
                    </motion.div>

                    <motion.p
                        className="text-xl text-emerald-700 dark:text-emerald-300 mb-10 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Receive <span className="font-semibold underline decoration-sky-500">personalized guidance</span> from <span className="font-semibold underline decoration-sky-500">a certified instructor</span> to grow your audience and enhance your marketing skills.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="#program"
                            className="inline-block rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.querySelector('#program');
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <div
                                className="h-16 text-lg px-10 flex items-center font-bold tracking-wide text-white relative"
                                style={{
                                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                                }}
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <div
                                        className="absolute -inset-[10rem] animate-shine opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                        style={{
                                            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)'
                                        }}
                                    />
                                </div>

                                <Link
                                    href="#learning-challenges"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.querySelector('#learning-challenges');
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}>
                                    <span className="flex items-center relative z-10">
                                        Grow Your Audience
                                        <motion.span
                                            className="ml-3"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.span>
                                    </span>
                                </Link>
                            </div>
                        </a>
                    </motion.div>

                    {/* Stats section */}
                    <motion.div
                        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="bg-white/80 dark:bg-slate-800/70 p-4 rounded-xl backdrop-blur-sm shadow-sm">
                            <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">100%</div>
                            <div className="text-slate-600 dark:text-slate-300">Halal</div>
                        </div>
                        <div className="bg-white/80 dark:bg-slate-800/70 p-4 rounded-xl backdrop-blur-sm shadow-sm">
                            <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">3+</div>
                            <div className="text-slate-600 dark:text-slate-300">Courses</div>
                        </div>
                        <div className="bg-white/80 dark:bg-slate-800/70 p-4 rounded-xl backdrop-blur-sm shadow-sm">
                            <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">5+</div>
                            <div className="text-slate-600 dark:text-slate-300">Teaching Esesntials</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">Discover More</span>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        
        .font-arabic {
          font-family: 'Amiri', serif;
        }
        
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        
        .animate-shine {
          background-size: 200% auto;
          animation: shine 2s linear infinite;
        }
      `}</style>
        </motion.section>
    )
}