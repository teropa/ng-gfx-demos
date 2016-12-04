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
