type GreetProps = {
   name: string,
   age?: number, 
   arrayOfObjects: {id:number, name:string}[]
}

// we can also use interface in place of type

// ? means prop is optional
export default function Greet(props: GreetProps){
    return (
        <>
        hello world {props.name} 
        and age is {props.age}
        {props.arrayOfObjects.map((item) => <p>{item.name}</p>)}
        </>
    )
}