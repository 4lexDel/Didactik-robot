export default function Bloc(props: {selected: boolean, children: string, color?: string, onClick: () => void}) {
    return(
      <div onClick={(evt) => props.onClick()} className={`flex block size-20 p-1 justify-center items-center cursor-pointer
        ${props.selected ? " border-text border-4" : " border-text-200 border-2"}
        ${props.color ? ` bg-${props.color}` : " bg-background"}`}>
        <p className="text-sm text-slate-500 px-1">{props.children}</p>
      </div>
    ); 
  }