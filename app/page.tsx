"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Sword, Shield, BookText, Quote, User, House, Star, ArrowRight } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import LandingNavbar from "@/components/landing-navbar";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StudentLeaderboard } from "@/components/student-leaderboard";
import { Keyboard } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PricingPlan from "@/components/pricing-plan";
import { pricingPlans } from "@/lib/pricing-plans";
import {
  Clock, Frown, TrendingDown, RefreshCw, Lightbulb,
  Rocket, Target, FastForward, MessageCircle, Award,
  Flag, Gauge, CheckCircle, Trophy, BarChart
} from 'lucide-react';
import ProfilePicturePlaceholder from "@/lib/profile-picture-placeholder.jpg";
import Link from "next/link";
import HeroSection from "@/components/sections/hero";
import LearningChallenges from "@/components/sections/learning-challenges";
import DemoSection from "@/components/sections/demo";
import TestimonialsSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";

const faqs = [
  {
    question: "How long does it take to complete the Quran course?",
    answer: "The duration varies based on your commitment and prior knowledge. Most students complete our foundational program in 6-9 months with regular study. We offer flexible pacing options to accommodate different schedules."
  },
  {
    question: "Are your instructors certified?",
    answer: "Yes, all our instructors hold traditional Ijazah (certification) in Quranic recitation and Tajweed. Many are graduates of prestigious institutions like Al-Azhar University and have extensive teaching experience."
  },
  {
    question: "What if I miss a class?",
    answer: "All sessions are recorded and available in your student portal. You can review missed classes at your convenience and schedule make-up sessions with your instructor if needed."
  },
  {
    question: "Do I need prior Arabic knowledge?",
    answer: "No, our courses are designed for all levels. We have specialized tracks for complete beginners that start with Arabic alphabet recognition and build up to fluent Quran recitation."
  },
  {
    question: "Can children enroll in these courses?",
    answer: "Absolutely! We have specialized programs for children aged 6+ with child-friendly teaching methods, interactive activities, and parental progress tracking. All our children's instructors are trained in child education."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function PrimaryLanding() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('traditional');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L') {
        setShowLeaderboard(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen dark:bg-slate-900">
      <LandingNavbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Learning Challenges Section */}
      <LearningChallenges />

      {/* Demo Profile */}
      <DemoSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      <PricingSection />
    </div>
  );
}