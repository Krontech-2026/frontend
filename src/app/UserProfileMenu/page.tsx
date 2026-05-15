'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faUser, faSliders, faCheck, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: 'Gigel Gigica',
        email: 'example@gmail.com',
        dob: 'yyyy-mm-dd',
        phone: '+40 123 456 789',
        address: 'Bucharest, Romania',
    });

    const handleEdit = () => setIsEditing(true);

    const handleCancel = () => setIsEditing(false);

    const handleConfirm = () => {
        console.log('Changes confirmed:', formData);
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target;
        const fieldMap: { [key: string]: keyof typeof formData } = {
            'Full Name': 'fullName',
            'Email': 'email',
            'Date of Birth': 'dob',
            'Phone Number': 'phone',
            'Address': 'address',
        };
        const field = fieldMap[placeholder];
        if (field) {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    };

    return (
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans dark:bg-black min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl hover-lift">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-center space-y-8 p-6 bg-white dark:bg-zinc-900 rounded-3xl mt-6 shadow-2xl overflow-y-auto">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-500 text-center">
                    👤 My Profile
                </h1>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-40 h-40 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-4 border-emerald-200">
                        <FontAwesomeIcon icon={faUser} className="text-white text-7xl" />
                    </div>
                    <p className="text-3xl font-bold text-emerald-600">
                        {formData.fullName}
                    </p>
                    <p className="text-emerald-500 font-semibold">{formData.email}</p>
                </div>

                {!isEditing ? (
                    <button 
                        onClick={handleEdit}
                        className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:from-emerald-400 hover:to-emerald-500 hover:shadow-lg transition-all active:scale-95 flex items-center gap-3 cursor-pointer shadow-md"
                    >
                        <FontAwesomeIcon icon={faPencil} />
                        Edit Profile
                    </button>
                ) : (
                    <div className="flex gap-4 w-full max-w-xs">
                        <button 
                            onClick={handleCancel}
                            className="flex-1 bg-linear-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:from-red-400 hover:to-red-500 hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                            Cancel
                        </button>
                        <button 
                            onClick={handleConfirm}
                            className="flex-1 bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold hover:from-green-400 hover:to-green-500 hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                        >
                            <FontAwesomeIcon icon={faCheck} />
                            Save
                        </button>
                    </div>
                )}

                <div className="w-full">
                    <h2 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                        📋 Personal Information
                    </h2>

                    <div className="w-full space-y-4">
                        <div>
                            <label className="text-emerald-600 text-sm font-semibold mb-2 block">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                disabled={!isEditing}
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full px-6 py-3 rounded-2xl focus:outline-none font-medium transition-all ${
                                    isEditing 
                                        ? 'bg-linear-to-r from-emerald-50 to-emerald-100 text-emerald-950 cursor-text focus:ring-2 focus:ring-emerald-500 border-2 border-emerald-500' 
                                        : 'bg-emerald-950 text-emerald-300 disabled:opacity-70 cursor-not-allowed border-2 border-emerald-800'
                                }`}
                            />
                        </div>

                        <div>
                            <label className="text-emerald-600 text-sm font-semibold mb-2 block">Email</label>
                            <input 
                                type="email"
                                placeholder="Email" 
                                disabled={!isEditing}
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-6 py-3 rounded-2xl focus:outline-none font-medium transition-all ${
                                    isEditing 
                                        ? 'bg-linear-to-r from-emerald-50 to-emerald-100 text-emerald-950 cursor-text focus:ring-2 focus:ring-emerald-500 border-2 border-emerald-500' 
                                        : 'bg-emerald-950 text-emerald-300 disabled:opacity-70 cursor-not-allowed border-2 border-emerald-800'
                                }`}
                            />
                        </div>

                        <div>
                            <label className="text-emerald-600 text-sm font-semibold mb-2 block">Date of Birth</label>
                            <input 
                                type="date" 
                                placeholder="Date of Birth" 
                                disabled={!isEditing}
                                value={formData.dob}
                                onChange={handleInputChange}
                                className={`w-full px-6 py-3 rounded-2xl focus:outline-none font-medium transition-all ${
                                    isEditing 
                                        ? 'bg-linear-to-r from-emerald-50 to-emerald-100 text-emerald-950 cursor-text focus:ring-2 focus:ring-emerald-500 border-2 border-emerald-500' 
                                        : 'bg-emerald-950 text-emerald-300 disabled:opacity-70 cursor-not-allowed border-2 border-emerald-800'
                                }`}
                            />
                        </div>

                        <div>
                            <label className="text-emerald-600 text-sm font-semibold mb-2 block">Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                disabled={!isEditing}
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full px-6 py-3 rounded-2xl focus:outline-none font-medium transition-all ${
                                    isEditing 
                                        ? 'bg-linear-to-r from-emerald-50 to-emerald-100 text-emerald-950 cursor-text focus:ring-2 focus:ring-emerald-500 border-2 border-emerald-500' 
                                        : 'bg-emerald-950 text-emerald-300 disabled:opacity-70 cursor-not-allowed border-2 border-emerald-800'
                                }`}
                            />
                        </div>

                        <div>
                            <label className="text-emerald-600 text-sm font-semibold mb-2 block">Address</label>
                            <input 
                                type="text" 
                                placeholder="Address" 
                                disabled={!isEditing}
                                value={formData.address}
                                onChange={handleInputChange}
                                className={`w-full px-6 py-3 rounded-2xl focus:outline-none font-medium transition-all ${
                                    isEditing 
                                        ? 'bg-linear-to-r from-emerald-50 to-emerald-100 text-emerald-950 cursor-text focus:ring-2 focus:ring-emerald-500 border-2 border-emerald-500' 
                                        : 'bg-emerald-950 text-emerald-300 disabled:opacity-70 cursor-not-allowed border-2 border-emerald-800'
                                }`}
                            />
                        </div>
                    </div>
                </div>

                <Link href="/StartPage" className="w-full mt-8 bg-linear-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-bold hover:from-red-400 hover:to-red-500 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer shadow-md">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                </Link>

                <div className="w-full flex justify-center gap-4 items-center pt-8">
                    <Link href="/HomePage" className="bg-emerald-950 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition-colors">
                        Home
                    </Link>
                    <button className="bg-emerald-600 text-emerald-950 px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 transition-colors">
                        Profile
                    </button>
                    <Link href="/SettingsMenu" className="bg-emerald-950 text-emerald-600 rounded-full p-3 hover:bg-emerald-900 transition-colors flex items-center justify-center cursor-pointer">
                        <FontAwesomeIcon icon={faSliders} className="text-xl transform rotate-90" />
                    </Link>
                </div>
            </main>
        </div>
    );
}
