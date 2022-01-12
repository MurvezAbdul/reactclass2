function Fun(props){
    console.log(props)
    return(
        <div>
            <p>hi im from fun</p>
            <p>{props.age}</p>
        </div>
    )
}
export default Fun;