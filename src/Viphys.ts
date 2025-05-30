import BasicObject from "./BasicObject"
import Force from "./Force"
import ForceSolver from "./ForceSolver"

export default class Viphys<O extends BasicObject<F>, F extends Force> {
    protected objects: Set<O> = new Set
    protected solvers: Set<ForceSolver<O, F>> = new Set

    constructor() {}

    addSolver(solver: ForceSolver<O, F>) {
        this.solvers.add(solver)
    }

    update() {
        for(const object of this.objects) {
            let summaryForce: F | undefined
            for(const solver of this.solvers) {
                const force = solver.solve(object)
                if(!summaryForce) summaryForce = force
                else summaryForce.add(force)
            }
            if(summaryForce) object.applyForce(summaryForce)
        }
    }
}