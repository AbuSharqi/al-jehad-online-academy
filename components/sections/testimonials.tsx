import { motion } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MessageCircle, Star, User, ArrowRight, BookOpen, ChevronRight, UserCheck, CheckCircle, BookText, House, GraduationCap, Award, Heart, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TestimonialsSection() {
    return (
        <motion.section
            id="testimonials"
            className="py-24 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-slate-900 dark:to-slate-800"
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
                    <div className="inline-flex items-center gap-3 mb-5 px-5 py-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800/50">
                        <BookText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-lg font-medium text-emerald-700 dark:text-emerald-300">Our Proven Methodology</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
                        Become <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Confident in Quran Recitation</span>
                    </h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                        Discover the complete system to perfect your tajweed and develop a meaningful connection with Allah's words.
                    </p>
                </motion.div>

                {/* Value Proposition Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Perfect Tajweed */}
                    <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-emerald-100 dark:border-slate-700"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                                <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Perfect Your Tajweed</h3>
                                <p className="text-emerald-600 dark:text-emerald-400">Master correct pronunciation</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            Learn the precise articulation points (Makharij) and characteristics (Sifaat) of Arabic letters to recite Quran with perfection.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Foundation for correct recitation</span>
                        </div>
                    </motion.div>

                    {/* Memorize with Ease */}
                    <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-emerald-100 dark:border-slate-700"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                                <Heart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Memorize with Love</h3>
                                <p className="text-emerald-600 dark:text-emerald-400">Effective retention techniques</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            Discover proven memorization techniques that ensure long-term retention while deepening your spiritual connection.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Lifetime connection with the Quran</span>
                        </div>
                    </motion.div>

                    {/* Understand the Meaning */}
                    <motion.div
                        className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-emerald-100 dark:border-slate-700"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                                <GraduationCap className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Understand the Meaning</h3>
                                <p className="text-emerald-600 dark:text-emerald-400">Connect with Allah's message</p>
                            </div>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                            Learn the context and wisdom behind verses to transform your recitation into a spiritual experience.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Deepen your spiritual connection</span>
                        </div>
                    </motion.div>
                </div>

                {/* Program Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
                    <motion.div
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-emerald-100 dark:border-slate-700"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
                            Why Our Students Excel
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Complete system from letters to advanced tajweed",
                                "Personalized attention from certified instructors",
                                "Learn at your own pace with flexible scheduling",
                                "Includes memorization techniques & study plans",
                                "Master both recitation and understanding",
                                "Regular progress assessments and feedback"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
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
                        <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <div className="text-center p-6 text-white">
                                <House className="h-12 w-12 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Begin Your Quran Journey</h3>
                                <p className="text-emerald-100 max-w-md mx-auto">
                                    Join hundreds of students who've transformed their relationship with the Quran.
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                            New classes forming now
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
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-10 text-white relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Ready to Perfect Your Recitation?</h3>
                            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                                Stop struggling and start learning with a proven system. Gain the skills, confidence, and spiritual connection to succeed.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6">
                                {/* Free Assessment Button */}
                                <motion.div
                                    whileHover={{ y: 0 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Link href="#">
                                        <Button
                                            className="opacity-25 h-14 px-10 text-lg bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group border-2 border-emerald-600"
                                        >
                                            <Clock className="mr-3 h-5 w-5 text-emerald-600" />
                                            Book Free Assessment
                                        </Button>
                                    </Link>
                                </motion.div>

                                {/* Start Learning Button */}
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
                                            <BookOpen className="mr-3 h-5 w-5 text-white" />
                                            Start Learning Now
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