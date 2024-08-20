import emailjs from '@emailjs/browser';
//vào `https://dashboard.emailjs.com/admin/account`, đăng nhập, vào mục Installation và lấy mã `$ npm install --save @emailjs/browser` vào terminal để tải file về framework
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
// từ node_modules
import { FiSend } from 'react-icons/fi'
import {motion} from 'framer-motion';


export default function ContactForm() {
  
  const [formData, setFormData]= useState({
    name:"",
    email:"",
    message:"",
  })

  const [errors, setErrors] = useState({})

  const [isSending, setIsSending] = useState(false)

 const handleChange = (e) => {
   const {name, value} = e.target;
   setFormData({
     ...formData,
     [name]:value,
   })
 }

  const validate = () =>{
    
    let errors = {}
    if (!formData.name) errors.name ="Name is required";
    
    if(!formData.email){
      errors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) { // Use test() instead of text(), Đây là biểu thức chính quy để kiểm tra định dạng email cơ bản. VD: abc123@email.com
      errors.email = "Please enter a valid email address"; // Add error message
    }
    
    if(!formData.message) errors.message ="Message is required";
        return errors;
      
    }


  const handleSubmit = (e) => {
   
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
      .send(
           "service_uwuxklm",
        //Email Services code
           "template_twa8zvh",
        //Email Templates code
            formData,
            "mnqP1V_3jaeBI5JI8",
        //Account/ API key
                    )
   
        .then((response) => {

           toast.success("Message sent successfully");
          //phầm bảng thông báo màu xanh khi gửi thành công, thông qua Emailjs nó sẽ gửu đến gmail của mình
       setFormData({name: "", email: "", message: ""});
                  })
        
        
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send letter.Please try again later");
        })
     //báo lỗi

      .finally(() => {
        setIsSending(false);
      })
    //các dòng chữ sẽ biến mất khi gửi thành công
  }

}
  
  return (
    <div className="p-4 lg:w-3/4" id="contact">
      {/**padding: 1rem; 
         width: 75%; */}
      <Toaster />
      {/*vào terminal nhập 
      `npm install react-hot-toast` 
      và import file này 
      `import { Toaster } from 'react-hot-toast';` */}
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
      {/**margin-top: 2rem;  
  margin-bottom: 2rem; 
  text-align: center; 
  font-size: 2rem;    
  font-weight: 600;  
  letter-spacing: 0.05em;  */}
      <motion.form 
        initial={{opacity : 0}} 
          whileInView={{opacity:1}}
          transition={{duration: 1, delay: 0.7}}
        onSubmit={handleSubmit}>
      <div className="mb-4 flex space-x-4">
      {/*margin-bottom: 1rem;
         display: flex;
           gap: 1rem;*/}
       
        
        <div className="lg:w-1/2">
    {/**@media (min-width: 1024px) {
  .my-class {
    width: 50%;
  }
}*/}
        <input type="name"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none" />
          {/**
          *margin-bottom: 2rem;
          * width: 100%;
          *   -webkit-appearance: none;
          * appearance: none;
          * border-radius: 0.5rem;
          * border: 1px solid rgba(160, 160, 160, 0.3)
          * background-color: transparent;
          * padding: 0.5rem 0.75rem;
          * background-color: transparent;
          * padding: 0.5rem 0.75rem;
          * font-size: 0.875rem;
          * &:focus {
    border-color: rgba(160, 160, 160, 1);
             outline: none;
              }
          */}
          {errors.name && (
<motion.p 
  initial={{opacity : 0}} 
          whileInView={{opacity:1}}
  className="text-sm text-rose-800">{errors.name}</motion.p>
      )}
          {/**
          *font-size: 0.875rem;
           color: #b85c62;
          */}
        </div>
       
        
        
        <div className="lg:w-1/2">
          {/** 2*/}
        <input type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"/>
          {/** */}
          {errors.email && (
 <motion.p
   initial={{opacity : 0}} 
          whileInView={{opacity:1}}
   className="text-sm text-rose-800">{errors.email}</motion.p>
          )}
        </div>
      </div>
       
        
        {/**div is out the <div className="mb-4 flex space-x-4"> */}
        <div className="mb-4">
          {/** 3*/}
        <textarea
          id="message"
          name="message"
          value={formData.message}
          placeholder="Message"
          onChange={handleChange}
          className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none" rows="6"/>
          {/** initial number of visible rows, thuộc tính này nằm chung với mảng textarea*/}
          {errors.message && (
 <motion.p 
   initial={{opacity : 0}} 
          whileInView={{opacity:1}}
   className="text-sm text-rose-800">{errors.message}</motion.p>
          )}
        </div>
      <button type="submit" className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
         isSending ? "cursor-not-allowed opacity-50" : ""
      }`} disabled={isSending}>

        <div className="flex items-center justify-center gap-2">
          {isSending ? "Sending..." : "Send"}
          <FiSend />
        </div>
      </button>
      </motion.form>
    </div>
  )
    }