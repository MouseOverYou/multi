let wallMat
function CreateCustomMaterial(){
    //World1 Materials
    console.log("hola")
    wallMat = new BABYLON.PBRMaterial("wallMat", scene)
    let wallNRM = new BABYLON.Texture("assets/12034-normal.jpg", scene)
    let wallDIFF = new BABYLON.Texture("assets/12034-diff.jpg", scene)
    wallMat.metallic = 0
    wallMat.roughness = 0.6
    wallMat.albedoTexture = wallDIFF
    wallMat.bumpTexture = wallNRM
    wallNRM.level = -1;
    wallDIFF.level = 2

    wallNRM.uScale = 14*0.2;
    wallNRM.vScale = 6*0.2;
    wallDIFF.uScale = 14*0.2;
    wallDIFF.vScale = 6*0.2;
}

function EditImportedMaterials(){
    scene.getMaterialByName("Metal_Tungsten").reflectionTexture = hdrTexture
    scene.getMaterialByName("Metal_Tungsten").roughness = 0.3
    scene.getMaterialByName("Metal_Gold").reflectionTexture = hdrTexture
    scene.getMaterialByName("Metal_Gold").roughness = 0.3
    scene.getMaterialByName("GlassRed").reflectionTexture = hdrTexture
    scene.getMaterialByName("GlassRed").metallic = 1
    scene.getMaterialByName("GlassRed").alpha = 1
}
