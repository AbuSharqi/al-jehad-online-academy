import { motion } from 'framer-motion'
import Image from 'next/image'
import { BookOpen, CheckCircle2, Award, GraduationCap } from 'lucide-react'
import InstructorPhoto from '@/lib/instructor-photo.jpg'

export default function DemoSection() {
    return (
        <motion.section
            className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex flex-col lg:flex-row gap-12 items-center" >
                    {/* Teacher Image with Decorative Elements */}
                    <div className="w-full lg:w-2/5 flex justify-center relative" >
                        <div className="relative w-[350px] h-[350px]" >
                            {/* Decorative Islamic pattern background */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden z-0" >
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjUgMTBIMTB2MTVoMTVWMzBIMTB2MTVoMTVWNTBIMTB2MTVoMTVWNzBIMTB2MTVoMTVWOTBIMTB2MTVoMTV2LTE1aDE1di0xNUg0MHYtMTVoMTV2LTE1aDE1VjQwaDE1VjI1aDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1VjkwSDg1VjcwaDE1VjUwaDE1VjMwaDE1VjEwaDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1djE1aDE1Vjkw')] opacity-5 dark:opacity-[0.03]" > </div>
                            </div>

                            {/* Profile image with decorative border */}
                            <div className="relative z-10 w-[350px] h-[350px] rounded-2xl overflow-hidden shadow-xl border-8 border-white dark:border-slate-800/50" >
                                <Image
                                    src={InstructorPhoto}
                                    alt="Quran Teacher Ustadh Ahmed"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-400/20 blur-xl z-0" > </div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-emerald-400/20 blur-xl z-0" > </div>
                        </div>
                    </div>

                    {/* Teacher Bio */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <div className="flex flex-col gap-4">
                            <div className="inline-flex items-center gap-3 mb-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full w-max">
                                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-emerald-700 dark:text-emerald-300 font-medium">Certified Qari & Ijazah Holder</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                                Assalamu Alaikum, I'm <span className="text-emerald-500">Ustadh Ahmed</span> 👋
                            </h2>

                            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                                With over 15 years of experience in Quranic instruction, I specialize in guiding students 
                                to perfect their recitation and deepen their connection with Allah's words. 
                                My teaching methodology focuses on:
                            </p>
                        </div>

                        <ul className="space-y-5">
                            {[
                                "Personalized tajweed instruction tailored to each student's needs",
                                "Memorization techniques that ensure long-term retention",
                                "Building spiritual connection through understanding and reflection"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-emerald-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                                        </div>
                                    </div>
                                    <p className="text-lg text-slate-800 dark:text-slate-300">
                                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                            {item.split(' ')[0]}
                                        </span> {item.substring(item.indexOf(' ') + 1)}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50 relative overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -mr-12 -mt-12"></div>
                            <div className="relative z-10">
                                <p className="text-emerald-800 dark:text-emerald-200 italic text-lg">
                                    "My mission is to help students recite the Quran correctly, understand its meaning, and embody its teachings in their daily lives."
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Over 500 Students Taught</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}