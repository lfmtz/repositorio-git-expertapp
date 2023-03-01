import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

   
export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );
    

    // const [counter, setCounter] = useState(10);
    


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
                
            }

            <div className="card-grid">
                {
                    images.map(( image ) =>(
                        
                        <GifItem 
                            key={image.id}
                            {...image }
                        />
                    ))
                }
            </div>

            {/* <h5>{ counter }</h5>
            <button onClick={()=> setCounter(counter + 1)}>+1</button> */}
            
        </>
    )
}
