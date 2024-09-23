import myStyle from './style.module.css'

function Employee({dataFromApp,empId,empStatus}){
    // destructuring an object:
    // const {key1,key2...key}=object_name
    // console.log(dataFromApp);
    // console.log(empId);
    
    
    return(
        <>
        {
           empStatus ?
           <>
           <h3 className="text-warning">Inside Employee Component</h3>
            <h4>EMployee ID: <span className={myStyle.spanStyle}> {empId} </span> </h4>
            <h4>Data From App Component: <span className={myStyle.h3Style}> {dataFromApp} </span></h4>
           </>
           :
           <div className="fw-bolder text-warning">Nothing to display</div>
        }
        </>
    )
}

export default Employee