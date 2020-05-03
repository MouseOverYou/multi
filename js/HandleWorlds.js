//each world should have a lighting
let pointerlight1
let World_1_Meshes = []
function CreateWorld1(){

    floor1.Floor.isVisible = false

    let World1_P = new BABYLON.TransformNode("World1", scene)
    World1_P.parent = floor1.stage_P
    let WallForLight =  new BABYLON.MeshBuilder.CreateBox("WallForLight ", { width: 14, height: 6, depth: 0.1 }, scene);
    WallForLight.position = new BABYLON.Vector3(0, 0, 3);
    WallForLight.parent = World1_P;
    WallForLight.material = wallMat
    World_1_Meshes.push(WallForLight)

    pointerlight1 =  new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, 1), scene);
    pointerlight1.parent = World1_P
    pointerlight1.position = new BABYLON.Vector3(0,10,2.5)
    pointerlight1.intensity = 1
    HemiLight.excludedMeshes = World_1_Meshes
}

function excludefromLight(meshesArray, light){
    meshesArray.array.forEach(mesh => {
    
    });
}