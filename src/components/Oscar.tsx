interface ChildType {
    children: React.ReactNode
}

const Oscar: React.FC<ChildType> = ({children}) =>{
  return(
    <>
    {children}
    </>
)
}
export default Oscar;

// above is good approach to specify props to component same as below approach

// export default function Oscar(props: ChildType){
//   return(
//       <>
//       {props.children}
//       </>
//   )
// }