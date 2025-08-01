"use client";
import type { PricingPlan } from "@/lib/pricing-plans";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

interface PricingPlanProps {
  plan: PricingPlan;
}

export default function PricingPlan({ plan }: PricingPlanProps) {
  // Tooltip content for keywords
  const tooltips: { [key: string]: string } = {
    "Ijazah": "Traditional certification granting permission to teach",
    "Sanad-Verified": "Curriculum verified through authentic scholarly chains",
    "Makharij": "Proper articulation points of Arabic letters",
    "Tajweed": "Rules of Quranic recitation",
    "Qira'at": "Different methods of Quranic recitation"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative p-8 rounded-2xl shadow-lg flex flex-col h-full 
        ${plan.isHighlighted 
          ? "border-2 border-blue-500 bg-white dark:bg-slate-800" 
          : "border border-emerald-100 dark:border-slate-700 bg-emerald-50 dark:bg-slate-800"
        }`}
    >
      {plan.isHighlighted && (
        <div className="absolute top-0 right-0 -mt-4 mr-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Most Popular
        </div>
      )}
      
      {plan.discount && (
        <div className="absolute top-0 left-0 -mt-4 ml-6 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
          {plan.discount} OFF
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-emerald-900 dark:text-white mb-4">{plan.title}</h3>
      
      <div className="mb-6">
        {plan.originalPrice && (
          <span className="text-xl line-through text-emerald-400 mr-2">
            ${plan.originalPrice}
          </span>
        )}
        <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">${plan.price}</span>
        <span className="text-emerald-500 dark:text-emerald-300">/month</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => {
          // Parse feature text for tooltips
          const parts = feature.split(/(\*\*.*?\*\*)/g).map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const keyword = part.slice(2, -2);
              return (
                <span
                  key={i}
                  data-tooltip-id="pricing-tooltip"
                  data-tooltip-content={tooltips[keyword]}
                  className="border-b border-dashed border-emerald-400 cursor-help mx-1"
                >
                  {keyword}
                  <Info className="w-3 h-3 inline-block ml-1 mb-[2px]" />
                </span>
              );
            }
            return part;
          });

          return (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-emerald-700 dark:text-slate-300">{parts}</span>
            </li>
          );
        })}
      </ul>

      <Tooltip id="pricing-tooltip" className="max-w-[250px] z-[100] dark:!bg-slate-700 dark:!text-white" />

      <div className="h-[80px]">
        <Button className="w-full text-lg h-14 bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white">
          Get Started
        </Button>
      </div>

      {plan.isHighlighted && (
        <div className="mt-6 pt-6 border-t border-emerald-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <Avatar key={i} className="w-10 h-10 border-2 border-white">
                  <AvatarImage src={`/images/avatar-${i}.jpg`} />
                  <AvatarFallback className="bg-emerald-100 text-emerald-600">
                    S{i}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm text-emerald-600">
              Hundreds of students benefit!
            </p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-white mb-2">
              Best of our Program
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-blue-700 dark:text-slate-300">
              <li>Sanad-Verified Curriculum</li>
              <li>Traditional Teaching Methods</li>
              <li>Modern Doubt Protection</li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}
