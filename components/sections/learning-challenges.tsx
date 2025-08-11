import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Clock, Frown, RefreshCw, Lightbulb,
    Rocket, Target, FastForward, MessageCircle, Award,
    Flag, Gauge, CheckCircle, Trophy, BarChart,
    Book, User, Brain, ShieldAlert, Heart, BookOpen, ChevronRight, Star,
    Users, ArrowRight, Layers, BookText, House, GraduationCap, Microscope, Globe
} from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            duration: 0.6
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function LearningChallenges() {
    const [activeTab, setActiveTab] = useState<string>('struggle');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('learning-challenges');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const struggleItems = [
        { icon: <Clock className="w-5 h-5 text-amber-500" />, text: "Busy schedules make consistent Quran practice difficult to maintain" },
        { icon: <Frown className="w-5 h-5 text-rose-400" />, text: "Frustration with proper pronunciation and tajweed rules" },
        { icon: <BookText className="w-5 h-5 text-orange-400" />, text: "Difficulty understanding Arabic text without translation" },
        { icon: <RefreshCw className="w-5 h-5 text-cyan-400" />, text: "Starting and stopping frequently leads to forgetting previous lessons" },
        { icon: <Lightbulb className="w-5 h-5 text-emerald-300" />, text: "Why 7 in 10 students quit Quran learning within 6 months" }
    ];

    const solutionItems = [
        { icon: <Rocket className="w-5 h-5 text-emerald-300" />, text: "Personalized learning plans tailored to your schedule and goals" },
        { icon: <Target className="w-5 h-5 text-emerald-300" />, text: "Step-by-step tajweed mastery with certified instructors" },
        { icon: <FastForward className="w-5 h-5 text-emerald-300" />, text: "Accelerated learning techniques for faster progress" },
        { icon: <MessageCircle className="w-5 h-5 text-emerald-300" />, text: "Real-time feedback during actual recitation" },
        { icon: <Award className="w-5 h-5 text-amber-400" />, text: "90% complete Juz' Amma within first quarter" }
    ];

    const progressItems = [
        { icon: <Flag className="w-5 h-5 text-emerald-300" />, text: "First week: Confidently recite 5 essential surahs" },
        { icon: <Gauge className="w-5 h-5 text-emerald-300" />, text: "Month one: Master core tajweed through practical application" },
        { icon: <CheckCircle className="w-5 h-5 text-emerald-300" />, text: "Quarter one: Fluency in daily prayers & short chapters" },
        { icon: <Trophy className="w-5 h-5 text-amber-400" />, text: "Major milestone: First Juz' perfected with certification" },
        { icon: <BarChart className="w-5 h-5 text-emerald-300" />, text: "Measurable improvement tracked weekly" }
    ];

    const commonProblems = [
        {
            title: "Inconsistent Practice",
            description: "Without regular sessions, students struggle to retain tajweed rules and proper pronunciation.",
            icon: <Book className="w-6 h-6 text-emerald-500" />
        },
        {
            title: "Lack of Personal Guidance",
            description: "Generic lessons fail to address individual pronunciation challenges and learning pace.",
            icon: <User className="w-6 h-6 text-amber-500" />
        },
        {
            title: "Arabic Comprehension",
            description: "Students feel disconnected when they don't understand the meaning of verses they recite.",
            icon: <Globe className="w-6 h-6 text-rose-500" />
        },
        {
            title: "Fear of Mistakes",
            description: "Anxiety about incorrect recitation prevents students from practicing confidently.",
            icon: <ShieldAlert className="w-6 h-6 text-orange-500" />
        },
        {
            title: "Lack of Connection",
            description: "Without understanding the context and beauty of verses, recitation feels mechanical.",
            icon: <Heart className="w-6 h-6 text-emerald-400" />
        }
    ];

    return (
        <div
            id="learning-challenges"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-900 to-emerald-950 dark:from-emerald-950 dark:to-slate-900"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-100 mb-4">
                        The <span className="text-amber-400">Real Challenges</span> in Learning Quran
                    </h2>
                    <p className="text-xl text-emerald-300 max-w-3xl mx-auto">
                        Why traditional methods fail and how our approach creates lasting transformation
                    </p>
                </motion.div>

                {/* Common Problems Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {commonProblems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-emerald-800/30 backdrop-blur-sm rounded-xl border border-emerald-700/50 p-6 hover:border-emerald-500 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-700/20 rounded-bl-full"></div>

                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-emerald-900/50 rounded-lg group-hover:bg-emerald-700 transition-colors">
                                    {problem.icon}
                                </div>
                                <h3 className="text-xl font-bold text-emerald-100 group-hover:text-white mt-1">
                                    {problem.title}
                                </h3>
                            </div>
                            <p className="text-emerald-300 group-hover:text-emerald-100 pl-1">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                >
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="text-emerald-600">Quran Learning</span> Solutions
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Here's exactly how we help you overcome your Quran learning challenges
                        </p>
                    </motion.div>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Solution 1 - Personalized Guidance */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8">
                                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                                    <User className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    One-on-One Guidance
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Personal sessions with certified Qaris who correct your tajweed and pronunciation in real-time.
                                </p>
                            </div>
                            <div className="px-8 pb-6">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    <ArrowRight className="w-4 h-4" />
                                    Tailored to your learning pace
                                </span>
                            </div>
                        </motion.div>

                        {/* Solution 2 - Step-by-Step Learning */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8">
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                                    <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Structured Tajweed Mastery
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Progressive curriculum from basic letters to advanced recitation rules with practical exercises.
                                </p>
                            </div>
                            <div className="px-8 pb-6">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                    <CheckCircle className="w-4 h-4" />
                                    Build strong foundations
                                </span>
                            </div>
                        </motion.div>

                        {/* Solution 3 - Meaningful Connection */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8">
                                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                                    <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Understanding & Reflection
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Tafsir sessions that help you connect with the meaning and context of verses.
                                </p>
                            </div>
                            <div className="px-8 pb-6">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                                    <GraduationCap className="w-4 h-4" />
                                    Deepen your spiritual connection
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12 shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Ready to Begin Your Quran Journey?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                Join hundreds of students who've transformed their relationship with the Quran through our proven methodology.
                            </p>
                            <Link
                                href='#pricing'
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#pricing');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <Button className="cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg">
                                    Start Learning Today
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}