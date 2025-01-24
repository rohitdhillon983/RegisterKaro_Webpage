import React from 'react';
import OracleLogo from '../assets/New folder/busness/Vector.png'; 
import MorpheusLogo from '../assets/New folder/busness/Group.png';
import SamsungLogo from '../assets/New folder/busness/Group (1).png';
import MondayComLogo from '../assets/New folder/busness/Group (3).png';
import SegmentLogo from '../assets/New folder/busness/Group (4).png';

const TrustedBySection = () => {
  const logos = [
    { src: OracleLogo, alt: 'Oracle' },
    { src: MorpheusLogo, alt: 'Morpheus' },
    { src: MorpheusLogo, alt: 'Morpheus' }, 
    { src: SamsungLogo, alt: 'Samsung' },
    { src: MondayComLogo, alt: 'monday.com' },
    { src: SegmentLogo, alt: 'Segment' },
  ];

  return (
    <section className="h-[236px] flex items-center">
      <div className="container mx-auto text-center flex flex-col gap-[39px]">
        <p className=" text-[#272D37] font-bold text-[22px] mb-4">Trusted By Over 100+ Startups and freelance business</p>
        <div className="flex flex-wrap justify-center gap-4">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-[17.83px] mr-[49.56px]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;