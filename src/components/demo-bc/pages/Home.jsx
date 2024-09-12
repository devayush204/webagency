
import React from "react";
import Layout from "../Layout";
import Hero from "../Hero";
import MarketTrend from "../MarketTrend";
import Features from "../Features";
import CallToAction from "../CallToAction";
import MarketUpdate from "../MarketUpdate";
import GetStarted from "../GetStarted";
import LearnCrypto from "../LearnCrypto";
import IBANSection from "../IBANSection";
import Progress from "../Progress";
import PolygonLayerSolution from "../PolygonLayer";
import TeamMembers from "../TeamMembers";
import OurApproach from "../OurApproach";
import LetsConnect from "../LetsConnect";
import EventList from "../Events";

function Home() {
  return (
    <Layout>
      <Hero />
      {/* <MarketTrend /> */}
      <Features />
      <OurApproach/>
      <CallToAction />
      <IBANSection/>
      <MarketUpdate />
      <Progress/>
      <PolygonLayerSolution/>
      <TeamMembers/>
      <EventList/>
      <GetStarted />
      <LearnCrypto />
      <LetsConnect/>
    </Layout>
  );
}

export default Home;
