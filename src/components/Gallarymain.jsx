export function GallaryImage(prop){
    
 return(
    <div>
    {
      prop.imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
 )
}