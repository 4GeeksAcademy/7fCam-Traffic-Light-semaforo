import React, {useState} /* importamos el hook useState */  from "react";

//create your first component
const Home = () => {
	// es como LET SOMBRA = FALSE
	// 1) declaracion del hook useState 
	let [top,setTop]=useState(false)
	let [center,setCenter]=useState(false)// false es el valor del estado y setSombra la funcion que reasigna dicho valor
	let [bottom,setBottom]=useState(false)
	// let [extra,setExtra]=useState(false)
	// console.log(sombra) => false;
	// 2) declaracion de la funcion boxShadow para reasignar el valor del estado || colocarlo dentro de onClick la funcion
	// function boxShadow() {
		// SET CAMBIA EL VALOR DEL ESTADO
	// }
	// boxShadow()
	// condicion par que se active una luz por click y tmb para que ocurra un evento al hacer click
	function handleClick (luz) /*manipular el click*/  { 
		if(luz === "rojo" ){
			setTop(true)
			setCenter(false)
			setBottom(false)
		} else if (luz === "naranja") {
			setCenter(true)
			setTop(false)
			setBottom(false)
		} else if (luz === "verde") {
			setBottom(true)
			setCenter(false)
			setTop(false)
		}
	}
	
	console.log(top);
	console.log(center);
	console.log(bottom);
	
	
	return (
		<div className="vh-100 container">
			<div className="mt-4 base mx-auto "></div>
			<div className="head h-50 mx-auto py-2 rounded-3">
				{/* incluimos la condicional ternaria para implementar estilos y tmb asignamos el evento onClick */}
				{/* <div className={sombra?"top rounded-circle mx-auto onn":"top rounded-circle mx-auto"} onClick={()=>boxShadow()}></div> */}
				<div className={top?"top rounded-circle mx-auto onn":"top rounded-circle mx-auto"} onClick={()=>handleClick("rojo")}></div>
				{/* <div className={top?"top rounded-circle mx-auto onn":"top rounded-circle mx-auto"} onClick={()=>setTop(!top)}></div> */}
				{/* <div className={sombra?"center rounded-circle mx-auto onn":"center rounded-circle mx-auto"} onClick={()=>setSombra(!sombra)}></div> */}
				<div className={center?"center rounded-circle mx-auto onn":"center rounded-circle mx-auto"} onClick={()=>handleClick("naranja")}></div>

				<div className={bottom?"bottom rounded-circle mx-auto onn":"bottom rounded-circle mx-auto"} onClick={()=>handleClick("verde")}></div>
				{/* <div className={extra?"extra rounded-circle mx-auto onn":"extra rounded-circle mx-auto"} onClick={()=>setExtra(!extra)}></div> */}

			</div>
			{/* top rounded-circle mx-auto */}
			{/* <br /><br /> */}
			{/* <div className="d-flex justify-content-center"> */}
			{/* <buttom className="btn btn-dark" onClick={()=>}</div> >luz extra</buttom> */}
			{/* </div> */}

		</div>
	
	
		);
};

export default Home;