
import React from 'react'
import field from "./media/field.jpg"
import farmer from "./media/farmer.jpg"
import shield from "./media/shield.png"
import { GooglePlayButton, AppStoreButton} from "react-mobile-app-button";

import pat1 from "./media/pat1.png"
import pat2 from "./media/pat2.png"
import pat3 from "./media/pat3.png"
import pat4 from "./media/pat4.png"
import pat5 from "./media/pat5_.png"

import news1 from "./media/news1.png";
import news2 from "./media/news2.jpeg";
import news3 from "./media/news3.jpeg"


import founder1 from "./media/founder1.jpg";
import founder2 from "./media/founder2.jpg";
import founder3 from "./media/founder3.jpg";
import motor from "./media/motor_started.png";
import video1 from "./media/mobile.mp4";
import { useEffect } from 'react';
// #352d28
// #9c8b7e
export const Home = () => {
      const servicesItems = ["Mobile development", "UI/UX Design", "web development", "SEO"]

  return (
      <div>
      <div style={{backgroundColor:"#9c8b7e"}} className='website'>

      <nav style={{color:"#9c8b7e", backgroundColor:"#352d28"}} class="pt-5 z-50 dark:bg-gray-900 fixed w-full top-0 left-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo"/> */}
            <span class="self-center text-xl md:text-2xl font-bold whitespace-nowrap">Agronomist</span>
        </a>
        <div class="flex md:order-2">
            <button type="button" style={{backgroundColor:"#9c8b7e"}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>

        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
            </li>

            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
























    <div className='pt-24'      style={{backgroundColor:"#352d28"}} >
      <div  class="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
      <div class="z-40 whitespace-nowrap flex-auto w-1/4 ">
        <div style={{color:"white"}} className='text-4xl md:text-7xl font-bold pb-4'>
          <p>At Agronomist</p>
          <p>we solve problems</p>
          <p>with Technology</p>        
        </div>
        <div>
          <p style={{color:"white"}} className='text-xl md:text-2xl font-light-bold pb-4'>Agoronomist is a Indian startup working on Embedded systems</p>
        </div>
        <div style={{color:"white"}} className='text-md md:text-lg font-thin pb-10'>
          <p>We have created products that helps our farmers to irrigation from the comfort</p>
          <p>and safety from their homes.</p>
          <p>We believe in the moto of Make In India.</p>
        </div>
        <button type="button" style={{backgroundColor:"#9c8b7e"}} class="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-mediumx rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>

      </div>

      <div class="flex-auto w-3/4" >
        <img class="opacity-80 w-full rounded-3xl" src={field} alt="" /> 
      </div>
      </div>  
    </div>
    
    

    <div className='circle1 pb-10' style={{ height:"20vh"}}>
    </div>


    <div className='pt-10 md:pt-16 pb-10 md:pb-16 text-center' style={{backgroundColor:"#9c8b7e"}}>
      <div class="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
        <div class="flex-auto">
          
          <div style={{color:"white"}} className='text-4xl md:text-7xl font-bold pb-4'>
            <p>Agronomist Agrotech PVT LTD</p>     
          </div>
          <div>
            <p style={{color:"white"}} className='text-xl md:text-1xl font-light-bold pb-4'>Agronomist (2022) is a tech-based startup (IoT-based), especially targeting farmers by helping them in their farming by connecting them with advanced technology. We have made smart starters controlled by application through which they can control their electrical motors (used for watering the plant in the field) from anywhere in the world as well as it will save their motors from high voltage and they can set a timer for starting and stopping the motor, and it will also give the status of light (1 phase,3phase).</p>
          </div>
        </div>
      </div>  
    </div>

    <div className='circle2 pt-10' style={{ height:"20vh"}}>
    </div>

    
  
    <div style={{backgroundColor:"#352d28"}} class = " pt-16 md:pt-10 pb-10 text-center">
    <div className='max-w-screen-xl mx-auto p-4'>
      
    
      <div className='pt-10 md:pt-16 pb-10 md:pb-16' style={{backgroundColor:""}}>
      <div class="max-w-screen-xl mx-auto p-4">
      <div style={{color:"white"}} className='text-2xl md:text-6xl font-bold pb-4'>
        <p>Consult Our Product</p>
      </div>
      <div style={{color:"white"}} className='text-lg md:text-2xl font-thin pb-4'>
        <p>Thank you for your interest in Agronomist Agrotech . Please contact us with your requirements and needs to help us serve you better. The information will enable us to route your request to the appropriate person. You will receive a response within 24 working hours.</p>
      </div>
    <main className="text-left p-10 flex overflow-hidden">
        <div className="lg:h-screen flex-2 hidden lg:block">
            <img className="lg:h-screen" src={farmer} />
        </div>
        <div className="bg-white md:py-12 md:pt-0 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
            <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5 mt-12 lg:pb-12"
                >
                    <div>
                        <label className="font-medium">
                            Full name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Address
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Phone number
                        </label>
                        <div className="relative mt-2">
                            
                            <input
                                type="number"
                                placeholder="+91 9564258467"
                                required
                                className="w-full pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="font-medium">
                            Message
                        </label>
                        <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </main>

    </div>
    </div>

    </div>
    </div>





































    























































































    




    <div style={{backgroundColor:"#9c8b7e"}} class = "text-center items-center md:text-left pt-10 md:pt-36 pb-10">
      <div class = "max-w-screen-xl columns-2 flex flex-nowrap justify-between mx-auto p-4">
      <div class = "grid grid-cols-1 md:grid-cols-2 flex flex-nowrap justify-between mx-auto p-4">
        <div style={{color:"white"}} className=' text-3xl md:text-6xl font-bold pb-4'>
            <p>What makes </p>
            <p>us different ?</p>
        </div>
        <div style={{color:"white"}} className=' grid grid-cols-1 md:grid-cols-2 gap-4 pb-4'>
                    
          <div className='grid sm:grid-cols-2 md:grid-cols-1 '>
            <img className='w-1/4' src={shield} alt="" />
            <div class='p-5 md:p-0'>
              <p className='text-2xl md:text-4xl font-bold pb-4'>Safety</p>
              <p>This Device and its Application provides you Safety option to avoid from electric shock & electrocution.</p>
            </div>
          </div>          
          <div className='grid sm:grid-cols-2 md:grid-cols-1 '>
            <img className='w-1/4' src={shield} alt="" />
            <div class='p-5 md:p-0'>
              <p className='text-2xl md:text-4xl font-bold pb-4'>Installation</p>
              <p>Easy Simple Few Steps Installation done by trained Executive.</p>
            </div>
          </div>          
          <div className='grid sm:grid-cols-2 md:grid-cols-1 '>
            <img className='w-1/4 ' src={shield} alt="" />
            <div class='p-5 md:p-0'>
              <p className='text-2xl md:text-4xl font-bold pb-4'>Service</p>
              <p>We Provide After Sale Service of our Product for any part of Country.</p>
            </div>
          </div>          
          <div className='grid sm:grid-cols-2 md:grid-cols-1 '>
            <img className='w-1/4 ' src={shield} alt="" />
            <div class='p-5 md:p-0'>
              <p className='text-2xl md:text-4xl font-bold pb-4'>Durability</p>
              <p>Product Durability is long if used with company given guidelines.</p>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>




    <div style={{backgroundColor:"#352d28"}} class = "pt-10 md:pt-32 pb-10 text-center">
      
      <div class = "max-w-screen-xl md:columns-1 flex flex-nowrap  mx-auto p-4">
        <div style={{color:"white"}} className='mx-16 items-center text-3xl md:text-6xl font-bold pb-4 w-1/5'>
            <img className="rounded" src={motor} alt="" />
            <div style={{color:"white"}} className='text-xl md:text-3xl font-light py-4'>
              <p>₹ 4499.00/-</p>
            </div>
            <button type="button" style={{backgroundColor:"#9c8b7e"}} class="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-mediumx rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Place Order</button>
        </div>
        <div style={{color:"white"}} className='w-4/5 pb-4 text-left'>          
          <div style={{color:"white"}} className='text-3xl md:text-5xl font-black pb-4'>
              <p>Online Motor Starter</p>
          </div>
          <div style={{color:"white"}} className='text-1xl md:text-3xl font-semibold pb-4'>
              <p>Description</p>
          </div>
          <div style={{color:"white"}} className='text-lg md:text-2xl font-thin pb-4'>
              <p>This device can control any type of motor starter. This device comes with a Android Application that you can download through playstore. </p>
          </div>

          <div style={{color:"white"}} className='text-1xl md:text-3xl font-semibold pb-4'>
              <p>Comments</p>
          </div>
          <div style={{color:"white"}} className='text-lg md:text-2xl font-light pb-4'>
              <p>This device can control any type of motor starter. This device comes with a Android Application that you can download through playstore. </p>
          </div>
        </div>
      </div>
    </div>























    



  <section className="max-w-screen-xl text-center flex flex-nowrap justify-between mx-auto p-4">
      <div class = "columns-1 md:columns-2 flex flex-nowrap justify-between mx-auto md:pr-32">
        <div style={{color:"white"}} className='my-auto items-center text-3xl md:text-6xl pb-4 md:w-3/4 p-4'>
          <h1 className="text-7xl font-light sm:text-7xl">AN IDEAL APP FOR</h1>
          <h1 className="text-7xl font-light sm:text-7xl">SMART FARMING</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Now take control of your complete Farm with our Mobile <br /> Application available for both iOS and Android devices.</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 ">
              <GooglePlayButton
                url={"#"}
                theme={"dark"}
                className={"custom-style"}
              />
              <AppStoreButton
                url={"#"}
                theme={"dark"}
                className={"custom-style"}
              />
          </div>
        </div>
        <div style={{color:"white"}} className='my-auto md:w-1/4 p-4'>
            <video className='h-3/4' src={video1} controls="controls" autoPlay muted/>           
        </div>
      </div>

	{/* <div className="w-full md:w-2/3 container flex flex-col justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Ac mattis
				<span className="text-violet-600">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a>
			</div>
		</div>
    
	</div>

  <div className='mx-auto w-2/3 md:w-1/3'>
      <video className='w-2/3' src={video1} controls="controls" autoPlay muted/>
  </div> */}

</section>









    <div style={{backgroundColor:"#352d28"}} class = "pt-10 md:pt-10 pb-10">
      <div class = "max-w-screen-xl  text-center justify-between mx-auto p-4">
        <div style={{color:"white"}} className='text-2xl md:text-5xl font-bold pb-4'>
            <p>Meet the Team</p>
        </div>
        <div class="columns-1 md:columns-3 justify-between">
           
            <div className='p-5 px-10 text-left' >
              <img src ={founder1} class="card-img-top pb-5" style={{ maxWidth:"", display:"block"}} alt="..."/>
              <div style={{color:"white"}} className='text-1xl md:text-2xl font-bold pb-1'>
                <p class="">Lalit Mehta</p>
              </div>
              <div style={{color:"white"}} className='text-lg md:text-1xl font-light pb-1'>B-TECH 3rd year (Indian Institute of Technology, Bhilai)</div>
              <div style={{color:"white"}} className='text-lg md:text-1xl font-light pb-1'>DIRECTOR,Co-founder</div>
            </div>

            <div className='p-5 px-10 text-left'>
              <img src ={founder2} class="card-img-top pb-5" style={{ maxWidth:"", display:"block"}} alt="..."/>
              <div style={{color:"white"}} className='text-1xl md:text-2xl font-bold pb-1'>
                <p class="">Lalit Mehta</p>
              </div>
              <div style={{color:"white"}} className='text-lg md:text-1xl font-light pb-1'>B-TECH 3rd year (Indian Institute of Technology, Bhilai)</div>
              <div style={{color:"white"}} className='text-lg md:text-1xl font-light pb-1'>DIRECTOR,Co-founder</div>
            </div>

            <div className='p-5 px-10 text-left'>
              <img src ={founder3} class="card-img-top pb-5" style={{ maxWidth:"", display:"block"}} alt="..."/>
              <div style={{color:"white"}} className='text-1xl md:text-2xl font-bold pb-1'>
                <p class="">Lalit Mehta</p>
              </div>
              <div style={{color:"white"}} className='text-lg md:text-1xl font-light pb-1'>B-TECH 3rd year (Indian Institute of Technology, Bhilai)</div>
              <div style={{color:"white"}} className='text-lg md:text-1xl font-light pb-1'>DIRECTOR,Co-founder</div>
            </div>
          
          
        </div>
      </div>
   </div>


      
    <section style={{backgroundColor:"#9c8b7e"}} className="text-white pt-10  pb-10">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracki text-center uppercase">How it works</p>
    <div style={{color:"white"}} className='text-center text-2xl md:text-5xl font-bold pb-4'>
            <p>Frequently Asked Questions</p>
        </div>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-black-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer">Optio maiores eligendi molestiae totam dolores similique?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer">Magni reprehenderit possimus debitis?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
					<p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
				</div>
			</details>
      <details>
				<summary className="py-2 outline-none cursor-pointer">Optio maiores eligendi molestiae totam dolores similique?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer">Magni reprehenderit possimus debitis?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
					<p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
				</div>
			</details>
		</div>
	</div>
</section>


   <section style={{backgroundColor:"#352d28"}} className=" text-center pb-16">
  <div style={{color:"white"}} className='text-2xl md:text-5xl font-bold pb-4 pt-16 mx-auto'>
    <p>News Gallary</p>
  </div>
  <div className="container grid grid-cols-2 gap-5 p-4 mx-auto md:grid-cols-3 max-w-screen-xl  text-center justify-between mx-auto p-4">
    {/* <div> */}
      <a class="border-2 rounded hover:border-black  example-image-link w-full h-full col-span-2 row-span-2 md:col-span-1 md:row-span-1  shadow-sm min-h-64 md:col-start-1 md:row-start-1 bg-gray-500 aspect-square" href={news3} data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img src={news3} className="rounded "alt=""  /></a>
      <a class="example-image-link w-full h-full  border-2 rounded hover:border-black shadow-sm min-h-32 bg-gray-500 aspect-square" href={news2} data-lightbox="example-set" data-title="Or press the right arrow on your keyboard."><img alt="" className="w-full h-full  rounded shadow-sm min-h-32 bg-gray-500 aspect-square" src={news2} /></a>
      <a class="example-image-link w-full h-full border-2 rounded hover:border-black  shadow-sm min-h-32 bg-gray-500 aspect-square" href={news1} data-lightbox="example-set" data-title="Click anywhere outside the image or the X to the right to close."><img alt="" className="rounded w-full h-full  shadow-sm min-h-32 bg-gray-500 aspect-square " src={news1} /></a>
    {/* </div> */}
	</div>
</section>




      <div style={{backgroundColor:"#9c8b7e"}}>
      <div style={{backgroundColor:"#9c8b7e"}} id="default-carousel" class="relative max-w-screen-xl text-center mx-auto rounded-none py-16" data-carousel="slide">
      <div style={{color:"white"}} className='text-2xl md:text-5xl font-bold pb-4 mx-auto'>
            <p>Customer Reviews</p>
        </div>
    <div class="relative h-96 overflow-hidden md:h-96">
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  dark:text-gray-100">
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
            <blockquote className="max-w-lg text-2xl italic font-semibold text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
            <div className="text-center text-white">
              <p class="font-bold">Leroy Jenkins</p>
              <p class="font-light">CEO of Company Co.</p>
            </div>
          </div>
        </div>
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  dark:text-gray-100">
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
            <blockquote className="max-w-lg text-2xl italic font-semibold text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
            <div className="text-center text-white">
              <p class="font-bold">Leroy Jenkins</p>
              <p class="font-light">CEO of Company Co.</p>
            </div>
          </div>
        </div>
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  dark:text-gray-100">
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
            <blockquote className="max-w-lg text-2xl italic font-semibold text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
            <div className="text-center text-white">
              <p class="font-bold">Leroy Jenkins</p>
              <p class="font-light">CEO of Company Co.</p>
            </div>
          </div>
        </div>
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  dark:text-gray-100">
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
            <blockquote className="max-w-lg text-2xl italic font-semibold text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
            <div className="text-center text-white">
              <p class="font-bold">Leroy Jenkins</p>
              <p class="font-light">CEO of Company Co.</p>
            </div>
          </div>
        </div>
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  dark:text-gray-100">
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
            <blockquote className="max-w-lg text-2xl italic font-semibold text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
            <div className="text-center text-white">
              <p class="font-bold">Leroy Jenkins</p>
              <p class="font-light">CEO of Company Co.</p>
            </div>
          </div>
        </div>

    </div>
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

      </div>






      {/* <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-1.jpg" data-lightbox="example-1"><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-1.jpg" alt="image-1" /></a>


      <div>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg" alt=""/></a>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg" data-lightbox="example-set" data-title="Or press the right arrow on your keyboard."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-4.jpg" alt="" /></a>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg" data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-5.jpg" alt="" /></a>
      <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg" data-lightbox="example-set" data-title="Click anywhere outside the image or the X to the right to close."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-6.jpg" alt="" /></a>
    </div> */}













        <section style={{backgroundColor:"#352d28"}} className="text-white">
	<div className=" max-w-screen-xl  text-center justify-between container mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
		{/* <h2 className="text-3xl font-bold">Fully compatible with</h2> */}
    <div style={{color:"white"}} className='text-2xl md:text-5xl font-bold pb-4 pt-8'>
        <p>Our Patrons</p>
    </div>
    <div className='grid grid-cols-3 justify-center md:grid-cols-5 gap-4'>
      <img className="my-auto mx-auto w-2/3" src={pat1} alt="" />
      <img className="my-auto mx-auto w-2/3" src={pat2} alt="" />
      <img className="my-auto mx-auto w-2/3" src={pat3} alt="" />
      <img className="my-auto mx-auto w-2/3" src={pat4} alt="" />
      <img className="my-auto mx-auto w-2/3 p-4" src={pat5} alt="" />
    </div>
		{/* <div className="flex flex-wrap justify-center lg:justify-between">
      <img src={pat1} alt="" />
      <img src={pat2} alt="" />
      <img src={pat3} alt="" />
      <img src={pat4} alt="" />
      <img src={pat5} alt="" />
		</div> */}
	</div>
</section>
















































   <div style={{backgroundColor:"black", color:"white"}} className='p-2'>
   <div class = "max-w-screen-xl flex flex-nowrap justify-between mx-auto p-4">
        <div style={{color:"white"}} className='text-3xl md:text-6xl font-bold pb-4 w-1/2'>
            <button type="button" style={{backgroundColor:"#9c8b7e"}} class="text-white font-normal bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-xl px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
        </div>
      </div>
    </div>

    </div>


    <div class="h-96 bg-opacity-0">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    </div>
    </div>

    <footer style={{backgroundColor:"black"}} class="-z-50 fixed flex bottom-24 left-0 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <div class="mx-auto w-full max-w-screen-xl m-4 my-6 lg:my-8">
    <div  class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <span class="self-center text-6xl md:text-9xl font-bold md:font-bold whitespace-nowrap dark:text-white">Agronomist</span>
              </a>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              {/* <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div> */}
          </div>
      </div>

      <div style={{backgroundColor:"#352d28"}} class="fixed bottom-0 left-0 right-0 z-40 bg-white w-full  shadow dark:bg-gray-800 dark:border-gray-600">
      <div class = "max-w-screen-xl  text-center justify-between mx-auto my-10">
      <div style={{font:"white", backgroundColor:"#352d28"}} class="max-w-screen-xl flex items-center justify-between">
          <span class="text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Agronomist™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
              <a href="#" class="text-white hover:text-white dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-white hover:text-white dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">Instagram page</span>
              </a>
              <a href="#" class="text-white hover:text-white dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-white hover:text-white dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-white hover:text-white dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
      </div>
      </div>
    </div>

</footer>

































    










      


      </div>
      
      
    )
}


