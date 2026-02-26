'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children, montserratClass, openSansClass }) {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <div className={`${montserratClass} ${openSansClass} ${isHome ? 'mobile-slider-active' : ''}`}>
            {children}
        </div>
    );
}
