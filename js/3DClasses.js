class Stage {
    constructor(name, posY, colorValue, discMat, iphoneMat, desktopMat){
    //parent
    this.stage_P = new BABYLON.TransformNode("stage_P " + name, scene);
    //pos_P
    this.stage_P.position =  new BABYLON.Vector3(0, posY,0);
    //meshes
    this.Back = new BABYLON.MeshBuilder.CreateBox("Back " + name, { width: 15, height: 6, depth: 0.1 }, scene);
    this.Back.position = new BABYLON.Vector3(0, 1.5, 3);

    this.Floor = new BABYLON.MeshBuilder.CreateBox("Floor " + name, { width: 15, height: 0.1, depth: 6 }, scene);
    this.Floor.position = new BABYLON.Vector3(0, -1.5, 1.5);

    this.IPhoneRef = new BABYLON.MeshBuilder.CreateBox("IPhoneRef " + name, { width: 2.5, height: 4, depth: 0.1 }, scene);
    this.IPhoneRef.position = new BABYLON.Vector3(0, 0.5, 2.5);
    
    this.DesktopRef = new BABYLON.MeshBuilder.CreateBox("DesktopRef " + name, { width: 10, height: 4, depth: 0.1 }, scene);
    this.DesktopRef.position = new BABYLON.Vector3(0, 0.5, 2.9); 

    //color
    this.mat = new BABYLON.StandardMaterial("bgMat " + name, scene);
    this.mat.diffuseColor = new BABYLON.Color3.FromHexString(colorValue);

    this.Back.material = this.mat
    this.Floor.material = this.mat
    this.discMesh = new BABYLON.MeshBuilder.CreateSphere("discMesh " + name, { diameter: 2, tessellation: 48, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene)
    this.discMesh.material = discMat;
    this.discMesh.position = new BABYLON.Vector3(-0, -0.25, 1.5);
    this.IPhoneRef.material = iphoneMat;
    this.DesktopRef.material = desktopMat;


    //light
    //this.light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 2, 0), scene);
    //feed parent
    this.discMesh.parent = this.stage_P;
    //this.mainMesh.setParent(this.stage_P);
    this.Floor.parent = this.stage_P;
    this.Back.parent = this.stage_P;
    this.IPhoneRef.parent = this.stage_P;
    this.DesktopRef.parent = this.stage_P;
    //this.light.parent = this.stage_P;

    }
}