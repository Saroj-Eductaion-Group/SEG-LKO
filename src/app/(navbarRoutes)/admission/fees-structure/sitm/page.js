'use client'
import { useState, useEffect } from 'react';

const pdfPath = "/pdfs/SITM-Fee-Structure.pdf";

const SITMFeeStructure = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);

    useEffect(() => {
        let interval;
        if (isDownloading) {
            interval = setInterval(() => {
                setDownloadProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsDownloading(false);
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
        }
        return () => clearInterval(interval);
    }, [isDownloading]);

    const handleDownload = (e) => {
        e.preventDefault();
        setIsDownloading(true);
        setDownloadProgress(0);
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.click();
        }, 2200);
    };

    return (
        <div className="min-h-screen flex items-center py-24 justify-center bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-4xl w-full">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
                            <span className="block">SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT (SITM), LUCKNOW</span>
                            <span className="block text-blue-600 text-2xl mt-4">Fee Structure for Session 2025-2026</span>
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Ahimamau P.O. Arjunganj Sultanpur Road Lucknow | Phone: 9555699988
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        

                        <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Overview</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total Fees</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tuition Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            ["B.Pharma", "₹1,03,000", "₹80,000"],
                                            ["B.Pharm Lateral", "₹60,000", "₹60,000"],
                                            ["D.Pharma", "₹60,000", "₹60,000"],
                                            ["Diploma", "₹40,000", "₹40,000"],
                                            ["BBA", "₹60,000", "₹45,000"],
                                            ["BCA", "₹60,000", "₹45,000"],
                                            ["B.Tech", "₹85,000", "₹60,000"],
                                            ["B.Tech Lateral", "₹85,000", "₹60,000"],
                                            ["M.Tech", "₹60,000", "₹40,000"],
                                            ["MBA", "₹60,000", "₹40,000"],
                                            ["MCA", "₹60,000", "₹40,000"],
                                        ].map(([course, total, tuition], i) => (
                                            <tr key={i}>
                                                <td className="px-4 py-2 text-sm text-gray-900">{course}</td>
                                                <td className="px-4 py-2 text-sm text-gray-900">{total}</td>
                                                <td className="px-4 py-2 text-sm text-gray-900">{tuition}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-sm text-gray-600 space-y-2">
                                <p>• Fees once deposited are non-refundable.</p>
                                <p>• Examination, form, and enrollment fees are to be paid directly to the university.</p>
                                <p>• Dress and transportation charges are separate (if availed).</p>
                                <p>• Hostel fee is ₹60,000/year, inclusive of mess facility.</p>
                                <p>• 10% of the total fee will be charged as a Development Fee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SITMFeeStructure;
