import ShareBar from './index';
import Omniture from './../component-omniture';
import React from 'react';

var pageSetting = {
  s: {
    linkTrackVars: "events,pageName,prop45,eVar52,eVar53",
    pageName: "This is the pageName"
  },
  Omniture: {
    position: "share-bar",
    page: "Name of the page",
    hostpage: "hostpage",
    linkinfo: ["the_world_if","section","article headline"]
  }
}

export default (
  <div>
    <h1>SVG version</h1>
    <ShareBar {...pageSetting}></ShareBar>
    <ShareBar layout="vertical"></ShareBar>
    <h1>IMG version</h1>
    <ShareBar useSvg={false}></ShareBar>
    <ShareBar useSvg={false} layout="vertical"></ShareBar>
    <Omniture />
  </div>
);