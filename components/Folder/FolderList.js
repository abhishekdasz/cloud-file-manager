import React, { useState } from 'react'
import FolderItem from './FolderItem'
import { useRouter } from 'next/router';

function FolderList({folderList}) {
    const [activeFolder, setActiveFolder] = useState();
    const router = useRouter();
//     const folderList=[
//       {
//           id:1,
//           name:'Folder 1 to Test Big Text'
//       },
//       {
//           id:2,
//           name:'Folder 2'
//       },
//       {
//           id:3,
//           name:'Folder 3'
//       },
//       {
//           id:4,
//           name:'Folder 4'
//       },
//       {
//           id:5,
//           name:'Folder 4'
//       },
//   ]
const onFolderClick = (index,folderId) =>{
    setActiveFolder(index);
    router.push("/folder/"+folderId)
}

  return (
    <div className='p-5 mt-5 bg-white rounded-lg'>
        <h2 className='text-[17px] font-bold items-center text-gray-600'>Recent Folders
        <span className='float-right text-blue-600 font-normal text-[16px] cursor-pointer'>View All</span>
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4'>
            {folderList.map((item,index)=>(
                <div onClick={()=>onFolderClick(index,item.id)}>
                <FolderItem folder={item}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FolderList