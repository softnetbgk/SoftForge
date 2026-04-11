import { motion } from 'framer-motion'
import {
    GraduationCap,
    Users,
    DollarSign,
    Home,
    Bus,
    Calendar,
    FileText,
    BarChart,
    Bell,
    Shield,
    Smartphone,
    Cloud,
    CheckCircle,
    ArrowRight
} from 'lucide-react'

// Image imports
import c2cShowcase1 from '../assets/c2c_showcase_1.png'
import c2cShowcase2 from '../assets/c2c_showcase_2.png'
import c2cLogo from '../assets/c2c_logo_full.png'

export default function Product() {
    const modules = [
        {
            icon: GraduationCap,
            title: 'Academic Excellence',
            description: 'Redefine the learning experience with tools designed for modern pedagogy. Manage every aspect of the academic lifecycle with precision.',
            features: ['Smart Student Records', 'automated Attendance', 'Dynamic Marks & Grading', 'Custom Certificate Generation', 'Interactive Report Cards']
        },
        {
            icon: DollarSign,
            title: 'Financial Management',
            description: 'Streamline your school\'s economy with automated fee structures and transparent financial tracking for parents and administrators.',
            features: ['Secure Online Payments', 'Instant Fee Receipts', 'Smart Due Reminders', 'Consolidated Financial Reports', 'Multi-payment Reconciliation']
        },
        {
            icon: Home,
            title: 'Hostel & Residence',
            description: 'Provide a safe and comfortable living environment for your students with comprehensive room and mess management systems.',
            features: ['Intelligent Room Allocation', 'Mess & Billing Management', 'Nightly Attendance Tracking', 'Secure Visitor Logs', 'Instant Complaint Resolution']
        },
        {
            icon: Bus,
            title: 'Smart Fleet & Transport',
            description: 'Ensure student safety with real-time GPS tracking and instant notifications for parents during every journey.',
            features: ['Real-time Live Location', 'Automated Route Optimization', 'Smart Parent Notifications', 'Driver Performance Tracking', 'Digital Geofencing Safety']
        },
        {
            icon: Calendar,
            title: 'Intelligent Scheduling',
            description: 'Optimize resource allocation with smart timetables that prevent conflicts and streamline daily operations.',
            features: ['Automated Class Timetables', 'Centralized Exam Schedules', 'Simplified Leave Management', 'Digital Events Calendar', 'One-click Faculty Substitution']
        },
        {
            icon: FileText,
            title: 'Digital Library Hub',
            description: 'Manage your entire knowledge repository with a digital-first approach to book tracking and student engagement.',
            features: ['ISBN Book Cataloging', 'Fast Issue/Return System', 'automated Fine Calculation', 'Digital Resource Library', 'Inventory Analytics']
        },
        {
            icon: Users,
            title: 'Staff Management',
            description: 'Complete HR and payroll solutions',
            features: ['Employee Records', 'Attendance', 'Payroll', 'Leave Management', 'Performance Review']
        },
        {
            icon: Bell,
            title: 'Communication Hub',
            description: 'Multi-channel communication platform',
            features: ['Push Notifications', 'SMS Alerts', 'Email Notifications', 'Announcements', 'Chat Support']
        }
    ]

    const highlights = [
        {
            icon: Smartphone,
            title: 'Mobile First',
            description: 'Native Android app with offline support'
        },
        {
            icon: Cloud,
            title: 'Cloud Based',
            description: 'Secure AWS infrastructure with 99.9% uptime'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-grade encryption and data protection'
        },
        {
            icon: BarChart,
            title: 'Advanced Analytics',
            description: 'Detailed insights and customizable reports'
        }
    ]

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Static Branding Header */}
                <div className="w-full flex flex-col items-center justify-center mb-16">
                    <div className="flex flex-col items-center">
                        <div className="relative flex gap-2 sm:gap-4 md:gap-6 cursor-default select-none">
                            {"SOFTFORGE".split("").map((char, index) => (
                                <span
                                    key={index}
                                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl"
                                    style={{
                                        WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                                        filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))"
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2 md:mt-4 tracking-widest underline underline-offset-8 decoration-purple-500/30">
                            Technologies
                        </span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-center"
                    >
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Complete Management Hub
                        </span>
                        <br />
                        For Schools, Colleges & Institutes
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
                        The ultimate ecosystem designed for the modern educational landscape. Whether it's a School, PU College, University, or Vocational Institute - we bridge the gap between imagination and reality.
                    </p>
                </div>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl backdrop-blur-md text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Product Showcase Section */}
                <div className="space-y-32 mb-32">
                    {/* First Showcase: Empowerment */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-center gap-12"
                    >
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                            <img
                                src={c2cShowcase1}
                                alt="C2C Student Empowerment"
                                className="relative rounded-3xl border border-white/10 shadow-2xl w-full object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold leading-tight">
                                Empowering the <span className="text-blue-400">Next Generation</span> of Students
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Connect2Campus (C2C) isn't just a management tool; it's an ecosystem designed to bring students, parents, and educators together. By providing instant access to academic records, attendance, and real-time updates, we foster a culture of transparency and proactive learning.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="text-green-400 w-5 h-5" />
                                    <span>Real-time notifications</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="text-green-400 w-5 h-5" />
                                    <span>Parent-Teacher synergy</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="text-green-400 w-5 h-5" />
                                    <span>Instant result access</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="text-green-400 w-5 h-5" />
                                    <span>Digital attendance tracking</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Showcase: Technology Orbit */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row-reverse items-center gap-12"
                    >
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
                            <img
                                src={c2cShowcase2}
                                alt="C2C Technology Infrastructure"
                                className="relative rounded-3xl border border-white/10 shadow-2xl w-full object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                                <div className="px-4 py-1 bg-gray-900 rounded-xl text-xs font-bold uppercase tracking-widest text-blue-400">
                                    Future-Ready Infrastructure
                                </div>
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">
                                Built on <span className="text-purple-400">Cutting-Edge</span> Cloud Technology
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our platform leverages AWS enterprise-grade security and auto-scaling infrastructure. Whether you are managing a small school or a large university campus, C2C delivers 99.9% uptime and lightning-fast performance across all modules.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-3 h-3 text-purple-400" />
                                    </div>
                                    <span className="text-gray-300 font-medium">Auto-scaling servers for peak admission periods</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-3 h-3 text-purple-400" />
                                    </div>
                                    <span className="text-gray-300 font-medium">Bank-grade data encryption for fee transactions</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Why Choose C2C? - Extended Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 bg-gradient-to-br from-gray-900 to-blue-900/20 rounded-[3rem] p-12 border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold">
                                Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect2Campus (C2C)?</span>
                            </h2>
                            <p className="text-lg text-gray-300">
                                Connect2Campus is not just software; it's a commitment to educational excellence across Schools, PU Colleges, and Institutes. We've spent thousands of hours researching the challenges faced by modern institutions to build a platform that truly solves them.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <h4 className="font-bold mb-1">Unified State Management</h4>
                                    <p className="text-sm text-gray-400">Sync all your branches, departments, and hostels in one centralized cloud dashboard with real-time updates.</p>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <h4 className="font-bold mb-1">AI-Powered Question Paper Generator</h4>
                                    <p className="text-sm text-gray-400">Reduce teacher workload significantly with our intelligent tool that generates balanced question papers in seconds.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Key Performance Indicators</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-blue-500/10 rounded-3xl border border-blue-500/20">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Increase in Fee Collection</div>
                                </div>
                                <div className="text-center p-6 bg-purple-500/10 rounded-3xl border border-purple-500/20">
                                    <div className="text-3xl font-bold text-purple-400 mb-1">70%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Reduction in Paperwork</div>
                                </div>
                                <div className="text-center p-6 bg-pink-500/10 rounded-3xl border border-pink-500/20">
                                    <div className="text-3xl font-bold text-pink-400 mb-1">Instant</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">Parent Communication</div>
                                </div>
                                <div className="text-center p-6 bg-green-500/10 rounded-3xl border border-green-500/20">
                                    <div className="text-3xl font-bold text-green-400 mb-1">99.9%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">System Availability</div>
                                </div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-between">
                                <p className="text-gray-300 italic">"Simplifying complexity, one school at a time."</p>
                                <img src={c2cLogo} alt="C2C Logo" className="w-12 h-12 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Modules Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Powerful{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Modules
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <module.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                                        <p className="text-gray-400">{module.description}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2 mt-6">
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl text-center"
                >
                    <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Schedule a personalized demo and see C2C in action
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl"
                    >
                        Request a Demo
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}
