(this["webpackJsonpflight-booking-app"]=this["webpackJsonpflight-booking-app"]||[]).push([[6],{90:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var s=r(86),a=function(){function e(e){s.A.call(this,e),this.dracoLoader=null,this.ddsLoader=null}function t(){var e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}e.prototype=Object.assign(Object.create(s.A.prototype),{constructor:e,load:function(e,t,r,a){var n,i=this;n=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:s.B.extractUrlBase(e),i.manager.itemStart(e);var o=function(t){a?a(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},l=new s.k(i.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),"use-credentials"===i.crossOrigin&&l.setWithCredentials(!0),l.load(e,(function(r){try{i.parse(r,n,(function(r){t(r),i.manager.itemEnd(e)}),o)}catch(s){o(s)}}),r,o)},setDRACOLoader:function(e){return this.dracoLoader=e,this},setDDSLoader:function(e){return this.ddsLoader=e,this},parse:function(e,t,l,u){var f,m={};if("string"===typeof e)f=e;else if(s.B.decodeText(new Uint8Array(e,0,4))===o){try{m[r.KHR_BINARY_GLTF]=new p(e)}catch(S){return void(u&&u(S))}f=m[r.KHR_BINARY_GLTF].content}else f=s.B.decodeText(new Uint8Array(e));var v=JSON.parse(f);if(void 0===v.asset||v.asset.version[0]<2)u&&u(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));else{if(v.extensionsUsed)for(var g=0;g<v.extensionsUsed.length;++g){var T=v.extensionsUsed[g],M=v.extensionsRequired||[];switch(T){case r.KHR_LIGHTS_PUNCTUAL:m[T]=new n(v);break;case r.KHR_MATERIALS_UNLIT:m[T]=new i;break;case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:m[T]=new h;break;case r.KHR_DRACO_MESH_COMPRESSION:m[T]=new c(v,this.dracoLoader);break;case r.MSFT_TEXTURE_DDS:m[T]=new a(this.ddsLoader);break;case r.KHR_TEXTURE_TRANSFORM:m[T]=new d;break;default:M.indexOf(T)>=0&&console.warn('THREE.GLTFLoader: Unknown extension "'+T+'".')}}new B(v,m,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager}).parse(l,u)}}});var r={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function a(e){if(!e)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=r.MSFT_TEXTURE_DDS,this.ddsLoader=e}function n(e){this.name=r.KHR_LIGHTS_PUNCTUAL;var t=e.extensions&&e.extensions[r.KHR_LIGHTS_PUNCTUAL]||{};this.lightDefs=t.lights||[]}function i(){this.name=r.KHR_MATERIALS_UNLIT}n.prototype.loadLight=function(e){var t,r=this.lightDefs[e],a=new s.g(16777215);void 0!==r.color&&a.fromArray(r.color);var n=void 0!==r.range?r.range:0;switch(r.type){case"directional":(t=new s.h(a)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new s.R(a)).distance=n;break;case"spot":(t=new s.hb(a)).distance=n,r.spot=r.spot||{},r.spot.innerConeAngle=void 0!==r.spot.innerConeAngle?r.spot.innerConeAngle:0,r.spot.outerConeAngle=void 0!==r.spot.outerConeAngle?r.spot.outerConeAngle:Math.PI/4,t.angle=r.spot.outerConeAngle,t.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+r.type+'".')}return t.position.set(0,0,0),t.decay=2,void 0!==r.intensity&&(t.intensity=r.intensity),t.name=r.name||"light_"+e,Promise.resolve(t)},i.prototype.getMaterialType=function(){return s.H},i.prototype.extendParams=function(e,t,r){var a=[];e.color=new s.g(1,1,1),e.opacity=1;var n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){var i=n.baseColorFactor;e.color.fromArray(i),e.opacity=i[3]}void 0!==n.baseColorTexture&&a.push(r.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(a)};var o="glTF",l=12,u={JSON:1313821514,BIN:5130562};function p(e){this.name=r.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,l);if(this.header={magic:s.B.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");for(var a=new DataView(e,l),n=0;n<a.byteLength;){var i=a.getUint32(n,!0);n+=4;var p=a.getUint32(n,!0);if(n+=4,p===u.JSON){var c=new Uint8Array(e,l+n,i);this.content=s.B.decodeText(c)}else if(p===u.BIN){var d=l+n;this.body=e.slice(d,d+i)}n+=i}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function c(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=r.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t}function d(){this.name=r.KHR_TEXTURE_TRANSFORM}function h(){return{name:r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return s.cb},extendParams:function(e,t,r){var a=t.extensions[this.name],n=s.bb.standard,i=s.nb.clone(n.uniforms),o=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),l=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),u=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),p=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),c=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );","material.specularColor = specularFactor.rgb;"].join("\n"),d=n.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",o).replace("#include <metalnessmap_pars_fragment>",l).replace("#include <roughnessmap_fragment>",u).replace("#include <metalnessmap_fragment>",p).replace("#include <lights_physical_fragment>",c);delete i.roughness,delete i.metalness,delete i.roughnessMap,delete i.metalnessMap,i.specular={value:(new s.g).setHex(1118481)},i.glossiness={value:.5},i.specularMap={value:null},i.glossinessMap={value:null},e.vertexShader=n.vertexShader,e.fragmentShader=d,e.uniforms=i,e.defines={STANDARD:""},e.color=new s.g(1,1,1),e.opacity=1;var h=[];if(Array.isArray(a.diffuseFactor)){var f=a.diffuseFactor;e.color.fromArray(f),e.opacity=f[3]}if(void 0!==a.diffuseTexture&&h.push(r.assignTexture(e,"map",a.diffuseTexture)),e.emissive=new s.g(0,0,0),e.glossiness=void 0!==a.glossinessFactor?a.glossinessFactor:1,e.specular=new s.g(1,1,1),Array.isArray(a.specularFactor)&&e.specular.fromArray(a.specularFactor),void 0!==a.specularGlossinessTexture){var m=a.specularGlossinessTexture;h.push(r.assignTexture(e,"glossinessMap",m)),h.push(r.assignTexture(e,"specularMap",m))}return Promise.all(h)},createMaterial:function(e){var t=new s.cb({defines:e.defines,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,fog:!0,lights:!0,opacity:e.opacity,transparent:e.transparent});return t.isGLTFSpecularGlossinessMaterial=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t.extensions.derivatives=!0,t},cloneMaterial:function(e){var t=e.clone();t.isGLTFSpecularGlossinessMaterial=!0;for(var r=this.specularGlossinessParams,s=0,a=r.length;s<a;s++){var n=e[r[s]];t[r[s]]=n&&n.isColor?n.clone():n}return t},refreshUniforms:function(e,t,r,s,a){if(!0===a.isGLTFSpecularGlossinessMaterial){var n,i=a.uniforms,o=a.defines;i.opacity.value=a.opacity,i.diffuse.value.copy(a.color),i.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),i.map.value=a.map,i.specularMap.value=a.specularMap,i.alphaMap.value=a.alphaMap,i.lightMap.value=a.lightMap,i.lightMapIntensity.value=a.lightMapIntensity,i.aoMap.value=a.aoMap,i.aoMapIntensity.value=a.aoMapIntensity,a.map?n=a.map:a.specularMap?n=a.specularMap:a.displacementMap?n=a.displacementMap:a.normalMap?n=a.normalMap:a.bumpMap?n=a.bumpMap:a.glossinessMap?n=a.glossinessMap:a.alphaMap?n=a.alphaMap:a.emissiveMap&&(n=a.emissiveMap),void 0!==n&&(n.isWebGLRenderTarget&&(n=n.texture),!0===n.matrixAutoUpdate&&n.updateMatrix(),i.uvTransform.value.copy(n.matrix)),a.envMap&&(i.envMap.value=a.envMap,i.envMapIntensity.value=a.envMapIntensity,i.flipEnvMap.value=a.envMap.isCubeTexture?-1:1,i.reflectivity.value=a.reflectivity,i.refractionRatio.value=a.refractionRatio,i.maxMipLevel.value=e.properties.get(a.envMap).__maxMipLevel),i.specular.value.copy(a.specular),i.glossiness.value=a.glossiness,i.glossinessMap.value=a.glossinessMap,i.emissiveMap.value=a.emissiveMap,i.bumpMap.value=a.bumpMap,i.normalMap.value=a.normalMap,i.displacementMap.value=a.displacementMap,i.displacementScale.value=a.displacementScale,i.displacementBias.value=a.displacementBias,null!==i.glossinessMap.value&&void 0===o.USE_GLOSSINESSMAP&&(o.USE_GLOSSINESSMAP="",o.USE_ROUGHNESSMAP=""),null===i.glossinessMap.value&&void 0!==o.USE_GLOSSINESSMAP&&(delete o.USE_GLOSSINESSMAP,delete o.USE_ROUGHNESSMAP)}}}}function f(e,t,r,a){s.q.call(this,e,t,r,a)}c.prototype.decodePrimitive=function(e,t){var r=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,i={},o={},l={};for(var u in n){var p=A[u]||u.toLowerCase();i[p]=n[u]}for(u in e.attributes){p=A[u]||u.toLowerCase();if(void 0!==n[u]){var c=r.accessors[e.attributes[u]],d=b[c.componentType];l[p]=d,o[p]=!0===c.normalized}}return t.getDependency("bufferView",a).then((function(e){return new Promise((function(t){s.decodeDracoFile(e,(function(e){for(var r in e.attributes){var s=e.attributes[r],a=o[r];void 0!==a&&(s.normalized=a)}t(e)}),i,l)}))}))},d.prototype.extendTexture=function(e,t){return e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e},f.prototype=Object.create(s.q.prototype),f.prototype.constructor=f,f.prototype.copySampleValue_=function(e){for(var t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=e*s*3+s,n=0;n!==s;n++)t[n]=r[a+n];return t},f.prototype.beforeStart_=f.prototype.copySampleValue_,f.prototype.afterEnd_=f.prototype.copySampleValue_,f.prototype.interpolate_=function(e,t,r,s){for(var a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=2*i,l=3*i,u=s-t,p=(r-t)/u,c=p*p,d=c*p,h=e*l,f=h-l,m=-2*d+3*c,v=d-c,g=1-m,T=v-c+p,M=0;M!==i;M++){var S=n[f+M+i],y=n[f+M+o]*u,R=n[h+M+i],b=n[h+M]*u;a[M]=g*S+T*y+m*R+v*b}return a};var m,v=0,g=1,T=2,M=3,S=4,y=5,R=6,b={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_={9728:s.K,9729:s.x,9984:s.M,9985:s.z,9986:s.L,9987:s.y},L={33071:s.f,33648:s.J,10497:s.Z},E={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},A={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},w={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},x={CUBICSPLINE:void 0,LINEAR:s.s,STEP:s.r},I="OPAQUE",P="MASK",U="BLEND",O={"image/png":s.X,"image/jpeg":s.Y};function F(e,t){return"string"!==typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)?e:/^data:.*,.*$/i.test(e)?e:/^blob:.*$/i.test(e)?e:t+e)}function H(e,t,r){for(var s in r.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=r.extensions[s])}function C(e,t){void 0!==t.extras&&("object"===typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function D(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(var r=0,s=t.weights.length;r<s;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){var a=t.extras.targetNames;if(e.morphTargetInfluences.length===a.length){e.morphTargetDictionary={};for(r=0,s=a.length;r<s;r++)e.morphTargetDictionary[a[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function G(e){var t=e.extensions&&e.extensions[r.KHR_DRACO_MESH_COMPRESSION];return t?"draco:"+t.bufferView+":"+t.indices+":"+N(t.attributes):e.indices+":"+N(e.attributes)+":"+e.mode}function N(e){for(var t="",r=Object.keys(e).sort(),s=0,a=r.length;s<a;s++)t+=r[s]+":"+e[r[s]]+";";return t}function k(e){if(e.isInterleavedBufferAttribute){for(var t=e.count,r=e.itemSize,a=e.array.slice(0,t*r),n=0,i=0;n<t;++n)a[i++]=e.getX(n),r>=2&&(a[i++]=e.getY(n)),r>=3&&(a[i++]=e.getZ(n)),r>=4&&(a[i++]=e.getW(n));return new s.d(a,r,e.normalized)}return e.clone()}function B(e,r,a){this.json=e||{},this.extensions=r||{},this.options=a||{},this.cache=new t,this.primitiveCache={},this.textureLoader=new s.kb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new s.k(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}function K(e,t,r){var s=t.attributes,a=[];function n(t,s){return r.getDependency("accessor",t).then((function(t){e.setAttribute(s,t)}))}for(var i in s){var o=A[i]||i.toLowerCase();o in e.attributes||a.push(n(s[i],o))}if(void 0!==t.indices&&!e.index){var l=r.getDependency("accessor",t.indices).then((function(t){e.setIndex(t)}));a.push(l)}return C(e,t),Promise.all(a).then((function(){return void 0!==t.targets?function(e,t,r){for(var s=!1,a=!1,n=0,i=t.length;n<i;n++){if(void 0!==(u=t[n]).POSITION&&(s=!0),void 0!==u.NORMAL&&(a=!0),s&&a)break}if(!s&&!a)return Promise.resolve(e);var o=[],l=[];for(n=0,i=t.length;n<i;n++){var u=t[n];if(s){var p=void 0!==u.POSITION?r.getDependency("accessor",u.POSITION):e.attributes.position;o.push(p)}if(a){p=void 0!==u.NORMAL?r.getDependency("accessor",u.NORMAL):e.attributes.normal;l.push(p)}}return Promise.all([Promise.all(o),Promise.all(l)]).then((function(r){for(var n=r[0],i=r[1],o=0,l=n.length;o<l;o++)e.attributes.position!==n[o]&&(n[o]=k(n[o]));for(o=0,l=i.length;o<l;o++)e.attributes.normal!==i[o]&&(i[o]=k(i[o]));for(o=0,l=t.length;o<l;o++){var u=t[o],p="morphTarget"+o;if(s&&void 0!==u.POSITION){var c=n[o];c.name=p;for(var d=e.attributes.position,h=0,f=c.count;h<f;h++)c.setXYZ(h,c.getX(h)+d.getX(h),c.getY(h)+d.getY(h),c.getZ(h)+d.getZ(h))}if(a&&void 0!==u.NORMAL){var m=i[o];m.name=p;var v=e.attributes.normal;for(h=0,f=m.count;h<f;h++)m.setXYZ(h,m.getX(h)+v.getX(h),m.getY(h)+v.getY(h),m.getZ(h)+v.getZ(h))}}return s&&(e.morphAttributes.position=n),a&&(e.morphAttributes.normal=i),e}))}(e,t.targets,r):e}))}return B.prototype.parse=function(e,t){var r=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.markDefs(),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then((function(t){var n={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:r,userData:{}};H(a,n,s),C(n,s),e(n)})).catch(t)},B.prototype.markDefs=function(){for(var e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[],s={},a={},n=0,i=t.length;n<i;n++)for(var o=t[n].joints,l=0,u=o.length;l<u;l++)e[o[l]].isBone=!0;for(var p=0,c=e.length;p<c;p++){var d=e[p];void 0!==d.mesh&&(void 0===s[d.mesh]&&(s[d.mesh]=a[d.mesh]=0),s[d.mesh]++,void 0!==d.skin&&(r[d.mesh].isSkinnedMesh=!0))}this.json.meshReferences=s,this.json.meshUses=a},B.prototype.getDependency=function(e,t){var s=e+":"+t,a=this.cache.get(s);if(!a){switch(e){case"scene":a=this.loadScene(t);break;case"node":a=this.loadNode(t);break;case"mesh":a=this.loadMesh(t);break;case"accessor":a=this.loadAccessor(t);break;case"bufferView":a=this.loadBufferView(t);break;case"buffer":a=this.loadBuffer(t);break;case"material":a=this.loadMaterial(t);break;case"texture":a=this.loadTexture(t);break;case"skin":a=this.loadSkin(t);break;case"animation":a=this.loadAnimation(t);break;case"camera":a=this.loadCamera(t);break;case"light":a=this.extensions[r.KHR_LIGHTS_PUNCTUAL].loadLight(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(s,a)}return a},B.prototype.getDependencies=function(e){var t=this.cache.get(e);if(!t){var r=this,s=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(s.map((function(t,s){return r.getDependency(e,s)}))),this.cache.add(e,t)}return t},B.prototype.loadBuffer=function(e){var t=this.json.buffers[e],s=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);var a=this.options;return new Promise((function(e,r){s.load(F(t.uri,a.path),e,void 0,(function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))}))}))},B.prototype.loadBufferView=function(e){var t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then((function(e){var r=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+r)}))},B.prototype.loadAccessor=function(e){var t=this,r=this.json,a=this.json.accessors[e];if(void 0===a.bufferView&&void 0===a.sparse)return Promise.resolve(null);var n=[];return void 0!==a.bufferView?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),void 0!==a.sparse&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then((function(e){var n,i,o=e[0],l=E[a.type],u=b[a.componentType],p=u.BYTES_PER_ELEMENT,c=p*l,d=a.byteOffset||0,h=void 0!==a.bufferView?r.bufferViews[a.bufferView].byteStride:void 0,f=!0===a.normalized;if(h&&h!==c){var m=Math.floor(d/h),v="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+m+":"+a.count,g=t.cache.get(v);g||(n=new u(o,m*h,a.count*h/p),g=new s.o(n,h/p),t.cache.add(v,g)),i=new s.p(g,l,d%h/p,f)}else n=null===o?new u(a.count*l):new u(o,d,a.count*l),i=new s.d(n,l,f);if(void 0!==a.sparse){var T=E.SCALAR,M=b[a.sparse.indices.componentType],S=a.sparse.indices.byteOffset||0,y=a.sparse.values.byteOffset||0,R=new M(e[1],S,a.sparse.count*T),_=new u(e[2],y,a.sparse.count*l);null!==o&&(i=new s.d(i.array.slice(),i.itemSize,i.normalized));for(var L=0,A=R.length;L<A;L++){var w=R[L];if(i.setX(w,_[L*l]),l>=2&&i.setY(w,_[L*l+1]),l>=3&&i.setZ(w,_[L*l+2]),l>=4&&i.setW(w,_[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return i}))},B.prototype.loadTexture=function(e){var t,a=this,n=this.json,i=this.options,o=this.textureLoader,l=window.URL||window.webkitURL,u=n.textures[e],p=u.extensions||{},c=(t=p[r.MSFT_TEXTURE_DDS]?n.images[p[r.MSFT_TEXTURE_DDS].source]:n.images[u.source]).uri,d=!1;return void 0!==t.bufferView&&(c=a.getDependency("bufferView",t.bufferView).then((function(e){d=!0;var r=new Blob([e],{type:t.mimeType});return c=l.createObjectURL(r)}))),Promise.resolve(c).then((function(e){var t=i.manager.getHandler(e);return t||(t=p[r.MSFT_TEXTURE_DDS]?a.extensions[r.MSFT_TEXTURE_DDS].ddsLoader:o),new Promise((function(r,s){t.load(F(e,i.path),r,void 0,s)}))})).then((function(e){!0===d&&l.revokeObjectURL(c),e.flipY=!1,void 0!==u.name&&(e.name=u.name),t.mimeType in O&&(e.format=O[t.mimeType]);var r=(n.samplers||{})[u.sampler]||{};return e.magFilter=_[r.magFilter]||s.x,e.minFilter=_[r.minFilter]||s.y,e.wrapS=L[r.wrapS]||s.Z,e.wrapT=L[r.wrapT]||s.Z,e}))},B.prototype.assignTexture=function(e,t,a){var n=this;return this.getDependency("texture",a.index).then((function(i){if(!i.isCompressedTexture)switch(t){case"aoMap":case"emissiveMap":case"metalnessMap":case"normalMap":case"roughnessMap":i.format=s.Y}if(n.extensions[r.KHR_TEXTURE_TRANSFORM]){var o=void 0!==a.extensions?a.extensions[r.KHR_TEXTURE_TRANSFORM]:void 0;o&&(i=n.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(i,o))}e[t]=i}))},B.prototype.assignFinalMaterial=function(e){var t=e.geometry,a=e.material,n=this.extensions,i=void 0!==t.attributes.tangent,o=void 0!==t.attributes.color,l=void 0===t.attributes.normal,u=!0===e.isSkinnedMesh,p=Object.keys(t.morphAttributes).length>0,c=p&&void 0!==t.morphAttributes.normal;if(e.isPoints){var d="PointsMaterial:"+a.uuid,h=this.cache.get(d);h||(h=new s.T,s.D.prototype.copy.call(h,a),h.color.copy(a.color),h.map=a.map,h.sizeAttenuation=!1,this.cache.add(d,h)),a=h}else if(e.isLine){d="LineBasicMaterial:"+a.uuid;var f=this.cache.get(d);f||(f=new s.u,s.D.prototype.copy.call(f,a),f.color.copy(a.color),this.cache.add(d,f)),a=f}if(i||o||l||u||p){d="ClonedMaterial:"+a.uuid+":";a.isGLTFSpecularGlossinessMaterial&&(d+="specular-glossiness:"),u&&(d+="skinning:"),i&&(d+="vertex-tangents:"),o&&(d+="vertex-colors:"),l&&(d+="flat-shading:"),p&&(d+="morph-targets:"),c&&(d+="morph-normals:");var m=this.cache.get(d);m||(m=a.isGLTFSpecularGlossinessMaterial?n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(a):a.clone(),u&&(m.skinning=!0),i&&(m.vertexTangents=!0),o&&(m.vertexColors=s.rb),l&&(m.flatShading=!0),p&&(m.morphTargets=!0),c&&(m.morphNormals=!0),this.cache.add(d,m)),a=m}a.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&(console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."),t.setAttribute("uv2",new s.d(t.attributes.uv.array,2))),a.isGLTFSpecularGlossinessMaterial&&(e.onBeforeRender=n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms),e.material=a},B.prototype.loadMaterial=function(e){var t,a=this.json,n=this.extensions,i=a.materials[e],o={},l=i.extensions||{},u=[];if(l[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var p=n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=p.getMaterialType(),u.push(p.extendParams(o,i,this))}else if(l[r.KHR_MATERIALS_UNLIT]){var c=n[r.KHR_MATERIALS_UNLIT];t=c.getMaterialType(),u.push(c.extendParams(o,i,this))}else{t=s.I;var d=i.pbrMetallicRoughness||{};if(o.color=new s.g(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){var h=d.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}void 0!==d.baseColorTexture&&u.push(this.assignTexture(o,"map",d.baseColorTexture)),o.metalness=void 0!==d.metallicFactor?d.metallicFactor:1,o.roughness=void 0!==d.roughnessFactor?d.roughnessFactor:1,void 0!==d.metallicRoughnessTexture&&(u.push(this.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),u.push(this.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture)))}!0===i.doubleSided&&(o.side=s.i);var f=i.alphaMode||I;return f===U?o.transparent=!0:(o.transparent=!1,f===P&&(o.alphaTest=void 0!==i.alphaCutoff?i.alphaCutoff:.5)),void 0!==i.normalTexture&&t!==s.H&&(u.push(this.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new s.ob(1,1),void 0!==i.normalTexture.scale&&o.normalScale.set(i.normalTexture.scale,i.normalTexture.scale)),void 0!==i.occlusionTexture&&t!==s.H&&(u.push(this.assignTexture(o,"aoMap",i.occlusionTexture)),void 0!==i.occlusionTexture.strength&&(o.aoMapIntensity=i.occlusionTexture.strength)),void 0!==i.emissiveFactor&&t!==s.H&&(o.emissive=(new s.g).fromArray(i.emissiveFactor)),void 0!==i.emissiveTexture&&t!==s.H&&u.push(this.assignTexture(o,"emissiveMap",i.emissiveTexture)),Promise.all(u).then((function(){var e;return e=t===s.cb?n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):new t(o),void 0!==i.name&&(e.name=i.name),e.map&&(e.map.encoding=s.tb),e.emissiveMap&&(e.emissiveMap.encoding=s.tb),e.specularMap&&(e.specularMap.encoding=s.tb),C(e,i),i.extensions&&H(n,e,i),e}))},B.prototype.loadGeometries=function(e){var t=this,a=this.extensions,n=this.primitiveCache;function i(e){return a[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then((function(r){return K(r,e,t)}))}for(var o=[],l=0,u=e.length;l<u;l++){var p,c=e[l],d=G(c),h=n[d];if(h)o.push(h.promise);else p=c.extensions&&c.extensions[r.KHR_DRACO_MESH_COMPRESSION]?i(c):K(new s.e,c,t),n[d]={primitive:c,promise:p},o.push(p)}return Promise.all(o)},B.prototype.loadMesh=function(e){for(var t=this,r=this.json.meshes[e],a=r.primitives,n=[],i=0,o=a.length;i<o;i++){var l=void 0===a[i].material?m=m||new s.I({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:s.l}):this.getDependency("material",a[i].material);n.push(l)}return Promise.all(n).then((function(n){return t.loadGeometries(a).then((function(i){for(var o=[],l=0,u=i.length;l<u;l++){var p,c=i[l],d=a[l],h=n[l];if(d.mode===S||d.mode===y||d.mode===R||void 0===d.mode)!0!==(p=!0===r.isSkinnedMesh?new s.eb(c,h):new s.G(c,h)).isSkinnedMesh||p.geometry.attributes.skinWeight.normalized||p.normalizeSkinWeights(),d.mode===y?p.drawMode=s.mb:d.mode===R&&(p.drawMode=s.lb);else if(d.mode===g)p=new s.w(c,h);else if(d.mode===M)p=new s.t(c,h);else if(d.mode===T)p=new s.v(c,h);else{if(d.mode!==v)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);p=new s.S(c,h)}Object.keys(p.geometry.morphAttributes).length>0&&D(p,r),p.name=r.name||"mesh_"+e,i.length>1&&(p.name+="_"+l),C(p,r),t.assignFinalMaterial(p),o.push(p)}if(1===o.length)return o[0];var f=new s.n;for(l=0,u=o.length;l<u;l++)f.add(o[l]);return f}))}))},B.prototype.loadCamera=function(e){var t,r=this.json.cameras[e],a=r[r.type];if(a)return"perspective"===r.type?t=new s.Q(s.E.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):"orthographic"===r.type&&(t=new s.P(a.xmag/-2,a.xmag/2,a.ymag/2,a.ymag/-2,a.znear,a.zfar)),void 0!==r.name&&(t.name=r.name),C(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")},B.prototype.loadSkin=function(e){var t=this.json.skins[e],r={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then((function(e){return r.inverseBindMatrices=e,r}))},B.prototype.loadAnimation=function(e){for(var t=this.json.animations[e],r=[],a=[],n=[],i=[],o=[],l=0,u=t.channels.length;l<u;l++){var p=t.channels[l],c=t.samplers[p.sampler],d=p.target,h=void 0!==d.node?d.node:d.id,m=void 0!==t.parameters?t.parameters[c.input]:c.input,v=void 0!==t.parameters?t.parameters[c.output]:c.output;r.push(this.getDependency("node",h)),a.push(this.getDependency("accessor",m)),n.push(this.getDependency("accessor",v)),i.push(c),o.push(d)}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(n),Promise.all(i),Promise.all(o)]).then((function(r){for(var a=r[0],n=r[1],i=r[2],o=r[3],l=r[4],u=[],p=0,c=a.length;p<c;p++){var d=a[p],h=n[p],m=i[p],v=o[p],g=l[p];if(void 0!==d){var T;switch(d.updateMatrix(),d.matrixAutoUpdate=!0,w[g.path]){case w.weights:T=s.N;break;case w.rotation:T=s.W;break;case w.position:case w.scale:default:T=s.qb}var M=d.name?d.name:d.uuid,S=void 0!==v.interpolation?x[v.interpolation]:s.s,y=[];w[g.path]===w.weights?d.traverse((function(e){!0===e.isMesh&&e.morphTargetInfluences&&y.push(e.name?e.name:e.uuid)})):y.push(M);var R=m.array;if(m.normalized){var b;if(R.constructor===Int8Array)b=1/127;else if(R.constructor===Uint8Array)b=1/255;else if(R.constructor==Int16Array)b=1/32767;else{if(R.constructor!==Uint16Array)throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");b=1/65535}for(var _=new Float32Array(R.length),L=0,E=R.length;L<E;L++)_[L]=R[L]*b;R=_}for(L=0,E=y.length;L<E;L++){var A=new T(y[L]+"."+w[g.path],h.array,R,S);"CUBICSPLINE"===v.interpolation&&(A.createInterpolant=function(e){return new f(this.times,this.values,this.getValueSize()/3,e)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),u.push(A)}}}var I=void 0!==t.name?t.name:"animation_"+e;return new s.b(I,void 0,u)}))},B.prototype.loadNode=function(e){var t=this.json,a=this.extensions,n=this,i=t.meshReferences,o=t.meshUses,l=t.nodes[e];return function(){var e=[];return void 0!==l.mesh&&e.push(n.getDependency("mesh",l.mesh).then((function(e){var t;if(i[l.mesh]>1){var r=o[l.mesh]++;(t=e.clone()).name+="_instance_"+r,t.onBeforeRender=e.onBeforeRender;for(var s=0,a=t.children.length;s<a;s++)t.children[s].name+="_instance_"+r,t.children[s].onBeforeRender=e.children[s].onBeforeRender}else t=e;return void 0!==l.weights&&t.traverse((function(e){if(e.isMesh)for(var t=0,r=l.weights.length;t<r;t++)e.morphTargetInfluences[t]=l.weights[t]})),t}))),void 0!==l.camera&&e.push(n.getDependency("camera",l.camera)),l.extensions&&l.extensions[r.KHR_LIGHTS_PUNCTUAL]&&void 0!==l.extensions[r.KHR_LIGHTS_PUNCTUAL].light&&e.push(n.getDependency("light",l.extensions[r.KHR_LIGHTS_PUNCTUAL].light)),Promise.all(e)}().then((function(e){var t;if((t=!0===l.isBone?new s.c:e.length>1?new s.n:1===e.length?e[0]:new s.O)!==e[0])for(var r=0,n=e.length;r<n;r++)t.add(e[r]);if(void 0!==l.name&&(t.userData.name=l.name,t.name=s.U.sanitizeNodeName(l.name)),C(t,l),l.extensions&&H(a,t,l),void 0!==l.matrix){var i=new s.F;i.fromArray(l.matrix),t.applyMatrix(i)}else void 0!==l.translation&&t.position.fromArray(l.translation),void 0!==l.rotation&&t.quaternion.fromArray(l.rotation),void 0!==l.scale&&t.scale.fromArray(l.scale);return t}))},B.prototype.loadScene=function(){function e(t,r,a,n){var i=a.nodes[t];return n.getDependency("node",t).then((function(e){return void 0===i.skin?e:n.getDependency("skin",i.skin).then((function(e){for(var r=[],s=0,a=(t=e).joints.length;s<a;s++)r.push(n.getDependency("node",t.joints[s]));return Promise.all(r)})).then((function(r){return e.traverse((function(e){if(e.isMesh){for(var a=[],n=[],i=0,o=r.length;i<o;i++){var l=r[i];if(l){a.push(l);var u=new s.F;void 0!==t.inverseBindMatrices&&u.fromArray(t.inverseBindMatrices.array,16*i),n.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[i])}e.bind(new s.db(a,n),e.matrixWorld)}})),e}));var t})).then((function(t){r.add(t);var s=[];if(i.children)for(var o=i.children,l=0,u=o.length;l<u;l++){var p=o[l];s.push(e(p,t,a,n))}return Promise.all(s)}))}return function(t){var r=this.json,a=this.extensions,n=this.json.scenes[t],i=new s.ab;void 0!==n.name&&(i.name=n.name),C(i,n),n.extensions&&H(a,i,n);for(var o=n.nodes||[],l=[],u=0,p=o.length;u<p;u++)l.push(e(o[u],i,r,this));return Promise.all(l).then((function(){return i}))}}(),e}()}}]);
//# sourceMappingURL=6.eacc793c.chunk.js.map