export default function Footer() {
  return (
    <div className='h-auto w-full bg-white p-5 flex flex-col items-center justify-center'>
     <img className="md:w-[5%] w-[10%] border-black border-2 mb-2" src={`${process.env.basePath}/assets/AROMA_LOGO.png`}/>
     <p>Website By Udit Pant</p>
     <p>pantudit2004@gmail.com</p>
    </div>
  )
}
