let hdrTexture, Machine_P
let MachineParts = []
function LoadAssets(scene, assetsManager) {

    //ENV TASK
    var envTask = assetsManager.addCubeTextureTask("envTask", "./assets/environment.dds");

    envTask.onSuccess = function (task) {
        //alert('HDR LOADED');
        hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/environment.dds", scene);
        hdrTexture.rotationY = 140*(Math.PI/180);

        // Create Skybox
        var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
        hdrSkybox.visibility = 0
        var hdrSkyboxMaterial = new BABYLON.PBRMaterial("hdrSkyBox", scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.disableLighting = true;
        hdrSkybox.material = hdrSkyboxMaterial;
        hdrSkybox.infiniteDistance = false;

    }
    envTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    Machine_P = new BABYLON.TransformNode("Machine_P");
    MachineLoaderTask = assetsManager.addMeshTask("", "", "./assets/machine example.glb")

    MachineLoaderTask.onSuccess = function (task) {
        
        task.loadedMeshes[0].position.x = 0
        task.loadedMeshes[0].position.y = 0
        task.loadedMeshes[0].position.z = 0
        task.loadedMeshes[0].parent = Machine_P
        task.loadedMeshes[0].scaling =new BABYLON.Vector3(0.005, 0.005, 0.005)
        Machine_P.position.x = 0
        Machine_P.position.y = 0
        Machine_P.rotation.y = Math.PI*-0.75
        Machine_P.parent = floor2.stage_P

        task.loadedMeshes[0].getChildTransformNodes().forEach(elem => {
            if ((elem.name.startsWith("0",0)) || (elem.name.startsWith("1",0)) ||(elem.name.startsWith("2",0)) || (elem.name.startsWith("3",0)) ||
                (elem.name.startsWith("4",0)) || (elem.name.startsWith("5",0)) ||(elem.name.startsWith("6",0)) || (elem.name.startsWith("7",0))){
                        MachineParts.push(elem);
                }
        });
        

    }

    MachineLoaderTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    assetsManager.onFinish = function (task) {
        Set3DScenes()
        console.log(MachineParts)

                /*
        AddShadows()
        sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.15 }, scene);
        sphere.position = new BABYLON.Vector3(0.005,2.29,0)
        sphere.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3)
        pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);
        sphere.material = pbr;
        sphere.isVisible = true
        pbr.baseColor = new BABYLON.Color3(1.0, 1, 1);
        pbr.emissiveColor = new BABYLON.Color3(1.0, 1, 1);
        */


    }
    //Asset Manager check
    assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
        engine.loadingUIText = 'We are loading the scene. ' + remainingCount + ' out of ' + totalCount + ' items still need to be loaded.';
    };

    assetsManager.load();
}