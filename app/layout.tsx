import { getSiteUrl } from "@/lib/constants";
import { SITE_NAME } from "@/lib/site-data";
import WhatsAppFloat from "@components/common/whatsapp-float";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import { getItServices } from "@/lib/apis";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Shipping, Packing & Office Services in Odenton, MD`,
    template: "%s",
  },
  description:
    "Parcel & Office Solutions in Odenton, MD — FedEx, UPS, DHL & USPS shipping, professional packing, printing, notary, mailbox rental and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const itServices = await getItServices();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="LjN0bMBdK17wU_T6Yr3YoXRKmVn4nZrKKLwC551_3hg" />
        <script
          type="text/javascript"
          defer
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5XC2BMMB');
      `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XC2BMMB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header itServices={itServices} />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        {/* <WhatsAppFloat /> */}
      </body>
    </html>
  );
}
