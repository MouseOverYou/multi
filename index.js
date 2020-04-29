//GLOBAL MESHES TO ANIMATE
var disc1, disc2, disc3, disc4, disc5

var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 0, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    camera.lowerRadiusLimit = 4;
    camera.upperRadiusLimit = 20;

    var camera1 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 100, -4.3), scene);

    var camera2 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 50, -4.3), scene);

    var camera3 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 0, -4.3), scene);

    var camera4 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, -50, -4.3), scene);

    var camera5 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, -100, -4.3), scene);

    // This attaches the camera to the canvas
    camera1.attachControl(document.getElementById("renderCanvas1"), true);

    //var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0.75), scene)
    var HemiLight = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, -0.75), scene);
    HemiLight.intensity = 1

    scene.createDefaultEnvironment();

    //engine.registerView(document.getElementById("renderCanvas0"));
    engine.registerView(document.getElementById("renderCanvas1"), camera1);
    engine.registerView(document.getElementById("renderCanvas2"), camera2);
    engine.registerView(document.getElementById("renderCanvas3"), camera3);
    engine.registerView(document.getElementById("renderCanvas4"), camera4);
    engine.registerView(document.getElementById("renderCanvas5"), camera5);

    //let stages = [homeStage, arStage, vrStage, experiencesStage, contactStage]
    let discMat = new BABYLON.PBRMaterial("discMat", scene);
    discMat.metallic = 1
    discMat.roughness = 0.2

    //stage constructor
    class Stage {
        constructor(name, posY, colorValue){
        //parent
        this.stage_P = new BABYLON.TransformNode("stage_P " + name, scene);
        //pos_P
        this.stage_P.position =  new BABYLON.Vector3(0, posY,0);
        //meshes
        //this.bgMesh = new BABYLON.MeshBuilder.CreateBox("bgMesh " + name, { width: 12, height: 2, depth: 4 }, scene);
        this.Back = new BABYLON.MeshBuilder.CreateBox("Back " + name, { width: 15, height: 6, depth: 0.1 }, scene);
        this.Back.position = new BABYLON.Vector3(0, 1.5, 3);

        this.Floor = new BABYLON.MeshBuilder.CreateBox("Floor " + name, { width: 15, height: 0.1, depth: 6 }, scene);
        this.Floor.position = new BABYLON.Vector3(0, -1.5, 1.5);
        //color
        this.mat = new BABYLON.StandardMaterial("bgMat " + name, scene);
        this.mat.diffuseColor = new BABYLON.Color3.FromHexString(colorValue);

        this.Back.material = this.mat
        this.Floor.material = this.mat
        //this.mainMesh = new BABYLON.MeshBuilder.CreateBox("mainMesh "+ name, { width: 6, height: 2, depth: 4 }, scene);
        this.discMesh = new BABYLON.MeshBuilder.CreateSphere("discMesh " + name, { diameter: 2, tessellation: 48, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene)
        this.discMesh.material = discMat;
        this.discMesh.position = new BABYLON.Vector3(-0, -0.25, 1.5);

        //light
        //this.light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 2, 0), scene);
        //feed parent
        this.discMesh.parent = this.stage_P;
        //this.mainMesh.setParent(this.stage_P);
        this.Floor.parent = this.stage_P;
        this.Back.parent = this.stage_P;
        //this.light.parent = this.stage_P;

        }
}
    var floor1 = new Stage("floor1", 100, "#423e6e");
    var floor2 = new Stage("floor2", 50, "#ffbf00");
    var floor3 = new Stage("floor3", 0, "#2bdfbb");
    var floor4 = new Stage("floor4", -50, "#e24161");
    var floor5 = new Stage("floor5", -100, "#b441e2");

    /*
    var floor2 = BABYLON.MeshBuilder.CreateBox("floor2", { width: 12, height: 2, depth: 4 }, scene);
    floor2.position.y = -2;
    var matF2 = new BABYLON.StandardMaterial("matF2", scene);
    matF2.emissiveColor = new BABYLON.Color3.FromHexString('#e24161')
    floor2.material = matF2;
*/

    // Some animations
    var alpha = 0;
    scene.registerBeforeRender(() => {
        //camera1.radius = 10 + Math.cos(alpha) * 5;
        //camera2.alpha += 0.01;
        //camera3.beta = Math.cos(alpha);

        alpha += 0.01;
    })
    
    return scene;

};




