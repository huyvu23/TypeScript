import React from "react";
import Collections from "./Collections";
import Ipad from "./Ipad";
import Mobile from "./Mobile";
import Unicef from "./Unicef";

function Body() {
  return (
    <section className="w-full">
      <Unicef />
      <Mobile />
      <Ipad />
      <Collections />
    </section>
  );
}

export default Body;
