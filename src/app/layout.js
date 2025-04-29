// app/layout.js or app/layout.tsx (depending on TypeScript)

import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Learts – Handmade Shop eCommerce HTML Template",
  description: "",
  robots: "noindex, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.webp" />

        {/* Vendor CSS */}
        <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/vendor/fontawesome.min.css" />
        <link rel="stylesheet" href="/css/vendor/themify-icons.css" />
        <link rel="stylesheet" href="/css/vendor/customFonts.css" />

        {/* Plugins CSS */}
        <link rel="stylesheet" href="/css/plugins/select2.min.css" />
        <link rel="stylesheet" href="/css/plugins/perfect-scrollbar.css" />
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/css/plugins/ion.rangeSlider.min.css" />
        <link rel="stylesheet" href="/css/plugins/photoswipe.css" />
        <link rel="stylesheet" href="/css/plugins/photoswipe-default-skin.css" />
        <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/css/plugins/slick.css" />

        {/* Main CSS */}
        <link rel="stylesheet" href="/css/style.min.css" />

        {/* JS files can also be added via next/script if needed */}
      </head>
      <body>
        {children}
        {/* Vendor JS */}
        <Script src="/js/vendor/modernizr-3.6.0.min.js" />
        <Script src="/js/vendor/jquery-3.4.1.min.js" />
        <Script src="/js/vendor/jquery-migrate-3.1.0.min.js" />
        <Script src="/js/vendor/bootstrap.bundle.min.js" />

        {/* Plugin JS */}
        <Script src="/js/plugins/select2.min.js" />
        <Script src="/js/plugins/jquery.nice-select.min.js" />
        <Script src="/js/plugins/perfect-scrollbar.min.js" />
        <Script src="/js/plugins/swiper.min.js" />
        <Script src="/js/plugins/slick.min.js" />
        <Script src="/js/plugins/mo.min.js" />
        <Script src="/js/plugins/jquery.ajaxchimp.min.js" />
        <Script src="/js/plugins/jquery.countdown.min.js" />
        <Script src="/js/plugins/imagesloaded.pkgd.min.js" />
        <Script src="/js/plugins/isotope.pkgd.min.js" />
        <Script src="/js/plugins/jquery.matchHeight-min.js" />
        <Script src="/js/plugins/ion.rangeSlider.min.js" />
        <Script src="/js/plugins/photoswipe.min.js" />
        <Script src="/js/plugins/photoswipe-ui-default.min.js" />
        <Script src="/js/plugins/jquery.zoom.min.js" />
        <Script src="/js/plugins/ResizeSensor.js" />
        <Script src="/js/plugins/jquery.sticky-sidebar.min.js" />
        <Script src="/js/plugins/product360.js" />
        <Script src="/js/plugins/jquery.magnific-popup.min.js" />
        <Script src="/js/plugins/jquery.scrollUp.min.js" />
        <Script src="/js/plugins/scrollax.min.js" />

        {/* Main Activation JS */}
        <Script src="/js/main.js" />

      </body>
    </html>
  );
}
