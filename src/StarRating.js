import { useState } from "react";

const style = { display: "flex", alignItems: "center", gap: "16px" };

export default function StarRating({
  maxLength = 5,
  color = "#fcc419",
  size = "48",
  message = [],
  onSetRating,
}) {
  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const textStyle = {
    margin: "0",
    lineHeight: "1",
    color,
    fontSize: `${size / 2}px`,
  };
  return (
    <div style={style}>
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: maxLength }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            colorIn={() => setTempRating(i + 1)}
            colorOut={() => setTempRating(0)}
            color={color}
            size={size}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxLength
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, full, colorIn, colorOut, color, size }) {
  const starStyle = {
    display: "block",
    height: `${size}px`,
    width: `${size}px`,
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={colorIn}
      onMouseLeave={colorOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

// import { useState } from "react";

// export default function StarRating() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   return (
//     <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//       <div>
//         {Array.from({ length: 5 }, (_, i) => (
//           <Star
//             key={i}
//             onRate={() => setRating(i + 1)}
//             onHover={() => setHover(i + 1)}
//             onHoverOut={() => setHover(0)}
//             color={rating >= i + 1}
//           />
//         ))}
//       </div>
//       <p style={{ fontSize: "30px" }}>{hover || rating || ""}</p>
//     </div>
//   );
// }

// function Star({ onRate, key, color, onHover, onHoverOut }) {
//   const starstyle = {
//     height: "40px",
//     width: "40px",
//     cursor: "pointer",
//     display: "inline-block",
//   };

//   return (
//     <span
//       style={starstyle}
//       onClick={onRate}
//       roll="button"
//       onMouseEnter={onHover}
//       onMouseLeave={onHoverOut}
//     >
//       {color ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="gold"
//           stroke="gold"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="#000"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="{2}"
//             d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//           />
//         </svg>
//       )}
//     </span>
//   );
// }
