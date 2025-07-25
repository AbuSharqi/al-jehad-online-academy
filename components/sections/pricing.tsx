import { motion } from 'framer-motion'
import { Flag, CheckCircle, AlertCircle, MessageSquare, Mail } from 'lucide-react'

export default function PricingSection() {
    return (
        <motion.section
            id="pricing"
            className="py-16 bg-white dark:bg-slate-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-4">
                        Course Enrollment
                    </h2>
                    <p className="text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto">
                        Affordable pricing for students across South Asia
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Pakistan Pricing */}
                    <motion.div
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-emerald-100 dark:border-emerald-900/50"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Flag className="w-6 h-6 text-green-600" />
                                <h3 className="text-xl font-bold text-emerald-900 dark:text-white">
                                    For Pakistani Students
                                </h3>
                            </div>
                            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                                Rs. 3000
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Full course access</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Lifetime updates</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Support via WhatsApp</span>
                                </div>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                                    Payment Method:
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    EasyPaisa: <span className="font-mono">0315-9870950</span>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Name: <span className="font-semibold">Jehad Adil</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* India Pricing */}
                    <motion.div
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-emerald-100 dark:border-emerald-900/50"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Flag className="w-6 h-6 text-orange-600" />
                                <h3 className="text-xl font-bold text-emerald-900 dark:text-white">
                                    For Indian Students
                                </h3>
                            </div>
                            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                                ₹800
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Full course access</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Lifetime updates</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Support via WhatsApp</span>
                                </div>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                                    Payment Method:
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    EasyPaisa: <span className="font-mono">0315-9870950</span>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Name: <span className="font-semibold">Jehad Adil</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bangladesh Pricing */}
                    <motion.div
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-emerald-100 dark:border-emerald-900/50"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Flag className="w-6 h-6 text-green-500" />
                                <h3 className="text-xl font-bold text-emerald-900 dark:text-white">
                                    For Bangladeshi Students
                                </h3>
                            </div>
                            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                                1500 Taka
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Full course access</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Lifetime updates</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Support via WhatsApp</span>
                                </div>
                            </div>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                                <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                                    Payment Method:
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    EasyPaisa: <span className="font-mono">0315-9870950</span>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-1">
                                    Name: <span className="font-semibold">Jehad Adil</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Payment Instructions */}
                <div className="max-w-2xl mx-auto bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-200 dark:border-amber-800 mb-16">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-300 mb-2">
                                Important Payment Instructions
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                After making the payment, please send the screenshot of payment confirmation to our WhatsApp number or email to receive your course access link.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                                    <p className="font-semibold text-gray-900 dark:text-white">WhatsApp:</p>
                                    <a href="https://wa.me/03159870950" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                                        +92 315 9870950
                                    </a>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                                    <p className="font-semibold text-gray-900 dark:text-white">Email:</p>
                                    <a href="mailto:support@heraaacademy.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                                        support@heraaacademy.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quran Verse */}
                <div className="max-w-3xl mx-auto bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 mb-16 text-center">
                    <div className="font-arabic text-2xl text-emerald-800 dark:text-emerald-300 mb-4">
                        كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                        "Every soul will taste death..." (Quran 3:185)
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">
                        In case someone passes away (God forbid) before or during the course, we sincerely apologize that the course cannot be provided in such situations.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-3">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "How will I receive the course after payment?",
                                answer: "After sending your payment screenshot to our WhatsApp or email, you'll receive an invitation link to join our private course group within 24 hours."
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We currently accept payments via EasyPaisa for all countries. The same EasyPaisa number works for Pakistani, Indian and Bangladeshi students."
                            },
                            {
                                question: "Is there any refund policy?",
                                answer: "Due to the digital nature of the course, we don't offer refunds once the course materials have been accessed. Please review the course details carefully before enrolling."
                            },
                            {
                                question: "What if I have questions during the course?",
                                answer: "You'll have direct access to instructor support through our private WhatsApp group where you can ask questions and get personalized help."
                            },
                            {
                                question: "How long will I have access to the course?",
                                answer: "You'll have lifetime access to all course materials and future updates, insha'Allah."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <h3 className="text-2xl font-bold text-emerald-900 dark:text-white mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Contact our support team for assistance with enrollment or any other queries.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://wa.me/03159870950"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                        >
                            <MessageSquare className="w-5 h-5" />
                            WhatsApp Support
                        </a>
                        <a
                            href="mailto:support@heraaacademy.com"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}