import Image from 'next/image'

const myLoader = () => {
  return 'not-found.svg'
}

export default function NotFound(){
  return (
    <Image
      loader={myLoader}
      src="./not-found.svg"
      alt="NotFound"
      width={200}
      height={200}
    />
  )
}