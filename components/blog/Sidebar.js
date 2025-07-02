import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='rounded-[10px] bg-white shadow-3xl'>
        <h2 className='blueBg text-white py-2 px-5 text-2xl font-semibold rounded-l-[10px] rounded-r-[10px] !rounded-b-none poppinsFont'>Blog Categories</h2>
        <div>
            <ul className='blogCategories poppinsFont'>
            <li><Link href="/" className='poppinsFont'>Virtual Contract Centre</Link></li>
            <li><Link href="/" className='poppinsFont'>Retail Recruitment</Link></li>
            <li><Link href="/" className='poppinsFont'>Recruitment Solutions</Link></li>
            <li><Link href="/" className='poppinsFont'>Management Consultancy</Link></li>
            <li><Link href="/" className='poppinsFont'>Recruitment Solutions</Link></li>
            <li><Link href="/" className='poppinsFont'>Virtual Contract Centre</Link></li>
            <li><Link href="/" className='poppinsFont'>Retail Recruitment</Link></li>
            <li><Link href="/" className='poppinsFont'>Management Consultancy</Link></li>
            <li><Link href="/" className='poppinsFont'>Recruitment Solutions</Link></li>
            <li><Link href="/" className='poppinsFont'>Virtual Contract Centre</Link></li>
            <li><Link href="/" className='poppinsFont'>Retail Recruitment</Link></li>

            </ul>
        </div>
      </div>

      <div className='rounded-[10px] bg-white shadow-3xl recentComments mt-10'>
        <h2 className='blueBg text-white py-2 px-5 text-2xl font-semibold rounded-l-[10px] rounded-r-[10px] !rounded-b-none poppinsFont'>Recent Comments</h2>
        <div>
            <ul className='blogCategories poppinsFont'>
            <li><Link href="/" className='poppinsFont'>Ducimus soluta minus eveniet nisi voluptate id, blanditiis</Link></li>
            <li><Link href="/" className='poppinsFont'>Ducimus soluta minus eveniet nisi voluptate id, blanditiis</Link></li>
            <li><Link href="/" className='poppinsFont'>Ducimus soluta minus eveniet nisi voluptate id, blanditiis</Link></li>
            <li><Link href="/" className='poppinsFont'>Ducimus soluta minus eveniet nisi voluptate id, blanditiis</Link></li>
            
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
