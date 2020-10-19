import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { gui, GUI } from "three/examples/jsm/libs/dat.gui.module";

import grass from "../../assests/textures/grasslight-big.jpg";

import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";

const style = {
  height: 500,
};

class WebGL extends Component {
  state = {};

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
    const gui = new GUI();

    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color(0xcc30ff);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.camera.position.x = 5;
    this.camera.position.y = 5;
    this.camera.position.z = 5;

    this.camera.name = "camera";

    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.controls = new OrbitControls(this.scene, this.mount);
    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(this.renderer.domElement);
  };

  addCustomSceneObjects = () => {
    const gui = new GUI();

    // adding fog
    this.getFog();

    // adding sphere
    const sphereMaterial = this.getMaterial("phong", "rgb(255, 255, 255)");
    const sphere = this.getSphere(sphereMaterial, 1);
    this.scene.add(sphere);

    sphere.position.y = 5;

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

  // animation
  startAnimationLoop = () => {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);

    var camera = this.scene.getObjectByName("camera");
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

class SceneTest extends React.Component {
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

export default SceneTest;
