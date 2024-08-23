import Search from "./Search"



export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-1 h-12">
      <div className="lex flex-col justify-center cursor-pointer">
        Home {`>`} Dashboard V2
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Avatar />
      </div>
    </div>
}

export function Avatar(size) {
    return <div className={`relative inline-flex items-center justify-center
     w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 rounded-full ${size === 'small' ? 'w-6 h-6' : 'w-10 h-10'}`}>
    <span className={`${size === 'small' ? 'text-xs' : 'text=md'} text-xs font-extralight text-blue-600 dark:text-gray-300`}>User</span>
</div>
}