var machineAnim = gsap.timeline({paused:true});

function BufferMachineAnimation(){
    //get child transform nodes to animate

    machineAnim.fromTo(Machine_P.rotation, {y: 200* (Math.PI / 180)}, {y: 300* (Math.PI / 180), ease: "power1.in", duration: 8})
    //machineAnim.fromTo(Machine_P.position, {y: 1, z: -1}, {y:0, z: 0, ease: "power1.in", duration: 8}, "<")
    machineAnim.fromTo(Machine_P.scaling, {x: 3, y: 3, z: 3}, {x: 1, y: 1, z: 1, ease: "power1.in", duration: 8}, "<")

    machineAnim.fromTo(MachineParts[0].position, {z: 0}, {z:-200, duration: 2}, ">1")
    machineAnim.fromTo(MachineParts[6].position, {z: 0}, {z:200, duration: 2}, "<")

    machineAnim.fromTo(MachineParts[1].position, {z: 0}, {z:-100, duration: 2}, "<")
    machineAnim.fromTo(MachineParts[5].position, {z: 0}, {z:100, duration: 2}, "<")

    machineAnim.fromTo(MachineParts[2].position, {z: 0}, {z:-50, duration: 2}, "<")
    machineAnim.fromTo(MachineParts[4].position, {z: 0}, {z:50, duration: 2}, "<")

    machineAnim.fromTo(MachineParts[7].scaling, {x:1, y:1, z: 1}, {x:2, y:2, z:2, duration: 2}, "<")
    
}