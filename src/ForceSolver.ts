import BasicObject from "./BasicObject";
import Force from "./Force";

export default interface VForceSolver<P extends BasicObject<F>, F extends Force> {
    solve(target: P): F
};