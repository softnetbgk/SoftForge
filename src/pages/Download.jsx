import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download as DownloadIcon, Smartphone, CheckCircle, QrCode, Printer } from 'lucide-react'
import c2cLogo from '../assets/c2c_logo_full.png'

export default function Download() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl p-2">
                        <img src={c2cLogo} alt="Connect2Campus Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Download{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            C2C App
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get the C2C mobile app and stay connected with your campus on the go
                    </p>
                </motion.div>

                {/* Download Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl backdrop-blur-md mb-12"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Available on Play Store</h2>
                            <p className="text-gray-300 mb-6">
                                The official C2C app is now available for download on the Google Play Store. 
                                Experience the best version of our platform with automatic updates and enhanced security.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Real-time push notifications',
                                    'Secure biometric authentication',
                                    'Background synchronization',
                                    'Optimized for Android performance',
                                    'Automatic version updates'
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href="https://play.google.com/store/apps/details?id=com.rudrappa.connect2campus&pcampaignid=web_share" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block group"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-20 w-auto object-contain transition-all drop-shadow-2xl"
                                />
                            </a>

                            <p className="text-sm text-gray-400 mt-4 text-center">
                                Trusted by thousands of students and parents
                            </p>
                        </div>

                        <div className="text-center relative">
                            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-white rounded-2xl p-4 mb-4 flex items-center justify-center relative overflow-hidden group">
                                <img 
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent("https://play.google.com/store/apps/details?id=com.rudrappa.connect2campus&pcampaignid=web_share")}`}
                                    alt="QR Code for Play Store"
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white text-xs px-4">Points to Play Store</p>
                                </div>
                            </div>
                            <p className="text-gray-400 font-medium mb-6">Scan QR to install on your phone</p>
                            
                            {/* New Print CTA */}
                            <Link to="/print-qr">
                                <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-2xl hover:bg-white/10 transition group cursor-pointer">
                                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                                        <Printer className="w-4 h-4" />
                                        <span>Print A4 Poster for Walls</span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Perfect for Schools & Offices</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Requirements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold mb-6">System Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h4 className="font-semibold text-white mb-2">Minimum</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Android 8.0 or higher</li>
                                <li>• 2GB RAM</li>
                                <li>• 100MB free storage</li>
                                <li>• Internet connection</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-2">Recommended</h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Android 11 or higher</li>
                                <li>• 4GB RAM</li>
                                <li>• 200MB free storage</li>
                                <li>• 4G/WiFi connection</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
