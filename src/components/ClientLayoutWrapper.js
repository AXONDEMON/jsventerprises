'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children, interClass, spaceGroteskClass }) {
    return (
        <div className={`${interClass} ${spaceGroteskClass}`}>
            {children}
        </div>
    );
}
