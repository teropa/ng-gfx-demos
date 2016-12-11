// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare module 'boids' {

  export interface Flock {
    tick: () => void;
    boids: [number, number, number, number, number, number][]
  }

  export interface BoidConfig {
    boids: number,
    speedLimit: number,
    accelerationLimit: number,
    separationDistance: number,
    alignmentDistance: number,
    cohesionDistance: number,
    separationForce: number,
    alignmentForce: number,
    cohesionForce: number,
    attractors: [number, number, number, number][]
  }

  export default function(cfg: BoidConfig): Flock;

}
