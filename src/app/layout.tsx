import {Inter} from 'next/font/google';
import {Metadata} from 'next';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import "../app/card.css";

// Inter 글꼴 설정
const inter = Inter({subsets: ['latin']});

// metadata
export const metadata: Metadata = {
    title: 'Sports Card Generator',
    description: 'Generate Card Image For Sports Stars',
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
