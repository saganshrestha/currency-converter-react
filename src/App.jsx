
import React from 'react'

const App = () => {
  return (
    <div className='main p-10 rounded-lg'>
      <h2 className='text-white text-center text-2xl font-bold mb-10 tracking-wider'>Currency Converter</h2>

      <form action="#">

        <div className='flex flex-col'>
          <label className='text-white mb-2 font-medium text-lg'>Enter Amount</label>
          <input className='input min-h-12 rounded-md outline-none text-white px-4' type="number" required />
        </div>

        <div className='flex items-end justify-between gap-8 mt-8 mb-10'>

          <div>
            <label className='text-white font-medium text-lg'>From</label>
            <div className='select-currency flex items-center justify-between rounded-md px-4 py-2 mt-2'>
              <img className='w-8' src="https://flagsapi.com/NP/flat/64.png" alt="Flag" />
              <select className='outline-none cursor-pointer border-none bg-transparent text-white px-1 font-medium text-base' name="" id="">
                <option className='text-black' value="NPR" selected>NPR</option>
                <option className='text-black' value="USD">USD</option>
                <option className='text-black' value="INR">INR</option>
              </select>
            </div>
          </div>

          <div className='converter h-12 w-12 flex items-center justify-center cursor-pointer rounded-full'>
            <svg width="16" viewBox='0 0 20 19' xmlns='http://www.w3.org/2000/svg'>
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill='#fff'
              />
            </svg>
          </div>

          <div>
            <label className='text-white font-medium text-lg'>To</label>
            <div className='select-currency flex items-center justify-between rounded-md px-4 py-2 mt-2'>
              <img className='w-8' src="https://flagsapi.com/US/flat/64.png" alt="Flag" />
              <select className='outline-none cursor-pointer border-none bg-transparent text-white pl-2 pr-1 font-medium text-base' name="" id="">
                <option className='text-black' value="NPR" selected>NPR</option>
                <option className='text-black' value="USD" selected>USD</option>
                <option className='text-black' value="INR">INR</option>
              </select>
            </div>
          </div>

        </div>

        <button className='w-full py-4 rounded-lg border-none outline-none cursor-pointer text-lg font-semibold tracking-wide bg-white' type='submit'>Get Exchange Rate</button>

        <p className='rate text-white font-medium text-lg text-center py-4 rounded-lg mt-6 tracking-wider'>1 NPR = 132.36 USD</p>

      </form>

    </div>
  )
}

export default App