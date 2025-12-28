'use client';

import Script from 'next/script';

export default function ScriptsLoader() {
  return (
    <>
      {/* Web Font Loader */}
      <Script id="webfont-config" strategy="beforeInteractive">
        {`
          WebFontConfig = {
            google: {
              families: [
                'Open+Sans:300,400,600,700,800',
                'Poppins:300,400,500,600,700,800',
                'Oswald:300,400,500,600,700,800'
              ]
            }
          };
          (function(d) {
            var wf = d.createElement('script'), s = d.scripts[0];
            wf.src = '/assets/js/webfont.js';
            wf.async = true;
            s.parentNode.insertBefore(wf, s);
          })(document);
        `}
      </Script>

      {/* jQuery */}
      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      
      {/* Bootstrap */}
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      
      {/* Plugins */}
      <Script src="/assets/js/optional/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
      
      {/* Main JS */}
      <Script src="/assets/js/main.updated_new.js" strategy="afterInteractive" />
    </>
  );
}
