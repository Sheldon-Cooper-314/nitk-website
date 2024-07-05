import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsTwitch } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>

          <div>
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r rounded-lg border border-black-200 text-black dark:text-white'>
                Inside
              </span>
              <span className='px-2'>
                NITK
              </span>

            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Main Links' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://www.nitk.ac.in/' target='_blank' rel='noopener noreferrer'>
                  NITK Website Home
                </Footer.Link >
                <Footer.Link href='https://www.nitk.ac.in/academicoffice' target='_blank' rel='noopener noreferrer'>
                  Acad Office
                </Footer.Link>
                <Footer.Link href='https://www.nitk.ac.in/research-overview' target='_blank' rel='noopener noreferrer'>
                  Research
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Resources' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://www.nitk.ac.in/' target='_blank' rel='noopener noreferrer'>
                  NITK Website
                </Footer.Link >
                <Footer.Link href='https://www.nitk.ac.in/nirf' target='_blank' rel='noopener noreferrer'>
                  NIRF
                </Footer.Link>
                <Footer.Link href='https://csab.nic.in/' target='_blank' rel='noopener noreferrer'>
                  CSAB
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title='Resources' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://www.nitk.ac.in/' target='_blank' rel='noopener noreferrer'>
                  NITK Website
                </Footer.Link >
                <Footer.Link href='https://www.nitk.ac.in/nirf' target='_blank' rel='noopener noreferrer'>
                  NIRF
                </Footer.Link>
                <Footer.Link href='https://csab.nic.in/' target='_blank' rel='noopener noreferrer'>
                  CSAB
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href="#" by="National Institute of Technology" year={new Date().getFullYear()} />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsTwitch} />
          </div>
        </div>
      </div>
    </Footer>
  )
};
