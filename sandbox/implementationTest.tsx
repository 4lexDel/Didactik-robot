/**
 * Keywords:
 *  - Robot
 *      * Coords
 *      * State
 *      * action
 *  - Programming
 *      * apply changes
 *      *
 * 
 */

class RobotState {}
function setOrigin(x: Number, y: Number) {}
function changeState(robotState: RobotState) {}
function apply() {}

/**------------------------- 1 ------------------------------*/
// All the robot programmation takes place on the function

function main1() {
    setOrigin(0, 0);                // initial state

    changeState(new RobotState());  // action set

    apply();    // action realized (under the hood)

    // ...
}


/**------------------------- 2 Yield system ------------------------------*/
// All the robot programmation takes place on the function

function* main2() {
    setOrigin(0, 0);                // initial state

    yield new RobotState();  // action set and realized

    // ...
}

/**------------------------- 2 Return system ------------------------------*/
// One robot action takes place on the function

function main3(x: Number, y: Number, state: Number, iteration: Number) { // current state
    if (/**condition */true) {
        return new RobotState();    // action set and realized
    }
}
