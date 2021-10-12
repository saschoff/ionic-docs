(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[47050],{16239:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(22122),r=t(19756),i=t(86010),s=t(67294),o="docsButton_2Emz",l="docsButtonRound_3i9G";function c(e){var n,t=e.href,c=e.round,d=void 0!==c&&c,p=(0,r.Z)(e,["href","round"]);return p.className=(0,i.Z)(((n={})[p.className]=Boolean(p.className),n[o]=!0,n["docs-button"]=!0,n[l]=d,n["docs-button--round"]=d,n)),t?s.createElement("a",(0,a.Z)({href:t,className:"docsButton"},p),p.children):s.createElement("button",(0,a.Z)({className:"docsButton"},p),p.children)}},84697:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return v}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),s=t(28312),o=t(16239),l=t(41395),c=t(58215),d=t(81840),p={title:"BLE"},u={unversionedId:"native/plugins/ble",id:"native/plugins/ble",isDocsHomePage:!1,title:"BLE",description:"This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.",source:"@site/docs/native/plugins/ble.md",sourceDirName:"native/plugins",slug:"/native/plugins/ble",permalink:"/docs/native/plugins/ble",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/ble.md",version:"current",frontMatter:{title:"BLE"},sidebar:"native",previous:{title:"BiometricWrapper",permalink:"/docs/native/plugins/biometric-wrapper"},next:{title:"BlinkId",permalink:"/docs/native/plugins/blinkid"}},h=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]},{value:"Peripheral Data",id:"peripheral-data",children:[]},{value:"Advertising Data",id:"advertising-data",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]},{value:"Typed Arrays",id:"typed-arrays",children:[]},{value:"UUIDs",id:"uuids",children:[]}],m={toc:h};function v(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals."),(0,i.kt)("p",null,"The plugin provides a simple JavaScript API for iOS and Android."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scan for peripherals"),(0,i.kt)("li",{parentName:"ul"},"Connect to a peripheral"),(0,i.kt)("li",{parentName:"ul"},"Read the value of a characteristic"),(0,i.kt)("li",{parentName:"ul"},"Write new value to a characteristic"),(0,i.kt)("li",{parentName:"ul"},"Get notified when characteristic's value changes")),(0,i.kt)("p",null,"Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally."),(0,i.kt)("p",null,"Simultaneous connections to multiple peripherals are supported."),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/don/cordova-plugin-ble-central",target:"_blank",rel:"noopener",className:"git-link"},(0,i.kt)("svg",{viewBox:"0 0 512 512"},(0,i.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/don/cordova-plugin-ble-central")),(0,i.kt)("h2",null,"Stuck on a Cordova issue?"),(0,i.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,i.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,i.kt)(o.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,i.kt)("h2",{id:"installation"},(0,i.kt)("a",{href:"#installation"},"Installation")),(0,i.kt)(l.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-ble-central ","\n","$ npm install @ionic-native/ble ","\n","$ ionic cap sync")),(0,i.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,i.kt)(d.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-ble-central ","\n","$ npm install @ionic-native/ble ","\n")),(0,i.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,i.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,i.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,i.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,i.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\nimport { BLE } from '@ionic-native/ble/ngx';\n\nconstructor(private ble: BLE) { }\n\n")),(0,i.kt)("h2",{id:"peripheral-data"},"Peripheral Data"),(0,i.kt)("p",null,"Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  {\n      'name': 'Battery Demo',\n      'id': '20:FF:D0:FF:D1:C0',\n      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],\n      'rssi': -55\n  }\n")),(0,i.kt)("p",null,"After connecting, the peripheral object also includes service, characteristic and descriptor information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  {\n      'name': 'Battery Demo',\n      'id': '20:FF:D0:FF:D1:C0',\n      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],\n      'rssi': -55,\n      'services': [\n          '1800',\n          '1801',\n          '180f'\n      ],\n      'characteristics': [\n          {\n              'service': '1800',\n              'characteristic': '2a00',\n              'properties': [\n                  'Read'\n              ]\n          },\n          {\n              'service': '1800',\n              'characteristic': '2a01',\n              'properties': [\n                  'Read'\n              ]\n          },\n          {\n              'service': '1801',\n              'characteristic': '2a05',\n              'properties': [\n                  'Read'\n              ]\n          },\n          {\n              'service': '180f',\n              'characteristic': '2a19',\n              'properties': [\n                  'Read'\n              ],\n              'descriptors': [\n                  {\n                      'uuid': '2901'\n                  },\n                  {\n                      'uuid': '2904'\n                  }\n              ]\n          }\n      ]\n  }\n")),(0,i.kt)("h2",{id:"advertising-data"},"Advertising Data"),(0,i.kt)("p",null,"Bluetooth advertising data is returned in when scanning for devices. The format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned."),(0,i.kt)("p",null,"The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data."),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  {\n      'name': 'demo',\n      'id': '00:1A:7D:DA:71:13',\n      'advertising': ArrayBuffer,\n     'rssi': -37\n }\n")),(0,i.kt)("p",null,"Convert the advertising info to a Uint8Array for processing. ",(0,i.kt)("inlineCode",{parentName:"p"},"var adData = new Uint8Array(peripheral.advertising)")),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("p",null,"Note that iOS uses the string value of the constants for the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys"},"Advertisement Data Retrieval Keys"),". This will likely change in the future."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  {\n      'name': 'demo',\n      'id': 'D8479A4F-7517-BCD3-91B5-3302B2F81802',\n      'advertising': {\n          'kCBAdvDataChannel': 37,\n          'kCBAdvDataServiceData': {\n              'FED8': {\n                  'byteLength': 7 // data not shown\n              }\n          },\n          'kCBAdvDataLocalName': 'demo',\n          'kCBAdvDataServiceUUIDs': ['FED8'],\n          'kCBAdvDataManufacturerData': {\n              'byteLength': 7  // data not shown\n          },\n          'kCBAdvDataTxPowerLevel': 32,\n          'kCBAdvDataIsConnectable': true\n      },\n      'rssi': -53\n  }\n")),(0,i.kt)("h2",{id:"typed-arrays"},"Typed Arrays"),(0,i.kt)("p",null,"This plugin uses typed Arrays or ArrayBuffers for sending and receiving data."),(0,i.kt)("p",null,"This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  // ASCII only\n  function stringToBytes(string) {\n     var array = new Uint8Array(string.length);\n     for (var i = 0, l = string.length; i &lt; l; i++) {\n         array[i] = string.charCodeAt(i);\n      }\n      return array.buffer;\n  }\n\n  // ASCII only\n  function bytesToString(buffer) {\n      return String.fromCharCode.apply(null, new Uint8Array(buffer));\n  }\n")),(0,i.kt)("p",null,"You can read more about typed arrays in these articles on ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays"},"MDN")," and ",(0,i.kt)("a",{parentName:"p",href:"http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/"},"HTML5 Rocks"),"."),(0,i.kt)("h2",{id:"uuids"},"UUIDs"),(0,i.kt)("p",null,"UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as '2220' look like integers, but they're not. (The integer 2220 is 0x8AC in hex.) This isn't a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings."))}v.isMDXComponent=!0}}]);