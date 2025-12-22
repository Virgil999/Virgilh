import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

// Explicit SVG component for Lonely Planet as requested
const LonelyPlanetLogo = () => (
  <svg width="167" height="24" viewBox="0 0 167 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-auto">
    <path d="M51.7793 12.223C51.7793 14.0183 52.72 14.7877 53.9727 14.7877C55.2258 14.7877 56.1648 14.0183 56.1648 12.223V5.24302H60.0333V17.1759C60.0333 21.3053 57.24 23.7677 52.985 23.7677C51.1579 23.7676 48.6519 23.2031 47.0856 20.9463L49.6697 18.74C50.0455 19.287 50.5572 19.7315 51.1552 20.0321C51.753 20.3325 52.4183 20.4796 53.0894 20.4589C54.7341 20.4589 56.1958 19.4587 56.1958 17.4067V16.7465C55.9128 17.65 54.5203 18.1223 53.5743 18.1223C50.6043 18.1223 47.916 15.9935 47.916 12.4538V5.24302H51.7793V12.223Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M77.6798 0.882004C79.15 0.882034 80.6064 1.16732 81.9647 1.72017C83.3227 2.27295 84.5565 3.08319 85.5959 4.10441C86.6356 5.12599 87.4613 6.33894 88.024 7.67369C88.5866 9.00842 88.8763 10.4391 88.8763 11.8838C88.8763 14.0597 88.2188 16.1868 86.9885 17.996C85.7584 19.8049 84.0103 21.2149 81.9647 22.0475C79.9189 22.8802 77.6672 23.0986 75.4954 22.6742C73.3236 22.2497 71.3282 21.2018 69.7624 19.6633C68.1966 18.1247 67.1306 16.1636 66.6986 14.0295C66.2667 11.8956 66.4882 9.68377 67.3356 7.67369C68.183 5.6635 69.6182 3.9451 71.4593 2.73627C73.3005 1.52751 75.4655 0.882004 77.6798 0.882004ZM79.8281 1.99611C77.3012 1.47454 74.667 1.90713 72.4497 3.20694C70.2322 4.50684 68.5935 6.57943 67.8604 9.01217C67.6753 9.56174 67.5631 10.1327 67.5264 10.7104C67.5258 10.7305 67.5326 10.7505 67.5458 10.7659C67.559 10.7813 67.5783 10.7915 67.5986 10.7942C67.619 10.7969 67.6397 10.7914 67.6567 10.78C67.6735 10.7687 67.6854 10.7518 67.6902 10.7323C67.9257 9.80177 68.4876 8.98243 69.2763 8.41772C69.624 8.17706 70.0216 8.01465 70.4407 7.94319C70.4578 7.93998 72.9382 7.48045 74.0615 9.67625C74.0699 9.69039 74.5277 10.4732 74.2781 12.6098L74.1389 14.927C74.1383 14.9354 74.1394 14.945 74.1428 14.9528C74.1461 14.9604 74.1518 14.9668 74.1582 14.9721C74.1647 14.9774 74.172 14.9818 74.1802 14.9837C74.1885 14.9857 74.1976 14.9857 74.2059 14.9837C74.7768 14.8471 78.5857 14.0679 79.8603 17.261C80.4051 18.6261 79.672 19.7441 78.7269 20.4331C77.7342 21.1567 76.4459 21.4871 75.7868 21.6168C75.7681 21.6207 75.7512 21.6306 75.7391 21.6452C75.7269 21.66 75.7197 21.679 75.7198 21.6981C75.72 21.7169 75.727 21.7351 75.7391 21.7496C75.7515 21.7644 75.7691 21.7744 75.7881 21.778C76.5686 21.9228 77.3634 21.9796 78.1569 21.9457C80.0024 21.8661 81.792 21.2982 83.3367 20.3029C84.8816 19.3073 86.1247 17.9203 86.9344 16.2887C87.7441 14.6571 88.0907 12.8405 87.9376 11.0315C87.7845 9.22273 87.1379 7.48794 86.0653 6.01026C86.0526 5.99288 86.0343 5.97979 86.0137 5.97287C85.993 5.96597 85.9702 5.96534 85.9492 5.97158C85.9283 5.97782 85.9097 5.99067 85.8964 6.00768C85.8831 6.02467 85.8752 6.04562 85.8744 6.067C85.7235 9.54162 82.97 10.1581 82.3851 10.2501C82.3712 10.2523 82.3571 10.2569 82.3451 10.2643C82.3332 10.2717 82.3235 10.2825 82.3155 10.2939C82.3075 10.3053 82.3015 10.3178 82.2987 10.3313C82.2959 10.3449 82.2958 10.359 82.2987 10.3726L82.5527 11.5847C82.8883 13.6111 80.8132 13.7059 80.8132 13.7059C80.269 13.7801 79.7166 13.6405 79.2762 13.3177C78.7214 12.922 78.3417 12.3329 78.2136 11.6711L77.2749 7.01993C77.1772 6.55023 77.14 6.06988 77.1666 5.59118C77.2767 3.80551 78.204 3.07953 78.2227 3.06509C78.6766 2.6469 79.2317 2.3477 79.8345 2.19598C79.857 2.18997 79.8773 2.17697 79.8913 2.15859C79.9052 2.14008 79.9126 2.11715 79.9119 2.09411C79.9111 2.07106 79.9025 2.04859 79.8874 2.03093C79.8722 2.01326 79.8511 2.00075 79.8281 1.99611Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M102.052 4.43968C106.517 4.43968 109.063 7.50177 109.063 11.4635C109.063 15.425 106.384 18.4859 102.902 18.486C100.991 18.486 99.8479 17.6371 99.0361 16.428V22.4988H95.187V11.4635C95.187 5.9336 99.4316 4.4397 102.052 4.43968ZM102.046 7.81038C100.24 7.81066 98.9833 9.12269 98.9833 11.4893C98.9834 13.8556 100.24 15.1421 102.046 15.1424C103.852 15.1424 105.109 13.8558 105.11 11.4893C105.11 9.12244 103.852 7.81038 102.046 7.81038Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M123.47 4.43194C126.091 4.43194 130.335 5.92489 130.336 11.4544V18.1159H126.487V16.4202C125.675 17.6292 124.532 18.4782 122.621 18.4782C119.139 18.4782 116.46 15.4161 116.46 11.4544C116.46 7.49297 119.006 4.43195 123.47 4.43194ZM123.477 7.80135C121.67 7.80135 120.413 9.11367 120.413 11.4802C120.413 13.8471 121.67 15.1333 123.477 15.1333C125.283 15.1331 126.539 13.8468 126.539 11.4802C126.539 9.11389 125.283 7.80159 123.477 7.80135Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.54374 4.44484C9.64195 4.44484 12.6449 7.31723 12.6449 11.4467C12.6448 15.5763 9.64184 18.4486 5.54374 18.4486C1.4718 18.4484 -1.53021 15.5761 -1.53034 11.4467C-1.53034 7.31739 1.47172 4.44506 5.54374 4.44484ZM5.54374 7.80393C3.76893 7.80417 2.43739 9.08732 2.43739 11.4467C2.43749 13.8061 3.769 15.1137 5.54374 15.114C7.34466 15.114 8.70286 13.8064 8.70297 11.4467C8.70297 9.0871 7.34474 7.80393 5.54374 7.80393Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M33.7563 4.44355C37.5933 4.44355 40.2307 7.29152 40.2307 11.4467C40.2307 11.7288 40.2298 12.1138 40.2037 12.3958H30.989C31.2763 14.4217 32.4516 15.2429 34.1483 15.2429C35.4794 15.2429 36.4981 14.8064 37.2288 13.7291L39.8903 15.858C38.5851 17.602 36.4713 18.4486 34.1483 18.4486C29.9456 18.4486 27.0744 15.653 27.0742 11.4467C27.0742 7.31735 29.8148 4.44372 33.7563 4.44355ZM33.7563 7.44545C32.2946 7.44559 31.381 8.21446 31.0677 9.88128H36.3675C36.0279 8.16286 35.0873 7.44545 33.7563 7.44545Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M151.649 4.44355C155.487 4.44355 158.124 7.29152 158.124 11.4467C158.124 11.7288 158.123 12.1138 158.097 12.3958H148.882C149.17 14.4217 150.345 15.2429 152.041 15.2429C153.373 15.2429 154.391 14.8064 155.122 13.7291L157.784 15.858C156.478 17.602 154.364 18.4486 152.041 18.4486C147.839 18.4486 144.968 15.653 144.967 11.4467C144.967 7.31736 147.708 4.44374 151.649 4.44355ZM151.649 7.44545C150.188 7.4456 149.274 8.21447 148.961 9.88128H154.261C153.921 8.16287 152.981 7.44545 151.649 7.44545Z" fill="white"/>
    <path d="M-4.28467 13.8142C-4.28467 14.5322 -3.97082 14.8922 -3.26598 14.8922H-2.32724V18.1236H-4.04998C-6.63393 18.1235 -8.14795 16.61 -8.14795 14.045V0H-4.28467V13.8142Z" fill="white"/>
    <path d="M19.8931 4.44484C23.3388 4.44484 25.9498 6.57364 25.9498 10.1134V18.1159H22.0865V10.3442C22.0865 8.54886 21.146 7.77943 19.8931 7.77943C18.6404 7.77965 17.701 8.54911 17.701 10.3442V18.1159H13.8377V10.1134C13.8377 6.57383 16.4476 4.44506 19.8931 4.44484Z" fill="white"/>
    <path d="M45.3113 13.8065C45.3113 14.5243 45.6242 14.8843 46.3287 14.8845H47.2687V18.1159H45.546C42.9619 18.1159 41.448 16.6023 41.448 14.0373V0H45.3113V13.8065Z" fill="white"/>
    <path d="M114.255 13.8065C114.255 14.5245 114.568 14.8845 115.273 14.8845H116.213V18.1159H114.491C111.906 18.1159 110.391 16.6023 110.391 14.0373V0H114.255V13.8065Z" fill="white"/>
    <path d="M137.91 4.44484C141.356 4.44502 143.965 6.57379 143.965 10.1134V18.1159H140.102V10.3442C140.102 8.54908 139.163 7.77961 137.91 7.77943C136.657 7.77943 135.717 8.54885 135.717 10.3442V18.1159H131.853V10.1134C131.853 6.57364 134.464 4.44484 137.91 4.44484Z" fill="white"/>
    <path d="M163.198 0.764661V5.24302H166.148V8.19335H163.198V13.0379C163.198 14.2686 163.695 14.8842 164.686 14.8845H166.148V18.1159H164.191C161.137 18.1159 159.336 16.2692 159.336 13.1914V0.733714L163.198 0.764661Z" fill="white"/>
  </svg>
);

const logoItems = [
  { id: 'lonelyplanet', component: LonelyPlanetLogo },
  { id: 'disney', src: 'https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/68823e64a57c883cfba0fda7_disney.svg', alt: 'Disney' },
  { id: 'guide', src: 'https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/68823e64898cedf697ae8ba2_guide.svg', alt: 'Guide' },
  { id: 'haribo', src: 'https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/68823e641443e3ab6f9768e8_haribo.svg', alt: 'Haribo' },
  { id: 'elsewhere', src: 'https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/68823e641f51ba714cd1a042_elsewhere.svg', alt: 'Elsewhere' },
  { id: 'amanda', src: 'https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/68823e642b3cca8fc74c52f9_amanda%20hamilton.svg', alt: 'Amanda Hamilton' },
];

export const About: React.FC = () => {
  // Duplicate logos for infinite scroll
  const marqueeLogos = [...logoItems, ...logoItems, ...logoItems, ...logoItems];

  return (
    <section id="about" className="py-24">
      <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-6 md:px-16">
        
        {/* Card Container */}
        <div className="bg-[#171327] w-full rounded-[2.5rem] overflow-hidden relative grid grid-cols-1 lg:grid-cols-12 min-h-[480px] border border-white/5 group">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full order-1 lg:order-none overflow-hidden">
             <motion.div 
               initial={{ opacity: 0, scale: 1.1 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="h-full w-full absolute inset-0"
             >
               <img 
                src="https://cdn.prod.website-files.com/687f8c8ce2bcef9507a7a825/69496fc2c72cee0a4f39cb92_virgil.avif" 
                alt="Virgil Horghidan"
                className="w-full h-full object-contain object-left-bottom filter hover:grayscale-0 transition-all duration-700 mix-blend-normal"
               />
               
               <div className="absolute inset-0 bg-[#171327]/10 mix-blend-multiply pointer-events-none z-10"></div>
               <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#171327] via-[#171327]/90 to-transparent lg:hidden z-10"></div>
             </motion.div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 p-8 md:p-10 lg:p-14 flex flex-col justify-center pb-28 lg:pb-28 relative z-20 order-2 lg:order-none bg-[#171327] lg:bg-transparent">
            <FadeIn direction="left" delay={0.2}>
              <h2 className="font-sans font-bold text-4xl md:text-5xl 2xl:text-6xl text-primary mb-6 leading-[1.1] md:leading-[1.1]">
                Senior craft. <span className="text-accent">Direct access.</span>
              </h2>
              
              <div className="space-y-4 max-w-2xl">
                <p className="font-sans text-white text-lg 2xl:text-xl leading-snug font-medium">
                  I am Virgil Horghidan based in Barcelona.
                </p>
                <p className="font-sans text-secondary text-lg 2xl:text-xl leading-snug">
                  I function as a Fractional Brand Director for scaleups in the €2M–€50M growth corridor.
                </p>
                <p className="font-sans text-tertiary text-base 2xl:text-lg leading-relaxed opacity-80">
                  I've built digital worlds for Red Ventures, Lonely Planet and Elsewhere. Now, I help founders outgrow their early identity without the overhead of a large agency.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Infinite Logo Marquee */}
          <div className="absolute bottom-0 left-0 w-full z-30 py-6 lg:py-8 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#171327] via-[#171327]/80 to-transparent opacity-90 lg:opacity-100"></div>

            <div 
               className="w-full overflow-hidden relative z-10"
               style={{ 
                 maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
               }}
            >
              <div className="flex w-max animate-marquee gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                {marqueeLogos.map((logo, idx) => (
                  <div key={`${logo.id}-${idx}`} className="flex flex-col items-center justify-center shrink-0">
                    {logo.component ? (
                      <logo.component />
                    ) : (
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="h-8 md:h-10 w-auto object-contain brightness-0 invert" 
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
