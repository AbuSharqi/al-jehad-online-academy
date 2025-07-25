import { motion } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MessageCircle, Star, User, ArrowRight, DollarSign, TrendingUp, BarChart, Zap, Calendar, Megaphone, Users, Target, Rocket, BookOpen, LayoutGrid, ChevronRight, UserCheck, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TestimonialsSection() {
    return (
        <motion.section
            id="testimonials"
            className="py-24 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-900 dark:to-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 mb-5 px-5 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800/50">
                        <Megaphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <span className="text-lg font-medium text-blue-700 dark:text-blue-300">Our Proven Blueprint</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
                        Become a <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Facebook Marketing</span> Pro
                    </h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                        Discover the complete system to attract paying clients and build a thriving marketing business.
                    </p>
                </motion.div>

                {/* Value Proposition Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Build Brand Authority */}
                    <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-100 dark:border-slate-700"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <LayoutGrid className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Build Brand Authority</h3>
                                <p className="text-blue-600 dark:text-blue-400">Establish instant trust</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            Master the art of creating professional Facebook pages, designing stunning posts, and producing videos that convert viewers into clients.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Foundation for success</span>
                        </div>
                    </motion.div>

                    {/* Attract Clients Organically */}
                    <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-100 dark:border-slate-700"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Attract Clients Organically</h3>
                                <p className="text-blue-600 dark:text-blue-400">Zero ad spend required</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            Unlock three proven strategies to find your first students and customers without spending a single dollar on advertising.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Get free, qualified leads</span>
                        </div>
                    </motion.div>

                    {/* Master Profitable Ads */}
                    <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-100 dark:border-slate-700"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Master Profitable Ads</h3>
                                <p className="text-blue-600 dark:text-blue-400">Get predictable results</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            Learn to execute professional ad campaigns, manage client accounts securely, and drive a consistent stream of customers for any business.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Become an ads expert</span>
                        </div>
                    </motion.div>
                </div>

                {/* Program Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
                    <motion.div
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-blue-100 dark:border-slate-700"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
                            Why Our Students Succeed
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "A to Z system, from page setup to paid ads",
                                "Focus on landing high-paying clients",
                                "Learn to get results for yourself AND others",
                                "Includes templates & essential documents",
                                "Master organic and paid growth strategies",
                                "Flexible learning to fit your schedule"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="relative rounded-xl overflow-hidden"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <div className="text-center p-6 text-white">
                                <Rocket className="h-12 w-12 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Launch Your Marketing Career</h3>
                                <p className="text-blue-100 max-w-md mx-auto">
                                    Join a community of motivated entrepreneurs and start building your agency today.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                            New cohorts forming now
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Ready to Land Your First Client?</h3>
                            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                                Stop guessing and start implementing a proven system. Get the skills, tools, and confidence to succeed.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6">
                                {/* Free Trial / Strategy Call Button */}
                                <motion.div
                                    whileHover={{ y: 0 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Link href="#">
                                        <Button
                                            className="opacity-25 h-14 px-10 text-lg bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group border-2 border-blue-600"
                                        >
                                            <Calendar className="mr-3 h-5 w-5 text-blue-600" />
                                            Book a Free Call
                                        </Button>
                                    </Link>
                                </motion.div>

                                {/* Enroll Now Button */}
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Link
                                        href="#pricing"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        <Button
                                            className="h-14 px-10 text-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                                        >
                                            <Zap className="mr-3 h-5 w-5 text-white" />
                                            Enroll Now
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}