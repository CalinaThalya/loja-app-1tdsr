import Link from "next/link"
export default function Post(params){
    return(
        <div>
          <h1>POST</h1> 
          <div>
            <p><Link href="/">POST</Link></p>
          </div>
          <figure>
            <imagem src= "public/cat-8257177_1280.jpg" width= {320} height={320} alt="Post-It"/>
            <figcaption><Link href="/">go back home page.</Link></figcaption>
          </figure>
          <p></p>
        </div>

    )}
    