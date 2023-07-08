


const Icon = ({source, title, content}) => {
    return(
        <div className="icon">
            <img src={source} alt="icon" />
            <div className="cont">
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
}


const Icons = () => {
    return ( 
        <div className="icons">
            <div className="heading">
                <span className="dash"></span>
                <h3>Benefits you get when using our services</h3>
            </div>
            <div className="icons_container">
                <Icon
                    source=""
                    title="Best Quality"
                    content="All of our furniture uses the best materials and choices for our customers"
                />
                <Icon 
                    source=""
                    title="Free Shipping"
                    content="Free shiping everytime you buy furniture from us without exeption"
                />
                <Icon
                    source=""
                    title="Warranty"
                    content="Every time you buy our funiture products you will get a warranty without exception" 
                />
            </div>
        </div>
     );
}
 

export default Icons;