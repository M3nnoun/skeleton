import React from "react";
import Ping from "./ping";
// import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

async function View({ id }: { id: string }) {
  // const viwesCount = await client.fetch(STARTUP_VIEWS_QUERY, { id });
  const params ={id:id || null};
  const viewsCount = await sanityFetch(STARTUP_VIEWS_QUERY, params);
  console.log(viewsCount);
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">{viewsCount?.views} viwes</span>
      </p>
    </div>
  );
}

export default View;
