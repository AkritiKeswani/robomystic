// import React, { useState, useEffect } from "react";
// function App() {
//   const [data, setData] = useState([{}]);

//   useEffect(() => {
//     fetch("/members")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//   <div>
//     {(typeof data.members === 'undefined')? (
//       <p>Loading ...</p>
//     ) : (
//       data.members.map((members, i)) => (
//         <p key= {i}>{member}</p>
//       )
//     )
//     )
//     }

//   </div>)
// }

// export default App;

import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({ members: [] });

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      {data.members.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}

export default App;
