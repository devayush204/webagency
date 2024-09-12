/**
 * This code was generated by Builder.io.
 */
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

function Home() {
  return (
    <Layout>
      <Hero />
      {/* <MarketTrend /> */}
      <Features />
      <CallToAction />
      <IBANSection/>
      <MarketUpdate />
      <Progress/>
      <PolygonLayerSolution/>
      <TeamMembers/>
      <GetStarted />
      <LearnCrypto />
    </Layout>
  );
}

export default Home;
