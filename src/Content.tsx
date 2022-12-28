type blockProps = {
  children?: any
}

export const Content: React.FC<blockProps> = (props) => {

  return (
    <div className="p-8 flex h-full w-full">
      <div>{props.children}</div>
    </div>
  )

}

export default Content;
