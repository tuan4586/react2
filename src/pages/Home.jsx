import React, { useCallback, useEffect, useRef, useState } from 'react'
import {eel} from "../services/eel"

import 'reactflow/dist/style.css';
import { IconArrowLeft, IconArrowNarrowLeft, IconArrowsDownUp, IconArrowsMove, IconBrandChrome, IconCheck, IconChevronDown, IconClick, IconDots, IconExternalLink, IconLink, IconLogin2, IconPencil, IconReload, IconX } from '@tabler/icons-react';
import ReactFlow, { 
  ReactFlowProvider,
  useNodesState, 
  useEdgesState, Background,
  Controls, 
  
  addEdge 
} from 'reactflow';

import TextUpdaterNode from './TextUpdaterNode';
import './text-updater-node.css';
import Modal from '../components/Modal';


const nodeTypes = { textUpdater: TextUpdaterNode };



console.log(nodeTypes)
const HomeSideBar=()=>{
  const[appName,setAppName]=useState("New App")
  const[onEditAppName,setOnEditAppName]=useState(false)
  const onDragStart = (event, nodeType,Label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/reactflow-label', Label);
    event.dataTransfer.effectAllowed = 'move';
  };

  function runSelenium(){
    eel.run()
  };
  function open_url_eel(){
    eel.open_url()
  };

  function close_tab_eel(){
    eel.close_tab()
  };

  function go_back_eel(){
    eel.go_back()
  };

  function reload_eel(){
    eel.reload()
  };
  

  function click_element_eel(){
    eel.click_element()
  };
  const navigationItems=[
    {
      icon:<IconLogin2 size={20}/>,
      title:"Platform",
      type:"default"
     
      

    },
    
    {
      icon:<IconExternalLink size={20}/>,
      title:"New tab",
      type:"default"
      
      
      
    },
    {
      icon:<IconLink onClick size={20}/>,
      title:"Open url",
      type:"default"
      
      
    },
    {
      icon:<IconX size={20}/>,
      title:"Close tab",
      type:"default"
      
      
    },
    {
      icon:<IconArrowLeft size={20}/>,
      title:"Go back",
      type:"default"
      

    },
    {
      icon:<IconReload size={20}/>,
      title:"Reload page",
      type:"default"
      
      
    },
 
  ];

  const mouseItems=[
    {
      icon:<IconClick onClick={click_element_eel} size={20}/>,
      title:"Click",
      type:"default"
    },
    {
      icon:<IconArrowsMove size={20}/>,
      title:"Mouse movement",
      type:"default"
    },
    {
      icon:<IconArrowsDownUp size={20}/>,
      title:"Scroll",
      type:"default"

    }
  ];
  const keyboardItems=[
    {
      icon:<IconClick size={20}/>,
      title:"Click",
      type:"default"
    },
    {
      icon:<IconArrowsMove size={20}/>,
      title:"Mouse movement",
      type:"default"
    },
    
  ];
  const dataItems=[
    {
      icon:<IconClick size={20}/>,
      title:"Click",
      type:"default"
    },
    {
      icon:<IconArrowsMove size={20}/>,
      title:"Mouse movement",
      type:"default"
    },
    
  ];

  return(
    <div className='w-80 border-r px-4 py-2 h-screen overflow-y-auto'>
      <div className='flex items-center justify-between gap-8'>
        <div className='flex items-center gap-1'>
          {
          onEditAppName ?
            <div className='flex items-center justify-center gap-2'>
              <input onInput={(e)=>setAppName(e.target.value)} type="text" value={appName} className='p-2 border outline-none focus:border-sky-500 rounded-lg'/>
              <button onClick={()=>setOnEditAppName(false)} className='flex items-center justify-center text-white rounded-md p-2 bg-sky-500 hover:bg-sky-600 duration-150'>
                <IconCheck size={20}></IconCheck>
              </button>
            </div>
            :       
            <div className='flex items-center justify-center gap-2'>
              <h2 className='text-xl font-bold '>{appName}</h2>
              <button onClick={()=>setOnEditAppName(true)} className='flex items-center justify-center text-gray-500 hover:text-gray-800 duration-150'>
                <IconPencil size={20}></IconPencil>
              </button>
            </div>
          }
          

        </div>
        <p className='px-2 py-1 border bg-gray-100 text-gray-800 rounded-full'>v1.0.0</p>
      
      </div>
      <div className='flex items-center justify-between mt-4 border border-gray-300 p-2 rounded-lg'>
        <div className='flex items-center gap-2 text-gray-500 hover:text-gray-800'>
          <IconBrandChrome></IconBrandChrome>
          <p className='text-gray-800'>Empty Chrome</p>
        </div>
        <div className='text-gray-300'>
          <IconChevronDown size={18}></IconChevronDown>
        </div>    
      </div>
      <div className='h-px w-full bg-gray-300 my-8'></div>
      <input type="search" className='p-2.5 border border-gray-300 rounded-md w-full outline-none focus:border-sky-500' placeholder='Search (ctrl+f)'  />
      <div className=''></div>
      {/*NAVIGATION */}
      <div className='flex items-center justify-between mt-4 border p-2 rounded-md'>
        <div className='flex items-center gap-2 text-gray-500 hover:text-gray-800'>
          <p className='text-lg font bold uppercase'>NAVIGATION</p>
        </div>
        <div className='text-gray-300'>
          <IconChevronDown size={18}></IconChevronDown>
        </div> 
      </div>
      
      <div className='flex flex-col gap-2'>
        {navigationItems.map((item,index)=>(
          <div key={index} onDragStart={(event) => onDragStart(event,item.type,item.title)} draggable className='flex items-center gap-5 py-2.5 px-3 border border-gray-300 rounded-md w-full outline-none hover:border-sky-500'>
            {/*LAM TOI PHAN THEM HAM  */}
            {item.icon}
            {item.title}
            
          </div>
            
        ))}
      </div>

      {/*MOUSE */}
      <div className='flex items-center justify-between mt-4 border p-2 rounded-md'>
        <div className='flex items-center gap-2 text-gray-500 hover:text-gray-800'>
          <p className='text-lg font bold uppercase'>mouse</p>
        </div>
        <div className='text-gray-300'>
          <IconChevronDown size={18}></IconChevronDown>
        </div> 
      </div>
      <div className='flex flex-col gap-2'>
        {mouseItems.map(item=>(
          <div onDragStart={(event) => onDragStart(event, item.title)} draggable className='flex items-center gap-5 py-2.5 px-3 border border-gray-300 rounded-md w-full outline-none hover:border-sky-500'>
            {item.icon}
            {item.title}
          </div>
            
        ))}
      </div>
        
      {/*KEYBOARD */}
      <div className='flex items-center justify-between mt-4 border p-2 rounded-md'>
        <div className='flex items-center gap-2 text-gray-500 hover:text-gray-800'>
          <p className='text-lg font bold uppercase'>KEYBOARD</p>
        </div>
        <div className='text-gray-300'>
          <IconChevronDown size={18}></IconChevronDown>
        </div> 
      </div>
      <div className='flex flex-col gap-2'>
        {keyboardItems.map(item=>(
          <button className='flex items-center gap-5 py-2.5 px-3 border border-gray-300 rounded-md w-full outline-none hover:border-sky-500'>
            {item.icon}
            {item.title}
          </button>
            
        ))}
      </div>

      {/*DATA */}
      <div className='flex items-center justify-between mt-4 border p-2 rounded-md'>
        <div className='flex items-center gap-2 text-gray-500 hover:text-gray-800'>
          <p className='text-lg font bold uppercase'>DATA</p>
        </div>
        <div className='text-gray-300'>
          <IconChevronDown size={18}></IconChevronDown>
        </div> 
      </div>
      <div className='flex flex-col gap-2'>
        {dataItems.map(item=>(
          <button className='flex items-center gap-5 py-2.5 px-3 border border-gray-300 rounded-md w-full outline-none hover:border-sky-500'>
            {item.icon}
            {item.title}
          </button>            
        ))}
      </div>
    </div>
    
  )
}
const HomeNav=()=>{
  const[user,setUser]=useState({})
  eel.expose(currentUser,'current_user')
  function currentUser(user){
    setUser(user)
  }
  useEffect(()=>{
    eel.currentUser()
    return()=>{

    };
  },[]);


  


  

  
  return (
    <nav className='flex items-center justify-between p-4 border-b'>
        <div className='flex items-center gap-24'>
          <h1 className='text-gray-800 font-bold text-2xl'>App Editor</h1>
          <p className='text-sm text-gray-800'> Version <span class="text-green-600">3.6.3</span> <span className='text-green-600'>Update</span></p>
        </div>
        <div>
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_vertical_logo_icon_168039.png" className='h-10 w-10 object-cover' alt="THONG_BAO"/>
        </div>
        
        <div className='flex items-center gap-10 px-5'>
          <p>{user.name}</p>
          <img src={user.avatar} className='h-10 w-10 object-fill rounded-full border' alt="" />
        </div>
        


    </nav>
  )

}

function Flow() {
  const innitialNodes=[
    {
      id: "1",
      type: 'textUpdater', // input node
      data: { label: "Input Node" },
      position: { x: 100, y: 0 }
    }
  ];


  const [nodes, setNodes,onNodesChange] = useNodesState(innitialNodes);
  const [edges, setEdges,useEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const[modalShow,setModalShow]=useState(false)
  const [currentNodeClick,setCurrentNodeClick]=useState()

  let yPos=useRef(0);
  let nodeId=useRef(1)

  const addNode=()=>{
    yPos.current+=50
    nodeId.current++
    const newNode={
      id:String(nodeId.current),
      type: 'textUpdater',
      position:{x:100,y:yPos.current},
      data:{label:"yo"}
      
    }
    setNodes([...nodes,newNode])
    console.log("nodes"+nodes)
  };

  const onConnect=useCallback(
    (connection)=>{
      setEdges((oldEdges)=>addEdge(connection,oldEdges))
    },
    [setEdges],
  );
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const label = event.dataTransfer.getData('application/reactflow-label');
      console.log(type)
      console.log("label"+label)

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      console.log(event.clientX)
      nodeId.current++
      const newNode = {
        id: String(nodeId.current),
        type:'textUpdater',
        position,
        data: { label: label},
      };

      setNodes((nds) => nds.concat(newNode));
      console.log("newNode"+newNode)
    },
    [reactFlowInstance],
  );

  
  const handleClick=(e,node)=>{
    console.log("e,node"+e,node)
    setModalShow(!modalShow)
    setCurrentNodeClick(node)
    

  };
  
 
  return (
    <>
    
      {modalShow && <Modal node={currentNodeClick} onHidden={()=>{setModalShow(false)}}></Modal>}
      <ReactFlow 

        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={useEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
      
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        onNodeClick={handleClick}
        fitView
        >
        <Background />
        <Controls/>
      </ReactFlow>
    </>
   
  );
}


export default function Home() {

  function save_node_dp(){
    eel.saveNodes()
  };

  return(
    <div className='flex flex-col h-screen overflow-hidden'>
      <HomeNav/>
      <div>
        <div className='h-full flex flex-col'>
          <div className='w-full p-4 flex items-center border-b justify-between'>
            <button className='flex items-center gap-1 text-gray-500 hover:text-gray-800 duration-150'>
              <IconArrowNarrowLeft size={20}></IconArrowNarrowLeft>
              <span>Back my app</span>
            </button>
            <div className='flex items-center justify-end gap-4'>
              <button className='px-4 py-2 bg-sky-500 hover:bg-sky-600 duration-150 text-white rounded-md active:scale-95'>Import</button>
              <button onClick={save_node_dp} className='px-4 py-2 border-2 border-sky-500 hover:border-sky-600 duration-150 rounded-md active:scale-95'>Save</button>
              <button className='px-4 py-2 bg-sky-500 hover:bg-sky-600 duration-150 text-white rounded-md active:scale-95'>Run</button>             
              <button className='text-gray-500 hover:text-sky-500 flex items-center justify-center duration-150'>
                <IconDots></IconDots>
              </button>
            </div>
          </div>
          <ReactFlowProvider>
            <div className='flex flex-row '>
              <HomeSideBar/>
              <div className='h-full w-full'>
                <Flow/>
              </div>
            </div>  
            
          </ReactFlowProvider>
        
               
        </div>
      </div>
    </div>
      
  )
  

  
}
