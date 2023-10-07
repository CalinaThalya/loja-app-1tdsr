import link from "next/link"

export default function Home(){
  return(
    <div>
      <h1>Home</h1>
      <ul>
        <li><link href="/src/app/post">POST</link></li>
        <li><link href="/src/app/post/post1">POST-1</link></li>
        <li><link href="/src/app/post/post2">POST-2</link></li>
      </ul>
    </div>
  )
}