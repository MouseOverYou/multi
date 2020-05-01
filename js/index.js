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

    let iphoneMat = new BABYLON.PBRMaterial("iphoneMat", scene);
    iphoneMat.albedoColor = new BABYLON.Color3.FromHexString("#c06c84")
    iphoneMat.metallic = 1
    iphoneMat.roughness = 0.2
    iphoneMat.alpha = 0.3

    let desktopMat = new BABYLON.PBRMaterial("desktopMat", scene);
    desktopMat.albedoColor = new BABYLON.Color3.FromHexString("#f67280")
    desktopMat.metallic = 1
    desktopMat.roughness = 0.2
    desktopMat.alpha = 0.3

    //stage constructor

    var floor1 = new Stage("floor1", 100, "#423e6e", discMat, iphoneMat, desktopMat);
    var floor2 = new Stage("floor2", 50, "#ffbf00", discMat, iphoneMat, desktopMat);
    var floor3 = new Stage("floor3", 0, "#2bdfbb", discMat, iphoneMat, desktopMat);
    var floor4 = new Stage("floor4", -50, "#e24161", discMat, iphoneMat, desktopMat);
    var floor5 = new Stage("floor5", -100, "#b441e2", discMat, iphoneMat, desktopMat);


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




