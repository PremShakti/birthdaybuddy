// import React from 'react';
// import { Box } from '@chakra-ui/react';
// import { useParams } from 'react-router-dom';

// const BirthdayEffect = () => {
//   let { name } = useParams();

//   return (
//     <Box
//       textAlign="center"
//       py="10"
//       bgGradient="linear(to-l, #7928CA, #FF0080)"
//       bgClip="text"
//       fontSize="6xl"
//       fontWeight="extrabold"
//       position="relative"
//     >
//       Happy Birthday, {name}!
//       <Box
//         position="absolute"
//         top="50%"
//         left="50%"
//         transform="translate(-50%, -50%)"
//         zIndex="-1"
//         pointerEvents="none"
//         textAlign="center"
//       >
//         {[...Array(8)].map((_, index) => (
//           <Box
//             key={index}
//             as="span"
//             display="block"
//             w="40px"
//             h="8px"
//             bg="white"
//             borderRadius="lg"
//             transform={`rotate(${index * 45}deg)`}
//             position="absolute"
//             top="50%"
//             left="50%"
//             transformOrigin="0 0"
//             animation={`float 1.5s ${index * 0.1}s infinite ease-out`}
//           ></Box>
//         ))}
//       </Box>
//       <style>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translate(-50%, -50%) translateY(0);
//           }
//           50% {
//             transform: translate(-50%, -50%) translateY(-20px);
//           }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default BirthdayEffect;



import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

const BirthdayEffect = () => {
    let { name } = useParams();
  return (
    <div className="birthday-message">
        <h1>
        <span className="happy-birthday">Happy Birthday {name} !</span>
      </h1>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
    </div>
  );
};

export default BirthdayEffect;

