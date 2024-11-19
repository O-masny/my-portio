'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000 }}>
            <button
                onClick={() => router.back()} // Navigace zpět
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000', // Černá barva textu a ikony
                    fontSize: '16px', // Velikost textu
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-left"
                    style={{ color: '#000' }} // Černá barva pro SVG
                >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span style={{ marginLeft: '8px', color: '#fff' }}>Back</span>
            </button>
        </div>
    );
}
