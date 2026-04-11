import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Users, Code, Database, Server, Smartphone, Laptop, Cloud, Coffee, Layout, FileCode } from 'lucide-react'
import professionalMan from '../assets/professional_man.jpg'
import rudrappaImg from '../assets/rudrappa.png'
import praveenImg from '../assets/praveen.png'
import Hero3D from '../components/Hero3D'

export default function Home() {
    const features = [
        {
            icon: Users,
            title: 'Student Management',
            description: 'Complete student lifecycle management from admission to graduation'
        },
        {
            icon: Zap,
            title: 'Real-time Updates',
            description: 'Instant notifications for attendance, fees, and announcements'
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with AWS infrastructure'
        },
        {
            icon: Sparkles,
            title: 'Modern Interface',
            description: 'Beautiful, intuitive UI that everyone loves to use'
        }
    ]

    const stats = [
        { value: '10+', label: 'Schools' },
        { value: '5k+', label: 'Students' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Support' }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* 3D Animated Title */}
                    <div className="w-full flex flex-col items-center justify-center perspective-1000 mb-12">
                        <div className="flex flex-col items-center">
                            <div className="relative flex gap-2 sm:gap-4 md:gap-6 cursor-default select-none">
                                <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl tracking-[0.1em] md:tracking-[0.25em] pl-[0.1em] md:pl-[0.25em]">
                                    SOFTFORGE
                                </h1>
                            </div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2 md:mt-4 tracking-[0.3em] uppercase underline underline-offset-8 decoration-purple-500/30"
                            >
                                Technologies
                            </motion.span>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-yellow-400 text-xl md:text-2xl font-medium italic text-center max-w-2xl leading-relaxed mt-6"
                        >
                            "Where Innovation Meets Excellence"
                        </motion.p>
                    </div>

                    {/* Two Column Layout: Text + Image */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                                className="inline-block mb-6"
                            >
                                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 inline-block text-purple-400" />
                                    We Make Your Dream Website Here
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                <span className="text-white">
                                    We Build Stunning
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Websites & Mobile Apps
                                </span>
                                <br />
                                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-medium">
                                    For Your Business
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl">
                                Transform your business with our <span className="text-blue-400 font-semibold">custom-built solutions</span>.
                                We create beautiful, responsive websites and powerful Android mobile apps
                                tailored to your unique needs.
                            </p>

                            <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                                At <strong className="text-white">SoftForge Technologies</strong>, we turn ideas into reality with cutting-edge technology and pixel-perfect design. From sleek corporate websites to dynamic mobile applications, our expert team delivers scalable and stunning digital experiences that captivate your audience and drive growth. Let us help you stand out in the digital world.
                            </p>

                            {/* Key Features */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sm font-medium">Custom Development</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sm font-medium">Modern Design</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sm font-medium">Fast Delivery</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/download">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 text-white transition-all"
                                    >
                                        <span>Get Started Free</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>

                                <Link to="/product">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg font-semibold text-lg text-white hover:bg-white/20 transition-all"
                                    >
                                        Explore Features
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column - Professional Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative h-full w-full flex items-center justify-center">
                                {/* 3D Animated Visual behind the image */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <Hero3D />
                                </div>

                                {/* Professional person holding laptop */}
                                <div className="relative aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 shadow-2xl group z-10">
                                    <img
                                        src={professionalMan}
                                        alt="Young professional with laptop"
                                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-20"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-xl"
                            >
                                <div className="text-3xl mb-3">🌐</div>
                                <div className="text-sm font-semibold text-white mb-1">Custom Websites</div>
                                <div className="text-xs text-gray-400">Responsive & Modern</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-xl"
                            >
                                <div className="text-3xl mb-3">📱</div>
                                <div className="text-sm font-semibold text-white mb-1">Android Apps</div>
                                <div className="text-xs text-gray-400">Native Performance</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border border-pink-500/20 rounded-xl"
                            >
                                <div className="text-3xl mb-3">💼</div>
                                <div className="text-sm font-semibold text-white mb-1">Business Solutions</div>
                                <div className="text-xs text-gray-400">End-to-End Development</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl"
                            >
                                <div className="text-3xl mb-3">⚡</div>
                                <div className="text-sm font-semibold text-white mb-1">Fast Delivery</div>
                                <div className="text-xs text-gray-400">Quick Turnaround</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Product Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative z-10 py-12 mt-16 max-w-6xl mx-auto px-6"
            >
                <div className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-blue-900/40 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-6">
                        <span className="inline-block px-6 py-3 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-base font-semibold mb-4">
                            <span className="text-2xl mr-2">🚀</span> Our First Product
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                                Connect2Campus (C2C)
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Complete school management solution with powerful mobile app and web dashboard.
                            Transform how your institution manages academics, attendance, fees, hostel, transport, and more.
                        </p>
                    </div>

                    {/* Product Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-3xl mb-2">📚</div>
                            <div className="text-sm font-semibold text-white">Academic Management</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-3xl mb-2">✓</div>
                            <div className="text-sm font-semibold text-white">Attendance Tracking</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-3xl mb-2">💰</div>
                            <div className="text-sm font-semibold text-white">Fee Management</div>
                        </div>
                        <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-3xl mb-2">🚌</div>
                            <div className="text-sm font-semibold text-white">Transport & Hostel</div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-8">
                        <Link to="/product">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow"
                            >
                                Learn More About C2C →
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative z-10 py-16"
            >
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Trusted by Schools & Students Nationwide
                    </h3>
                    <p className="text-gray-400"><span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent font-medium">Connect2Campus</span> in action</p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="text-center p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-blue-300/50"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Features Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Everything You Need,{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                All in One Place
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Powerful features designed to streamline school operations and enhance learning
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden p-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl text-center shadow-2xl"
                    >
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join hundreds of schools already using C2C to manage their operations efficiently
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition"
                                    >
                                        Schedule a Demo
                                    </motion.button>
                                </Link>
                            </div>
                        </div>

                        {/* Background Animation */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Meet the <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Creators</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            The visionary minds behind SoftForge Technologies, turning complex problems into elegant digital solutions.
                        </p>
                    </motion.div>

                    <div className="space-y-16 px-4">
                        {/* Rudrappa H M */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-10 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl relative p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            src={rudrappaImg}
                                            alt="Rudrappa H M"
                                            className="w-full h-full object-cover brightness-[0.6]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-left w-full overflow-hidden">
                                <h3 className="text-3xl font-bold mb-2">Rudrappa H M</h3>
                                <div className="mb-6 flex items-center gap-2 flex-wrap">
                                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">Co-Founder</span>
                                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">Lead Developer</span>
                                    <div className="flex ml-2">
                                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block origin-bottom">
                                            @ SoftForge Technologies
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-8 text-lg mb-6">
                                    As the architectural mind behind SoftForge Technologies, Rudrappa brings a blend of technical brilliance and strategic foresight. With deep expertise in full-stack development, he envisions software not just as code, but as a catalyst for business transformation. His commitment to scalable, clean, and efficient architecture ensures that every SoftForge Technologies solution is future-proof. He leads the development team with a philosophy rooted in continuous learning and excellence, driving the company to push the boundaries of what's possible in web and mobile technology.
                                </p>

                                {/* Static Tech Stack */}
                                <div className="mask-linear-fade mt-6">
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300 flex items-center gap-1">
                                            <Code className="w-3 h-3" /> React.js
                                        </span>
                                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-300 flex items-center gap-1">
                                            <Server className="w-3 h-3" /> Node.js
                                        </span>
                                        <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs font-medium text-yellow-300 flex items-center gap-1">
                                            <Database className="w-3 h-3" /> SQL
                                        </span>
                                        <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-300 flex items-center gap-1">
                                            <FileCode className="w-3 h-3" /> HTML
                                        </span>
                                        <span className="px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-full text-xs font-medium text-sky-300 flex items-center gap-1">
                                            <Layout className="w-3 h-3" /> CSS
                                        </span>
                                        <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-medium text-red-300 flex items-center gap-1">
                                            <Coffee className="w-3 h-3" /> Java
                                        </span>
                                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300 flex items-center gap-1">
                                            <Cloud className="w-3 h-3" /> AWS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Middle 3D Title */}
                        <div className="w-full flex flex-col items-center justify-center perspective-1000 py-12">
                            <div className="relative flex gap-2 sm:gap-4 md:gap-6 cursor-default select-none mb-8">
                                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl tracking-[0.25em] pl-[0.25em]">
                                    SOFTFORGE
                                </h2>
                            </div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-[0.3em] uppercase underline underline-offset-8 decoration-purple-500/30"
                            >
                                Technologies
                            </motion.span>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="text-yellow-400 text-xl md:text-2xl font-medium italic text-center max-w-2xl leading-relaxed"
                            >
                                "Bridging the gap between imagination and reality through code."
                            </motion.p>
                        </div>

                        {/* Praveen G */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse gap-10 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl relative p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
                                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            src={praveenImg}
                                            alt="Praveen G"
                                            className="w-full h-full object-cover brightness-[0.8]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-left md:text-right w-full overflow-hidden">
                                <h3 className="text-3xl font-bold mb-2">Praveen G</h3>
                                <div className="mb-6 flex items-center gap-2 justify-start md:justify-end flex-wrap">
                                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">Co-Founder</span>
                                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium border border-pink-500/30">Tech Lead</span>
                                    <div className="flex ml-2">
                                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block origin-bottom">
                                            @ SoftForge Technologies
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-8 text-lg mb-6">
                                    Praveen is the creative and technical force that bridges the gap between complex functionality and user-centric design. Leading the technology strategy at SoftForge Technologies, he focuses on delivering high-performance applications that are intuitive and engaging. His passion lies in solving intricate problems with elegant solutions, ensuring that the end-user experience is always paramount. Praveen's leadership fosters a culture of innovation, where every challenge is viewed as an opportunity to create something extraordinary and impactful.
                                </p>

                                {/* Static Tech Stack */}
                                <div className="mask-linear-fade mt-6">
                                    <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300 flex items-center gap-1">
                                            <Code className="w-3 h-3" /> React.js
                                        </span>
                                        <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs font-medium text-pink-300 flex items-center gap-1">
                                            <Smartphone className="w-3 h-3" /> Apps
                                        </span>
                                        <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs font-medium text-indigo-300 flex items-center gap-1">
                                            <Database className="w-3 h-3" /> DB
                                        </span>
                                        <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-300 flex items-center gap-1">
                                            <FileCode className="w-3 h-3" /> HTML
                                        </span>
                                        <span className="px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-full text-xs font-medium text-sky-300 flex items-center gap-1">
                                            <Layout className="w-3 h-3" /> CSS
                                        </span>
                                        <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-medium text-red-300 flex items-center gap-1">
                                            <Coffee className="w-3 h-3" /> Java
                                        </span>
                                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300 flex items-center gap-1">
                                            <Cloud className="w-3 h-3" /> AWS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >
        </div >
    )
}
