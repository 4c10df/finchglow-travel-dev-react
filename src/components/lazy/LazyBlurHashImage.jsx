// import React, { useState } from "react";
// import { Parallax } from "react-parallax";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Blurhash } from "react-blurhash";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const LazyBlurHashImage = ({
//   src,
//   blurHash,
//   alt,
//   parallaxStrength = 700,
//   className,
//   style,
// }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <Parallax
//       bgImage={src}
//       strength={parallaxStrength}
//       className={`relative flex flex-col justify-center items-center at500:bg-fixed bg-no-repeat bg-cover bg-top ${className}`}
//       style={style}
//     >
//       <div className="relative w-full h-full">
//         {!isLoaded && (
//           <Blurhash
//             hash={blurHash}
//             width="100%"
//             height="100%"
//             resolutionX={32}
//             resolutionY={32}
//             punch={1}
//             className="absolute top-0 left-0 w-full h-full"
//           />
//         )}
//         <LazyLoadImage
//           src={src}
//           alt={alt}
//           effect="blur"
//           afterLoad={() => setIsLoaded(true)}
//           className="absolute top-0 left-0 w-full h-full"
//           style={{ objectFit: "cover" }}
//         />
//       </div>
//     </Parallax>
//   );
// };

// export default LazyBlurHashImage;

import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyBlurHashImage = ({ src, blurHash, alt, className, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`} style={style}>
      {!isLoaded && (
        <Blurhash
          hash={blurHash}
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
      <LazyLoadImage
        className={`relative w-full h-full ${className}`}
        style={style}
        src={src}
        alt={alt}
        effect="blur"
        // className="w-full h-full object-cover"
        afterLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LazyBlurHashImage;


