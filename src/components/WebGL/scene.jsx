import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";

import tvStand from "../../assests/objects/tvStand.glb"; // GLB FILE
import tv from "../../assests/objects/tv.glb"; // GLB FILE
import diningTable from "../../assests/objects/diningTable.glb"; // GLB FILE
import sofa from "../../assests/objects/sofaLow.glb"; // GLB FILE
import singleSofa from "../../assests/objects/armChair.glb"; // GLB FILE
import table from "../../assests/objects/table.glb"; // GLB FILE
import gamingTable from "../../assests/objects/gamingTable.glb"; // GLB FILE
import chair from "../../assests/objects/chair.glb"; // GLB FILE
import box from "../../assests/objects/box.glb"; // GLB FILE
import home from "../../assests/objects/homeThreeEditor.glb"; // GLB FILE
import flowerPot from "../../assests/objects/flowerPot.glb"; // GLB FILE
import flowerPotDesigned from "../../assests/objects/flowerPotDesigned.glb"; // GLB FILE
import painting1 from "../../assests/objects/painting1.glb"; // GLB FILE
import painting2 from "../../assests/objects/painting2.glb"; // GLB FILE
import cabinetFull from "../../assests/objects/cabinetFull.glb"; // GLB FILE
import sink from "../../assests/objects/sink.glb"; // GLB FILE
import fridge from "../../assests/objects/fridge.glb"; // GLB FILE
import toilet from "../../assests/objects/toilet.glb"; // GLB FILE
import shower from "../../assests/objects/shower.glb"; // GLB FILE
import wallDevider from "../../assests/objects/wallDevider.glb"; // GLB FILE
import wallDevider2 from "../../assests/objects/wallDevider2.glb"; // GLB FILE
import bed from "../../assests/objects/bed.glb"; // GLB FILE

import ceramic from "../../assests/textures/ceramic.jpg";
import concrete from "../../assests/textures/wall.jpg";
import grass from "../../assests/textures/grasslight-big.jpg";

const style = {
  height: 500,
};

class WebGL extends Component {
  state = {
    singleSofaLeft: {
      posX: -10.089,
      posY: 0,
      posZ: 13.729,
      rotY: 6.765,
    },
    singleSofaRight: {
      posX: -2.164,
      posY: 0,
      posZ: 13.702,
      rotY: 5.696,
    },
    table: {
      scalX: 0.1665,
      scalY: 0.1231,
      scalZ: 0.1014,
      posX: -0.28,
      posY: -0.28,
      posZ: -16.75,
      rotY: 3.15,
    },
    gamingTable: {
      scalX: 0.55,
      scalY: 0.7,
      scalZ: 0.6,
      posX: 6.23,
      posY: 7.53,
      posZ: 4.72,
      rotY: 0,
    },
    gamingTable2: {
      scalX: 0.55,
      scalY: 0.7,
      scalZ: 0.6,
      posX: -12.67,
      posY: 8.05,
      posZ: 7.59,
      rotY: 3.24,
    },
    chair: {
      scalX: 0.2,
      scalY: 0.2,
      scalZ: 0.2,
      posX: 5.82,
      posY: 6.37,
      posZ: 6.64,
      rotY: 2.79,
    },
    chair2: {
      scalX: 0.2,
      scalY: 0.2,
      scalZ: 0.2,
      posX: -11.27,
      posY: 6.37,
      posZ: 5.17,
      rotY: -0.57,
    },
    diningTable1: {
      posX: -2.105,
      posY: 0.4,
      posZ: -1.342,
      rotY: 4.753,
    },
    diningTable2: {
      posX: -2.187,
      posY: 0.4,
      posZ: -3.377,
      rotY: 4.753,
    },
    flowerPot1: {
      posX: -3.86,
      posY: 0.8,
      posZ: -7.844,
      scal: 5,
      rotY: 0.739,
    },
    flowerPot2: {
      posX: 1.392,
      posY: 0.8,
      posZ: 17.779,
      scal: 5,
      rotY: 3.51,
    },
    flowerPot3: {
      posX: -12.025,
      posY: 0.8,
      posZ: 17.779,
      scal: 5,
      rotY: 1.936,
    },
    flowerPot4: {
      posX: -5.873,
      posY: 0.8,
      posZ: 8.372,
      scal: 5,
      rotY: 1.499,
    },
    painting1: {
      posX: -6.795,
      posY: 2.892,
      posZ: 8.521,
      scal: 2,
      rotY: 1.577,
    },
    painting2: {
      posX: 0.131,
      posY: 2.056,
      posZ: -8.583,
      scal: 3,
      rotY: 0.015,
    },
    painting3: {
      posX: -10.956,
      posY: 2.191,
      posZ: -3.857,
      scal: 3,
      rotY: 1.6,
    },
    paintingBig1: {
      posX: -4.78,
      posY: 3.271,
      posZ: -2.879,
      scal: 0.06,
      rotY: 0.015,
    },
    cabinetFull: {
      posX: -5.094,
      posY: 0.45,
      posZ: -8.498,
      scal: 25,
      rotY: 4.727,
    },
    sink: {
      posX: -12.52,
      posY: 0.373,
      posZ: 8.35,
      scal: 0.005,
      rotY: 1.614,
    },
    fridge: {
      posX: -5.783,
      posY: 2.459,
      posZ: -0.208,
      scal: 0.5,
      rotY: 3.132,
    },
    flowerPotDesigned1: {
      posX: 4.89,
      posY: 0.373,
      posZ: 4.33,
      scal: 0.018,
      rotY: 2.004,
    },
    flowerPotDesigned2: {
      posX: -10.076,
      posY: 0.37,
      posZ: -7.524,
      scal: 0.009,
      rotY: 5.06,
    },
    toilet: {
      posX: -3.291,
      posY: 6.963,
      posZ: 6.629,
      scal: 0.4,
      rotY: 4.768,
    },
    shower: {
      posX: -6.116,
      posY: 6.143,
      posZ: 8.221,
      scal: 0.058,
      rotY: 1.598,
    },
    wallDevider: {
      posX: -1.733,
      posY: 2.758,
      posZ: 4.64,
      scal: 1,
      rotY: 3.153,
    },
    wallDevider2: {
      posX: 1.131,
      posY: 6.345,
      posZ: -0.389,
      scal: 1,
      rotY: 1.569,
    },
    bed: {
      posX: 4.479,
      posY: 7.42,
      posZ: 1.363,
      scal: 0.01,
      rotY: 3.171,
    },
    bed2: {
      posX: -11.39,
      posY: 7.4,
      posZ: -1.26,
      scal: 0.01,
      rotY: 3.2,
    },
  };

  componentDidMount() {
    this.sceneSetup();

    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color(0xcce0ff);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.camera.position.x = 25.277;
    this.camera.position.y = 4.467;
    this.camera.position.z = 43.15;

    this.camera.rotation.x = 0;
    this.camera.rotation.y = 0.546;
    this.camera.rotation.z = 0;

    this.controls = new OrbitControls(this.camera, this.mount);
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(this.renderer.domElement);
  };

  addCustomSceneObjects = () => {
    const {
      singleSofaLeft,
      singleSofaRight,
      table,
      gamingTable,
      chair,
      diningTable1,
      diningTable2,
      flowerPot1,
      flowerPot2,
      flowerPot3,
      flowerPot4,
      painting1,
      painting2,
      painting3,
      paintingBig1,
      cabinetFull,
      sink,
      fridge,
      flowerPotDesigned1,
      flowerPotDesigned2,
      toilet,
      shower,
      wallDevider,
      wallDevider2,
      bed,
      bed2,
      chair2,
      gamingTable2,
    } = this.state;

    // adding fog
    this.getFog();

    // adding sphere
    const sphereMaterial = this.getMaterial("phong", "rgb(255, 255, 255)");
    const sphere = this.getSphere(sphereMaterial, 1);

    // const sphere2 = this.getSphere(sphereMaterial, 2);

    // sphere2.position.x = 0;
    // sphere2.position.y = 10;
    // sphere2.position.z = 0;

    // this.scene.add(sphere2);

    // adding  plane
    const planeMaterial = this.getMaterial("standard", "rgb(70, 70, 70)");
    var planeTexture = new THREE.TextureLoader().load(grass);
    planeTexture.wrapS = THREE.RepeatWrapping;
    planeTexture.wrapT = THREE.RepeatWrapping;
    planeTexture.repeat.set(80, 80);

    planeMaterial.map = planeTexture;
    const plane = this.getPlane(planeMaterial, 900);
    plane.rotation.x = Math.PI / 2;

    this.scene.add(plane);

    // add big BOX
    // const boxSize = 70;
    // const boxMaterial = {};
    // const box = this.getBox(boxSize, boxSize, boxSize / 2, boxMaterial);
    // box.position.z = -boxSize / 4;
    // plane.add(box);

    //adding objects
    this.getHome();

    // main room
    this.getDiningTable(diningTable1);
    this.getDiningTable(diningTable2);

    // rest room
    this.getTv();
    this.getTvStand();
    this.getSofa();
    this.getSingleSofa(singleSofaLeft);
    this.getSingleSofa(singleSofaRight);

    // this.getBoxObj();

    // global
    this.getFlowerPot(flowerPot1);
    this.getFlowerPot(flowerPot2);
    this.getFlowerPot(flowerPot3);
    this.getFlowerPot(flowerPot4);

    this.getFlowerPotDesigned(flowerPotDesigned1);
    this.getFlowerPotDesigned(flowerPotDesigned2);

    this.getPainting1(painting1);
    this.getPainting1(painting2);
    this.getPainting1(painting3);

    // kitchen
    this.getPainting2(paintingBig1);
    this.getCabinetFull(cabinetFull);
    this.getSink(sink);
    this.getFridge(fridge);

    // toilet / bath
    this.getToilet(toilet);
    this.getShower(shower);
    this.getWallDevider(wallDevider);

    // room left/top
    //this.getTable(table);
    this.getGamingTable(gamingTable);
    this.getChair(chair);

    //room left/bottom
    this.getWallDevider2(wallDevider2);
    this.getBed(bed);

    // room right/bottom
    this.getBed(bed2);

    //room right/top
    this.getChair(chair2);
    this.getGamingTable(gamingTable2);

    // adding spotLight
    // const lightLeft = new THREE.PointLight(0xffffff, 1, 50);
    // lightLeft.castShadow = true;

    // this.scene.add(lightLeft);
    // lightLeft.position.x = -9.6;
    // lightLeft.position.y = 17;
    // lightLeft.position.z = 26.7;

    // lightLeft.intensity = 1;
    // lightLeft.distance = 20;

    // lightLeft.add(sphere);
    // const gui = new GUI();
    // gui.add(lightLeft.position, "x", -30, 60).name("x");
    // gui.add(lightLeft.position, "y", -60, 60).name("y");
    // gui.add(lightLeft.position, "z", -60, 60).name("z");

    // gui.add(lightLeft, "intensity", 0, 30).name("intensity");
    // gui.add(lightLeft, "distance", 0, 150).name("distance");

    // rectAreLight //
    // const rectLight = this.getRectAreaLight();
    // rectLight.rotation.set(5, 1.55, 1.3);
    // rectLight.position.set(34.27, 5, 18);

    // this.scene.add(rectLight);

    // var rectLightMesh = new THREE.Mesh(
    //   new THREE.PlaneBufferGeometry(),
    //   new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: 0xff5cff })
    // );
    // rectLightMesh.scale.x = rectLight.width;
    // rectLightMesh.scale.y = rectLight.height;

    // rectLight.add(rectLightMesh);

    // var rectLightMeshBack = new THREE.Mesh(
    //   new THREE.PlaneBufferGeometry(),
    //   new THREE.MeshBasicMaterial({ color: 0xffffff })
    // );
    // rectLightMesh.add(rectLightMeshBack);

    // the sun //
    // const gui = new GUI();
    // gui.add(lightLeft.position, "x", 0, 15).name("x");
    // gui.add(lightLeft.position, "y", 0, 15).name("y");
    // gui.add(lightLeft.position, "z", 0, 15).name("z");

    // gui.add(lightLeft.rotation, "x", 0, 15).name("x");
    // gui.add(lightLeft.rotation, "y", 0, 15).name("y");
    // gui.add(lightLeft.rotation, "z", 0, 15).name("z");

    // gui.add(lightLeft, "intensity", 0, 30).name("intensity");
    // gui.add(lightLeft, "distance", 0, 150).name("distance");

    // the sun ( helper lights)
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  // fogging
  getFog = () => {
    var enableFog = true;

    if (enableFog) {
      this.scene.fog = new THREE.FogExp2("rgba(204,224 ,255, 0.01)", 0.005);
      // this.scene.fog = new THREE.Fog(0xcce0ff, 500, 10000);
    }

    // const gui = new GUI();

    // gui.add(this.scene.fog, "density", 0, 0.05).step(0.001);
  };

  // object creation
  getPlane = (material, size) => {
    var geometry = new THREE.PlaneGeometry(size, size);
    material.side = THREE.DoubleSide;
    var plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;

    return plane;
  };

  getBox = (w, h, d, materials) => {
    var geometry = new THREE.BoxGeometry(w, h, d);

    var texture = new THREE.TextureLoader().load(concrete);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    texture.flipY = true;

    var material = new THREE.MeshPhongMaterial({
      // flatShading: true,
      wireframe: false,
      color: 0x212121,
      polygonOffset: true,
      polygonOffsetFactor: 1, // positive value pushes polygon further away
      polygonOffsetUnits: 1,
      side: THREE.DoubleSide,
      map: texture,
      bumpMap: texture,
      bumpScale: 0.2,
    });

    var mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    return mesh;
  };

  getBoxObj = (objData) => {
    this.loader = new GLTFLoader();
    // const gui = new GUI();

    var texture = new THREE.TextureLoader().load(concrete);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    this.loader.load(
      box,

      (box) => {
        this.gltf = box.scene;
        this.scene.add(box.scene);

        var newMaterial = new THREE.MeshStandardMaterial({
          // metalness: 0,
          // roughness: 0.5,
          wireframe: false,
          // emissive: new THREE.Color(0x002a49),
          // clipShadows: true,
          // opacity: 0.1,

          color: 0xffffff,
          polygonOffset: true,
          polygonOffsetFactor: 1, // positive value pushes polygon further away
          polygonOffsetUnits: 1,
          side: THREE.DoubleSide,
          map: texture,
          bumpMap: texture,
          bumpScale: 0.45,
        });
        this.gltf.traverse((o) => {
          if (o.isMesh) o.material = newMaterial;
        });

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        box.scene.position.x = 0;
        box.scene.position.y = -14.5;
        box.scene.position.z = 0;

        box.scene.scale.x = 51;
        box.scene.scale.y = 28;
        box.scene.scale.z = 39.5;

        // box.scene.rotation.y = objData.rotY;

        // gui.add(box.scene.scale, "x", 0, 80).name("gaming").step(0.5);
        // gui.add(box.scene.scale, "y", 0, 80).name("gaming").step(0.5);
        // gui.add(box.scene.scale, "z", 0, 80).name("gaming").step(0.5);

        // gui.add(box.scene.position, "y", -15, 5).name("gaming").step(0.5);

        // gui.add(chair.scene.position, "x", -40, 40).name("scal").step(0.01);
        // gui.add(chair.scene.position, "y", -40, 40).name("scal").step(0.01);
        // gui.add(chair.scene.position, "z", -40, 40).name("scal").step(0.01);

        // gui.add(chair.scene.rotation, "y", -6, 6).name("scal").step(0.01);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getHome = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      home,

      (home) => {
        this.gltf = home.scene;
        this.scene.add(home.scene);

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        home.scene.position.x = 0;
        home.scene.position.y = 0;
        home.scene.position.z = 0;

        home.scene.scale.x = 2;
        home.scene.scale.y = 2;
        home.scene.scale.z = 2;

        home.scene.rotation.y = 0.8;

        // const gui = new GUI();

        // gui
        //   .add(home.scene.position, "x", 0, 6)
        //   .name("home_position_x")
        //   .step(0.5);
        // gui
        //   .add(home.scene.position, "y", 0, 6)
        //   .name("home_position_y")
        //   .step(0.5);
        // gui
        //   .add(home.scene.position, "z", 0, 6)
        //   .name("home_position_z")
        //   .step(0.5);

        // gui.add(home.scene.rotation, "y", 0, 6).name("gaming").step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getSphere = (material, size, segments) => {
    var geometry = new THREE.SphereGeometry(size, segments, segments);
    var obj = new THREE.Mesh(geometry, material);
    obj.castShadow = true;

    return obj;
  };

  // material creation
  getMaterial = (type, color) => {
    var selectedMaterial;
    var materialOptions = {
      color: color === undefined ? "rgb(255, 255, 255)" : color,
    };

    switch (type) {
      case "basic":
        selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
        break;
      case "lambert":
        selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
        break;
      case "phong":
        selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
        break;
      case "standard":
        selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
        break;
      default:
        selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
        break;
    }

    return selectedMaterial;
  };

  // lighting
  getSpotLight = (intensity, color) => {
    color = color === undefined ? "rgb(255, 255, 255)" : color;
    var light = new THREE.SpotLight(color, intensity);
    light.castShadow = true;
    light.penumbra = 0.5;

    light.shadow.mapSize.width = 2024;
    light.shadow.mapSize.height = 2024;
    light.shadow.bias = 0.001;

    return light;
  };

  getRectAreaLight = () => {
    const width = 10;
    const height = 30;
    const intensity = 10;
    const rectLight = new THREE.RectAreaLight(
      0xff5cff,
      intensity,
      width,
      height
    );

    // rectLight.position.z = 26;
    // rectLight.rotation.x = 0.8;

    // const gui = new GUI();
    // gui.add(rectLight.position, "x", -16, 60).name("ScaleX").step(0.01);
    // gui.add(rectLight.position, "y", -16, 60).name("ScaleX").step(0.01);
    // gui.add(rectLight.position, "z", -16, 60).name("ScaleX").step(0.01);

    // gui.add(rectLight.rotation, "x", 0, 6).name("ScaleX").step(0.01);
    // gui.add(rectLight.rotation, "y", 0, 6).name("rotY").step(0.01);
    // gui.add(rectLight.rotation, "z", 0, 6).name("ScaleX").step(0.01);

    rectLight.lookAt(0, 0, 0);

    return rectLight;
  };

  // objects
  getTv = () => {
    this.loader = new GLTFLoader();

    this.loader.load(
      tv,

      (tv) => {
        this.gltf = tv.scene;
        this.scene.add(tv.scene);

        tv.scene.position.x = -6.198;
        tv.scene.position.y = 1.107;
        tv.scene.position.z = 17.542;

        tv.scene.scale.x = 3.2;
        tv.scene.scale.y = 2.5;
        tv.scene.scale.z = 3.2;

        tv.scene.rotation.y = 3.174;

        // const gui = new GUI();

        // gui.add(tv.scene.position, "x", -20, 20).name("tv_Pos_X").step(0.001);
        // gui.add(tv.scene.position, "y", -20, 20).name("tv_Pos_y").step(0.001);
        // gui.add(tv.scene.position, "z", -20, 20).name("tv_Pos_z").step(0.001);

        // gui.add(tv.scene.scale, "x", -10, 10).name("tv_scale_X").step(0.001);
        // gui.add(tv.scene.scale, "y", -10, 10).name("tv_scale_y").step(0.001);
        // gui.add(tv.scene.scale, "z", -10, 10).name("tv_scale_z").step(0.001);

        // gui.add(tv.scene.rotation, "y", 0, 6).name("tv_scale_z").step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getTvStand = () => {
    this.loader = new GLTFLoader();

    this.loader.load(
      tvStand,

      (tvStand) => {
        this.gltf = tvStand.scene;
        this.scene.add(tvStand.scene);

        tvStand.scene.scale.x = 4.5;
        tvStand.scene.scale.y = 2.7;
        tvStand.scene.scale.z = 3.8;

        tvStand.scene.position.x = -6.21;
        tvStand.scene.position.y = 0.35;
        tvStand.scene.position.z = 17.64;

        // const gui = new GUI();
        // gui.add(tvStand.scene.scale, "x", -10, 10).name("tvStand_scale_X");
        // gui.add(tvStand.scene.scale, "y", -10, 10).name("tvStand_scale_y");
        // gui.add(tvStand.scene.scale, "z", -10, 10).name("tvStand_scale_z");

        // gui
        //   .add(tvStand.scene.position, "x", -20, 20)
        //   .name("tvStand_Pos_X")
        //   .step(0.01);
        // gui
        //   .add(tvStand.scene.position, "y", -20, 20)
        //   .name("tvStand_Pos_y")
        //   .step(0.01);
        // gui
        //   .add(tvStand.scene.position, "z", -20, 20)
        //   .name("tvStand_Pos_z")
        //   .step(0.01);

        // gui.add(tvStand.scene.rotation, "y", 0, 4).name("tvStand_rotation_y");
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getDiningTable = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      diningTable,

      (diningTable) => {
        this.gltf = diningTable.scene;
        this.scene.add(diningTable.scene);

        // diningTable.scene.position.x = -2.105;
        // diningTable.scene.position.y = 0.4;
        // diningTable.scene.position.z = -1.342;

        // diningTable.scene.scale.x = 1.7;
        // diningTable.scene.scale.y = 1.7;
        // diningTable.scene.scale.z = 1.7;

        // diningTable.scene.rotation.y = 4.753;

        diningTable.scene.position.x = objData.posX;
        diningTable.scene.position.y = objData.posY;
        diningTable.scene.position.z = objData.posZ;

        diningTable.scene.scale.x = 1.7;
        diningTable.scene.scale.y = 1.7;
        diningTable.scene.scale.z = 1.7;

        diningTable.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(diningTable.scene.position, "x", -30, 30)
        //   .name("diningTable_pos_x")
        //   .step(0.001);
        // gui
        //   .add(diningTable.scene.position, "y", -30, 30)
        //   .name("diningTable_pos_y")
        //   .step(0.001);
        // gui
        //   .add(diningTable.scene.position, "z", -30, 30)
        //   .name("diningTable_pos_z")
        //   .step(0.001);

        // gui
        //   .add(diningTable.scene.scale, "x", -10, 10)
        //   .name("diningTable_scale_x")
        //   .step(0.001);
        // gui
        //   .add(diningTable.scene.scale, "y", -10, 10)
        //   .name("diningTable_scale_y")
        //   .step(0.001);
        // gui
        //   .add(diningTable.scene.scale, "z", -10, 10)
        //   .name("diningTable_scale_z")
        //   .step(0.001);

        // gui
        //   .add(diningTable.scene.rotation, "y", 0, 8)
        //   .name("diningTable_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getSofa = () => {
    this.loader = new GLTFLoader();

    this.loader.load(
      sofa,

      (sofa) => {
        this.gltf = sofa.scene;
        this.scene.add(sofa.scene);

        sofa.scene.position.x = -6.007;
        sofa.scene.position.y = 1.2;
        sofa.scene.position.z = 13.075;

        sofa.scene.scale.x = 2.2;
        sofa.scene.scale.y = 2.2;
        sofa.scene.scale.z = 2.2;

        sofa.scene.rotation.y = 6.28;

        // const gui = new GUI();

        // gui
        //   .add(sofa.scene.position, "x", -20, 20)
        //   .name("sofa_position_x")
        //   .step(0.001);
        // gui
        //   .add(sofa.scene.position, "y", -20, 20)
        //   .name("sofa_position_y")
        //   .step(0.001);
        // gui
        //   .add(sofa.scene.position, "z", -20, 20)
        //   .name("sofa_position_z")
        //   .step(0.001);

        // gui
        //   .add(sofa.scene.scale, "x", -10, 10)
        //   .name("sofa_scale_x")
        //   .step(0.001);
        // gui
        //   .add(sofa.scene.scale, "y", -10, 10)
        //   .name("sofa_scale_y")
        //   .step(0.001);
        // gui
        //   .add(sofa.scene.scale, "z", -10, 10)
        //   .name("sofa_scale_z")
        //   .step(0.001);

        // gui
        //   .add(sofa.scene.rotation, "y", 0, 8)
        //   .name("sofa_rotation_x")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getSingleSofa = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      singleSofa,

      (singleSofa) => {
        this.gltf = singleSofa.scene;
        this.scene.add(singleSofa.scene);

        singleSofa.scene.position.x = objData.posX;
        singleSofa.scene.position.y = objData.posY;
        singleSofa.scene.position.z = objData.posZ;

        singleSofa.scene.scale.x = 0.22;
        singleSofa.scene.scale.y = 0.22;
        singleSofa.scene.scale.z = 0.22;

        singleSofa.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(singleSofa.scene.position, "x", -20, 20)
        //   .name("singleSofa_PosX")
        //   .step(0.001);
        // gui
        //   .add(singleSofa.scene.position, "y", -20, 20)
        //   .name("singleSofa_PosY")
        //   .step(0.001);
        // gui
        //   .add(singleSofa.scene.position, "z", -20, 20)
        //   .name("singleSofa_PosZ")
        //   .step(0.001);

        // gui
        //   .add(singleSofa.scene.scale, "x", 0, 0.8)
        //   .name("singleSofa_ScaleX")
        //   .step(0.001);
        // gui
        //   .add(singleSofa.scene.scale, "y", 0, 0.8)
        //   .name("singleSofa_ScaleY")
        //   .step(0.001);
        // gui
        //   .add(singleSofa.scene.scale, "z", 0, 0.8)
        //   .name("singleSofa_ScaleZ")
        //   .step(0.001);

        // gui
        //   .add(singleSofa.scene.rotation, "y", 0, 8)
        //   .name("singleSofa_RotY")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getTable = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      table,

      (table) => {
        this.gltf = table.scene;
        this.scene.add(table.scene);

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        table.scene.position.x = objData.posX;
        table.scene.position.y = objData.posY;
        table.scene.position.z = objData.posZ;

        table.scene.scale.x = objData.scalX;
        table.scene.scale.y = objData.scalY;
        table.scene.scale.z = objData.scalZ;

        table.scene.rotation.y = objData.rotY;

        // const gui = new GUI();
        // gui.add(table.scene.scale, "x", -1, 1).name("scal");
        // gui.add(table.scene.scale, "y", -1, 1).name("scal");
        // gui.add(table.scene.scale, "z", -1, 1).name("scal");

        // gui.add(table.scene.position, "x", -40, 40).name("scal").step(0.01);
        // gui.add(table.scene.position, "y", -40, 40).name("scal").step(0.01);
        // gui.add(table.scene.position, "z", -40, 40).name("scal").step(0.01);

        // gui.add(table.scene.rotation, "y", -6, 6).name("scal").step(0.01);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getGamingTable = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      gamingTable,

      (gamingTable) => {
        this.gltf = gamingTable.scene;
        this.scene.add(gamingTable.scene);

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        gamingTable.scene.position.x = objData.posX;
        gamingTable.scene.position.y = objData.posY;
        gamingTable.scene.position.z = objData.posZ;

        gamingTable.scene.scale.x = objData.scalX;
        gamingTable.scene.scale.y = objData.scalY;
        gamingTable.scene.scale.z = objData.scalZ;

        gamingTable.scene.rotation.y = objData.rotY;

        // const gui = new GUI();
        // gui.add(gamingTable.scene.scale, "x", 0, 5).name("gaming");
        // gui.add(gamingTable.scene.scale, "y", 0, 5).name("gaming");
        // gui.add(gamingTable.scene.scale, "z", 0, 5).name("gaming");

        // gui
        //   .add(gamingTable.scene.position, "x", -40, 40)
        //   .name("scal")
        //   .step(0.01);
        // gui
        //   .add(gamingTable.scene.position, "y", -40, 40)
        //   .name("scal")
        //   .step(0.01);
        // gui
        //   .add(gamingTable.scene.position, "z", -40, 40)
        //   .name("scal")
        //   .step(0.01);

        // gui.add(gamingTable.scene.rotation, "y", 0, 6).name("scal").step(0.01);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getChair = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      chair,

      (chair) => {
        this.gltf = chair.scene;
        this.scene.add(chair.scene);

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        chair.scene.position.x = objData.posX;
        chair.scene.position.y = objData.posY;
        chair.scene.position.z = objData.posZ;

        chair.scene.scale.x = objData.scalX;
        chair.scene.scale.y = objData.scalY;
        chair.scene.scale.z = objData.scalZ;

        chair.scene.rotation.y = objData.rotY;

        // const gui = new GUI();
        // gui.add(chair.scene.scale, "x", -5, 5).name("scale_x");
        // gui.add(chair.scene.scale, "y", -5, 5).name("scale_y");
        // gui.add(chair.scene.scale, "z", -5, 5).name("scale_z");

        // gui
        //   .add(chair.scene.position, "x", -40, 40)
        //   .name("postion_x")
        //   .step(0.01);
        // gui
        //   .add(chair.scene.position, "y", -40, 40)
        //   .name("postion_y")
        //   .step(0.01);
        // gui
        //   .add(chair.scene.position, "z", -40, 40)
        //   .name("postion_z")
        //   .step(0.01);

        // gui.add(chair.scene.rotation, "y", -6, 6).name("rotation_y").step(0.01);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getFlowerPot = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      flowerPot,

      (flowerPot) => {
        this.gltf = flowerPot.scene;
        this.scene.add(flowerPot.scene);

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        flowerPot.scene.position.x = objData.posX;
        flowerPot.scene.position.y = objData.posY;
        flowerPot.scene.position.z = objData.posZ;

        flowerPot.scene.scale.x = objData.scal;
        flowerPot.scene.scale.y = objData.scal;
        flowerPot.scene.scale.z = objData.scal;

        flowerPot.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(flowerPot.scene.position, "x", -40, 40)
        //   .name("flowerPot_position_x")
        //   .step(0.001);
        // gui
        //   .add(flowerPot.scene.position, "y", -40, 40)
        //   .name("flowerPot_position_y")
        //   .step(0.001);
        // gui
        //   .add(flowerPot.scene.position, "z", -40, 40)
        //   .name("flowerPot_position_z")
        //   .step(0.001);

        // gui
        //   .add(flowerPot.scene.scale, "x", -20, 20)
        //   .name("flowerPot_scale_x")
        //   .step(0.001);
        // gui
        //   .add(flowerPot.scene.scale, "y", -20, 20)
        //   .name("flowerPot_scale_y")
        //   .step(0.001);
        // gui
        //   .add(flowerPot.scene.scale, "z", -20, 20)
        //   .name("flowerPot_scale_z")
        //   .step(0.001);

        // gui
        //   .add(flowerPot.scene.rotation, "y", -6, 6)
        //   .name("flowerPot_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getFlowerPotDesigned = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      flowerPotDesigned,

      (flowerPotDesigned) => {
        this.gltf = flowerPotDesigned.scene;
        this.scene.add(flowerPotDesigned.scene);

        // singleSofa.scene.position.x = -1.51;
        // singleSofa.scene.position.y = 0;
        // singleSofa.scene.position.z = 1.74;

        flowerPotDesigned.scene.position.x = objData.posX;
        flowerPotDesigned.scene.position.y = objData.posY;
        flowerPotDesigned.scene.position.z = objData.posZ;

        flowerPotDesigned.scene.scale.x = objData.scal;
        flowerPotDesigned.scene.scale.y = objData.scal;
        flowerPotDesigned.scene.scale.z = objData.scal;

        flowerPotDesigned.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(flowerPotDesigned.scene.position, "x", -40, 40)
        //   .name("flowerPot_position_x")
        //   .step(0.001);
        // gui
        //   .add(flowerPotDesigned.scene.position, "y", -40, 40)
        //   .name("flowerPot_position_y")
        //   .step(0.001);
        // gui
        //   .add(flowerPotDesigned.scene.position, "z", -40, 40)
        //   .name("flowerPot_position_z")
        //   .step(0.001);

        // gui
        //   .add(flowerPotDesigned.scene.scale, "x", 0, 0.5)
        //   .name("flowerPot_scale_x")
        //   .step(0.001);
        // gui
        //   .add(flowerPotDesigned.scene.scale, "y", 0, 0.5)
        //   .name("flowerPot_scale_y")
        //   .step(0.001);
        // gui
        //   .add(flowerPotDesigned.scene.scale, "z", 0, 0.5)
        //   .name("flowerPot_scale_z")
        //   .step(0.001);

        // gui
        //   .add(flowerPotDesigned.scene.rotation, "y", 0, 6)
        //   .name("flowerPot_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getPainting1 = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      painting1,

      (painting1) => {
        this.gltf = painting1.scene;
        this.scene.add(painting1.scene);

        painting1.scene.position.x = objData.posX;
        painting1.scene.position.y = objData.posY;
        painting1.scene.position.z = objData.posZ;

        painting1.scene.scale.x = objData.scal;
        painting1.scene.scale.y = objData.scal;
        painting1.scene.scale.z = objData.scal;

        painting1.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(painting1.scene.position, "x", -40, 40)
        //   .name("painting1_position_x")
        //   .step(0.001);
        // gui
        //   .add(painting1.scene.position, "y", -40, 40)
        //   .name("painting1_position_y")
        //   .step(0.001);
        // gui
        //   .add(painting1.scene.position, "z", -40, 40)
        //   .name("painting1_position_z")
        //   .step(0.001);

        // gui
        //   .add(painting1.scene.scale, "x", -20, 20)
        //   .name("painting1_scale_x")
        //   .step(0.001);
        // gui
        //   .add(painting1.scene.scale, "y", -20, 20)
        //   .name("painting1_scale_y")
        //   .step(0.001);
        // gui
        //   .add(painting1.scene.scale, "z", -20, 20)
        //   .name("painting1_scale_z")
        //   .step(0.001);

        // gui
        //   .add(painting1.scene.rotation, "y", -6, 6)
        //   .name("painting1_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getPainting2 = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      painting2,

      (painting2) => {
        this.gltf = painting2.scene;
        this.scene.add(painting2.scene);

        painting2.scene.position.x = objData.posX;
        painting2.scene.position.y = objData.posY;
        painting2.scene.position.z = objData.posZ;

        painting2.scene.scale.x = objData.scal;
        painting2.scene.scale.y = objData.scal;
        painting2.scene.scale.z = objData.scal * 2;

        painting2.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(painting2.scene.position, "x", -40, 40)
        //   .name("painting1_position_x")
        //   .step(0.001);
        // gui
        //   .add(painting2.scene.position, "y", -40, 40)
        //   .name("painting1_position_y")
        //   .step(0.001);
        // gui
        //   .add(painting2.scene.position, "z", -40, 40)
        //   .name("painting1_position_z")
        //   .step(0.001);

        // gui
        //   .add(painting2.scene.scale, "x", 0, 0.5)
        //   .name("painting1_scale_x")
        //   .step(0.001);
        // gui
        //   .add(painting2.scene.scale, "y", 0, 0.5)
        //   .name("painting1_scale_y")
        //   .step(0.001);
        // gui
        //   .add(painting2.scene.scale, "z", 0, 0.5)
        //   .name("painting1_scale_z")
        //   .step(0.001);

        // gui
        //   .add(painting2.scene.rotation, "y", -6, 6)
        //   .name("painting1_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getCabinetFull = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      cabinetFull,

      (cabinetFull) => {
        this.gltf = cabinetFull.scene;
        this.scene.add(cabinetFull.scene);

        cabinetFull.scene.position.x = objData.posX;
        cabinetFull.scene.position.y = objData.posY;
        cabinetFull.scene.position.z = objData.posZ;

        cabinetFull.scene.scale.x = objData.scal;
        cabinetFull.scene.scale.y = objData.scal;
        cabinetFull.scene.scale.z = objData.scal - 3.162;

        cabinetFull.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(cabinetFull.scene.position, "x", -40, 40)
        //   .name("cabinetFull_position_x")
        //   .step(0.001);
        // gui
        //   .add(cabinetFull.scene.position, "y", -40, 40)
        //   .name("cabinetFull_position_y")
        //   .step(0.001);
        // gui
        //   .add(cabinetFull.scene.position, "z", -40, 40)
        //   .name("cabinetFull_position_z")
        //   .step(0.001);

        // gui
        //   .add(cabinetFull.scene.scale, "x", 0, 30)
        //   .name("cabinetFull_scale_x")
        //   .step(0.001);
        // gui
        //   .add(cabinetFull.scene.scale, "y", 0, 30)
        //   .name("cabinetFull_scale_y")
        //   .step(0.001);
        // gui
        //   .add(cabinetFull.scene.scale, "z", 0, 30)
        //   .name("cabinetFull_scale_z")
        //   .step(0.001);

        // gui
        //   .add(cabinetFull.scene.rotation, "y", 0, 6)
        //   .name("cabinetFull_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getSink = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      sink,

      (sink) => {
        this.gltf = sink.scene;
        this.scene.add(sink.scene);

        sink.scene.position.x = objData.posX;
        sink.scene.position.y = objData.posY;
        sink.scene.position.z = objData.posZ;

        sink.scene.scale.x = objData.scal;
        sink.scene.scale.y = objData.scal + 0.001;
        sink.scene.scale.z = objData.scal + 0.002;

        sink.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(sink.scene.position, "x", -40, 40)
        //   .name("cabinetFull_position_x")
        //   .step(0.001);
        // gui
        //   .add(sink.scene.position, "y", -40, 40)
        //   .name("cabinetFull_position_y")
        //   .step(0.001);
        // gui
        //   .add(sink.scene.position, "z", -40, 40)
        //   .name("cabinetFull_position_z")
        //   .step(0.001);

        // gui
        //   .add(sink.scene.scale, "x", 0, 0.05)
        //   .name("cabinetFull_scale_x")
        //   .step(0.001);
        // gui
        //   .add(sink.scene.scale, "y", 0, 0.05)
        //   .name("cabinetFull_scale_y")
        //   .step(0.001);
        // gui
        //   .add(sink.scene.scale, "z", 0, 0.05)
        //   .name("cabinetFull_scale_z")
        //   .step(0.001);

        // gui
        //   .add(sink.scene.rotation, "y", 0, 6)
        //   .name("cabinetFull_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getFridge = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      fridge,

      (fridge) => {
        this.gltf = fridge.scene;
        this.scene.add(fridge.scene);

        fridge.scene.position.x = objData.posX;
        fridge.scene.position.y = objData.posY;
        fridge.scene.position.z = objData.posZ;

        fridge.scene.scale.x = objData.scal;
        fridge.scene.scale.y = objData.scal;
        fridge.scene.scale.z = objData.scal;

        fridge.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(fridge.scene.position, "x", -40, 40)
        //   .name("fridge_position_x")
        //   .step(0.001);
        // gui
        //   .add(fridge.scene.position, "y", -40, 40)
        //   .name("fridge_position_y")
        //   .step(0.001);
        // gui
        //   .add(fridge.scene.position, "z", -40, 40)
        //   .name("fridge_position_z")
        //   .step(0.001);

        // gui
        //   .add(fridge.scene.scale, "x", 0, 30)
        //   .name("fridge_scale_x")
        //   .step(0.001);
        // gui
        //   .add(fridge.scene.scale, "y", 0, 30)
        //   .name("fridge_scale_y")
        //   .step(0.001);
        // gui
        //   .add(fridge.scene.scale, "z", 0, 30)
        //   .name("fridge_scale_z")
        //   .step(0.001);

        // gui
        //   .add(fridge.scene.rotation, "y", 0, 6)
        //   .name("fridge_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getToilet = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      toilet,

      (toilet) => {
        this.gltf = toilet.scene;
        this.scene.add(toilet.scene);

        toilet.scene.position.x = objData.posX;
        toilet.scene.position.y = objData.posY;
        toilet.scene.position.z = objData.posZ;

        toilet.scene.scale.x = objData.scal;
        toilet.scene.scale.y = objData.scal;
        toilet.scene.scale.z = objData.scal;

        toilet.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(toilet.scene.position, "x", -40, 40)
        //   .name("toilet_position_x")
        //   .step(0.001);
        // gui
        //   .add(toilet.scene.position, "y", -40, 40)
        //   .name("toilet_position_y")
        //   .step(0.001);
        // gui
        //   .add(toilet.scene.position, "z", -40, 40)
        //   .name("toilet_position_z")
        //   .step(0.001);

        // gui
        //   .add(toilet.scene.scale, "x", 0, 30)
        //   .name("toilet_scale_x")
        //   .step(0.001);
        // gui
        //   .add(toilet.scene.scale, "y", 0, 30)
        //   .name("toilet_scale_y")
        //   .step(0.001);
        // gui
        //   .add(toilet.scene.scale, "z", 0, 30)
        //   .name("toilet_scale_z")
        //   .step(0.001);

        // gui
        //   .add(toilet.scene.rotation, "y", 0, 6)
        //   .name("toilet_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getShower = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      shower,

      (shower) => {
        this.gltf = shower.scene;
        this.scene.add(shower.scene);

        shower.scene.position.x = objData.posX;
        shower.scene.position.y = objData.posY;
        shower.scene.position.z = objData.posZ;

        shower.scene.scale.x = objData.scal;
        shower.scene.scale.y = objData.scal;
        shower.scene.scale.z = objData.scal;

        shower.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(shower.scene.position, "x", -40, 40)
        //   .name("shower_position_x")
        //   .step(0.001);
        // gui
        //   .add(shower.scene.position, "y", -40, 40)
        //   .name("shower_position_y")
        //   .step(0.001);
        // gui
        //   .add(shower.scene.position, "z", -40, 40)
        //   .name("shower_position_z")
        //   .step(0.001);

        // gui
        //   .add(shower.scene.scale, "x", 0, 30)
        //   .name("shower_scale_x")
        //   .step(0.001);
        // gui
        //   .add(shower.scene.scale, "y", 0, 30)
        //   .name("shower_scale_y")
        //   .step(0.001);
        // gui
        //   .add(shower.scene.scale, "z", 0, 30)
        //   .name("shower_scale_z")
        //   .step(0.001);

        // gui
        //   .add(shower.scene.rotation, "y", 0, 6)
        //   .name("shower_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getWallDevider = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      wallDevider,

      (wallDevider) => {
        this.gltf = wallDevider.scene;
        this.scene.add(wallDevider.scene);

        wallDevider.scene.position.x = objData.posX;
        wallDevider.scene.position.y = objData.posY;
        wallDevider.scene.position.z = objData.posZ;

        wallDevider.scene.scale.x = objData.scal;
        wallDevider.scene.scale.y = objData.scal + 0.38;
        wallDevider.scene.scale.z = objData.scal;

        wallDevider.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(wallDevider.scene.position, "x", -40, 40)
        //   .name("shower_position_x")
        //   .step(0.001);
        // gui
        //   .add(wallDevider.scene.position, "y", -40, 40)
        //   .name("shower_position_y")
        //   .step(0.001);
        // gui
        //   .add(wallDevider.scene.position, "z", -40, 40)
        //   .name("shower_position_z")
        //   .step(0.001);

        // gui
        //   .add(wallDevider.scene.scale, "x", 0, 30)
        //   .name("shower_scale_x")
        //   .step(0.001);
        // gui
        //   .add(wallDevider.scene.scale, "y", 0, 30)
        //   .name("shower_scale_y")
        //   .step(0.001);
        // gui
        //   .add(wallDevider.scene.scale, "z", 0, 30)
        //   .name("shower_scale_z")
        //   .step(0.001);

        // gui
        //   .add(wallDevider.scene.rotation, "y", 0, 6)
        //   .name("shower_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getWallDevider2 = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      wallDevider2,

      (wallDevider2) => {
        this.gltf = wallDevider2.scene;
        this.scene.add(wallDevider2.scene);

        wallDevider2.scene.position.x = objData.posX;
        wallDevider2.scene.position.y = objData.posY;
        wallDevider2.scene.position.z = objData.posZ;

        wallDevider2.scene.scale.x = objData.scal;
        wallDevider2.scene.scale.y = objData.scal + 0.251;
        wallDevider2.scene.scale.z = objData.scal;

        wallDevider2.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(wallDevider2.scene.position, "x", -40, 40)
        //   .name("wallDevider2_position_x")
        //   .step(0.001);
        // gui
        //   .add(wallDevider2.scene.position, "y", -40, 40)
        //   .name("wallDevider2_position_y")
        //   .step(0.001);
        // gui
        //   .add(wallDevider2.scene.position, "z", -40, 40)
        //   .name("wallDevider2_position_z")
        //   .step(0.001);

        // gui
        //   .add(wallDevider2.scene.scale, "x", 0, 30)
        //   .name("wallDevider2_scale_x")
        //   .step(0.001);
        // gui
        //   .add(wallDevider2.scene.scale, "y", 0, 30)
        //   .name("wallDevider2_scale_y")
        //   .step(0.001);
        // gui
        //   .add(wallDevider2.scene.scale, "z", 0, 30)
        //   .name("wallDevider2_scale_z")
        //   .step(0.001);

        // gui
        //   .add(wallDevider2.scene.rotation, "y", 0, 6)
        //   .name("wallDevider2_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  getBed = (objData) => {
    this.loader = new GLTFLoader();

    this.loader.load(
      bed,

      (bed) => {
        this.gltf = bed.scene;
        this.scene.add(bed.scene);

        bed.scene.position.x = objData.posX;
        bed.scene.position.y = objData.posY;
        bed.scene.position.z = objData.posZ;

        bed.scene.scale.x = objData.scal;
        bed.scene.scale.y = objData.scal;
        bed.scene.scale.z = objData.scal;

        bed.scene.rotation.y = objData.rotY;

        // const gui = new GUI();

        // gui
        //   .add(bed.scene.position, "x", -40, 40)
        //   .name("bed_position_x")
        //   .step(0.001);
        // gui
        //   .add(bed.scene.position, "y", -40, 40)
        //   .name("bed_position_y")
        //   .step(0.001);
        // gui
        //   .add(bed.scene.position, "z", -40, 40)
        //   .name("bed_position_z")
        //   .step(0.001);

        // gui.add(bed.scene.scale, "x", 0, 30).name("bed_scale_x").step(0.001);
        // gui.add(bed.scene.scale, "y", 0, 30).name("bed_scale_y").step(0.001);
        // gui.add(bed.scene.scale, "z", 0, 30).name("bed_scale_z").step(0.001);

        // gui
        //   .add(bed.scene.rotation, "y", 0, 6)
        //   .name("bed_rotation_y")
        //   .step(0.001);
      },
      undefined,

      (error) => {
        console.log(error);
      }
    );
  };

  // animation
  startAnimationLoop = () => {
    this.renderer.render(this.scene, this.camera);
    TWEEN.update();
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();
  };

  render() {
    return <div style={style} ref={(ref) => (this.mount = ref)} />;
  }
}

class Scene extends React.Component {
  state = { isMounted: true };

  getInput() {
    console.log("event");
  }

  handleMount = () => {
    this.setState({ isMounted: !this.state.isMounted });
  };

  render() {
    const { isMounted = false } = this.state;
    return (
      <>
        {/* <button onClick={() => this.handleMount()}>
          {isMounted ? "Unmount" : "Mount"}
        </button> */}
        {isMounted && <WebGL />}
      </>
    );
  }
}

export default Scene;
