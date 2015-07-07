import ShareBar from './index';
import Omniture from '@economist/component-omniture';
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
    <ShareBar {...pageSetting} background="#CCFFDD"></ShareBar>
    <hr/>
    <ShareBar layout="vertical"></ShareBar>
    <hr/>
    <Omniture />
    <h1>Flip version</h1>
    <ShareBar useFX={true} fxDirection="flip-to-top" fxType="cube" background="#333333" fxDefaultStateBackground="#999999"></ShareBar>
    <hr/>
    <ShareBar useFX={true} fxDirection="flip-to-bottom" fxType="cube" background="#333333" fxDefaultStateBackground="#999999"></ShareBar>
  </div>
);