import './App.css'

const Vasco=()=>{
  return(
    <footer className = "bg-gray-500 text-white flex flex-col md:flex-row justify-around items-start md:items-center gap-6" >
      <div> 
        <h1 className="font-bold text-lg text-gray-800 mb-2 mt-[1rem]">USEFUL LINKS</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="">Contacts</a></li>
        <li><a href="">About</a></li>

      </ul>

      </div>
      <div>
      <h1 className = "font-bold text-gray-800 mb-3 mr-3">NEWSLETTERS</h1>
      <input type="email" placeholder='  enter your email' required className = "border-1 border-gray-700 h-8 w-100 rounded-2xl mr-[1.3rem]" />
      <button className = "bg-[#fff] text-[#000] p-[6px] h-8 rounded-2xl" type='submit'>SUBSCRIBE</button>
      <h1>The only trusted tech company</h1>

      </div>
      <div className="mt-7"><h1 className = "font-bold text-gray-800 mb-3">CONTACTS</h1>
      <ul>
        <li><a href=""></a>CALL    : (+265) 991 690 867</li>
        <li><a href=""></a>EMAIL   : tech-corner@gmail.com</li>
        <li><a href=""></a>LOCATION: Zomba(malawi)</li>
      </ul>
      </div>
    </footer>
   
  )
}
export default Vasco;
