import React from "react";

const Ninja = ({ninjas, deleteNinja}) => {
  
    console.log({ninjas});
    // const ninjaList = ninjas.map(ninja => {
      // conditional Rendering using the if statement
      // if (ninja.age > 20) {
      //   return (
      //     <div className="ninja" key={ninja.id}>
      //       <div>Name: {ninja.name}</div>
      //       <div>Age: {ninja.age}</div>
      //       <div>Belt: {ninja.belt}</div>
      //     </div>
      //   );
      // } else {
      //   return null;
      // }
      
    // });
    // conditional rendering using the ternary operator
    const ninjaList = ninjas.map(ninja => {
      return ninja.age > 20 ? (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        </div>
      ) : null;
    
    })
    return (
      <div className="ninja-list">
        { ninjaList }
      </div>
    );
}

export default Ninja;