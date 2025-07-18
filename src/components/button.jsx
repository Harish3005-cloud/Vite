const button = ({text,className,id}) => {
  return (
   <a 
   onClick={(e)=>{
    e.preventDefault();
    const target = document.getElementById('counter');

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top+window.scrollY - offset;
      window.scrollTo({top,behavaior: 'smooth'})
    }
   }}
   className={`${className ?? ''} cta-wrapper`}>       
    <div className="cta-button group  rounded-full  ">
        <div className="bg-circle"/>
        <p className="text" >{text}</p>
        <div className="arrow-wrapper">
        <img src="/images/arrow-down.svg" alt="arrow" />
        </div>

    </div>
    
   </a>        
  )/* CTA - Call to action*/ 
}

export default button