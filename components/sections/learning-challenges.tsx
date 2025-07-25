import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Clock, Frown, TrendingDown, RefreshCw, Lightbulb,
    Rocket, Target, FastForward, MessageCircle, Award,
    Flag, Gauge, CheckCircle, Trophy, BarChart,
    Book, User, Brain, ShieldAlert, Heart, BookOpen, ChevronRight, DollarSign, Crosshair, Hourglass, Compass,
    ImageIcon,
    Star,
    Users,
    ArrowRight,
    Layers
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
        { icon: <Clock className="w-5 h-5 text-amber-500" />, text: "Marketers often struggle with insufficient time to plan, execute, and analyze campaigns effectively" },
        { icon: <Frown className="w-5 h-5 text-rose-400" />, text: "Facing constant pressure and the need for creativity can lead to exhaustion and a decrease in marketing drive" },
        { icon: <TrendingDown className="w-5 h-5 text-orange-400" />, text: "Campaigns may underperform, showing a decline in key metrics like conversion rates or return on investment" },
        { icon: <RefreshCw className="w-5 h-5 text-cyan-400" />, text: "The ever-evolving nature of digital platforms requires continuous adaptation, often forcing marketers to re-learn or restart strategies" },
        { icon: <Lightbulb className="w-5 h-5 text-emerald-300" />, text: "Why 7 in 10 students abandon marketing their Facebook" }
    ];

    const solutionItems = [
        { icon: <Rocket className="w-5 h-5 text-emerald-300" />, text: "This course will guide you towards earning a respectful income from home" },
        { icon: <Target className="w-5 h-5 text-emerald-300" />, text: "Complete step-by-step training with practical guidance" },
        { icon: <FastForward className="w-5 h-5 text-emerald-300" />, text: "Especially useful for religious scholars and students who want to earn honorable income" },
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
            title: "Overly Promotional Content",
            description: "People constantly push sales messages without offering any value, leading users to disengage and unfollow.",
            icon: <Book className="w-6 h-6 text-emerald-500" />
        },
        {
            title: "Ignoring Audience Insights and Targeting",
            description: "Businesses fail to understand who they're trying to reach, resulting in wasted ad spend and poor results.",
            icon: <Crosshair className="w-6 h-6 text-amber-500" />
        },
        {
            title: "Cognitive Overload",
            description: "Inconsistent posting and a lack of interaction make a brand seem absent, causing a drop in audience interest and algorithmic visibility.",
            icon: <Hourglass className="w-6 h-6 text-rose-500" />
        },
        {
            title: "Fear of Mistakes",
            description: "Using low-quality or uninspired images and copy fails to capture attention on a visually driven platform.",
            icon: <ImageIcon className="w-6 h-6 text-orange-500" />
        },
        {
            title: "Lack of Connection",
            description: "Marketing efforts lack direction and measurable goals, making it impossible to track success or make improvements.",
            icon: <Compass className="w-6 h-6 text-emerald-400" />
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
                        The <span className="text-amber-400">Real Challenges</span> in Online Marketing
                    </h2>
                    <p className="text-xl text-emerald-300 max-w-3xl mx-auto">
                        Why common methods fail and how our approach creates lasting transformation
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
                            Our <span className="text-emerald-600">Facebook Marketing</span> Solutions
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Here's exactly how we help you overcome your digital marketing challenges
                        </p>
                    </motion.div>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Solution 1 - Income from Home */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8">
                                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                                    <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Earn a Respectful Income from Home
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Our proven system guides you to generate halal income through Facebook marketing while maintaining your values and principles.
                                </p>
                            </div>
                            <div className="px-8 pb-6">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    <ArrowRight className="w-4 h-4" />
                                    Start earning within weeks
                                </span>
                            </div>
                        </motion.div>

                        {/* Solution 2 - Step-by-Step Training */}
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
                                    Complete Step-by-Step Training
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    From account setup to advanced strategies, we provide practical, actionable guidance at every stage of your Facebook marketing journey.
                                </p>
                            </div>
                            <div className="px-8 pb-6">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                    <CheckCircle className="w-4 h-4" />
                                    No prior experience needed
                                </span>
                            </div>
                        </motion.div>

                        {/* Solution 3 - For Religious Scholars */}
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
                                    Ideal for Religious Scholars & Students
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Specifically designed for those seeking honorable income while continuing their Islamic studies or scholarly work.
                                </p>
                            </div>
                            <div className="px-8 pb-6">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                                    <Users className="w-4 h-4" />
                                    Trusted by 500+ students
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
                                Ready to Transform Your Income Through Facebook?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                Join our community of students who are already earning halal income while maintaining their Islamic values.
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
                                    Enroll in the Course
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx global>{`
        .font-arabic {
          font-family: 'Amiri', serif;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}