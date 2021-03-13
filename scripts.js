// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    const rocket = document.getElementById("rocket");

    takeoffButton.onclick = () => {
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    }
    
    landingButton.onclick = () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;

    }

    missionAbortButton.onclick = () => {
        if(window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    }

    const moveRocket(direction) => {
        let movementUp = 0;
        let movementDown = 0;
        let movementRight = 0;
        let movementLeft = 0;
        
        switch (direction) {
            case up:
                rocket.style.marginTop = Number(rocket.style.marginTop) - 10;
        }
    }

    upButton.onclick = () => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10;

    }
}

window.addEventListener("load", init);