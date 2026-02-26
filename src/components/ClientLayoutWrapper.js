'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children, montserratClass, openSansClass }) {
    return (
        <div className={`${montserratClass} ${openSansClass}`}>
            {children}
        </div>
    );
}
