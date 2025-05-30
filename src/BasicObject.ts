import Force from "./Force";

export default interface BasicObject<F extends Force> {
    applyForce(force: F): any
}