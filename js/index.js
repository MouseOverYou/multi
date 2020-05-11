//GLOBAL MESHES TO ACCESS
let floor1, floor2, floor3, floor4, floor5

//GLOBAL MESHES TO ANIMATE
var disc1, disc2, disc3, disc4, disc5

var HemiLight


var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non//-mesh)
    var camera = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 0, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    camera.lowerRadiusLimit = 4;
    camera.upperRadiusLimit = 20;

    var camera1 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 100, -4.3), scene);
    var camera2 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(-1, 50, -4.3), scene);
    var camera3 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, 0, -4.3), scene);
    var camera4 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, -50, -4.3), scene);
    var camera5 = new BABYLON.FreeCamera("FlyCamera", new BABYLON.Vector3(0, -100, -4.3), scene);

    // This attaches the camera to the canvas
    //camera1.attachControl(document.getElementById("renderCanvas1"), true);

    //var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0.75), scene)
    HemiLight = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, -0.75), scene);
    HemiLight.intensity = 1

    scene.ambientColor = new BABYLON.Color3.Black;

    //scene.createDefaultEnvironment();

    //engine.registerView(document.getElementById("renderCanvas0"));
    engine.registerView(document.getElementById("renderCanvas1"), camera1);
    engine.registerView(document.getElementById("renderCanvas2"), camera2);
    engine.registerView(document.getElementById("renderCanvas3"), camera3);
    engine.registerView(document.getElementById("renderCanvas4"), camera4);
    engine.registerView(document.getElementById("renderCanvas5"), camera5);

    var assetsManager = new BABYLON.AssetsManager(scene)
    LoadAssets(scene, assetsManager)

    //StagesMats
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

    floor1 = new Stage("floor1", 100, "#423e6e", discMat, iphoneMat, desktopMat, false);
    floor2 = new Stage("floor2", 50, "#ffbf00", discMat, iphoneMat, desktopMat, false);
    floor3 = new Stage("floor3", 0, "#2bdfbb", discMat, iphoneMat, desktopMat, false);
    floor4 = new Stage("floor4", -50, "#e24161", discMat, iphoneMat, desktopMat, false);
    floor5 = new Stage("floor5", -100, "#b441e2", discMat, iphoneMat, desktopMat, false);


    // Some animations
    var alpha = 0;
    scene.registerBeforeRender(() => {
        //camera1.radius = 10 + Math.cos(alpha) * 5;
        //camera2.alpha += 0.01;
        //camera3.beta = Math.cos(alpha);


        alpha += 0.01;
    })

    scene.onPointerMove = (evt) => {
        //console.log("moving")
        //console.log(scene.pointerX)

        pointerlight1.position.x = RangeMapper2(scene.pointerX, 0, canvas.width, -5, 5)
        pointerlight1.position.y = RangeMapper2(scene.pointerY, canvas.height, 0, -2.5, 2.5)


    };

    //scene.debugLayer.show()

    return scene;

};

function Set3DScenes(){    
    
    CreateCustomMaterial()
    EditImportedMaterials()
    
    CreateWorld1()

    BufferMachineAnimation()
}

// Create a working document
var canvas = document.createElement("canvas");

var engine = new BABYLON.Engine(canvas, true);

// Set the default canvas to use for events
engine.inputElement = document.getElementById("renderCanvas1");
var scene = createScene();
//scene.debuglayer.show();
engine.runRenderLoop(function () {
    //wallMat.bumpTexture.uOffset += 0.00005
    //wallMat.albedoTexture.uOffset += 0.00005

    if (scene.activeCamera) {
        scene.render();

    }
});



