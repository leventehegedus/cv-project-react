type blockProps = {
  colorNumber?: number,
  col: number,
  row: number,
  children?: any
}

export const Block: React.FC<blockProps> = (props) => {
  return (
    <div className={`bg-gir-${props.colorNumber} col-span-${props.col} row-span-${props.row} ${(props.colorNumber === 3 || props.colorNumber === 4 || props.colorNumber === 5) && 'text-white'}`}>
      {props.children}
    </div>
  )
}

export default Block;
