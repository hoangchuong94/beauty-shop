import { Metadata } from 'next';
import Image from 'next/image';

import Logo from '@/app/components/logo';
import bgRegisterPage from '/public/static/bg-registration-form-1.jpg';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0">
          <Image
            className="object-cover"
            src={bgRegisterPage}
            alt="bg-register-page"
            quality={100}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex min-h-full items-center p-4">
          <div className="ml-auto mr-auto flex flex-col rounded-lg border border-stone-700 bg-transparent p-6 max-sm:flex-1 sm:min-w-[400px]">
            <div className="flex h-20 w-full items-end rounded-lg bg-transparent p-3 md:h-36">
              <div className="w-32 text-white md:w-36">
                <Logo />
              </div>
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
