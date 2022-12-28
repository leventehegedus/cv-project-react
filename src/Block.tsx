import MediaQuery from 'react-responsive'

type blockProps = {
  colorNumber?: number,
  col: number,
  row: number,
  children?: any
}

export const Block: React.FC<blockProps> = (props) => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <div className={`bg-gir-${props.colorNumber} col-span-${props.col} row-span-${props.row} ${(props.colorNumber === 3 || props.colorNumber === 4 || props.colorNumber === 5) && 'text-white'}`}>
          {props.children}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className={`bg-gir-${props.colorNumber} col-span-2 row-span-2 ${(props.colorNumber === 3 || props.colorNumber === 4 || props.colorNumber === 5) && 'text-white'}`}>
          {props.children}
        </div>
      </MediaQuery>
    </>
  )
}

export default Block;
