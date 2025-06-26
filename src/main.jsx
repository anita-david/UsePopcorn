import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
import StarRating from "./StarRating.jsx";

// function Test() {
//   const [rated, setRated] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="purple"
//         setRate={setRated}
//         message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       />
//       <p>You rated this movie {rated} stars</p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating
      defaultRating={2}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating />
    <Test /> */}
    <App/>
  </StrictMode>
);
