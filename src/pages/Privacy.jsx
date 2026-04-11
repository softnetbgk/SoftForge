import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export default function Privacy() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6">
                        <Shield className="w-10 h-10" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Privacy{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Last updated: February 4, 2026
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert prose-lg max-w-none"
                >
                    {/* Quick Summary */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: Lock, title: 'Data Security', description: 'All data encrypted in transit and at rest' },
                            { icon: Eye, title: 'Transparency', description: 'Clear about what data we collect' },
                            { icon: FileText, title: 'Your Rights', description: 'Full control over your data' }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Privacy Policy Content */}
                    <div className="space-y-8 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Welcome to SoftForge Technologies Privacy Policy</h2>
                            <p className="text-gray-300">
                                At <strong className="text-white">SoftForge Technologies</strong>, the creator of the <span className="text-purple-400 font-medium">Connect2Campus (C2C)</span> platform, we take your privacy seriously. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you use our mobile application, website, and digital services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <p className="text-gray-300 mb-4">We collect information that you provide directly to us, including:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Personal information (name, email, phone number)</li>
                                <li>Educational institution details</li>
                                <li>Student academic records and attendance data (processed on behalf of schools)</li>
                                <li>Fee payment transaction records</li>
                                <li>Location data (strictly for optional transport tracking features)</li>
                                <li>Device information, IP address, and usage statistics</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-300 mb-4">We use the collected information to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                                <li>Process payments and manage financial records</li>
                                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                            <p className="text-gray-300">
                                We implement industry-standard technical and organizational security measures to protect your personal information.
                                All data is encrypted in transit using SSL/TLS protocols and stored securely on AWS infrastructure with
                                bank-grade encryption conventions. We regularly audit our systems for possible vulnerabilities and attacks.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
                            <p className="text-gray-300">
                                We do not sell your personal information. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                                <li>Authorized school administrators and staff (strictly related to their students)</li>
                                <li>Trusted third-party service providers (e.g., AWS for hosting, payment gateways)</li>
                                <li>Legal authorities when required by law to protect our rights and safety</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                            <p className="text-gray-300 mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate or incomplete data</li>
                                <li>Request deletion of your data (subject to school record-keeping policies)</li>
                                <li>Opt-out of promotional communications</li>
                                <li>Withdraw consent for location tracking in the app settings</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
                            <p className="text-gray-300">
                                Our services are intended for educational institutions. We collect and process student information only as directed by the educational institution
                                and with proper authorization from parents/guardians in compliance with applicable laws (like COPPA/GDPR where relevant).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
                            <p className="text-gray-300">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                                the new Privacy Policy on this page and updating the "Last updated" date effectively.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                            <p className="text-gray-300 mb-4">
                                If you have any questions or concerns about this Privacy Policy, please contact us:
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-gray-300">
                                <p><strong>Email:</strong> sofnetbgk@gmail.com</p>
                                <p><strong>Phone:</strong> +91 99999 99999</p>
                                <p><strong>Address:</strong> Sector 12, Nava Nagar, Bagalkote, Karnataka 587103, India</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
