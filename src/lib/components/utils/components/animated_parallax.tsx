"use server";
const { tsParticles } = require("tsparticles-engine");
const { loadParallaxMover } = require("tsparticles-move-parallax");

export default async function Background() {
  return await loadParallaxMover(tsParticles);
}
