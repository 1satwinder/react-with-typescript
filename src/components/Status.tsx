type StatusProps= {
    status: "success" | "loading" | "error";
}

// This make sure loading can only have three values
// - "success", "loading", "error"

export default function Status(props: StatusProps) {

    return(
        <div>
           <h3>Request is {props.status}
           </h3>
        </div>
    )
}