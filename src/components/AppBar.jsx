import Search from "./Search"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-1 h-12">
      <div className="flex justify-start gap-x-2">
        <div className="cursor-pointer text-gray-500">
          Home {`>`}
        </div>
        <div className="cursor-pointer text-blue-900 font-bold">
          Dashboard V2
        </div>
      </div>
      <div>
        <Search />
      </div>
      <div className="flex justify-between items-center px-10 py-1 h-12 gap-x-4">
        <div>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"/>
          </svg>
        </div>
        <div>
          <Avatar />
        </div>
      </div>
      
    </div>
}

export function Avatar() {
    return <div className={`relative inline-flex items-center justify-center
     w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 rounded-full w-8 h-8`}>
    <span className={`text-xs font-extralight text-blue-600 dark:text-gray-300`}>User</span>
</div>
}