import { useEffect } from 'react'
import { Printer, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import c2cLogo from '../assets/c2c_logo_full.png'
import c2cShowcase from '../assets/c2c_showcase_1.png'

export default function PrintQR() {
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.rudrappa.connect2campus&pcampaignid=web_share";
    
    // Auto-trigger print title
    useEffect(() => {
        document.title = "Print QR Code - Connect2Campus";
    }, []);

    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="min-h-screen bg-white text-black p-0 sm:p-8">
            {/* Control Bar - Hidden during print */}
            <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden pt-32">
                <Link to="/download" className="flex items-center gap-2 text-gray-600 hover:text-black">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Site
                </Link>
                <button 
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 transition"
                >
                    <Printer className="w-5 h-5" />
                    Print Now
                </button>
            </div>

            {/* A4 Content Area */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none min-h-[297mm] p-[15mm] flex flex-col items-center justify-between text-center border border-gray-100 print:border-none">
                
                {/* Header */}
                <div className="w-full flex items-center justify-center gap-6 mb-4">
                    <img src={c2cLogo} alt="C2C Logo" className="w-32 h-32 object-contain" />
                    <div className="text-left">
                        <h1 className="text-6xl font-black tracking-tighter text-blue-900">
                            CONNECT2CAMPUS
                        </h1>
                        <div className="h-2 w-32 bg-blue-600 mt-2"></div>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-4xl font-bold text-gray-800 uppercase tracking-widest mb-2">
                        Official Mobile App
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <p className="text-2xl text-blue-600 font-bold italic">
                            Available on 
                        </p>
                        <img 
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                            alt="Google Play Logo" 
                            className="h-16 object-contain"
                        />
                    </div>
                </div>

                {/* Main QR Code & Showcase Section */}
                <div className="relative w-full flex items-center justify-center gap-12 py-8 px-6">
                    {/* QR Code */}
                    <div className="bg-white p-6 border-[8px] border-black rounded-[2rem] shadow-sm">
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(playStoreUrl)}&ecc=H&margin=1`}
                            alt="Connect2Campus Play Store QR Code"
                            className="w-[100mm] h-[100mm] object-contain"
                        />
                        <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Scan to Install</p>
                    </div>

                    {/* App Showcase */}
                    <div className="flex-1 max-w-[80mm]">
                        <img 
                            src={c2cShowcase} 
                            alt="App Screenshot" 
                            className="w-full rounded-3xl shadow-2xl border border-gray-200" 
                        />
                    </div>
                </div>

                {/* Footer Section */}
                <div className="w-full space-y-6">
                    <div className="flex justify-center gap-16 items-center border-t-4 border-b-4 border-blue-900 py-6">
                        <div className="text-center">
                            <div className="text-5xl font-black text-blue-900 mb-1 leading-none">FREE</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Download</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-black text-blue-900 mb-1 leading-none">99.9%</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Reliability</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-black text-blue-900 mb-1 leading-none">24/7</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Support</div>
                        </div>
                    </div>

                    <div className="pt-4 italic text-gray-400 text-lg">
                        Powered by <span className="font-bold text-gray-600">SoftForge Technologies</span>
                    </div>
                </div>
            </div>



            {/* Print Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                    }
                    /* Ensure 3D background doesn't show in print */
                    #root > div > div:first-child {
                      display: none !important;
                    }
                    /* Hide nav and footer */
                    header, footer {
                        display: none !important;
                    }
                }
            `}} />
        </div>
    )
}
