export default function Bloc(props: {selected: boolean, children: string, color?: string}) {
    return(
      <div className={`flex block size-20 p-1 justify-center items-center cursor-pointer
        ${props.selected ? " border-text border-4" : " border-text-200 border-2"}
        ${props.color ? ` bg-${props.color}` : " bg-background"}`}>
        <p className="text-sm text-black px-1">{props.children}</p>
      </div>
    ); 
  }