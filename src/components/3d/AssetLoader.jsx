import React,{useState,useEffect} from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { Suspense } from "react";

function AssetLoader(props) {
    const { path } = props
    const [gltfLoader,setGltfLoader] = useState()
    const [dracoLoader, setDracoLoader] = useState()
    useEffect(()=>{
        const gltf = new GLTFLoader()
        const loader = new DRACOLoader();
        loader.setDecoderPath('/draco/');
        console.log(loader)
        gltf.setDRACOLoader(loader)
        setGltfLoader(gltf)
        setDracoLoader(loader)
        console.log("loader", loader) 
        
    },[])
    
    return (
        <Suspense fallback={null}>
            {/* <primitive object={gltfLoader.scene} /> */}
        </Suspense>
    );
}

export default AssetLoader;