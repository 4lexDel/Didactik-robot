import Block from "./Block";

type BlockType = {
    obstacle: Block;
    inter: Block;
    start: Block;
    end: Block;
    ground: Block;
    path: Block;
    wood: Block;
}
export default BlockType;